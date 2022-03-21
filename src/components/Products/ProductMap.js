import PushPrdt from "./Product";

function mapArray(dataArray) {
    const evt = dataArray;
    evt.map((product) => {
        return (
            <PushPrdt category={product.category} tipo={product.tipo} precio={product.precio} img={product.img} />
        );
    })
}
