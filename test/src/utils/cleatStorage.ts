import { LocalStorageKeys } from "../types/enums";

export const clearStorage = () => {
  Object.values(LocalStorageKeys).forEach((key) => {
    localStorage.removeItem(key);
  });
};
