---
title: Understanding Subtype & Supertype Relationships in TypeScript
date created: 2024-11-11T13:31:59-07:00
date modified: 2024-12-15T18:53:47-07:00
---
# Understanding Subtype & Supertype Relationships in TypeScript

In TypeScript, understanding subtype and supertype relationships is essential for creating clean, robust, and reusable code. These relationships shape how TypeScript handles type compatibility, allowing us to leverage TypeScript’s type system to create safer code without sacrificing flexibility. Here’s a detailed overview of what subtypes and supertypes are, how they work in TypeScript, and how to use them effectively in your projects.

## What Are Subtypes and Supertypes?

In type theory:
- **Subtype**: A subtype is a type that can be safely substituted wherever its supertype is expected. Subtypes typically add specific details or constraints to a broader concept, which means they adhere to the properties of their supertypes.
- **Supertype**: A supertype is a more general type, which can encompass multiple subtypes. Any instance of a subtype is also an instance of the supertype, but the reverse is not necessarily true.

TypeScript’s type compatibility is based on **structural subtyping** (also known as duck typing). This means that TypeScript doesn’t rely on explicit inheritance or interface implementation to establish subtype relationships—instead, it checks the structure (i.e., properties and methods) of the types.

## Type Compatibility in TypeScript

In TypeScript, type compatibility between subtypes and supertypes is determined by structural typing, which ensures that a type is compatible with another if it has at least the required structure.

Let’s take an example to illustrate structural typing in TypeScript:

```typescript
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  bark: () => void;
};

const dog: Dog = { name: "Buddy", bark: () => console.log("Woof!") };
const animal: Animal = dog; // ✅ Compatible
```

In this example:
- `Dog` is a **subtype** of `Animal` because it has all properties of `Animal` (`name`) and an additional property (`bark`).
- `Animal` is a **supertype** of `Dog`.

Since `Dog` has all properties required by `Animal`, TypeScript allows `Dog` to be assigned to an `Animal` type.

## Rules of Subtype and Supertype Relationships

1. **Subtype extends Supertype Properties**: A type with more properties is considered a subtype, while the one with fewer properties is a supertype.
2. **Compatibility Requires a Match**: Type compatibility works if the subtype has all properties of the supertype.

Here's a practical look at a few scenarios:

```typescript
type Vehicle = {
  brand: string;
  wheels: number;
};

type Car = {
  brand: string;
  wheels: number;
  airbags: boolean;
};

const car: Car = { brand: "Toyota", wheels: 4, airbags: true };
const vehicle: Vehicle = car; // ✅ Compatible
const anotherVehicle: Vehicle = { brand: "Ford", wheels: 4 }; // ✅ Also compatible
```

## Variance in TypeScript: Covariance and Contravariance

In addition to simple subtype-supertype relations, TypeScript’s type system supports **variance**:

- **Covariance**: A type relationship where subtypes are allowed to replace supertypes. This is common with function return types.
- **Contravariance**: A relationship where supertypes can replace subtypes. Contravariance typically applies to function parameter types.

## Understanding Covariance and Contravariance

Before diving into how these terms apply in TypeScript, let’s start with what they mean in a broader sense. **Covariance** and **Contravariance** describe how relationships between types (or categories) change when they’re transformed. These transformations can help ensure flexibility and safety when working with different types that relate to one another.

### Definitions Outside the Scope of TypeScript

1. **Covariance**: Covariance describes a relationship where one type maintains a consistent direction when it changes. For example, if `Dog` is a subtype of `Animal`, then an array of `Dog` can be treated as an array of `Animal` under covariance. In general, covariance allows substituting a more specific type where a general type is expected.

	 *Imagine a set of cups of different sizes. If we add water in equal amounts to each cup, the water level rises proportionally in each cup—moving in the same direction, hence "co" in covariance.*

2. **Contravariance**: Contravariance is essentially the opposite: it allows substituting a broader type where a more specific one is expected. For example, if we can use an `Animal` handler function in place of a `Dog` handler function, we are dealing with contravariance. Here, the function doesn’t care about handling any specific animal, so it’s safe to allow a more general handler where a specific one might be expected.

	 *Using the cups analogy again, if instead of adding water, we imagine pouring from different sized cups into the same container, the resulting amount will vary based on the cup’s size but contribute to the same total volume—moving in an opposite direction to achieve the same purpose.*

### Why These Terms Are Used in Type Theory

In type theory and programming, these terms are used to express **type compatibility**—how subtypes relate to supertypes in different contexts, such as function return types and parameter types.

- **Covariance** allows a more specific type to substitute a more general one, following the direction of inheritance.
- **Contravariance** allows a more general type to substitute where a specific one is expected, going in the opposite direction of inheritance.

### Covariance and Contravariance in TypeScript

In TypeScript, these principles allow flexible handling of type relationships while ensuring that types remain safe and compatible. Here’s how it looks in practice:

- **Covariance**: Used with function return types. TypeScript lets you return a subtype where a supertype is expected.

	```typescript
  type Animal = { name: string };
  type Dog = { name: string; bark: () => void };

  function getAnimal(): Animal {
    return { name: "Generic Animal" };
  }

  function getDog(): Dog {
    return { name: "Buddy", bark: () => console.log("Woof!") };
  }

  let animalGetter: () => Animal = getDog; // ✅ Compatible due to covariance
  ```

	Here, `getDog` is allowed as a `() => Animal` because `Dog` is a subtype of `Animal`. This is safe because `Dog` includes everything `Animal` requires.

- **Contravariance**: Used with function parameters. TypeScript lets you pass a supertype where a subtype parameter is expected.

	```typescript
  type Animal = { name: string };
  type Dog = { name: string; bark: () => void };

  function handleDog(dog: Dog) {
    dog.bark();
  }

  let handleAnimal: (animal: Animal) => void = handleDog; // ✅ Compatible due to contravariance
  ```

	In this case, `handleAnimal` can use `handleDog` because `handleDog` can safely accept any `Animal`, even though it’s designed for `Dog`. This works because `Dog` has everything that `Animal` has, so TypeScript allows substituting the supertype `Animal` for the specific subtype `Dog`.

By grasping these principles of **covariance** and **contravariance**, you can better understand how TypeScript manages type compatibility, enabling you to design flexible, type-safe functions that can handle different yet related types.

### Covariance Example

With covariance, a subtype can be used as the return type where a supertype is expected.

```typescript
type Animal = { name: string };
type Dog = { name: string; bark: () => void };

function getAnimal(): Animal {
  return { name: "Generic Animal" };
}

function getDog(): Dog {
  return { name: "Buddy", bark: () => console.log("Woof!") };
}

let animalGetter: () => Animal = getDog; // ✅ Compatible due to covariance
```

### Contravariance Example

Contravariance allows us to pass a supertype where a subtype parameter is expected:

```typescript
type PrintName = (animal: Animal) => void;
const printDogName: PrintName = (dog: Dog) => console.log(dog.name); // ✅ Compatible due to contravariance
```

## Practical Use Cases of Subtypes and Supertypes in TypeScript

Subtype and supertype relationships are crucial in several real-world scenarios in TypeScript:

1. **API Design**: Using a supertype for a function parameter allows us to pass any subtype object, making the function more flexible.
2. **Polymorphism**: Subtype-supertype relationships enable polymorphism in TypeScript. A base type can represent any subtype, allowing you to handle multiple data structures using the same interface or function.
3. **Code Reusability**: Supertype abstraction allows for generalized handling of data, making code more reusable across various use cases.

## Key Takeaways

- **Subtype**: More specific; has all properties of its supertype.
- **Supertype**: More general; compatible with any subtype containing at least the same properties.
- **Structural Typing**: TypeScript checks structure, not explicit inheritance, for type compatibility.
- **Covariance and Contravariance**: Allow flexibility in function returns and parameters.

Understanding subtype and supertype relationships helps you to build scalable, reusable, and robust TypeScript applications that are safe and flexible.
