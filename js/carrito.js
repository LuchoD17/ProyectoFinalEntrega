let carrito = [];

function agregarAlCarrito (id) {
    const productoEncontrado = baseDeDatos.find(producto => producto.id === id);
    if (productoEncontrado != undefined) {
      const productoCarrito = carrito.find(producto => producto.id === productoEncontrado.id);
      if (!productoCarrito) {
        const productoCarrito = {...productoEncontrado};
        productoCarrito.quantity = 1;
        carrito.push(productoCarrito);
      } else {
        productoCarrito.quantity++;
      }
      localStorage.carrito = JSON.stringify(carrito);
      renderCarrito();
      document.getElementById("contCarrito").innerHTML = carrito.length;
    } else {
      console.log("No se encontró el producto en el carrito");
    }
    console.log(carrito);
    console.log(carrito.join("/n"));
  }
const reload = () => {
    location.reload()
}

const borrarProducto = (id) => {
    const indexProductoCarrito = carrito.findIndex(producto => producto.id === id);
    if (indexProductoCarrito != -1) {
      if (carrito[indexProductoCarrito].quantity > 1) {
        carrito[indexProductoCarrito].quantity--;
      } else {
        carrito.splice(indexProductoCarrito,1);
      }
      guardarCarrito();
      
    } else {
      console.log("No se encontró el producto en el carrito");
    }
    renderCarrito();
  };

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarTodo () {
  alert("Carrito vacio")
  localStorage.removeItem("carrito")
  location.reload()
}

function pagarTotal () {
  precioFinal = carrito.reduce((acc, producto) => acc += producto.price * producto.quantity, 0);
  alert("Usted pago $ " + precioFinal)
  eliminarTodo()
}

/////////////////RENDER////////////////////////

const renderCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach ((producto) => {
      console.log(producto)
      const div = document.createElement('div');
      div.classList.add('productoEnCarrito');
      div.innerHTML = `
              <p class="fs-5 fw-bolder">${producto.title}</p>
              <p class="fs-5 fw-bolder">Precio: $${producto.price}</p>
              <p class="fs-5 fw-bolder">Cantidad: ${producto.quantity}</p>
              <button type="button" class="btn btn-outline-dark mt-auto bg-opacity-75 bg-primary fw-bolder" onclick="agregarAlCarrito('${producto.id}')" >+</button>
              <button type="button" class="btn btn-outline-dark mt-auto bg-opacity-75 bg-danger fw-bolder" onclick="borrarProducto('${producto.id}')" >${producto.quantity > 1 ? '-': 'x'}</button>`
              contenedorCarrito.appendChild(div)
              
 })
            
            document.getElementById("contCarrito").innerHTML = carrito.length;
            precioFinal.innerText = carrito.reduce((acc, producto) => acc += producto.price * producto.quantity, 0);
 }

//////////////////////////////////MODAL/////////////////////////////////////////////////////////////
const contenedorCarrito = document.getElementById('carritoContenedor')
const contenedorModal = document.getElementsByClassName('contenedorModal')[0]
const botonAbrir = document.getElementById('botonCarrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modalCarrito')[0]
const pagarCarrito = document.getElementById('pagarCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
    renderCarrito()
})

botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
   // reload()
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (e)=>{
    e.stopPropagation()
})
pagarCarrito.addEventListener('click', ()=>{
  pagarTotal()
})
vaciarCarrito.addEventListener('click', ()=>{
  eliminarTodo()

})