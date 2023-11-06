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