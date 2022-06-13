import httpConfig from "./httpConfig";

export const apiTest = () => {
  return httpConfig("http://localhost:3000/test.json", "GET");
};
