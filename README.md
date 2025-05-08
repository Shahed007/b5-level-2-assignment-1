# How does TypeScript help in improving code quality and project maintainability?

Before understanding typescript imporving code qulaity and maintainability we need know fisrt what is javascript 

Simply put "TypeScript is supper set of the javascript"

Typescript ensures the type safety of code and enforces putting explicit types.

It was show the error instanlty don't need wait for the compile the code.

Typescript can show where is the error in the code properly

Also, it's built-in intellisense will suggest code so that we can avoid errors.

A bigger project typescript healp tor write clean code and predictable codes that behave always the same. This makes maintainability easier.

# explain the difference between any, unknown, and never types in TypeScript.

1. any Type : Any is a cheat code that allows us to bypass the type safety. It will allow to assign any type of value.

```
let x: any = 'Jhon';
x = true;
x = { name: 'Shahed' };
```

This will now trigger any red flag to TypeScript.

2. unknown type: The unknown type is kind of like any, but a bit safer. You can use it when you're getting data from somewhere and you're not sure what type it is.
3. never type: The TypeScript docs say it best: "never means a value that never happens." In simple terms, you use never when you're sure a function won't return anything—like when it always throws an error or crashes the program. Here's an example.

```
function printName(name: string): nvever {
  console.log(`Your name is ${name}.`);
}
```
