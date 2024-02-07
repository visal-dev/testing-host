import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from "../utils/data";

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  cart: CartItem[];
  subtotal: number;
  totalUSD: number;
  totalKhmerRiels: number;
  formattedTotalKhmerRiels: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface AddToCartWithSizePayload {
  product: Product;
  size: string[];
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  cart: [],
  subtotal: 0,
  totalUSD: 0,
  totalKhmerRiels: 0,
  formattedTotalKhmerRiels: "KHR 0.00",
};

const findCartItemIndex = (cartItems: CartItem[], product: Product): number => {
  return cartItems.findIndex(
    (item) => item.product.product_id === product.product_id
  );
};

const roundToTwoDecimalPlaces = (value: number): number => {
  return Math.round(value * 100) / 100;
};

const conversionRate = 4100;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const existingItemIndex = findCartItemIndex(state.cart, productToAdd);

      if (existingItemIndex !== -1) {
        // If item is already in the cart, update quantity
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // If item is not in the cart, add it with quantity 1
        state.cart.push({
          product: { ...productToAdd },
          quantity: 1,
        });
      }

      // Recalculate individual item prices
      state.cart.forEach((item) => {
        item.product.price =
          item.product.product_id === productToAdd.product_id
            ? productToAdd.price * item.quantity
            : item.product.price;

        item.product.price = roundToTwoDecimalPlaces(item.product.price);
      });

      // Recalculate subtotal
      state.subtotal = state.cart.reduce((total, item) => {
        return total + item.product.price;
      }, 0);

      state.subtotal = roundToTwoDecimalPlaces(state.subtotal);
    },

    addToCartWithSize: (
      state,
      action: PayloadAction<AddToCartWithSizePayload>
    ) => {
      const { product, size } = action.payload;
      const existingItemIndex = findCartItemIndex(state.cart, product);

      if (existingItemIndex !== -1) {
        // If item is already in the cart, update quantity
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // If item is not in the cart, add it with quantity 1
        state.cart.push({
          product: { ...product },
          quantity: 1,
        });
      }

      // Recalculate individual item prices
      state.cart.forEach((item) => {
        item.product.price =
          item.product.product_id === product.product_id
            ? product.price * item.quantity
            : item.product.price;

        item.product.price = roundToTwoDecimalPlaces(item.product.price);
      });

      // Recalculate subtotal
      state.subtotal = state.cart.reduce((total, item) => {
        return total + item.product.price;
      }, 0);

      state.subtotal = roundToTwoDecimalPlaces(state.subtotal);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const cartItem = state.cart.find(
        (item) => item.product.product_id === productId
      );

      if (cartItem) {
        cartItem.quantity += 1;

        // Recalculate individual item prices
        cartItem.product.price = roundToTwoDecimalPlaces(
          cartItem.product.price / (cartItem.quantity - 1)
        );
        cartItem.product.price *= cartItem.quantity;
        cartItem.product.price = roundToTwoDecimalPlaces(
          cartItem.product.price
        );

        // Recalculate subtotal
        state.subtotal = state.cart.reduce((total, item) => {
          return total + item.product.price;
        }, 0);

        state.subtotal = roundToTwoDecimalPlaces(state.subtotal);
      }
      // Dispatch updateLocalStorage action to update local storage
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const cartItem = state.cart.find(
        (item) => item.product.product_id === productId
      );

      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;

          // Recalculate individual item prices
          cartItem.product.price = roundToTwoDecimalPlaces(
            cartItem.product.price / (cartItem.quantity + 1)
          );
          cartItem.product.price *= cartItem.quantity;
          cartItem.product.price = roundToTwoDecimalPlaces(
            cartItem.product.price
          );

          // Recalculate subtotal
          state.subtotal = state.cart.reduce((total, item) => {
            return total + item.product.price;
          }, 0);

          state.subtotal = roundToTwoDecimalPlaces(state.subtotal);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (item) => item.product.product_id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    // Calculate Total in USD
    calculateTotalUSD: (state) => {
      state.totalUSD = roundToTwoDecimalPlaces(state.subtotal); // Assuming no conversion rate for now
    },
    // Calculate Total in Khmer Riels
    calculateTotalKhmerRiels: (state) => {
      // Assuming you have the conversionRate available in your state
      const totalKhmerRiels = state.totalUSD * conversionRate;

      // Format the total in Khmer Riels with commas
      const formattedTotalKhmerRiels = totalKhmerRiels.toLocaleString("en-US", {
        style: "currency",
        currency: "KHR",
      });

      // Update the state with the formatted total in Khmer Riels
      state.formattedTotalKhmerRiels = formattedTotalKhmerRiels;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  addToCart,
  removeFromCart,
  clearCart,
  calculateTotalUSD,
  calculateTotalKhmerRiels,
  decreaseQuantity,
  increaseQuantity,
  addToCartWithSize,
} = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
