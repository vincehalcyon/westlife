import { create } from "zustand";
const useCookieBarStore = create((set) => ({
  showCookieBar: false,
  setShowCookieBar: (value) => set({ showCookieBar: value }),
}));

export default useCookieBarStore;