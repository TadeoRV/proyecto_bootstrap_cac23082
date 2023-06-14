let form = document.querySelector("#form");                     //Form
let nameInput = document.querySelector("#name");                //Input Nombre
let nameSpan = document.querySelector("#nameSpan");             //Span  Nombre
let lastNameInput = document.querySelector("#lastName");        //Input Apellido
let lastNameSpan = document.querySelector("#lastNameSpan");     //Span Apellido
let mailInput = document.querySelector("#mail");                //Input Correo
let mailSpan = document.querySelector("#mailSpan");             //Span Correo
let qtyInput = document.querySelector("#qtyInput");             //Input Cantidad
let qtySpan = document.querySelector("#qtySpan");               //Span  Cantidad
let catInput = document.querySelector("#catInput");             //Input Categoría / Descuento
let catSpan = document.querySelector("#catSpan");               //Span  Categoria / Descuento
let price = document.querySelector("#price");                   //Display del Precio
let submit = document.querySelector("#submit");                 //Botón Enviar
let reset = document.querySelector("#reset");                   //Boton Reset
const unit = 200;


form.addEventListener("submit", e => {                                                          // Evento Submit
    e.preventDefault();
    calculatePrice();
})

let calculatePrice = () => {                                                                    // Llamo a funciones de validación de campos y calculo precio total si todas retornan "true"
    checkName();
    checkLastName();
    checkMail();
    checkQty();
    checkCat();
    if (checkName() && checkLastName() &&
        checkMail() && checkQty() &&
        checkCat()) {
        const totalPrice = qtyInput.value * unit * catInput.value;
        price.innerText = totalPrice;
    }
}

const emptyInput = (textInput, textSpan) => {                                                   //Función de modificacion de campos vacíos
    textSpan.innerText = `-Por favor ingrese su ${textInput.placeholder}`;
    textInput.classList.add("is-invalid");
    textInput.focus();
}

const validInput = (textInput, textSpan) => {                                                   //Función de modificación de campos válidos
    textSpan.innerText = "";
    textInput.classList.remove("is-invalid");
    textInput.classList.add("is-valid");
}

const checkName = () => {                                                                       //Validación "Nombre"
    if (nameInput.value == "") {
        emptyInput(nameInput, nameSpan);
        return false;
    } else {
        validInput(nameInput, nameSpan);
        return true;
    }
}

const checkLastName = () => {                                                                   //Validación "Apellido"
    if (lastNameInput.value == "") {
        emptyInput(lastNameInput, lastNameSpan);
        return false;
    } else {
        validInput(lastNameInput, lastNameSpan);
        return true;
    }
}


const validMail = (mail) => {                                                                   //Expresión Regular Mail (esta expresion soo verifica la existencia de "@" en medio del texto)
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
}


const checkMail = () => {                                                                       //Validación "Correo"
    if (mailInput.value != "" && !validMail(mailInput.value)) {
        emptyInput(mailInput, mailSpan);
        mailSpan.innerText = "-Por favor ingrese un mail válido";
        return false;
    } else if (mailInput.value == "") {
        emptyInput(mailInput, mailSpan);
        return false;
    } else {
        validInput(mailInput, mailSpan);
        return true;
    }
}

const checkQty = () => {                                                                       //Validacion "Cantidad"
    if (qtyInput.value <= 0 || isNaN(qtyInput.value)) {
        emptyInput(qtyInput, qtySpan)
        qtySpan.innerText = "- Por favor ingrese un número válido mayor a 0";
        price.innerText = "";
        return false;
    } else {
        validInput(qtyInput, qtySpan);
        return true;
    }
}

const checkCat = () => {                                                                      //Validación "Categoria / Descuento"
    if (catInput.value == 0) {
        emptyInput(catInput, catSpan);
        catSpan.innerText = "- Por favor seleccione su categoría";
        price.innerText = "";
        return false;
    } else {
        validInput(catInput, catSpan);
        return true;
    }
}

reset.addEventListener("click", () => {                                                         // Funciónalidad botón Reset
    let spanList = document.querySelectorAll(".form-group span")                                // Selección y Reseteo de Spans del Form
    for (let i = 0; i < spanList.length; i++) {
        spanList[i].innerText = "";
    }

    let invalidList = document.querySelectorAll(".is-invalid")                                  // Selección y Reseteo de campos inválidos del Form
    for (let i = 0; i < invalidList.length; i++) {
        invalidList[i].classList.remove("is-invalid");
        invalidList[i].innerText = "";
    }

    let validList = document.querySelectorAll(".is-valid")                                      //Selección y Reseteo de campos válidos del Form
    for (let i = 0; i < validList.length; i++) {
        validList[i].classList.remove("is-valid");
        validList[i].innerText = "";
    }
})