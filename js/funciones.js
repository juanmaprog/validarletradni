var sDni = prompt('Introduce el DNI.');

//Validación
if (sDni.length !=9){
    console.log('El dni introducido no es válido.');    
}

var numeroDni = sDni.substring(0,8);
var letraDni = sDni.substring(8,9).toUpperCase();

var letraResult = getLetraDni(numeroDni);

if(letraResult != letraDni){
    console.log('Letra incorrecta. Debe ser', letraResult);
}
else{    
    console.log('Letra correcta.');
}

function getLetraDni(numeroDni){  
    var letras = "TRWAGMYFPDXBNJZSQVHLCKET";

    var index = numeroDni % 23;

    var result = letras.substring(index, index+1);

    return result.toUpperCase();
}