function onFormSubmit(event){
    event.preventDefault();
}

// Regresa un arreglo donde
// [0] indica true o false, si pasa la validacion o no
// [1] indica el mensaje de error o "" en caso de pasar la validacion
function validarNombre (nombre){
    if( nombre.trim().length === 0 ){
        return [false, "el nombre no puede estar vacio"];
    }
    if(nombre.trim().length < 4 || nombre.trim().length > 30){
        return [false,"el nombre debe tener entre 4 y 30 caracteres"];
    }
    return [true,""];
}

function registrar(){
    var txtNombre = document.getElementById("txtNombre").value;

    var valNombre = validarNombre(txtNombre);

    var esPosible = true;

    if(valNombre[0] === false) esPosible = false;

    var errorNombre = document.getElementById("error-Nombre");
    errorNombre.innerText = valNombre[1];

    if(esPosible){
        console.log("YES");
    }
    else {
        console.log("NO");
    }
}