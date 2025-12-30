---
aliases:
  - Get Unique List of Values in Array
tags: 
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-09-08T09:33:29-06:00
linter-yaml-title-alias: Get Unique List of Values in Array
title: Get Unique List of Values in Array
---
# Get Unique List of Values in Array

[source](https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates)

```javascript

// Using Array#Filter & Array#IndexOf
myArray.filter((v, i, a) => a.indexOf(v) === i);

// Or

// Using Set
const uniqWSet = [...new Set(myArray)];

```

## Homegrown `pipe` Using `.reduce()`

This is a `pipe` function that allows you to chain multiple operations together by taking a series of functions as arguments and applying them in a specific order to the input.

```js
const toUpperCase = str => str.toUpperCase()
const removeSpaces = str => str.replace(/\s/g, "")
const addExclamation = str => str + "!"

const pipe = (…fns) => input => fns.reduce(
  (acc, fn) => fn(acc), input
)

const formatString = pipe(toUpperCase, removeSpaces, addExclamation)

formatString("Subscribe to Bytes") // SUBSCRIBETOBYTES!
```

[source](https://bytes.dev/archives/252?ck_subscriber_id=187138985) #source/blog/bytes-dev
