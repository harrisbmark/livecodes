# Interface: TestResult

Represents the result of a single test.

## Properties

### duration

> **duration**: `number`

Time taken to run the test in milliseconds.

#### Defined in

[src/sdk/models.ts:828](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L828)

***

### errors

> **errors**: `string`[]

Array of error messages if the test failed.

#### Defined in

[src/sdk/models.ts:830](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L830)

***

### status

> **status**: `"pass"` \| `"fail"` \| `"skip"`

The status of the test.

#### Defined in

[src/sdk/models.ts:832](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L832)

***

### testPath

> **testPath**: `string`[]

The path to the test in the test suite.

#### Defined in

[src/sdk/models.ts:834](https://github.com/harrisbmark/livecodes/blob/e37354253f1250751cfa148e507487c0f307b881/src/sdk/models.ts#L834)