
//Calificacion final

function CalificacionFinal (){

    //let para variables de ambito local

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let ExamenFinal = parseFloat(document.getElementById("ExamenFinal").value);
    let TrabajoFinal = parseFloat(document.getElementById("TrabajoFinal").value);

    let nota_parcial = ((n1+n2+n3)/3);

    let promedio = 0.55*(nota_parcial) + 0.3*(ExamenFinal) + 0.15*(TrabajoFinal);
    

    console.log(promedio)
    return promedio;

}