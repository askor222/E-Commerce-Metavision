console.log(carrito.length);
document.querySelectorAll(".fa-shopping-bag").forEach((e) => {
    e.addEventListener("click", () => {
            console.log("click en "+e.id+" - "+ e.dataset.id);
            carrito.push(e.dataset.id);
            console.log("mi cariito tiene " + carrito.length);
            let carritoCompra = document.getElementById("cartId");
            carritoCompra.innerHTML=carrito.length;
        });
    });
