# Differences Between Interfaces and Types in TypeScript

In TypeScript, both `type` and `interface` can be used to define types, but they have different use cases and capabilities.

Typescript was superscript of the javascript.

## 🔹 What Are They?

### **Interface**

An Interface define a shpae of an object, primarily used for object type definitions and class contracts


interface User {
  name: string;
  age: number;
}

## **Type 
A type can represent of any kindy of type like: primitive, union, intersection, tuple, or even an object

Interface face have auto marging capability

like i declare same type of interface like

interface User {
 name: string
}

interface User {
age: number;
}

const user: User = {name: "shahed", age: 23} // it was can working

But type can't support like this thing but that also margeable

type Person = {
  name: string;
};

type FullPerson = Person & { age: number };

interface and type boath are support margining


## Class

Interface basiclay used to define the type class contract we can use also type but prefarable is intrface

 ## 3. Capabilities
type is more versatile. You can represent:

Unions: type Status = "success" | "error";

Tuples: type Point = [number, number];

Functions: type Log = (msg: string) => void;

interface only describes object shapes.

4. Computed Properties
Only type aliases support mapped and conditional types.


type Keys = 'a' | 'b';
type Obj = {
  [K in Keys]: number; // mapped type
};





