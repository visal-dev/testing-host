// utils/data.ts
export interface Product {
  product_id: number;
  product_name: string;
  price: number;
  type: string;
  size?: string[] | undefined; // Update to use an array of sizes
  image: string;
}
export const productsData: Product[] = [
  {
    product_id: 1,
    product_name: "Cheese Pizza Chicken Megahgh",
    price: 10.99,
    type: "food",
    image: "food-1.png",
  },
  {
    product_id: 2,
    product_name: "Cola",
    price: 1.99,
    type: "drink",
    size: ["medium", "large"],
    image: "no-image.jpg",
  },
  {
    product_id: 3,
    product_name: "Chocolate Cake",
    price: 15.99,
    type: "sweet",
    size: ["medium", "large"],
    image: "no-image.jpg",
  },
  {
    product_id: 4,
    product_name: "Burger",
    price: 8.99,
    type: "food",
    size: ["medium", "large"],
    image: "no-image.jpg",
  },
  {
    product_id: 5,
    product_name: "Iced Tea",
    price: 2.49,
    type: "drink",
    size: ["medium", "large"],
    image: "no-image.jpg",
  },
  {
    product_id: 6,
    product_name: "Vanilla Ice Cream",
    price: 6.99,
    type: "sweet",
    size: ["medium", "large"],
    image: "no-image.jpg",
  },
];
