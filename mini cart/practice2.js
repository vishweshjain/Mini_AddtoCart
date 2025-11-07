let products = [

    {id: 1, product: "Tshirt",price: 1200, image:"./images/Product3.jpeg"},
    {id: 2, product: "shirt",price: 1000, image:"./images/Product2.webp"},
    {id: 3, product: "Jeans",price: 1600, image:"./images/Product4.webp"},
    {id: 4, product: "Shoes",price: 1200, image:"./images/Product1.jpg"},
    {id: 5, product: "Cap",price: 400, image:"./images/Product5.jpeg"},



]

let cart = []
let discount = 20;

function addCart(id){
    let product = products.find(p => p.id == id)
    // console.log(product)
    
    if(product){
        let cartItem = cart.find(c =>c.id == id)
        if(cartItem){
            cartItem.qauntity += 1
        }else{
            cart.push({...product, qauntity:1})
        }
        return cart
    } else {
        return "product not found"
    }
    
}

function removeCart(id){
        let product = products.find(p => p.id == id)

    
    if(product){
        let cartItem = cart.find(c =>c.id == id)

        if(cartItem){
            if(cartItem.qauntity > 1){
                cartItem.qauntity -= 1
            } else{
                cart = cart.filter(c =>c.id !== id)
            }
            
        }else{
            cart.pop({...product, qauntity:1})
        }
        return cart
    } else {
        return "product not found"
    }

}


//for total bill
function calculate(discount){

    let total = 0
    cart.forEach(items => {
        total += items.price * items.qauntity - (items.price * items.qauntity * discount/100)
    })
    return total 
}



//render data into product section
function renderProducts() {
    let grid = document.querySelector(".grid");
    grid.innerHTML = ""; // clear old content

    products.forEach(p => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${p.image}" alt="${p.product}">
            <span>${p.product}</span>
            <span>Rs.${p.price}</span>
            <button> Add To Cart</button>
            <div class="quantity-controls">
                <button class="inc">+</button>
                <button class="dec">-</button>
            </div>
            
        `;

        let btn = div.querySelector("button");
             btn.addEventListener("click", () => {
            addCart(p.id);
            renderCart();
        });

                   // ✅ increase button
        div.querySelector(".inc").addEventListener("click", () => {
            addCart(p.id);
            renderCart();
        });


        // // ✅ decrease button
        div.querySelector(".dec").addEventListener("click", () => {
            removeCart(p.id);
            renderCart();
        });

        grid.appendChild(div);
    });

}


//render data into cart section
function renderCart() {
    
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    
    cartContainer.innerHTML = "";


    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty</p>";
        cartTotal.textContent = "Rs.0";
        return;
    }

    
    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <span>${item.product}</span>
            <span>Rs.${item.price} × ${item.qauntity}</span>
            <span>= Rs.${item.price * item.qauntity}</span>
            
           
        `;

        cartContainer.appendChild(div);
    });

    
    // ✅ Gross total (before discount)
    let grossTotal = cart.reduce((sum, item) => sum + item.price * item.qauntity, 0);

    // ✅ Net total (after discount)
    let netTotal = calculate(discount);

    // ✅ Show both
    cartTotal.innerHTML = `
        <p>Total: Rs.${grossTotal}</p>
        <p>After ${discount}% off: Rs.${netTotal}</p>`;

}



renderProducts();
renderCart()


// console.log(addCart(1))
// console.log(addCart(1))
// console.log(addCart(3))
// console.log(addCart(4))
// console.log("total price (inc. disc.):" ,calculate(20) )
// console.log(removeCart(1))
// console.log(removeCart(1))
// console.log(removeCart(3))
// console.log(removeCart(4))
// console.log(addCart(1))
// console.log(addCart(3))
// console.log(addCart(3))
// console.log(addCart(3))
// console.log("total price (inc. disc.):" ,calculate(20) )
// console.log("total price (inc. disc.):" ,calculate(20) )
// console.log("total price (inc. disc.):" ,calculate(2) )
// console.log("total price (inc. disc.):" ,calculate(0) )








// console.log("total price :" ,cal(20))

// console.log(removeCart(3))
// console.log("total price :" ,calculate(10))

// console.log(removeCart(1))
// console.log("total price :" ,calculate())
// // console.log(addCart(3))
// console.log(addCart(2))
// console.log(removeCart(1))


//for products
// function cal(discount){

//     let total = 0
//     cart.forEach(items => {
//         total += items.price * items.qauntity - (items.price * discount/100)
//     })
//     return total 
// }

// console.log(calculate())



