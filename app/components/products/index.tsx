"use client";

import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";

export type Price = string | number;

export interface IProduct {
  /** Name of a product
   */
  title: string;
  description: string;
  price: Price;
  children?: React.ReactNode;
}

interface IProductsAPI {
  count: number;
  products: IProduct[];
}

/**
 * Renders a product component.
 *
 * @param {IProduct} props - The props for the product component.
 * @param {string} props.title - The title of the product.
 * @param {string} props.description - The description of the product.
 * @param {number} props.price - The price of the product.
 * @param {React.ReactNode} props.children - The children elements of the product component.
 * @returns {React.ReactElement} The rendered product component.
 */
function Product({
  title,
  description,
  price,
  children,
}: IProduct): React.ReactElement {
  const [isInStock, setIsInStock] = useState<boolean>(false);

  return (
    <div>
      <div>
        <FaBeer />
        {title} - {description} - {price}
      </div>
      <span>{isInStock ? "Get now" : "try again later"}</span>
      <div>{children}</div>
    </div>
  );
}

function ProductSection() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined | null>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products");
        const data = await res.json();
        setProducts(data);
        // NOTE: Because error can be any or unknown we need a hack to handle its type
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return "something went wrong";
  }

  return (
    <section>
      <Product title="Product 1" description="Description 1" price={100}>
        Hello World
      </Product>

      {products.map((product) => (
        <>
          <span key={product.title}>{product.title}</span>
          <Product {...product} />
        </>
      ))}
    </section>
  );
}

function NewProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // NOTE: This would be some sort of API call
    createProduct(title, price);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          value={price.toString()}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>

      <input type="submit" value="Create Product" />
    </form>
  );
}

function createProduct(title: string, price: Price): IProduct {
  return {
    title: title,
    description: `This product is called ${title}`,
    price: price,
  };
}

// TODO: Create a function that accepts a number and a string and returns a string

export default Product;
