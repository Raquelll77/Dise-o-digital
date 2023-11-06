
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

const estudiantes = [{nombre: "Juan",notas: [98, 96, 87, 88],},{nombre: "María",notas:
[94, 95, 86, 87]}];

console.log(estudiantes)
function calcularPromedio(estudiantes){
    let estudiantes2= []
    for(let i = 0; i < estudiantes.length; i++){
        let promedio=0, n_notas=0
        for(let j = 0; j < estudiantes[i].notas.length; j++)
        {promedio = promedio + estudiantes[i].notas[j]
            n_notas++  
        }
        estudiantes2.push({nombre: estudiantes[i].nombre, promedio: promedio/n_notas})
}
        console.log(estudiantes2)
    }

calcularPromedio(estudiantes)

const numeros = [1,2,3,4,3,3,4,5,6,7,2,6,5]



function encontrarDuplicados(numeros) {
    let duplicado= []
    for (let i = 0; i < numeros.length; i++) {
        let cont = 0
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                cont++
            }
        }
        if (cont > 1 && !duplicado.includes(numeros[i])) {
            duplicado.push(numeros[i]);
        }
    }
    console.log (duplicado);
}

encontrarDuplicados(numeros)




