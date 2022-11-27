const products = Array.from(document.querySelectorAll(".product"));
const cartProducts = document.querySelector(".cart__products");
let cartProduct = Array.from(cartProducts.querySelectorAll(".cart__product"));


products.forEach(product => {
    const productPlus = product.querySelector(".product__quantity-control_inc");
    const productMinus = product.querySelector(".product__quantity-control_dec");
    const productAdd = product.querySelector(".product__add");
    let count = +(product.querySelector(".product__quantity-value").textContent);
    productPlus.addEventListener("click", (event) => {
        count++;
        product.querySelector(".product__quantity-value").textContent = count;
    });
    productMinus.addEventListener("click", (event) => {
        if (count > 1) {
            count--;
            product.querySelector(".product__quantity-value").textContent = count
        }
    });
    productAdd.addEventListener("click", (event) => {
        cartProduct = Array.from(cartProducts.querySelectorAll(".cart__product"));
        let isBasketElem = cartProduct.findIndex(basketElem => basketElem.dataset.id === product.dataset.id);
        if(isBasketElem === -1) {
            cartProducts.insertAdjacentHTML("afterbegin", `
            <div class="cart__product" data-id=${product.dataset.id}>
                <img class="cart__product-image" src=${product.querySelector("img").getAttribute("src")}>
                <div class="cart__product-count">${count}</div>
            </div>
            `);
        } else {
            let basketElemCount = +(cartProduct[isBasketElem].querySelector(".cart__product-count").textContent);
            basketElemCount += count;
            cartProduct[isBasketElem].querySelector(".cart__product-count").textContent = basketElemCount;
        }
    });
});