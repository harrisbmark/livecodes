# Function: compress()

> **compress**(`uncompressed`): `string`

A utility function that allows compressing the stringified config object (e.g. for sharing in URL hash)
It encodes it in base64 with a few tweaks to make it URI safe.

This is the `compressToEncodedURIComponent` function re-exported from `lz-string` for convenience.

## Parameters

• **uncompressed**: `string`

A string which should be compressed.

## Returns

`string`

The compressed string

## Param

The string to be compressed (e.g. stringified config object)

## Example

```ts
const compressed = compress(JSON.stringify(config));
```

## Defined in

[src/sdk/index.ts:527](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/index.ts#L527)