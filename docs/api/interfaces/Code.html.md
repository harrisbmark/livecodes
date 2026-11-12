# Interface: Code

An object that contains the language, content and compiled code for each of the 3 [code editors](https://livecodes.io/docs/features/projects)
and the [result page](https://livecodes.io/docs/features/result) HTML.

See [docs](https://livecodes.io/docs/api/interfaces/Code) for details.

## Properties

### markup

> **markup**: `object`

Markup editor code.

#### compiled

> **compiled**: `string`

The compiled code.

#### content

> **content**: `string`

The source code.

#### language

> **language**: [`Language`](../type-aliases/Language.md)

The language of the code.

#### Defined in

[src/sdk/models.ts:1471](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1471)

***

### result

> **result**: `string`

The HTML content of the result page.

#### Defined in

[src/sdk/models.ts:1498](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1498)

***

### script

> **script**: `object`

Script editor code.

#### compiled

> **compiled**: `string`

The compiled code.

#### content

> **content**: `string`

The source code.

#### language

> **language**: [`Language`](../type-aliases/Language.md)

The language of the code.

#### Defined in

[src/sdk/models.ts:1489](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1489)

***

### style

> **style**: `object`

Style editor code.

#### compiled

> **compiled**: `string`

The compiled code.

#### content

> **content**: `string`

The source code.

#### language

> **language**: [`Language`](../type-aliases/Language.md)

The language of the code.

#### Defined in

[src/sdk/models.ts:1480](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1480)