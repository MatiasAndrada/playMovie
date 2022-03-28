import React, {useEffect, useState} from "react";
import { getProducts } from "../mocks/fakeApiProducts";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    getProducts
      .then((res) => setProductDetail(res.find((item)=> item.id === "05")))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);
  return (
    <div>
      {cargando ? <h1>Cargando...</h1> : <ItemDetail prdt={productDetail} />}
    </div>
  );
};


export default ItemDetailContainer;