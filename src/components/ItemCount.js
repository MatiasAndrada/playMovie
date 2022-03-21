import React, {useState, useEffect} from "react";



const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(initial);
    
    const clickSum = () => {
        if (contador === stock){
            return;
        }
        setContador(contador + 1);
    }
    const clickRes = () => {
        if (contador === 0){
            return;
        }
        setContador(contador - 1);
    }

    return (
    <div>
        <h3>Cantidad de Items</h3>
        <h1>{contador}</h1>
    <button onClick={() => clickRes()}>Restar 1</button>
    <button onClick={() => clickSum()}>Sumar 1</button>

    </div>
    )
};
export default ItemCount;