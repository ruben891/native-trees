var edad = prompt("Introduce tu edad");

// Ocultar contenido
document.getElementById("formulario").style.visibility = "hidden";


// Si es mayor de edad
if (Number(edad) == edad) {
    if (edad > 18) {
        alert("Puedes agendar tu visita");
        document.getElementById("formulario").style.visibility = "visible";
    }
} else {
    alert("Lo sentimos, eres menor de edad");
}


function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Número de días selecionados: ' + howMany(document.selectForm.agendaDiaria));
});