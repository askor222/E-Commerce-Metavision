let params = new URLSearchParams(location.search);
        let idd;
        let productos = "";
        // condicion para los detalles
        if(params.get("id")){
            idd = params.get('id');
            products.forEach(item => {
                if (item.id == idd) {
                    let imagen = "";
                    let li="";
                    let ul="";
                    console.log('Encontrado el: '+idd);
                    let n = 1;
                    imagen += `<img src="${item.images[0]}" alt="${item.title}" id="imgprincipl">`; 
                    item.images.forEach(img =>{
                        if(n <= 3){
                            
                            li += `<img src="${img}" alt="${item.title}" id="a${n}" class="segunda">`;
                            console.log("imagen: "+ img);
                        }
                        n +=1;
                    });
                    console.log(new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price));
                    productos = `<div class="productoD">
                            <div class="container1">
                                ${imagen}
                            </div>
                                ${li}
                            <div class="container2">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <p class="precio">${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)}</p>
                            </div>
                        
                            <div class="compra">
                                <i class="fa fa-share-alt d" aria-hidden="true"></i>
                                <i class="fa fa-shopping-bag d" aria-hidden="true" idd="${item.id}"></i>
                            </div>
                        </div>`;

                }
            });
            
        }else{
            // condicion default
            products.forEach(item => {
            console.log(`id: ${item.id}, category: ${item.category}`);
                productos += `<div class="producto">
                    <a href="detalles.html?id=${item.id}">
                        <img src="${item.images[0]}" alt="${item.title}" class="imagen-producto">
                        <h3>${item.title}</h3>
                    </a>
                    <div class="compra">
                        <p>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)} &euro;</p>
                        <a href="comprar.html?id=${item.id}">
                            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>`;



        });
        }
        
        
        //let section = document.querySelector('section'); 
        let section = document.getElementById("principal");
        section.innerHTML = productos;
        let selectCategory = document.getElementById("category");
        let buscador = document.getElementById("buscar");

        // bucle para agregar las categorias
        for (let i = 0; i < category.length; i++) {
            let opt = category[i];
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectCategory.appendChild(el);
        }
        // para el selector de categoria
        selectCategory.addEventListener("change", function() {
            categoria = selectCategory.value;
            productos = "";
            products.forEach(item => {
                if (item.category === categoria) {
                    productos += `<div class="producto">
                    <a href="detalles.html?id=${item.id}">
                        <img src="${item.images[0]}" alt="${item.title}" class="imagen-producto">
                        <h3>${item.title}</h3>
                    </a>
                    <div class="compra">
                        <p>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)} &euro;</p>
                        <a href="comprar.html?id=${item.id}">
                            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>`;
                }
            });
            section.innerHTML = productos;
        });
        // para el buscador por palabra clave
        buscador.addEventListener("keypress", function() {
            palabra = buscador.value;
            productos = "";
            console.log("palabra para buscar: "+palabra);
            products.forEach(item => {
                if (item.title.toLowerCase().includes(palabra.toLowerCase())) { 
                    productos += `<div class="producto">
                    <a href="detalles.html?id=${item.id}">
                        <img src="${item.images[0]}" alt="${item.title}" class="imagen-producto">
                        <h3>${item.title}</h3>
                    </a>
                    <div class="compra">
                        <p>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)} &euro;</p>
                        <a href="comprar.html?id=${item.id}">
                            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>`;
                }
            });
            section.innerHTML = productos;
        });
        let precio = document.getElementById("precio");
        precio.addEventListener("click", function() {
            productos = "";

            products.sort((a, b) => a.price - b.price);
            products.forEach(item => {

                productos += `<div class="producto">
                <a href="detalles.html?id=${item.id}">
                    <img src="${item.images[0]}" alt="${item.title}" class="imagen-producto">
                    <h3>${item.title}</h3>
                </a>
                <div class="compra">
                    <p>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)} &euro;</p>
                    <a href="comprar.html?id=${item.id}">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </a>
                </div>
            </div>`;

            });
            section.innerHTML = productos;
        });
        // para las imagenes
        document.querySelectorAll(".segunda").forEach((e) => {
            e.addEventListener("click", () => {
                    console.log("esto es lo que hace "+document.getElementById(e.id).src);
                    document.getElementById("imgprincipl").src = e.src;
                });
            });