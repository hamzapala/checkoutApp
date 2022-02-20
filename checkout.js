const quantitiy1 = document.getElementsByClassName("quantity-controller")[0];
const quantitiy2 = document.getElementsByClassName("quantity-controller")[1];
const quantitiy3 = document.getElementsByClassName("quantity-controller")[2];
const removal1 = document.getElementsByClassName("remove-product")[0];
const removal2 = document.getElementsByClassName("remove-product")[1];
const removal3 = document.getElementsByClassName("remove-product")[2];
const product1 = document.getElementsByClassName("product")[0];
const product2 = document.getElementsByClassName("product")[1];
const product3 = document.getElementsByClassName("product")[2];
const subTotal = document.getElementsByClassName("buy-detail")[0];
const tax = document.getElementsByClassName("buy-detail")[1];
const shipping = document.getElementsByClassName("buy-detail")[2];
const total = document.getElementsByClassName("buy-detail")[3];
const price1 = document.getElementsByClassName("product-line-price")[0];
const price2 = document.getElementsByClassName("product-line-price")[1];
const price3 = document.getElementsByClassName("product-line-price")[2];
subTotal.children.item(1).innerText = 146.96;
shipping.children.item(1).innerText = 15;
tax.children.item(1).innerText = 26.45;
total.children.item(1).innerText = 188.41;

quantitiy1.children.item(2).addEventListener("click", ()=>{
    +(quantitiy1.children.item(1).innerText)++;
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText + 25.98).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText + 25.98*0.18).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText + 25.98*1.18).toFixed(2);
    price1.innerText = (+price1.innerText + 25.98).toFixed(2);
    
})
quantitiy1.children.item(0).addEventListener("click", ()=>{
    if ( +(quantitiy1.children.item(1).innerText) == 1) return;
    +(quantitiy1.children.item(1).innerText)--;
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText - 25.98).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText - 25.98*0.18).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText - 25.98*1.18).toFixed(2);
    price1.innerText = (+price1.innerText - 25.98).toFixed(2);
})
removal1.addEventListener("click", ()=>{
    product1.remove();
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText - price1.innerText).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText - +price1.innerText*1.18).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText - +price1.innerText*0.18).toFixed(2);
    if ((subTotal.children.item(1).innerText) == 0){
        tax.children.item(1).innerText = "0.00";
        shipping.children.item(1).innerText = "0.00";
        total.children.item(1).innerText = "0.00";
    };

})


quantitiy2.children.item(2).addEventListener("click", ()=>{
    +(quantitiy2.children.item(1).innerText)++;
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText + 45.99).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText + 45.99*0.18).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText + 45.99*1.18).toFixed(2);
    price2.innerText = (+price2.innerText + 45.99).toFixed(2);
})
quantitiy2.children.item(0).addEventListener("click", ()=>{
    if ( +(quantitiy2.children.item(1).innerText) == 1) return;
    +(quantitiy2.children.item(1).innerText)--;
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText - 45.99).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText - 45.99*0.18).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText - 45.99*1.18).toFixed(2);
    price2.innerText = (+price2.innerText - 45.99).toFixed(2);
})
removal2.addEventListener("click", ()=>{
    product2.remove();
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText - price2.innerText).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText - +price2.innerText*1.18).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText - +price2.innerText*0.18).toFixed(2);
    if ((subTotal.children.item(1).innerText) == 0){
        tax.children.item(1).innerText = "0.00";
        shipping.children.item(1).innerText = "0.00";
        total.children.item(1).innerText = "0.00";
    };
})


quantitiy3.children.item(2).addEventListener("click", ()=>{
    +(quantitiy3.children.item(1).innerText)++;
    subTotal.children.item(1).innerText = +subTotal.children.item(1).innerText + 74.99;
    tax.children.item(1).innerText = +tax.children.item(1).innerText + 74.99*0.18;
    total.children.item(1).innerText = +total.children.item(1).innerText + 74.99*1.18;
    price2.innerText = (+price2.innerText + 74.99).toFixed(2);
})
quantitiy3.children.item(0).addEventListener("click", ()=>{
    if ( +(quantitiy3.children.item(1).innerText) == 1) return;
    +(quantitiy3.children.item(1).innerText)--;
    subTotal.children.item(1).innerText = +subTotal.children.item(1).innerText - 74.99;
    tax.children.item(1).innerText = +tax.children.item(1).innerText - 74.99*0.18;
    total.children.item(1).innerText = +total.children.item(1).innerText - 74.99*1.18;
    price2.innerText = (+price2.innerText - 74.99).toFixed(2);
})
removal3.addEventListener("click", ()=>{
    product3.remove();
    subTotal.children.item(1).innerText = (+subTotal.children.item(1).innerText - price3.innerText).toFixed(2);
    total.children.item(1).innerText = (+total.children.item(1).innerText - +price3.innerText*1.18).toFixed(2);
    tax.children.item(1).innerText = (+tax.children.item(1).innerText - +price3.innerText*0.18).toFixed(2);
    if ((subTotal.children.item(1).innerText) == 0){
        tax.children.item(1).innerText = "0.00";
        shipping.children.item(1).innerText = "0.00";
        total.children.item(1).innerText = "0.00";
    };
})


