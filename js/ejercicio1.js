
const cadena = " una cadena primitiva "

function contarPalabras(texto){
let cadena = texto.trim()
    let i = 0, cont = 1;
    while (i < cadena.length) {
        if (cadena[i]==" ") {
        cont++
        }
        i++;   
    }
    console.log(cont)
}
contarPalabras(cadena)



