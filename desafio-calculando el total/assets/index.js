precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function sumar(){
    var valor = parseInt(document.querySelector(".cantidad").innerHTML);
    valor += 1;
    document.querySelector(".cantidad").innerHTML = valor;
    calculartotal(valor);
}

function restar(){
    var valor = parseInt(document.querySelector(".cantidad").innerHTML);
    valor -= 1;
    document.querySelector(".cantidad").innerHTML = valor;
    calculartotal(valor);
}

function calculartotal(unidades){
    
    var total = precio * unidades;
    document.querySelector(".valor-total").innerHTML = total;
 
}
