import Cookies, {CookieSetOptions} from "universal-cookie";

const cookie = new Cookies()

export const setCookie = (name: string, value: string | string[], option?: CookieSetOptions) => {
  return cookie.set(name, value, {path: "/"});

};

export const getCookie = (name: string): string => {
  return cookie.get(name)
};