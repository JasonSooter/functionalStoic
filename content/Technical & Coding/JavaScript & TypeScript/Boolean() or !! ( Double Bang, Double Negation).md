---
tags:
  - coding/javascript
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-04-24T08:42:45-06:00
title: "`Boolean()` Or `!!` (Double Bang, Double Negation)"
---
# `Boolean()` Or `!!` (Double Bang, Double Negation)

> tldr; I prefer `Boolean()`

---

_Source:_ [Gist by Arthur Visser](https://gist.github.com/arthurvi/66cb1e2bcfc92f99f465e0db04264367)
_local link:_ [[]]
_reference:_ []()

---

_content_

## What's the Best Way to Answer the Question `true` or `false` in JavaScript?

JavaScript does not bother you too much with types (at first), which is both a blessing and a cure. But we all know the Boolean type. Boolean variables can either be `true` or `false`. Yes or no.

Every value in JavaScript can be translated into a boolean, `true` or `false`. Values that translate to `true` are truthy, values that translate to `false` are falsy. Simple.

This is about two ways to make that translation.

## `!!` And `Boolean()`

```js
const value = 'hello world';

Boolean(value); // true - the boolean function
!!value;        // true - double bang / double negation
```

Which one is the best?

## Truthy and Falsy

The conversion from any value to `true` or `false` is described by the abstract operation `ToBoolean` in [section 9.2](https://www.ecma-international.org/ecma-262/5.1/#sec-9.2) of the ECMAScript® Language Specification.

All values are truthy unless they are falsy. So we only have to know the falsy ones to know the truthy ones.

Falsy values (`ToBoolean` result is `false`):
- `false`
- `undefined`
- `null`
- `''` - empty string
- `0`, `-0` and `0n` - zero
- `NaN` (Not a Number)

So truthy examples are (`ToBoolean` result is `true`):
- `true`
- `{}`
- `"false"`

In certain operations (like in if/else statements), JavaScript will automagically convert a value into `true` or `false` by using these truthy/falsy rules. This is type coercion. Read more about it in the [MDN web docs](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion).

An example:

```js
const student = {
  answer: 'correct'
};

// student.answer is truthy, so we get true and the answer is verified.
if (student.answer) {
  verifyAnswer();
}
```

Let's take a closer look at `Boolean()` and `!!`.

## Boolean()

Always use Boolean as a function. So do this:

```js
const trueOrFalse = Boolean('yes'); // true
```

Do not do this!

```js
const trueOrFalse = new Boolean('yes');
```

`trueOrFalse` now becomes a Boolean object, not a boolean value! And we know `{}` is not falsy, so `new Boolean()` is always truthy. This can lead to unexpected behaviour.

```js
typeof new Boolean(false); // object - {...}
typeof Boolean(false); // boolean - false

if (new Boolean(false)) {
  // This will run! Because the Boolean {} is coerced to true.
}

if (Boolean(false)) {
  // This will not run! Which is probably what you want.
}
```

More on this in the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) about the Boolean object.

## !!

The logical NOT operator: `!`, the exclamation mark, also called a "bang". It translates truthy values to `false` and falsy values to `true`. Get it?

Doing that twice translates truthy values to `true` and falsy values to `false`.

This is double negation. If a statement is true, then it is _not_ the case that the statement is _not_ true. Complicated, but just remember `!!` results in a boolean. `true` for truthy values, `false` for falsy values.

```js
const value = 'hello';

// Step 1. First bang.
const step1 = !value; // step1 = false (NOT truthy = false)

// Step 2. Second bang.
const step2 = !step1; // step2 = true (NOT false = true) 

// Thus
console.log(step1, !value); // false
console.log(step2, !!value); // true
```

## What Do Experts Say?

The excellent [Airbnb style guide](https://airbnb.io/javascript/#coercion--booleans) prefers the double bang / `!!`.

```js
// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
```

In [chapter 4](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md) of the book You don't know JS by Kyle Simpson both options are considered good.

```js
const a = "42";

// bad (will fail!):
if (a == true) {
	// ..
}

// also bad (will fail!):
if (a === true) {
	// ..
}

// good enough (works implicitly):
if (a) {
	// ..
}

// better (works explicitly):
if (!!a) {
	// ..
}

// also great (works explicitly):
if (Boolean( a )) {
	// ..
}
```

## Why is Explicit Conversion Better Than Implicit Conversion?

There are multiple reasons to prefer explicit over implicit conversion.

First, it's easier to see what's intended. Good code makes you assume less and understand more. By using `Boolean()` or `!!` it becomes clear that the `ToBoolean` conversion is intented.

It prevents unexpected results, for example with the `||` and `&&` operators.

```js
const isValid = 'yes' && 'yup'; // isValid becomes 'yup', not true as with for example PHP. 
const isValid = 'yes' || 'no'; // isValid becomes 'yes', not true.
```

```js
const isValid = Boolean('yes' && 'yup'); // isValid becomes true! Probably what we want.
const isValid = Boolean('yes' || 'no'); // isValid becomes true!
```

The `||` and `&&` operators result in one of the two variables, not necessarily a boolean. By using `Boolean()` we make that explicit, one thing less to think about!

And it's also possible with a bang bang 🔫 🔫.

```js
!!('yes' && 'yup'); // results in true
```

## Performance

I did a quick [jsperf test](https://jsperf.com/double-bang-or-boolean). I consider both operations to be basic and thus "fast enough" for most use cases. Readability and clarity would be more important to me. Still it's interesting to see the results.

I always thought the double bang was the way to go in terms of performance. Although with a double bang you have to make two conversions (falsy/truthy -> boolean -> boolean). But maybe browsers have some optimizations built-in, for either way.

Safari, `!!` wins.

Firefox, a draw.

Chromium, `Boolean()` wins (slightly).

No clear winner. Check your usage share of webbrowsers. 🙃

## Conclusion

So. `!!` or `Boolean()`?

Just pick one! 😁

Personally I prefer `Boolean()`. I like the way this says it all: "Give me a boolean". Most developers would understand this immediately, `!!` is less clear (but easy enough to remember).

In terms of performance it doens't really matter, but you can type `!!` quicker. A valid argument for the lazy ones.

And a bonus point for `Boolean()`, it's a function. So you can do stuff like this:

```js
const answers = ['', 'correct', '', 'good'];
const completedAnswers = answers.filter(Boolean);
```

If you want to read more about types in JavaScript I can greatly recommend the first book of [You Don't Know JS, Types & Grammar](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/types%20%26%20grammar).

---

_questions & thoughts_

---

_consider_

- [[]]
- [[]]

---

_How does this NOT collect but develop existing ideas, arguments and discussions?:_

---

_How does this new information fit with what already exists?_

- _contradicts:_
- _corrects:_
- _supports:_
- _adds to:_

---

_Can this be combined with existing ideas to generate something new?_
