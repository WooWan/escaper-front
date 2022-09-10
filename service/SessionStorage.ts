class SessionStorage {
  setStorageItem = (key: string, value: string) => {
    if (typeof window! == "undefined") return;
    const storage = window.sessionStorage;
    try {
      storage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  };

  getStorageItem = (key: string) => {
    if (typeof window! == "undefined") return;
    const storage = window.sessionStorage;
    return storage.getItem(key);
  };

  removeItem(key: string) {
    if (typeof window! == "undefined") return;
    const storage = window.sessionStorage;
    storage.removeItem(key);
  }

  static clearStorage() {
    if (typeof window! == "undefined") return;
    const storage = window.sessionStorage;
    storage.clear();
  }
}
export default SessionStorage;
