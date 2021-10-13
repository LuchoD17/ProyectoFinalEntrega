//////////// MODAL
const contenedorModal = document.getElementsByClassName('contenedorModal')[0]
const botonAbrir = document.getElementById('botonCarrito')
const botonCerrar = document.getElementById('borrarProducto')
const modalCarrito = document.getElementsByClassName('modalCarrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (e)=>{
    e.stopPropagation()
})
