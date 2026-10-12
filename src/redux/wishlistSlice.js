import { createSlice } from "@reduxjs/toolkit";

const saved = (() => {
  try { return JSON.parse(localStorage.getItem("wishlist")) || []; } catch { return []; }
})();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { ids: saved },
  reducers: {
    toggleWishlist(state, action) {
      const id = action.payload;
      state.ids = state.ids.includes(id) ? state.ids.filter((x) => x !== id) : [...state.ids, id];
    },
    clearWishlist(state) { state.ids = []; },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
