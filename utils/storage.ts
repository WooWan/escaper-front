export const setStorageItem = (key: string, value: string) => {
  const storage = window.sessionStorage;
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getStorageItem = (key: string) => {
  const storage = window.sessionStorage;
  const storedValue = storage.getItem(key);
  return storedValue ? storedValue : "default";
};
