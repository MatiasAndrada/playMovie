class producto {
    constructor(array){
        this.pushCard(array)
    }
    
    
    pushCard(array){
        for (const p of array){
            $("#prdt").append(`
            <div class="col">
            <div class="card" >
                <img class="card-img-top img fluid" src="${p.img}" alt="Card imagen"
                <div class="card-block">
                    <h3 class="card-title fs-3 text-center"> ${p.tipo} </h3>
                    <b class="fw-bold p-2 text-center price">${p.precio} </b>
                    <button onClick="searchButtons();" class="item-button addToCart btn">+</button>
                <div>
                <div>
            <div>`)
            }
    }
}

//Agregar un header a la card con .card-header cuando este en el carrito 
