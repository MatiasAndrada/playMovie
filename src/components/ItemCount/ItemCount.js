import React, {useState} from "react";
import { Button } from "react-bootstrap";



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
    <div className="d-flex">
    <Button className="pd-2 outline-primary" onClick={() => clickRes()}>-</Button>
    <h3>{contador}</h3>
    <Button className="primary" onClick={() => clickSum()}>+</Button>

    </div>
    )
};
export default ItemCount;