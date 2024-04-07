import { create } from "zustand";
import { data } from "@/data.json";

export const globalStore = create((set, get) => {
  const allProducts = data.products;
  const phone = allProducts.filter((product) => product.type === "phone");
  const accessories = allProducts.filter((product) => product.type === "accessories");
  const tablet = allProducts.filter((product) => product.type === "tablet");
  const tv = allProducts.filter((product) => product.type === "tv");

  const hotToday = [...phone.slice(0, 3), ...phone.slice(5, 6)];
  const mixDataCard = [
    ...accessories,
    ...tablet.slice(3, 5),
    ...phone.slice(7, 8)
  ];
  const singleProductCheckout = []

  return {
    allProducts,
    phone,
    accessories,
    tablet,
    tv,
    mixDataCard,
    hotToday,
    singleProductCheckout,
    updateSingleProductCheckout: (product) => {
      const currentState = get();
      const updatedCheckout = [product];
      console.log("Updated singleProductCheckout:", updatedCheckout);
      set({ ...currentState, singleProductCheckout: updatedCheckout });
      return updatedCheckout;
    },
  };
});
