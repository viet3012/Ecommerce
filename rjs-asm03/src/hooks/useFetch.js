import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  async function fetchProducts() {
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return data;
};

export default useFetch;
