import { IProduct, Price } from "./index";

function createProduct(title: string, price: Price): IProduct {
  return {
    title: title,
    description: `This product is called ${title}`,
    price: price,
  };
}

createProduct("Product 1", 200);

function add(a: number, b: number): number {
  return a + b;
}

add(1, 3);

function sayHi(message: string): void {
  alert("Hello world" + message);
}

// TODO: Create a function that accepts a number and a string and returns a string
