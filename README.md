# Differences Between Interfaces and Types in TypeScript

In TypeScript, both `type` and `interface` can be used to define types, but they have different use cases and capabilities.

## 1. Extending Other Types

Both `interface` and `type` can extend other interfaces or types. Here's an example:

```typescript
interface A {
  a: string;
}
interface B extends A {
  b: number;
}

// Using type
type C = { c: boolean };
type D = C & { d: number };


write this readme file properly # Differences between interfaces and types in TypeScript

We can use type and interfaces for decleare type but thay have deffrente use case type ca

Extending Other Types
Both interface and type can extend other interfaces or types:

interface A { a: string }
interface B extends A { b: number }

type C = { c: boolean }
type D = C & { d: number }

greet();

Intreface can not support unions like primitives, and tuples.
Example:

type Status = "MD" | "Shahed";


2. Interfaces Do Not Support Unions
Unlike type, interface cannot represent unions, such as primitives or tuples. Here's an example:

type Status = "MD" | "Shahed";

```
