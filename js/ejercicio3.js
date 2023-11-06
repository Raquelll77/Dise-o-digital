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

