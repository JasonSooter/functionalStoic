---
title: Programming TypeScript
linter-yaml-title-alias: Programming TypeScript
date created: 2025-04-26T16:25:03-06:00
date modified: 2025-09-08T09:33:38-06:00
aliases: Programming TypeScript
---
# Programming TypeScript

<div style="text-align: center;">
		<img src="https://m.media-amazon.com/images/I/914Lo09RDcL.jpg" width="500px">
</div>

## Metadata

- Author: #people/authors/boris-cherny
- Full Title: Programming TypeScript
- Category: #books
- Document Tags: #shortlist
- Summary: "Programming TypeScript" by Boris Cherny explains the various types and type operators in TypeScript. The book highlights TypeScript's features like type inference and type checking, which help improve coding style and maintainability. It provides a clear overview of how to use types effectively in your code.

```
task
where !completed and file.name = this.file.name
```

## Highlights

- Relationships Between Types ([View Highlight](https://read.readwise.io/read/01je7x1ykg09m7e2r06q696rar))
- Subtypes and Supertypes ([View Highlight](https://read.readwise.io/read/01je7x1wd9x4ghpn8cjs2v8k3v))
- Subtype
	If you have two types `A` and `B`, and `B` is a subtype of `A`, then you can safely use a `B` anywhere an `A` is required ([Figure 6-1](#ch03-subtype_1)). ([View Highlight](https://read.readwise.io/read/01je7wyq012tt0vkg6806073hn))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/237368465/LEycGczQ409w16eRlj7mwa-lhh7IWI6xNBPIZgF2ygs-img__GrTdqoP.png) ([View Highlight](https://read.readwise.io/read/01je7wyxqekn1x3rmt3h6206zx))
- Array is a subtype of Object. ([View Highlight](https://read.readwise.io/read/01je7wvvjrh10fjseyc6s9dxrp))
- Tuple is a subtype of Array. ([View Highlight](https://read.readwise.io/read/01je7wvxz9chjfb1pchcrezcfk))
- Everything is a subtype of `any`. ([View Highlight](https://read.readwise.io/read/01je7ww0z9khqwekb4yxpa8mpx))
- `never` is a subtype of everything. ([View Highlight](https://read.readwise.io/read/01je7ww3whrs2t8bmay1cx72dt))
- If you have a class `Bird` that extends `Animal`, then `Bird` is a subtype of `Animal`. ([View Highlight](https://read.readwise.io/read/01je7wwg1j0fr6pmvkvdk7mb90))
- Anywhere you need an Object you can also use an Array. ([View Highlight](https://read.readwise.io/read/01je7wx55934pms1mxbgyabm62))

> I'm curious how this works. It seems counterintuitive.

- Anywhere you need an Array you can also use a Tuple. ([View Highlight](https://read.readwise.io/read/01je7wxx9pq9r03z9bqamk8crn))
- Anywhere you need an `any` you can also use an Object. ([View Highlight](https://read.readwise.io/read/01je7wy0pk21cvnky5t89e4pwf))
- You can use a `never` anywhere. ([View Highlight](https://read.readwise.io/read/01je7wy6j6dyxevd9bkkq4vhk7))
- Anywhere you need an `Animal` you can also use a `Bird`. ([View Highlight](https://read.readwise.io/read/01je7wyat4awwt6qb690ezm0v3))
- Supertype
	If you have two types `A` and `B`, and `B` is a supertype of `A`, then you can safely use an `A` anywhere a `B` is required ([View Highlight](https://read.readwise.io/read/01je7wz7z6z2xzmr5y8dwwfngh))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/237368465/ZbGLBm7nodSOwF1TpK7RrpRKAb0yy_fPr3eOkKElaJ8-img__PDWP9kf.png) ([View Highlight](https://read.readwise.io/read/01je7wz9x5c0gnaatfxyywsncw))
- Array is a supertype of Tuple. ([View Highlight](https://read.readwise.io/read/01je7x0asvwce3h2fgngmqs80t))
- Object is a supertype of Array. ([View Highlight](https://read.readwise.io/read/01je7x0epd7eqmgcw7a99bznf9))
- Any is a supertype of everything. ([View Highlight](https://read.readwise.io/read/01je7x0n23pjet9an3xxf9at60))
- Never is a supertype of nothing. ([View Highlight](https://read.readwise.io/read/01je7x0rbwkatnw54adjdv780h))
- `Animal` is a supertype of `Bird`. ([View Highlight](https://read.readwise.io/read/01je7x0vphddfsq83yc6s0sbba))
- This is just the opposite of how subtypes work, and nothing more. ([View Highlight](https://read.readwise.io/read/01je7x0zmxydvrsmhr11x7kwm4))
- Variance ([View Highlight](https://read.readwise.io/read/01je7x1n79q4sj181nad5kwwzz))
- `A <: B` means "`A` is a subtype of or the same as the type `B`.” ([View Highlight](https://read.readwise.io/read/01je7x522bz67bmg5k6js90hpp))
- `A >: B` means "`A` is a supertype of or the same as the type `B`.” ([View Highlight](https://read.readwise.io/read/01je7x55sqpyj0n1s6yzv4m11k))
- Shape and array variance ([View Highlight](https://read.readwise.io/read/01je7x7h0kc9w2c4y6n6g746mg))
- When talking about types, we say that TypeScript shapes (objects and classes) are *covariant* in their property types. That is, for an object `A` to be assignable to an object `B`, each of its properties must be `<:` its corresponding property in `B`. ([View Highlight](https://read.readwise.io/read/01je7xrer9pp807x9kkhffpqjf))
- More generally, covariance is just one of four sorts of variance: ([View Highlight](https://read.readwise.io/read/01je7xrkqd6r7cxtwzgend2cs6))
- *Invariance*
	You want exactly a `T`. ([View Highlight](https://read.readwise.io/read/01je7xrpbchaezw01jgm9rsmwk))
- *Covariance*
	You want a `<:T`. ([View Highlight](https://read.readwise.io/read/01je7xrrhma0fgmy6xsfnjajqm))
- *Contravariance*
	You want a `>:T`. ([View Highlight](https://read.readwise.io/read/01je7xrvtwjmgjgf28ngr7whh4))
- *Bivariance*
	You’re OK with either `<:T` or `>:T`. ([View Highlight](https://read.readwise.io/read/01je7xryztmxmrvn2jqv03b75d))
- In TypeScript, every complex type is covariant in its members—objects, classes, arrays, and function return types—with one exception: function parameter types, which are *contravariant*. ([View Highlight](https://read.readwise.io/read/01je7xw5e9mm7m68ba29nr2wfy))
- Function variance ([View Highlight](https://read.readwise.io/read/01je7xy7s6gydc11v5762febx0))
- A function `A` is a subtype of function `B` if `A` has the same or lower arity (number of parameters) than `B` and: ([View Highlight](https://read.readwise.io/read/01je7xymtx9sr6y0x4453hv8jf))
- `A`’s `this` type either isn’t specified, or is `>: B`’s `this` type. ([View Highlight](https://read.readwise.io/read/01je7xyt1hyf8re5n06xzr0gcv))
- Each of `A`’s parameters is `>:` its corresponding parameter in `B`. ([View Highlight](https://read.readwise.io/read/01je7xywgr14mjyhqtst2azt19))
- `A`’s return type is `<: B`’s return type. ([View Highlight](https://read.readwise.io/read/01je7xz666kd8n4t67pgj8wbyz))
- We say that functions are *covariant* in their return types, which is a fancy way of saying that for a function to be a subtype of another function, its return type has to be `<:` the other function’s return type. ([View Highlight](https://read.readwise.io/read/01je7y8j6xj5bk854789zgp0qt))
- For a function to be assignable to another function, its parameter types (including `this`) all have to be `>:` their corresponding parameter types in the other function. ([View Highlight](https://read.readwise.io/read/01je7yb6wakprft1hhtaqh8c1r))
- This means functions are *contravariant* in their parameter and `this` types. That is, for a function to be a subtype of another function, each of its parameters and its `this` type must be `>:` its corresponding parameter in the other function. ([View Highlight](https://read.readwise.io/read/01je7yaxcwztpsgyrwg8e8316k))
- Rule 2 is a convenience for working with enums. As we talked about in [“Enums”](#enums), rule 2 is a big source of unsafety in TypeScript, and this is one reason I suggest throwing the baby out with the bathwater and avoiding enums entirely. ([View Highlight](https://read.readwise.io/read/01je7yget9dk09zgzb0yyj6t5a))
- Type Widening ([View Highlight](https://read.readwise.io/read/01je7ypagsdrbpwyqgawqqgx7b))
- *Type widening* is key to understanding how TypeScript’s type inference works. In general, TypeScript will be lenient when inferring your types, and will err on the side of inferring a more general type rather than the most specific type possible. ([View Highlight](https://read.readwise.io/read/01je7yr5ap1etnc9cwcadbphkd))
- When you declare a variable in a way that allows it to be mutated later (e.g., with `let` or `var`), its type is widened from its literal value to the base type that literal belongs to: ([View Highlight](https://read.readwise.io/read/01je7yts48x1zvdwf4bzrfz7xj))
- `let` `a` `=` `'x'` `// string` `let` `b` `=` `3` `// number` `var` `c` `=` `true` `// boolean` `const` `d` `=` `{``x`: `3``}` `// {x: number}` `enum` `E` `{``X``,` `Y``,` `Z``}` `let` `e` `=` `E``.``X` `// E` ([View Highlight](https://read.readwise.io/read/01je7ytvcwc8m3bfnqbvr09d20))
- Not so for immutable declarations: ([View Highlight](https://read.readwise.io/read/01je7yv6dr5jchpspv6xdrdx3v))
- `const` `a` `=` `'x'` `// 'x'` `const` `b` `=` `3` `// 3` `const` `c` `=` `true` `// true` `enum` `E` `{``X``,` `Y``,` `Z``}` `const` `e` `=` `E``.``X` `// E.X` ([View Highlight](https://read.readwise.io/read/01je7yv8nc1tm3tc8rv1ddxjae))
- You can use an explicit type annotation to prevent your type from being widened: ([View Highlight](https://read.readwise.io/read/01je7yvec89ycpas3wh9cw24n3))
- `let` `a``:` `'x'` `=` `'x'` `// 'x'` `let` `b`: `3` `=` `3` `// 3` `var` `c`: `true` `=` `true` `// true` `const` `d``:` `{``x`: `3``}` `=` `{``x`: `3``}` `// {x: 3}` ([View Highlight](https://read.readwise.io/read/01je7yvgxf2n9ge4rezp1qffxa))
- The const type ([View Highlight](https://read.readwise.io/read/01je7yy1e2h06mrv41b353jg4n))
- TypeScript comes with a special `const` type that you can use to opt out of type widening a declaration at a time. ([View Highlight](https://read.readwise.io/read/01je7yyd21c3k9mn30rs1zgnt8))
- `let` `a` `=` `{``x`: `3``}` `// {x: number}` `let` `b``:` `{``x`: `3``}` `// {x: 3}` `let` `c` `=` `{``x`: `3``}` `as` `const` `// {readonly x: 3}` ([View Highlight](https://read.readwise.io/read/01je7yysx2wzk7pk7dz1ygw6xp))
- `const` opts your type out of widening and recursively marks its members as `readonly`, even for deeply nested data structures: ([View Highlight](https://read.readwise.io/read/01je7yz27mvsqxdzpa3x0yk0fm))

> Oh, I think I might really find `const` to be helpful for immutability benefits

- `let` `d` `=` `[``1``,` `{``x`: `2``}]` `// (number | {x: number})[]` `let` `e` `=` `[``1``,` `{``x`: `2``}]` `as` `const` `// readonly [1, {readonly x: 2}]` ([View Highlight](https://read.readwise.io/read/01je7z0g6yzz2ee6w3cda3pkf9))
- when you want TypeScript to infer your type as narrowly as possible. ([View Highlight](https://read.readwise.io/read/01je7z0b5ppyt07f5xm9gsn097))
- Excess property checking ([View Highlight](https://read.readwise.io/read/01je7z0w0aeht20rvv14nwp9sf))
- Type widening also comes into the picture when TypeScript checks whether or not one object type is assignable to another object type. ([View Highlight](https://read.readwise.io/read/01je7z128q4hhs4017wxrbds5r))
- object types are covariant in their members. But if TypeScript stuck to this rule without doing any additional checks, it could lead to a problem. ([View Highlight](https://read.readwise.io/read/01je7z1g4nrs6dn5t25pw0pm1m))
- TypeScript is smart enough to know that doing a loose equality check against `null` will return `true` for both `null` and `undefined` in JavaScript ([View Highlight](https://read.readwise.io/read/01je801cft6hfrvt8ap5ftxtsn))

> This is good to know. It could change how I'd normally check for that type of value. I rarely even use `null`

- Use tagged unions when writing a function that has to handle the different cases of a union type. For example, they’re invaluable when working with Flux actions, Redux reducers, or React’s `useReducer`. ([View Highlight](https://read.readwise.io/read/01jf6kndwk225jrqt6kqjmp67j))
- Totality ([View Highlight](https://read.readwise.io/read/01jf6kqnw7h9ma3x7102wqgnps))
- Totality, also called *exhaustiveness checking*, is what allows the typechecker to make sure you’ve covered all your cases. It comes to us from Haskell, OCaml, and other languages that are based around pattern matching. ([View Highlight](https://read.readwise.io/read/01jf6ks0cs8yzg22h124jpc5ym))
- TypeScript comes to the rescue:
	Error TS2366: Function lacks ending return statement and
	return type does not include 'undefined'. ([View Highlight](https://read.readwise.io/read/01jf6ktetr4t43wq6fqccr61zf))
- To ask TypeScript to check that all of your functions’ code paths return a value (and throw the preceding warning if you missed a spot), enable the `noImplicitReturns` flag in your *tsconfig.json*. ([View Highlight](https://read.readwise.io/read/01jf6m1v16aef6wep9wxwpryfa))
- Advanced Object Types ([View Highlight](https://read.readwise.io/read/01jf6m5b51vn6fzykhvpjy4gp7))
- Type Operators for Object Types ([View Highlight](https://read.readwise.io/read/01jf6m6atprkymq7z87kg1f0sx))
- The keying-in operator ([View Highlight](https://read.readwise.io/read/01jf6m9ya292dnq8zxd08b3y15))
- You can key in to any shape (object, class constructor, or class instance), and any array. ([View Highlight](https://read.readwise.io/read/01jf6mbh8jshsatnwn6jvphpqd))
- The keyof operator ([View Highlight](https://read.readwise.io/read/01jf6mc7xwyxqdvkfgt2vs2gce))
- The Record Type ([View Highlight](https://read.readwise.io/read/01jf6mrhs0eezpx9vnkc0e7j6a))
- TypeScript’s built-in `Record` type is a way to describe an object as a map from something to something. ([View Highlight](https://read.readwise.io/read/01jf6mrqyfx4hb2yfffxfh8cy4))
- there are two ways to enforce that an object defines a specific set of keys. ([View Highlight](https://read.readwise.io/read/01jf6ms2h91yenrcxy9dsqh03f))
- `Record` types are the first. ([View Highlight](https://read.readwise.io/read/01jf6ms422jd3qryrahhpnexz7))
- Built-in mapped types ([View Highlight](https://read.readwise.io/read/01jf6n1zgwhmsq24xrh1t2f36s))
- `Record<Keys, Values>`
	An object with keys of type `Keys` and values of type `Values` ([View Highlight](https://read.readwise.io/read/01jf6n229n62db8y98xawx4tvc))
- `Partial<Object>`
	Marks every field in `Object` as optional ([View Highlight](https://read.readwise.io/read/01jf6n250dcqkb85qvcx47p0cq))
- `Required<Object>`
	Marks every field in `Object` as nonoptional ([View Highlight](https://read.readwise.io/read/01jf6n27dcryd50njbqcae1c3q))
- `Readonly<Object>`
	Marks every field in `Object` as read-only ([View Highlight](https://read.readwise.io/read/01jf6n2b5e77t6ztmq5153d570))
- `Pick<Object, Keys>`
	Returns a subtype of `Object`, with just the given `Keys` ([View Highlight](https://read.readwise.io/read/01jf6n2e0k8g0aec475794d4kq))
- Built-in Conditional Types ([View Highlight](https://read.readwise.io/read/01jf6nrqzpbxn3m6t818qnjhvd))
- Conditional types let you express some really powerful operations at the type level. That’s why TypeScript ships with a few globally available conditional types out of the box ([View Highlight](https://read.readwise.io/read/01jf6nrxp8zfxtkjpemgymavm1))
- `Exclude<T, U>`
	Like our `Without` type from before, computes those types in `T` that are not in `U`:
	type ([View Highlight](https://read.readwise.io/read/01jf6ntbay2j2n527q6pqkskyh))
- `Extract<T, U>`
	Computes the types in `T` that you can assign to `U`:
	type ([View Highlight](https://read.readwise.io/read/01jf6ny0d5dewvxekwe8a8qy5z))
- `NonNullable<T>`
	Computes a version of `T` that excludes `null` and `undefined`:
	type ([View Highlight](https://read.readwise.io/read/01jf6ny9q3b4mrbbcspq5953jw))
- `ReturnType<F>`
	Computes a function’s return type (note that this doesn’t work as you’d expect for generic and overloaded functions):
	type ([View Highlight](https://read.readwise.io/read/01jf6nyqf7bdxws4x567pbr5s1))
- `InstanceType<C>`
	Computes the instance type of a class constructor:
	type ([View Highlight](https://read.readwise.io/read/01jf6nyyp4f2a31yvetv1atc07))
- Exercises ([View Highlight](https://read.readwise.io/read/01jf6pg9w9w49kh0wbd610hq11))
- Chapter 7. Handling Errors ([View Highlight](https://read.readwise.io/read/01jf6rk0mvjmrm87expyywwbn7))
