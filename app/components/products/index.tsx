import React, { useEffect, useState } from "react";

type Price = string | number;

interface IProduct {
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
  const [price, setPrice] = useState<number>(0);

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
          onChange={(e) => setPrice(e.target.value)}
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

createProduct("Product 1", 200);

function add(a: number, b: number): number {
  return a + b;
}

add(1, 3);

function sayHi(message: string): void {
  alert("Hello world" + message);
}

sayHi("from Norway");

// TODO: Create a function that accepts a number and a string and returns a string

export default Product;
