# Interface: EditorConfig

Configuration for code editor settings.

## Extended by

- [`UserConfig`](UserConfig.md)

## Properties

### closeBrackets

> **closeBrackets**: `boolean`

Use auto-complete to close brackets and quotes.

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:1118](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1118)

***

### editor

> **editor**: `undefined` \| `"auto"` \| `"monaco"` \| `"codemirror"` \| `"codejar"`

Selects the [code editor](https://livecodes.io/docs/features/editor-settings#code-editor) to use.

If `undefined` (the default), Monaco editor is used on desktop,
CodeMirror is used on mobile and in `simple` mode,
while CodeJar is used in `codeblock` mode, in `lite` mode and in `readonly` playgrounds.

If set to `auto`, Monaco editor is used on desktop and CodeMirror is used on mobile regardless of other settings.

#### Default

```ts
undefined
```

#### Defined in

[src/sdk/models.ts:1039](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1039)

***

### editorMode

> **editorMode**: `undefined` \| `"vim"` \| `"emacs"`

Sets [editor mode](https://livecodes.io/docs/features/editor-settings#editor-modes).

#### Defined in

[src/sdk/models.ts:1135](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1135)

***

### editorTheme

> **editorTheme**: `undefined` \| `string` \| [`EditorTheme`](../type-aliases/EditorTheme.md)[]

Sets the [code editor](https://livecodes.io/docs/features/editor-settings) themes.

See docs for [editor themes](https://livecodes.io/docs/configuration/configuration-object#editortheme) for details.

#### Examples

```ts
"vs"
```

```ts
"monaco:twilight, codemirror:one-dark"
```

```ts
["vs@light"]
```

```ts
["vs@light", "vs-dark@dark"]
```

```ts
["monaco:vs@light", "codemirror:github-light@light", "dracula@dark"]
```

#### Defined in

[src/sdk/models.ts:1065](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1065)

***

### emmet

> **emmet**: `boolean`

Enables [Emmet](https://livecodes.io/docs/features/editor-settings#emmet).

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:1130](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1130)

***

### foldRegions

> **foldRegions**: `boolean`

When set to `true`, regions marked by `#region` and `#endregion` comments are folded when the project is loaded.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1112](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1112)

***

### fontFamily

> **fontFamily**: `undefined` \| `string`

Sets the [code editor](https://livecodes.io/docs/features/editor-settings) font family.

#### Defined in

[src/sdk/models.ts:1070](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1070)

***

### fontSize

> **fontSize**: `undefined` \| `number`

Sets the font size.

If `undefined` (the default), the font size is set to 14 for the full app and 12 for [embeds](https://livecodes.io/docs/features/embeds).

#### Default

```ts
undefined
```

#### Defined in

[src/sdk/models.ts:1078](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1078)

***

### lineNumbers

> **lineNumbers**: `boolean` \| `"relative"`

Show line numbers in [code editor](https://livecodes.io/docs/features/editor-settings).

#### Default

```ts
true
```

#### Defined in

[src/sdk/models.ts:1100](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1100)

***

### minimap

> **minimap**: `boolean`

Enables minimap in code editor.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1124](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1124)

***

### tabSize

> **tabSize**: `number`

The number of spaces per indentation-level.

Also used in [code formatting](https://livecodes.io/docs/features/code-format).

#### Default

```ts
2
```

#### Defined in

[src/sdk/models.ts:1094](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1094)

***

### theme

> **theme**: [`Theme`](../type-aliases/Theme.md)

Sets the app [theme](https://livecodes.io/docs/features/themes) to light/dark mode.

#### Default

```ts
"dark"
```

#### Defined in

[src/sdk/models.ts:1045](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1045)

***

### themeColor

> **themeColor**: `undefined` \| `string`

Sets the app theme color.
If `undefined`, it is set to `"hsl(214, 40%, 50%)"`.

#### Default

```ts
undefined
```

#### Defined in

[src/sdk/models.ts:1052](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1052)

***

### useTabs

> **useTabs**: `boolean`

If `true`, lines are indented with tabs instead of spaces.

Also used in [code formatting](https://livecodes.io/docs/features/code-format).

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1086](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1086)

***

### wordWrap

> **wordWrap**: `boolean`

Enables word-wrap for long lines.

#### Default

```ts
false
```

#### Defined in

[src/sdk/models.ts:1106](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L1106)