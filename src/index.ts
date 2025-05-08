// ================ Problem 1 ============ //

function formatString(input: string, toUpper?: boolean): string {
  return toUpper == undefined || toUpper
    ? input.toUpperCase()
    : input.toLowerCase();
}

// =============== Problem 2 =========== //

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// ========== Problem 3 ============= //

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  arrays.forEach((array) => result.push(...array));
  return result;
}

// ======== Problem 4 =============//

class Vehicle {
  make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// ======== Problem 5 =============//

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

// ======== Problem 6 =============//
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensive = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }
  }

  return mostExpensive;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// ======== Problem 7 =============//
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Sunday ? "Weekend" : "Weekday";
}

// ======== Problem 8 =============//
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0) {
        resolve(n * n);
      } else {
        reject(new Error("Negative number not allowed"));
      }
    }, 1000);
  });
}


