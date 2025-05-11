import { CloudwatchLogGroup } from '@cdktf/provider-aws/lib/cloudwatch-log-group';
import { DataAwsCallerIdentity } from '@cdktf/provider-aws/lib/data-aws-caller-identity';
import { DataAwsRegion } from '@cdktf/provider-aws/lib/data-aws-region';
import { DataAwsSecurityGroups, DataAwsSecurityGroupsFilter } from '@cdktf/provider-aws/lib/data-aws-security-groups';
import { DataAwsSubnets, DataAwsSubnetsFilter } from '@cdktf/provider-aws/lib/data-aws-subnets';
import { EcsCluster } from '@cdktf/provider-aws/lib/ecs-cluster';
import { EcsService } from '@cdktf/provider-aws/lib/ecs-service';
import { EcsTaskDefinition, EcsTaskDefinitionVolume } from '@cdktf/provider-aws/lib/ecs-task-definition';
import { IamPolicy } from '@cdktf/provider-aws/lib/iam-policy';
import { IamRole } from '@cdktf/provider-aws/lib/iam-role';
import { IamRolePolicyAttachment } from '@cdktf/provider-aws/lib/iam-role-policy-attachment';
import { AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { Fn, IResolvable, TerraformIterator } from 'cdktf';
import { Construct } from 'constructs';
import { commonVariables } from './variables';
import { EfsFileSystem } from '@cdktf/provider-aws/lib/efs-file-system';
import { type ContainerDefinition } from '@aws-sdk/client-ecs'
import { EfsMountTarget } from '@cdktf/provider-aws/lib/efs-mount-target';

export interface AwsProps {
    // Name of the ECS cluster to create and use.
    readonly clusterName: string;
    // Utilize runner-container-hooks to allow support for service and build container as well as container actions and steps.
    readonly containerSupport: boolean;
    /**
     * @see https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html
     */
    readonly subnetFilters?: DataAwsSubnetsFilter[] | IResolvable
    /**
     * @see https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-security-groups.html
     */
    readonly securityGroupFilters?: DataAwsSecurityGroupsFilter[] | IResolvable


}

export class Aws extends Construct {
    constructor(scope: Construct, id: string, props: AwsProps) {
        super(scope, id);

        new AwsProvider(this, 'aws', {

        });

        const identity = new DataAwsCallerIdentity(this, 'Identity', {});

        const region = new DataAwsRegion(this, 'Region', {})

        const { pat, githubConfigUrl, autoscalerImage } = commonVariables(this);

        const cluster = new EcsCluster(this, 'Cluster', {
            name: props.clusterName,
        });

        const subnets = new DataAwsSubnets(this, 'Subnets', {
            filter: props.subnetFilters
        });

        const securityGroups = new DataAwsSecurityGroups(this, 'SecurityGroups', {
            filter: props.securityGroupFilters
        });



        const autoscalerRole = new IamRole(this, 'AutoscalerRole', {
            assumeRolePolicy: Fn.jsonencode({
                'Version': '2012-10-17',
                'Statement': [
                    {
                        'Effect': 'Allow',
                        'Principal': {
                            'Service': 'ecs-tasks.amazonaws.com'
                        },
                        'Action': 'sts:AssumeRole'
                    }
                ]
            })
        })



        const runnerRole = new IamRole(this, 'RunnerRole', {
            assumeRolePolicy: Fn.jsonencode({
                'Version': '2012-10-17',
                'Statement': [
                    {
                        'Effect': 'Allow',
                        'Principal': {
                            'Service': 'ecs-tasks.amazonaws.com'
                        },
                        'Action': 'sts:AssumeRole'
                    }
                ]
            })
        })



        const ecsTaskExecutionRole = new IamRole(this, 'TaskExecutionRole', {
            assumeRolePolicy: Fn.jsonencode({
                'Version': '2012-10-17',
                'Statement': [
                    {
                        'Effect': 'Allow',
                        'Principal': {
                            'Service': 'ecs-tasks.amazonaws.com'
                        },
                        'Action': 'sts:AssumeRole'
                    }
                ]
            }),
        })

        new IamRolePolicyAttachment(this, 'TeskExecutionRoleAttachment', {
            policyArn: 'arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy',
            role: ecsTaskExecutionRole.name,
        })

        const runnerLogGroup = new CloudwatchLogGroup(this, 'RunnerLogGroup', {
            name: '/ecs/GHA',
        });

        const autoscalerLogGroup = new CloudwatchLogGroup(this, 'AutoscalerLogGroup', {
            name: '/ecs/Autoscaler',
        });

        const autoscalerContainerDefinition: ContainerDefinition =
        {
            name: 'autoscaler',
            image: autoscalerImage.stringValue,
            essential: true,
            environment: [
                {
                    name: 'PAT',
                    value: pat.value
                },
                {
                    name: 'GITHUB_CONFIG_URL',
                    value: githubConfigUrl.value
                },
                {
                    name: 'ECS_CLUSTER',
                    value: cluster.arn
                },
                {
                    name: 'ECS_SUBNETS',
                    value: Fn.join(',', subnets.ids)
                },
                {
                    name: 'ECS_SECURITY_GROUPS',
                    value: Fn.join(',', securityGroups.ids)
                },
                {
                    name: 'SCALE_SET_NAME',
                    value: 'ecs-runner-set'
                },
            ],
            logConfiguration: {
                logDriver: 'awslogs',
                options: {
                    "awslogs-group": autoscalerLogGroup.name,
                    "awslogs-region": region.name,
                    "awslogs-stream-prefix": "ecs",
                }
            }
        };

        const runnerVolume: EcsTaskDefinitionVolume[] = [];

        const runnerContainerDefinition: ContainerDefinition = {
            name: 'runner',
            image: 'ghcr.io/actions/actions-runner:2.323.0',
            essential: true,
            environment: [
                {
                    name: 'ECS_CLUSTER_NAME',
                    value: cluster.name
                },
                {
                    name: 'ACTIONS_RUNNER_POD_NAME',
                    value: 'gha-pod'
                },
                {
                    name: 'ECS_SUBNETS',
                    value: Fn.join(',', subnets.ids)
                },
                {
                    name: 'ECS_SECURITY_GROUPS',
                    value: Fn.join(',', securityGroups.ids)
                },
                {
                    name: 'ECS_TASK_ROLE',
                    value: runnerRole.arn
                },
                {
                    name: 'ECS_EXECUTION_ROLE',
                    value: ecsTaskExecutionRole.arn
                }
            ],
            mountPoints: [],
            logConfiguration: {
                logDriver: 'awslogs',
                options: {
                    "awslogs-group": runnerLogGroup.name,
                    "awslogs-region": region.name,
                    "awslogs-stream-prefix": "ecs",
                }
            }
        }

        if (props.containerSupport) {
            // EFS volume to allow sharing data between tasks
            const efs = new EfsFileSystem(this, 'efs', {
                throughputMode: 'elastic',
                tags: {
                    Name: 'work'
                }
            })

            const externalsEfs = new EfsFileSystem(this, 'externalsEfs', {
                throughputMode: 'elastic',
                tags: {
                    Name: 'externals'
                }
            })

            // Each subnet in VPC are on different AZs, so creating mountpoint to each
            const iterator = TerraformIterator.fromList(subnets.ids)

            new EfsMountTarget(this, 'EfsMountTarget', {
                forEach: iterator,
                fileSystemId: efs.id,
                subnetId: iterator.value
            });

            new EfsMountTarget(this, 'ExternalsEfsMountTarget', {
                forEach: iterator,
                fileSystemId: externalsEfs.id,
                subnetId: iterator.value
            });

            const runnerVolumeName = 'work';
            const externalsVolumeName = 'externals';

            runnerVolume.push(
                {
                    name: runnerVolumeName,
                    efsVolumeConfiguration: {
                        fileSystemId: efs.id,
                    },
                },
                // This doesn't work with same volume, as volume is initially empty so it can't map to it's "externals" directory
                {
                    name: externalsVolumeName,
                    efsVolumeConfiguration: {
                        fileSystemId: externalsEfs.id,
                    }
                }
            );

            runnerContainerDefinition.mountPoints?.push(
                {
                    sourceVolume: runnerVolumeName,
                    containerPath: '/tmp/_work',
                },
                {
                    sourceVolume: externalsVolumeName,
                    containerPath: '/tmp/externals',
                }
            )

            runnerContainerDefinition.environment?.push(
                {
                    name: 'EFS_ID',
                    value: efs.id
                },
                {
                    name: 'EXTERNALS_EFS_ID',
                    value: externalsEfs.id
                },
                {
                    name: 'ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER',
                    value: 'false'
                }
            )

            runnerContainerDefinition.command = ['/bin/sh', '-c', 'export EXECID=$(cat /proc/sys/kernel/random/uuid) && sudo mkdir -p /tmp/_work/$EXECID && sudo chown runner:runner /tmp/_work/$EXECID && ln -s /tmp/_work/$EXECID _work && sudo chown runner:runner /tmp/externals && /home/runner/run.sh ; sudo rm -r /tmp/_work/$EXECID']
            runnerContainerDefinition.image = 'ghcr.io/hi-fi/actions-runner:ecs';
        }

        // TODO: Images through caching: https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html (requires authentication)
        // TODO: Pass Execution role to job task: https://www.ernestchiang.com/en/posts/2021/using-amazon-ecs-exec/#1-grant-permissions-ecs-task-iam-role
        // TODO: Pass Task role to job task
        const runnerTaskDefinition = new EcsTaskDefinition(this, 'RunnerTaskDefinition', {
            family: 'GHA',
            taskRoleArn: runnerRole.arn,
            executionRoleArn: ecsTaskExecutionRole.arn,
            containerDefinitions: Fn.jsonencode([runnerContainerDefinition]),
            cpu: '1024',
            memory: '2048',
            requiresCompatibilities: [
                'FARGATE'
            ],
            runtimePlatform: {
                cpuArchitecture: 'X86_64',
                operatingSystemFamily: 'LINUX'
            },
            networkMode: 'awsvpc',
            volume: runnerVolume
        })


        autoscalerContainerDefinition.environment?.push({
            name: 'TASK_DEFINITION_ARN',
            value: runnerTaskDefinition.arn
        })


        const autoscalerTaskDefinition = new EcsTaskDefinition(this, 'AutoscalerTaskDefinition', {
            family: 'Autoscaler',
            taskRoleArn: autoscalerRole.arn,
            executionRoleArn: ecsTaskExecutionRole.arn,
            containerDefinitions: Fn.jsonencode([autoscalerContainerDefinition]),
            cpu: '256',
            memory: '512',
            requiresCompatibilities: [
                'FARGATE'
            ],
            runtimePlatform: {
                cpuArchitecture: 'X86_64',
                operatingSystemFamily: 'LINUX'
            },
            networkMode: 'awsvpc',
        })

        const runnerPolicyDefinition = {
            'Version': '2012-10-17',
            'Statement': [
                {
                    'Sid': 'StartandMonitorTask',
                    'Effect': 'Allow',
                    'Action': [
                        'ecs:RunTask',
                        'ecs:TagResource',
                        'ecs:ListTaskDefinitions',
                        'ecs:ListTasks',
                        'ecs:StopTask',
                        'ecs:RegisterTaskDefinition',
                        'ecs:DescribeTaskDefinition',
                        'ecs:DeregisterTaskDefinition',
                        'ecs:DeleteTaskDefinitions',
                        'ecs:ExecuteCommand',
                        // Needed for waiting
                        'ecs:DescribeTasks',
                        'logs:GetLogEvents',
                        'iam:PassRole',
                        'logs:StartLiveTail',
                        'logs:CreateLogStream',
                    ],
                    'Resource': [
                        `arn:aws:ecs:${region.name}:${identity.accountId}:task-definition/gha-pod-workflow:*`,
                        cluster.arn,
                        // Triggerer has to be allowed to pass both task and task execution role
                        ecsTaskExecutionRole.arn,
                        runnerRole.arn,
                        `arn:aws:ecs:${region.name}:${identity.accountId}:task/${cluster.name}/*`,
                        //TODO: reorder rights so that listing is only one with star
                        '*'
                    ]
                },
                {
                    'Sid': 'GetVpcInfo',
                    'Effect': 'Allow',
                    'Action': [
                        'ec2:DescribeSubnets',
                        'ec2:DescribeSecurityGroups'
                    ],
                    'Resource': '*'
                },
                {
                    'Sid': 'ExecCommands',
                    'Effect': 'Allow',
                    'Action': [
                        'ssmmessages:CreateControlChannel',
                        'ssmmessages:CreateDataChannel',
                        'ssmmessages:OpenControlChannel',
                        'ssmmessages:OpenDataChannel'
                    ],
                    'Resource': '*'
                }
            ]
        };

        const runnerPolicy = new IamPolicy(this, 'RunnerPolicy', {
            policy: Fn.jsonencode(runnerPolicyDefinition)
        })

        new IamRolePolicyAttachment(this, 'RunnerPolicyAttachment', {
            policyArn: runnerPolicy.arn,
            role: runnerRole.name
        })

        const autoscalerPolicy = new IamPolicy(this, 'AutoscalerPolicy', {
            policy: Fn.jsonencode({
                'Version': '2012-10-17',
                'Statement': [
                    {
                        'Sid': 'StartandMonitorTask',
                        'Effect': 'Allow',
                        'Action': [
                            'ecs:RunTask',
                            // Needed for waiting
                            'ecs:DescribeTasks',
                            'logs:GetLogEvents',
                            'iam:PassRole',
                        ],
                        'Resource': [
                            `${runnerTaskDefinition.arnWithoutRevision}:*`,
                            // Triggerer has to be allowed to pass both task and task execution role
                            ecsTaskExecutionRole.arn,
                            runnerRole.arn,
                            `arn:aws:ecs:${region.name}:${identity.accountId}:task/${cluster.name}/*`,
                            `${runnerLogGroup.arn}:log-stream:*`,
                        ]
                    },
                    {
                        'Sid': 'GetVpcInfo',
                        'Effect': 'Allow',
                        'Action': [
                            'ec2:DescribeSubnets',
                            'ec2:DescribeSecurityGroups'
                        ],
                        'Resource': '*'
                    }
                ]
            }

            )
        })
        new IamRolePolicyAttachment(this, 'AutoscalerPolicyAttachment', {
            policyArn: autoscalerPolicy.arn,
            role: autoscalerRole.name
        })

        new EcsService(this, 'AutoscalerService', {
            cluster: cluster.arn,
            name: 'autoscaler-service',
            desiredCount: 1,
            launchType: 'FARGATE',
            taskDefinition: autoscalerTaskDefinition.arnWithoutRevision,
            networkConfiguration: {
                assignPublicIp: true,
                subnets: subnets.ids,
                securityGroups: securityGroups.ids
            },
            lifecycle: {
                ignoreChanges: [
                    'desired_count'
                ]
            }
        })
    }
}
