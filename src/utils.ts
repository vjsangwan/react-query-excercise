export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchData = async (endUrl: string) => {
  const response = await fetch(`${BASE_URL}${endUrl}`);
  const res = await response.json();
  return res;
};
