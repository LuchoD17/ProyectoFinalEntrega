//CONSTANTES/////////////////////////////////////////////////////////
if (localStorage.carrito != null) {
  carrito = JSON.parse(localStorage.carrito);
  document.getElementById("contCarrito").innerHTML = carrito.length;
}
let baseDeDatos = [];

//FUNCIONES/////////////////////////////////////////////////////////

function filtrarProductos(filtro = 'default'){
    let nuevosProductos = (filtro !== "default") ?
    baseDeDatos.filter(producto => producto.category == filtro):
    baseDeDatos;
   
    let acumulador = ``;
    nuevosProductos.forEach((producto) => { 
    acumulador += `<div class="col mb-5" id="${producto.title}">
    <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" src="${producto.img}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${producto.title}</h5>
                <!-- Product price-->
                $${producto.price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <a class="btn btn-outline-dark mt-auto bg-opacity-50 bg-danger fw-bolder" href="#" onclick="agregarAlCarrito('${producto.id}')" >Agregar producto</a>
            
            
            </div>
    </div>
</div>
</div>`
    });
    $("#productos").html(acumulador)
}

const crearProductos = () => {
    let id = document.getElementById("id").value
    let title = document.getElementById("title").value
    let price = document.getElementById("price").value
    let stock = document.getElementById("stock").value
    let img = document.getElementById("img").value
    let category = document.getElementById("category").value
    let info = JSON.parse(localStorage.getItem("producto"))
    info.push(new Producto({
        id: id,
        title: title,
        price: price,
        stock: stock,
        img: img,
        category: category,
    }))
    localStorage.setItem("producto", JSON.stringify(info))
}


//Logica/////////////////////////////////////////////////////////
if (localStorage.getItem("carrito") != null) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
}

if (localStorage.getItem("producto") != null) {
    console.log("Productos cargados");
} else {
    localStorage.setItem("producto", JSON.stringify(Producto))
}


///////// impresion funciones
filtrarProductos()

/////////////////////AJAX
$.get("js/datos.json", (resultado, status) => {
    if (status == "success") {
      baseDeDatos = resultado;
      
      let acumulador = ``;
      resultado.forEach(producto => {
        acumulador += `<div class="col mb-5" id="${producto.title}">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.img}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${producto.title}</h5>
                    <!-- Product price-->
                    $${producto.price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                <a class="btn btn-outline-dark mt-auto bg-opacity-50 bg-danger fw-bolder" href="#" onclick="agregarAlCarrito('${producto.id}')" >Agregar producto</a>
                
                
                </div>
        </div>
    </div>
    </div>`
    
    });
    $("#productos").html(acumulador);
    }
    console.log(resultado);
    console.log(status);
  })
  
  
  //////////////// FORMULARIO
  // const div = document.getElementById('formulario');
  
  // //div.innerHTML += 
  // $("#container1").append(`<form id="formulario">
  //     <input type="text" placeholder="Ingrese su nombre" id="nombre">
  //     <input type="text" placeholder="Ingrese su email" id="email">
  //     <input type="password" placeholder="Ingrese su password" id="password">
  //     <button type="submit">Enviar</button>
  //   </form>
  // `);
  // $("#formulario").submit(function(e) {
  //   e.preventDefault();
  //   let hijos = $(e.target).children();
  //   console.log (hijos[0].value);
  //   console.log (hijos[1].value);
  // });
  // let clientes = []
  // class Cliente{
  //   constructor(nombre, email, password){
  //     this.nombre = nombre;
  //     this.email = email;
  //     this.password = password;
  //   }
  // }
  // function agregarCliente(e){
  //   e.preventDefault();
  //   let nombre = document.getElementById('nombre').value;
  //   let email = document.getElementById('email').value;
  //   let password = document.getElementById('password').value;
  //   console.log(nombre);
  //   console.log(email);
  //   console.log(password);
  //   let cliente = new Cliente(nombre, email, password);
  //   clientes.push(cliente);
  
  //   let p = document.createElement('p');
  //   $("#container1").append(`${cliente.nombre} su mail es: ${cliente.email} y su contraseña: ${cliente.password}`);
  //   $("#nombre").html(p);
  //   $("#email").html(p);
  //   $("#password").html(p);
  //   div.appendChild(p)
  //   console.log(clientes)
  // }
  
  // const formulario = document.getElementById('formulario');
  //  console.log(formulario);
  //  formulario.addEventListener('submit', agregarCliente);