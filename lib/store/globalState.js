import { create } from "zustand";
export default create(() => ({
  showLazy: false,
  formSuccessInfo: false,
  captcha: {},
}));
