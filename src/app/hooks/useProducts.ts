"use client";

import { useCallback, useEffect, useState } from "react";
import { getData } from "../service/api";
import { useFiltersContext } from "../context";

function useProducts() {
  const { sizes, maxRanges, minRanges } = useFiltersContext();

  const [productsBackOld, setProductsBackOld] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    const res = await getData();
    setProductsBackOld(res);
    setProducts(res);
  }, []);

  const filterProduct = () => {
    const res = productsBackOld.filter((item: any) => {
      const resValidate =
        Number(item.price) >= Number(minRanges) &&
        Number(item.price) <= Number(maxRanges);
      if (sizes.length > 0) {
        const sizesInclub = item.size.find((itm: string) => {
          return sizes.includes(itm);
        });
        return sizesInclub && resValidate;
      }
      return resValidate;
    });

    setProducts(res);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    filterProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizes, maxRanges, minRanges]);

  return {
    products,
  };
}

export default useProducts;
