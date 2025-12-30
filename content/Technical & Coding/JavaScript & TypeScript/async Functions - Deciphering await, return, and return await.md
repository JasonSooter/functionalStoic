---
date created: 2023-08-02T16:49:06-06:00
date modified: 2025-08-15T19:15:08-06:00
linter-yaml-title-alias: await vs return vs return await
title: Async Functions - Deciphering `await`, `return`, and `return await`
summary: When writing async functions, there are differences between `await` vs `return` vs `return await`, and picking the right one is important.
aliases: []
---
# Async Functions - Deciphering `await`, `return`, and `return await`

Async functions in JavaScript & TypeScript are essential. `await` simplifies async operations significantly, yet using `await` & `return` (or their combo `return await`) requires understanding their nuances. Here is a breakdown of the important aspects of how to pick the right one. We'll use a bike rental service as an example.

First, an async function to model checking if a bike is available:

```ts
async function checkBikeAvailability() {
  // Simulate checking availability (1 second)
  await new Promise((r) => setTimeout(r, 1000));
  
  // Randomly determine if a bike is available
  const isAvailable = Boolean(Math.round(Math.random()));

  if (isAvailable) return 'Bike is available';
  throw Error('No bikes available');
}
```

This simulates checking for a bike's availability with a 50/50 chance of success or failure. Let's use `checkBikeAvailability` in various scenarios:

# Calling `checkBikeAvailability` Directly

```ts
async function rentBike() {
  try {
    checkBikeAvailability();
  } catch (e) {
    return 'No bike rented';
  }
}
```

Calling `rentBike` results in a promise that **resolves immediately with undefined**, without waiting for bike availability.

Omitting `await` or `return` on `checkBikeAvailability()` means we don't handle the bike availability result, typically a mistake.

# `await`ing `checkBikeAvailability`

```ts
async function rentBike() {
  try {
    await checkBikeAvailability();
  } catch (e) {
    return 'No bike rented';
  }
}
```

Now, `rentBike` waits for bike availability, **pausing for one second**, then **resolves with undefined** or **'No bike rented'** based on availability.

`await` converts `checkBikeAvailability()`'s rejection into a throw, catching any errors. If the bike is available, we don't capture the value.

# `return`ing `checkBikeAvailability`

```ts
async function rentBike() {
  try {
    return checkBikeAvailability();
  } catch (e) {
    return 'No bike rented';
  }
}
```

Here, `rentBike` waits one second, then **resolves with 'Bike is available'** or **rejects with an error**.

By returning the promise from `checkBikeAvailability()`, we let the caller handle the outcome, bypassing our catch block.

# `return-await`ing `checkBikeAvailability`

Ideal for try/catch blocks is `return await`:

```ts
async function rentBike() {
  try {
    return await checkBikeAvailability();
  } catch (e) {
    return 'No bike rented';
  }
}
```

This ensures `rentBike` always waits for a response, resolving with **'Bike is available'** or **'No bike rented'**, handling both fulfillment and rejection within the try/catch.

This breakdown can be simplified as:

```ts
async function rentBike() {
  try {
    const availability = await checkBikeAvailability();
    return availability;
  } catch (e) {
    return 'No bike rented';
  }
}
```

> [!note] Using `return await` outside of `try/catch` blocks is unnecessary. However, as the [`no-return-await` ESLint rule illustrates](https://eslint.org/docs/latest/rules/no-return-await), using for clarity and error handling purposes is acceptable.
