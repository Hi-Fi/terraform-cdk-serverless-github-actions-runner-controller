# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Aws <a name="Aws" id="terraform-cdk-serverless-github-actions-runner-controller.Aws"></a>

#### Initializers <a name="Initializers" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.Initializer"></a>

```typescript
import { Aws } from 'terraform-cdk-serverless-github-actions-runner-controller'

new Aws(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Aws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Aws.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Aws.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Aws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.isConstruct"></a>

```typescript
import { Aws } from 'terraform-cdk-serverless-github-actions-runner-controller'

Aws.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Aws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="terraform-cdk-serverless-github-actions-runner-controller.Aws.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Azure <a name="Azure" id="terraform-cdk-serverless-github-actions-runner-controller.Azure"></a>

#### Initializers <a name="Initializers" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer"></a>

```typescript
import { Azure } from 'terraform-cdk-serverless-github-actions-runner-controller'

new Azure(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Azure.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Azure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.isConstruct"></a>

```typescript
import { Azure } from 'terraform-cdk-serverless-github-actions-runner-controller'

Azure.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Azure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="terraform-cdk-serverless-github-actions-runner-controller.Azure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### Gcp <a name="Gcp" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp"></a>

#### Initializers <a name="Initializers" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.Initializer"></a>

```typescript
import { Gcp } from 'terraform-cdk-serverless-github-actions-runner-controller'

new Gcp(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Gcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Gcp.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Gcp.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Gcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.isConstruct"></a>

```typescript
import { Gcp } from 'terraform-cdk-serverless-github-actions-runner-controller'

Gcp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-cdk-serverless-github-actions-runner-controller.Gcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="terraform-cdk-serverless-github-actions-runner-controller.Gcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---





