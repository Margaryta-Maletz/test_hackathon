import { LocalStorageKeys } from "../types/enums";

export const getStorageUserData = () => {
  const res: Record<keyof typeof LocalStorageKeys, string | null> = {
    language: null,
    name: null,
    age: null,
    teacher: null,
    answer: null,
    teacherImg: null,
  };
  Object.values(LocalStorageKeys).map((key) => {
    const val = localStorage.getItem(key);
    const propName =
      Object.keys(LocalStorageKeys)[
        Object.values(LocalStorageKeys).indexOf(key)
      ];

    if (val) {
      res[propName as keyof typeof LocalStorageKeys] = val;
    }
  });

  return res;
};
