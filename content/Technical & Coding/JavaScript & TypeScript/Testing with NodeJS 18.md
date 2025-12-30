---
title: Testing with NodeJS 18
date created: 2023-07-16T15:47:09-06:00
date modified: 2025-09-08T09:33:29-06:00
---
# Testing with NodeJS 18

## Testing `fetch` Call

```javascript
import assert from 'node:assert'
import { describe, it, mock } from 'node:test'

describe('Class', () => {
    it('fetch stuff', async () => {
        const json = () => { 
            return {
                key: 'value'
            }
        }
        mock.[[Methods|method]](global, 'fetch', () => {
            return { json, status: 200 }
        })

        const response = await fetch()
        assert.strictEqual(response.status, 200)

        const responseJson = await response.json()
        assert.strictEqual(responseJson.key, 'value')

        mock.reset()
    })
})
```

[Based on this Stack Overflow Post](https://stackoverflow.com/a/75925270)

<hr class="__chatgpt_plugin">

role::user

Show me how to test fetch using the NodeJS 18 node:test package

<hr class="__chatgpt_plugin">

role::assistant

Sure! Here's an example of how you can test a `fetch` call using the `node:test` package in Node.js 18:

```javascript
import assert from 'node:assert';
import { describe, it, mock } from 'node:test';

describe('Class', () => {
  it('fetch stuff', async () => {
    const json = () => {
      return {
        key: 'value',
      };
    };

    // Mock the fetch [[Methods|method]]
    mock.method(global, 'fetch', () => {
      return { json, status: 200 };
    });

    // Call the fetch method
    const response = await fetch();

    // Assert the response status
    assert.strictEqual(response.status, 200);

    // Get the JSON response
    const responseJson = await response.json();

    // Assert the response JSON
    assert.strictEqual(responseJson.key, 'value');

    // Reset the mock
    mock.reset();
  });
});
```

In this example, we start by importing the necessary functions from the `node:test` package (`describe`, `it`, and `mock`). We then define a test case using `describe` and `it` functions.

Inside the test case, we define a mock `json` function that returns a sample JSON object. We then use the `mock.method` function to mock the `fetch` [[Methods|method]]. The mocked `fetch` [[Methods|method]] returns an object with a `json` [[Methods|method]] and a `status` property.

Next, we call the `fetch` [[Methods|method]] and store the response in the `response` variable. We use `assert.strictEqual` to assert that the response status is equal to 200.

We then use `response.json()` to get the JSON response and store it in the `responseJson` variable. Again, we use `assert.strictEqual` to assert that the `key` property of the response JSON is equal to `'value'`.

Finally, we reset the mock using `mock.reset()` to ensure that subsequent tests are not affected by the mock.

Remember to install the `node:test` package using `npm install node:test` before running the test.

<hr class="__chatgpt_plugin">

role::user
