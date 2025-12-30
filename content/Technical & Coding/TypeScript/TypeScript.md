---
title: TypeScript
date created: 2023-08-31T10:44:43-06:00
date modified: 2024-11-30T11:11:41-07:00
aliases:
  - TypeScript
tags:
  - coding/typescript
---
# TypeScript

## Programming TypeScript Book

### Chapter 3 Notes

#### All About Types

**type**: a set of values and the things you can do with them

#### Examples

- boolean
	- the set of all booleans (just `true` / `false`)
	- the operations include `||`, `&&`, `!`
- number
	- the set of all numbers
	- the operations include `+`, `*`, `/` etc
	- also includes the methods like `toString`, `toFixed`
- string
	- the set of all strings
	- the operations include `+`, `||`, `&&`
	- also includes the methods like `toUppercase` and `concat`

Knowing something is of type `T` tells you 3 things:

1. What type it is
2. What you can do with it
3. What you can **NOT** do with it

![TypeScript Type Hierarchy Tree](TypeScript_Type_Hierarchy_Tree.png)

### Talking About Types

```ts
function squareOf(n: number) {
  return n * n;
}

squareOf(2); // 4

squareOf("z"); // Error TS2345

// Argument of type '"z"' is not assignable to parameter of type 'number'.
```

Annotating the paramater of `squareOf` allows us to say the following:

1. `squareOf`'s parameter is "constrained" to number
2. The type of the value 2 is _assignable_ to (i.e. compatible with) `number`

### The ABCs of Types

### `any`

The type to use as a last resort. It is the set of _all_ values

### `unknown`

- Similar to any in the set of values it includes.
- But TypeScript will require checking what it is before using it unsafely
- Must be explicitly set. TypeScript will not infer something as `unknown`
- You can compare values of type `unknown`
- But you cannot do things that assume an `unknown` value is of a certain type

without first proving it to TypeScript

```ts
let a: unknown = 30; // unknown

let b = a === 123; // boolean

let c = a + 10; // Error TS2571: Object is of type `unknown`

if (typeof a === "number") {
  let d = a + 10; // number
}
```

### `boolean`

- only 2 possible values: `true` & `false`
- operations include those that compare them & negate them
- === & `!`

```ts
let a = true; // boolean (inferred)

var b = false; // boolean (inferred)

const c = true; // true (inferred specific boolean value)

let d: boolean = true; // boolean (specifically a boolean)

let e: true = true; // true (specific boolean value)

// Error TS2322: type `false`is not assignable to type `true`

let f: true = false; // (specific boolean value)
```

- **type literals**: a type that represents a single value and nothing else
- example above for how `e` & `f` are set
- using `const` (vs `let`) will tell TypeScript to set a type literal (see

Type Widening for why)

- powerful feature that adds extra safety

### `number`

- The set of all numbers:
	- integers, floats, positives, negatives, `Infinity`, `NaN`, etc
	- operations include `+`, `-`, `*`, etc

```ts
let a = 1234; // number (inferred)

var b = Infinity * 0.1; // number (inferred)

const c = 5678; // 5678 (inferred as a specific number)

let d = a < b; // boolean

let e: number = 100; // number (explicity)

let f: 26.218 = 26.218; // 26.218 (explicitly set as specific value / type literal)

let g: 26.218 = 10; // Error TS2322: Type '10' not assignable to type '26.218
```

### `bigInt`

- The set of all BigInts
- Operations include normal number operations `+`, `-`, `*`, etc

```ts
let a = 1234n; // bigint

const b = 5678n; // 5678n

var c = a + b; // bigint

let d = a < 1235; // boolean

// let e = 88.5n // Error TS1353: a bigint literal must be an integer

let f: bigint = 100n; // bigint

let g: 100n = 100n; // 100n

let h: bigint = 100; // Error TS 2322: Type '100' not assignable to type `bigInt`
```

As with `boolean` & `number`, TypeScript will generally do the work of inferring

the value of bigints, so strive to let it do so

### `string`

- The set of all strings
- operations include concatenation and the methods like `.slice()` &

`.startsWith`

```ts
let a = "hello"; // string

var b = "billy"; // string

const c = "!"; // '!' (type literal)

let d = a + " " + b + c; // string

let e: string = "zoom"; // string

let f: "john" = "john"; // 'john'

let g: "john" = "zoe"; // Error TS2322: Type "zoe" is not assignable to type "john"
```

As with `boolean` & `number`, TypeScript will generally do the work of inferring

the value of bigints, so strive to let it do so

### `symbol`

- Relatively new feature to JavaScript
- Not much can be done with them in regard to operations

```ts
let a = Symbol("a"); // symbol

let b: symbol = Symbol("b"); // symbol

var c = a === b; // boolean

let d = a + "x"; // Error TS2469: The '+' operator cannot be applied to type 'symbol'
```

Declaring w/ `const` and `unique symbol`

```ts
const e = Symbol("e"); // typeof e (inferred as unique symbol)

const f: unique symbol = Symbol("f"); // typeof f

let g: unique symbol = Symbol("f"); // Error TS1332

// A variable whose type is a 'unique symbol' type must be 'const'

let h = e === e; // boolean (unique symbol is always equal to itself)

let i = e === f; // Error TS2367: This condition will always return 'false'

// since the types 'unique symbol' and 'unique symbol' have no overlap
```

### `object`

Used to specify the shape of objects

> **NOTE**: TypeScript `object`s cannot tell the difference between simple

> objects (declared with {}) and other more complicated ones (i.e. `new Blah`).

> This is because JavaScript is _Structurally Typed_ and not _Nominal Typed_.

**Structural Typing**: a style of programming where you just care than an object

has certain properties, and not what its name is (_nominal typing_)

#### Ways to Describe Objects

##### First Way: Declare with `object`

```ts
let a: object = {
  b: "x"
};

a.b; // Error TS2339: Property 'b' does not exist on type 'object'
```

Only describing the with `object` is not enough. You must also describe the

shape

##### Second Way: Let Typescript Infer

```ts
let a = {
  b: "x"
}; // { b: string }

a.b; // string

let b = {
  c: {
    d: "f"
  }
}; // { c: { d: string } }
```

##### Third Way: Explicitly Describe in Curly Braces

```ts
let a: { b: number } = {
  b: 12
}; // { b: number }
```

> **Note**: Declaring the above with `const` will infer the type as `{ b: 12 }`,
> but will not type it as a type literal. This is because of Type Widening

#### Object Literal Vs. Class

The following object & class are structurally the same

```ts
let c: {
  firstName: string;
  lastName: string;
} = {
  firstName: "john",
  lastName: "barrowman"
};

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

c = new Person("matt", "smith"); // OK
```

`{firstName: string; lastName: string}` describes the shape of an object. The

object literal & class above both satisfy that shape.

```ts
let a: { b: number };

/**
 * What happens when a property is left out?
 */

a = {}; // Error TS2741:

// Property 'b' is missing in type '{}' but required in type '{ b: number }'

/**
 * What happens when an extra property is added?
 */

a = {
  b: 1,
  c: 2
}; // Error TS2322:

// Type '{ b: number; c: number; }' is not assignable to type '{ b: number; }'.

// Object literal may only specify known properties, and 'c' does not exist

// in type '{ b: number; }'
```

#### Definitive Assignment

A variable can be declared without being assigned a value. TypeScript will

ensure that the variable is assigned a value before being used.

```ts
let i: number;

let j = i * 3; // Error TS2454: Variable 'i' is used before being assigned
```

```ts
let i;

let j = i * 3; // Error TS2532: Object is possibly 'undefined'
```

#### Optional Properties

```ts
let a: {
  b: number; // a has a property 'b' that is a number

  c?: string; // a might have a property 'c' that is a string

  [key: number]: boolean; // a may have any number of numeric properties

  // that are boolean
};

a = { b: 1 }; // OK

a = { b: 1, c: undefined }; // OK

a = { b: 1, c: "d" }; // OK

a = { b: 1, 10: true }; // OK

a = { b: 1, 10: true, 20: false }; // OK

a = { 10: true }; // Error TS2741: Property 'b' is missing in type '{ 10: true }'

a = { b: 1, 33: "red" }; // Error TS2741:

// Type 'string' is not assignable to type 'boolean'
```

#### Index Signatures

- Used to describe the types of properties that are not known ahead of time
- Tell TypeScript that the given object may contain more keys
- i.e. `For this object, all keys of type T must have values of type U`
- The key's type must assignable to either `string` or `number`
- Any word can be used for the key name. Especially if the key is a `string`,

it's best to use a word that describes the value

```ts
let airplaneSeatingAssignments: {
  [seatNumber: string]: string;
} = {
  "34D": "Boris Cherny",

  "34E": "Bill Gates"
};
```

#### `readonly` Properties

- like `const` for object properties 😄

```ts
let user: { readonly firstName: string } = { firstName: "abby" };
user.firstName; // string
user.firstName = "abbey with an e"; // Error TS2540: Cannot assign to 'firstName' because it is a read-only property
```

#### Avoid Empty Object Types `{}`

Every type (except for `null` and `undefined`) is a subtype of `{}`. This means

### Type Aliases

In the same way that variables can be declared (`let`, `const`, `var`), you can declare a type alias that points to a type
- Aliases are never inferred by TypeScript, they must be explicitly typed

```ts
type Age = number;
type Person = {
  name: string;
  age: Age;
};

//
let age: Age = 55;
let driver: Person = {
  name: "James May",
  age: age
};

//
let age = 55;
let driver: Person = {
  name: "James May",
  age: age
};
```

- You can't declare a type twice

```ts
type Color = 'red'
type Color = 'blue' // Error TS2300: Duplicate identifier 'Color'
```

- Type aliases are block-scoped in the same way as `let` & `const`
	- Ever block & function has its own scope. Inner type alias declarations shadow outer ones:

```ts
type Color = 'red'

let x = Math.random() < .5

if (x) {
	type Color = 'blue' // This shadows the `Color` type declared above
	let b: Color = 'blue'
} else {
	let c: Color = 'red'
}
```

- Type aliases are useful for DRYing your code (Don't Repeat Yourself)
	- Especially for repeated complex types
	- Interesting concept
		- I generally prefer descriptive variable names
		- However, some prefer descriptive type names to descriptive variable names
		- I'll have to experiment with the right balance

When to use them?
- Same judgment & criteria for when to pull a value out into its own variable

### Union and Intersection Types

If you have two things, `A` & `B`:
- the `union` of those things is their `sum`.
	- A & B or Both
- the `intersection` is what they have in common
	- In both A & B

![[union_vs_intersection.jpg]]

Type Operators used to describe Union & Intersection
- | (pipe) for Union
- & (ampersand) for Intersection

Since types are similar to Sets, we can think of them in the same way.

```ts
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth == Cat | Dog
type CatAndDog = Cat & Dog

/**
 * Valid options for CatOrDogOrboth
 */
// Cat
let a: CatOrdogOrBoth = {
	name: 'Bonkers',
	purrs: true
}

// Dog
a = {
	name: 'Domino',
	barks: true,
	wags: true
}

// or Both
a = {
	name: 'Donkers',
	barks: true,
	purrs: true,
	wags: true
}


/**
 * Valid option for CatAndDog
 */
let b: CatAndDog = {
	name: 'Domino',
	barks: true,
	purrs: true,
	wags: true,
}
```

Unions are much more common. Here is a function as an example

```ts
function trueOrNull(istrue: boolean) {
	if(isTrue) {
		return 'true'
	}
	return null
}
```

The return type of this function is:

```ts
type Returns = string | null
```

Another example:
- The return value is a string if a is truthy, but a number if a is falsy

```ts
function aOrB(a: string, b: number): string | number {
	return a || b
}
```
