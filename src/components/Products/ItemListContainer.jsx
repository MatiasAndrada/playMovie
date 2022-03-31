import React, { useEffect, useState } from "react";
import { getProducts } from "../mocks/fakeApiProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    getProducts
      .then((res) => setProductList(res))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);
  return (
    <div>
      {cargando ? <h1>Cargando...</h1> : <ItemList productList={productList} />}
    </div>
  );
};

export default ItemListContainer;
