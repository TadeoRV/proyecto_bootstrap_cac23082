let form = document.querySelector("#form");
let submit = document.querySelector("#submit");
let qtyInput = document.querySelector("#qtyInput");
let catInput = document.querySelector("#catInput");
let price = document.querySelector("#price");
let qtyErr = document.querySelector("#qtyErr");
let catErr = document.querySelector("#catErr");
let reset = document.querySelector("#reset");
const unit = 200;


form.addEventListener("submit", e => {
    e.preventDefault();
    const qty = parseInt(qtyInput.value);
    const cat = parseFloat(catInput.value);
    calculatePrice(qty, cat);
})

let calculatePrice = (qty, cat) => {
    if (qty <= 0 || isNaN(qty)) {
        qtyErr.innerText = "- Por favor ingrese un número válido mayor a 0";
        price.value = "";
    } else {
        qtyErr.innerText = "";

        if (isNaN(cat)) {
            catErr.innerText = "- Por favor seleccione su categoría";
            price.value = "";
        } else {
            catErr.innerText = "";
            const totalPrice = qty * unit * cat;
            console.log(cat)
            price.innerText = totalPrice.toFixed(2);
        }
    }
}

reset.addEventListener("click", () => {
    qtyErr.innerText = "";
    catErr.innerText = "";
})




// let qtyCheck = (qty) => {
//     while (qty.value <= 0 || isNaN(qty.value)) {
//         qtyErr.style.color = "red";
//         qtyErr.innerText = "- Por favor Ingrese un número válido mayor a 0";
//     }
//     qtyErr.innerText = "";
// }



// let qtyCheck = (qty) => {
//     if (qty.value <= 0 || isNaN(qty.value)) {
//         qtyErr.style.color = "red";
//         qtyErr.innerText = "- Por favor Ingrese un número válido mayor a 0";
//         return false
//     } else {
//         qtyErr.innerText = "";
//     }
// }



// let qtyCheck = (qty) => {
//     if (qty.value <= 0 || isNaN(qty.value)) {
//         if (qtyLabel.children.length === 0) {
//             qtySpan.innerText = "- Por favor ingrese un número válido mayor a 0"
//             qtySpan.style.color = "red";
//             qtyLabel.appendChild(qtySpan);
//         }
//     } else {
//         if (qtyLabel.children.length === 1) { qtyLabel.removeChild(qtySpan) };
//     }
// }

// let qtyCheck = (qty) => {
//     if (qty.value > 0 && !isNaN(qty.value)) {
//         console.log(qty.value);
//         qtyLabel.removeChild(qtySpan);
//     } else {
//         if (qtyLabel.children.length === 0) {
//             var qtySpan = document.createElement("span");
//             qtySpan.innerText = "- Por favor ingrese un número válido mayor a 0"
//             qtySpan.style.color = "red";
//             qtyLabel.appendChild(qtySpan);
//         }

//     }
// }