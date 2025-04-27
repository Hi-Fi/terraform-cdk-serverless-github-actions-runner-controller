# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Azure <a name="Azure" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure"></a>

#### Initializers <a name="Initializers" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer"></a>

```typescript
import { Azure } from '@hi-fi/terraform-cdk-serverless-github-actions-runner-controller'

new Azure(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.isConstruct"></a>

```typescript
import { Azure } from '@hi-fi/terraform-cdk-serverless-github-actions-runner-controller'

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

###### `x`<sup>Required</sup> <a name="x" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@hi-fi/terraform-cdk-serverless-github-actions-runner-controller.Azure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---





