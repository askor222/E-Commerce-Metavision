let params = new URLSearchParams(location.search);
        let idd;
        let productos = "";
        // condicion para los detalles
        if(params.get("id")){
            idd = params.get('id');
            products.forEach(item => {
                if (item.id == idd) {
                    let imagen = "";
                    console.log('Encontrado el: '+idd);
                    item.images.forEach(img =>{
                        imagen += '<img src="'+img+'" />';
                        console.log("imagen: "+ img);
                    });
                    productos = `<div>
                                        <img src="${item.images[0]}" />
                                        ${imagen}
                                        <h2>${item.title}</h2>
                                        <p>${item.description}</p>
                                    </div>`;
                        /*
                    productos = '<div>'+
                        '<img src="'+item.images[0]+'" />'+
                        imagen +
                        '<h2>'+item.title+'</h2>'+
                        '<p>'+item.description+'</p>'+
                        '</div>';
                        */
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
                        <p>${item.price} &euro;</p>
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
                        <p>${item.price} &euro;</p>
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
                        <p>${item.price} &euro;</p>
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
                    <p>${item.price} &euro;</p>
                    <a href="comprar.html?id=${item.id}">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    </a>
                </div>
            </div>`;

            });
            section.innerHTML = productos;
        });