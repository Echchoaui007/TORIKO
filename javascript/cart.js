let cart = document.querySelector('.cart')
let total = cart.querySelector('h2')
function showCart() {
    cart.classList.toggle('cart-hidden')
}


document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('cart') ) {

        if (!cart.classList.contains('cart-hidden')) {
            cart.classList.toggle('cart-hidden')
        }
    }
    if (e.target.classList.contains('add-cart')) {
        let box = e.target.parentNode.parentNode
        let cartItem = box.cloneNode(true)
        cartItem.querySelector(".add-cart").remove()

        cart.appendChild(cartItem)
        total.innerText=eval(`${total.innerText}+${cartItem.querySelector('section').innerText}`)
        
    }
    if(e.target.id=="show-cart"){
        showCart()
    }
})