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
    image:
      "https://i.pinimg.com/564x/6a/99/f2/6a99f2bb67d3ae14e320ce94754a3708.jpg",
  },
  {
    product_id: 2,
    product_name: "Cola",
    price: 1.99,
    type: "drink",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/564x/ff/dc/c5/ffdcc5679b78e17fbe5775884ec391d1.jpg",
  },
  {
    product_id: 3,
    product_name: "Chocolate Cake",
    price: 15.99,
    type: "sweet",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/564x/e6/10/7c/e6107c04d71d7889409f395e2f909139.jpg",
  },
  {
    product_id: 4,
    product_name: "Burger",
    price: 8.99,
    type: "food",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/564x/9e/d0/8a/9ed08a53b37d6daf8418cc01dd46a870.jpg",
  },
  {
    product_id: 5,
    product_name: "Iced Tea",
    price: 2.49,
    type: "drink",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/736x/fd/46/7c/fd467cdd98b9a5f0213b5cd060576d1f.jpg",
  },
  {
    product_id: 6,
    product_name: "Vanilla Ice Cream",
    price: 6.99,
    type: "sweet",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/736x/7f/ec/9d/7fec9d9a0b4d65f5dcad8dae67c20909.jpg",
  },
  {
    product_id: 7,
    product_name: "Sushi",
    price: 12.99,
    type: "food",
    image:
      "https://i.pinimg.com/736x/c8/c3/e9/c8c3e99f084defa8524392811ae303d2.jpg",
  },
  {
    product_id: 8,
    product_name: "Pasta",
    price: 11.99,
    type: "food",
    image:
      "https://i.pinimg.com/736x/7c/ab/36/7cab36ae93bd94854b4b317e531eda7c.jpg",
  },
  {
    product_id: 9,
    product_name: "Salad",
    price: 7.99,
    type: "food",
    image:
      "https://i.pinimg.com/736x/92/f9/6f/92f96f1dc7bfc416c7a7983a63a2ca2e.jpg",
  },
  {
    product_id: 10,
    product_name: "Smoothie",
    price: 5.99,
    type: "drink",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/564x/17/46/c3/1746c30490f1709e96babb8e4073024b.jpg",
  },
  {
    product_id: 11,
    product_name: "Fries",
    price: 4.49,
    type: "food",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/564x/5b/7b/9b/5b7b9b01130360de7a8bd49b31176d41.jpg",
  },
  {
    product_id: 12,
    product_name: "Cupcake",
    price: 3.99,
    type: "sweet",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/736x/73/a9/94/73a994c4591f5f61d8b4937c1c1669d8.jpg",
  },
  {
    product_id: 13,
    product_name: "Burrito",
    price: 9.99,
    type: "food",
    image:
      "https://i.pinimg.com/736x/da/ec/7f/daec7f2d53330186b69fb936c9be144d.jpg",
  },
  {
    product_id: 14,
    product_name: "Hot Dog",
    price: 6.49,
    type: "food",
    image:
      "https://i.pinimg.com/736x/8e/18/91/8e18911feeece3a16943249a6f982d58.jpg",
  },
  {
    product_id: 15,
    product_name: "Milkshake",
    price: 8.99,
    type: "drink",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/736x/a6/d2/0e/a6d20e97cd2958d9ae4f88aec8a7934d.jpg",
  },
  {
    product_id: 16,
    product_name: "Tiramisu",
    price: 14.99,
    type: "sweet",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/736x/85/9c/28/859c28d8bc05dd5a48aa45196a6ae331.jpg",
  },
  {
    product_id: 17,
    product_name: "Nachos",
    price: 10.49,
    type: "food",
    image:
      "https://i.pinimg.com/736x/ca/94/3a/ca943a7a9a0e9d41101aedadf192ed8b.jpg",
  },
  {
    product_id: 18,
    product_name: "Chicken Wings",
    price: 13.99,
    type: "food",
    image:
      "https://i.pinimg.com/736x/54/e9/a9/54e9a9cf2c09ee5916492c9bb475925d.jpg",
  },
  {
    product_id: 19,
    product_name: "Popcorn",
    price: 4.99,
    type: "food",
    image:
      "https://i.pinimg.com/736x/1e/2d/90/1e2d90b72e2f6ed349bc398295d3af11.jpg",
  },
  {
    product_id: 20,
    product_name: "Lemonade",
    price: 2.99,
    type: "drink",
    size: ["medium", "large"],
    image:
      "https://i.pinimg.com/564x/f0/65/62/f06562276317f0f1ca6abf001631ba25.jpg",
  },
  {
    product_id: 21,
    product_name: "Shrimp Scampi",
    price: 16.99,
    type: "food",
    image: "https://www.pinterest.com/pin/example-shrimp-scampi.jpg",
  },
  {
    product_id: 22,
    product_name: "Cheesecake",
    price: 17.99,
    type: "sweet",
    size: ["medium", "large"],
    image: "https://www.pinterest.com/pin/example-cheesecake.jpg",
  },
  {
    product_id: 23,
    product_name: "Cappuccino",
    price: 3.49,
    type: "drink",
    size: ["medium", "large"],
    image: "https://www.pinterest.com/pin/example-cappuccino.jpg",
  },
  {
    product_id: 24,
    product_name: "Fajitas",
    price: 15.49,
    type: "food",
    image: "https://www.pinterest.com/pin/example-fajitas.jpg",
  },
  {
    product_id: 25,
    product_name: "Mango Sorbet",
    price: 7.49,
    type: "sweet",
    size: ["medium", "large"],
    image: "https://www.pinterest.com/pin/example-mango-sorbet.jpg",
  },
  {
    product_id: 26,
    product_name: "Steak",
    price: 18.99,
    type: "food",
    image: "https://www.pinterest.com/pin/example-steak.jpg",
  },
];
