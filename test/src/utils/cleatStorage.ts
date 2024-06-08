import { LocalStorageKeys } from "../types/enums";

export const clearStorage = () => {
  Object.keys(LocalStorageKeys).forEach((key) => {
    localStorage.removeItem(key);
  });
};
