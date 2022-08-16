export const setStorageItem = (key: string, value: string) => {
  const storage = window.localStorage;
  try {
    storage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};
