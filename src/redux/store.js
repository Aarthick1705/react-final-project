import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({ reducer: { wishlist: wishlistReducer } });

store.subscribe(() => {
  localStorage.setItem("wishlist", JSON.stringify(store.getState().wishlist.ids));
});
