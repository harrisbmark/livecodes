# Interface: AppConfig

These are properties that define how the app behaves.

## Extended by

- [`Config`](../../interfaces/Config.md)

## Properties

### allowLangChange

> **allowLangChange**: `boolean`

If `false`, the UI will not show the menu that allows changing editor language.

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:1225](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1225)

***

### disableHomeLink

> **disableHomeLink**: `boolean`

If `true`, the link on LiveCodes logo ("Edit on LiveCodes") is disabled in [embeds](https://livecodes.io/docs/features/embeds).

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1269](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1269)

***

### mode

> **mode**: `"editor"` \| `"result"` \| `"full"` \| `"focus"` \| `"lite"` \| `"simple"` \| `"console"` \| `"codeblock"`

Sets the [display mode](https://livecodes.io/docs/features/display-modes).

#### Default

```ts
"full"
```

#### Defined in

[src/sdk/models.ts:1237](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1237)

***

### readonly

> **readonly**: `boolean`

If `true`, editors are loaded in read-only mode, where the user is not allowed to change the code.

By default, when readonly is set to true, the light-weight code editor [CodeJar](https://livecodes.io/docs/features/editor-settings#code-editor) is used.
If you wish to use another editor, set the [editor](https://livecodes.io/docs/configuration/configuration-object#editor) property.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1219](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1219)

***

### tools

> **tools**: `Partial`\<`object`\>

Sets enabled and active tools and status of [tools pane](https://livecodes.io/docs/features/tools-pane).

#### Type declaration

##### active

> **active**: `""` \| [`ToolName`](../type-aliases/ToolName.md)

##### enabled

> **enabled**: ([`ToolName`](../type-aliases/ToolName.md) \| `"zoom"`)[] \| `"all"`

##### status

> **status**: [`ToolsPaneStatus`](../type-aliases/ToolsPaneStatus.md)

#### Default

```ts
{ enabled: "all", active: "", status: "" }
```

#### Example

```js
{
  "tools": {
    "enabled": ["console", "compiled"],
    "active": "console",
    "status": "open"
  }
}
```

#### Defined in

[src/sdk/models.ts:1253](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1253)

***

### view?

> `optional` **view**: `"split"` \| `"editor"` \| `"result"`

Sets the [default view](https://livecodes.io/docs/features/default-view) for the playground.

#### Default

```ts
"split"
```

#### Defined in

[src/sdk/models.ts:1231](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1231)

***

### zoom

> **zoom**: `0.25` \| `0.5` \| `1`

Sets result page [zoom level](https://livecodes.io/docs/features/result#result-page-zoom).

#### Defined in

[src/sdk/models.ts:1262](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1262)