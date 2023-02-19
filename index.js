function validaForm(){
    // Recorremos inputs del formulario
    const formulario = document.getElementById('miFormulario');
    const camposInput = formulario.querySelectorAll("input");
    let controlError = true;

    for(var i=0;i<camposInput.length;i++){
        let campoInput = camposInput[i];
        let sacaError;
        if(campoInput.value===""){
            let campoError = document.getElementById('error-'+campoInput.id);
            campoInput.classList.add("error-input");
            campoError.classList.add("show-texto-input");
            controlError=false;
        }else{
            // Los campos estan rellenos, los revisamos todos.
            switch (campoInput.id) {
                case "nombre":
                    sacaError = document.getElementById('error-'+campoInput.id);
                    if(!validaNombre(campoInput.value)){
                        campoInput.classList.remove("ok-input");
                        campoInput.classList.add("error-input");
                        sacaError.innerText = "El nombre no puede contener números";
                        sacaError.classList.add("show-texto-input");
                        controlError=false;
                        break;
                    }else{
                        sacaError.classList.remove("show-texto-input");    
                        campoInput.classList.remove("error-input");                        
                        campoInput.classList.add("ok-input");
                        controlError=true;                                     
                    }
                    break;
                case "email":
                    sacaError = document.getElementById('error-'+campoInput.id);
                    if(!validaEmail(campoInput.value)){
                        campoInput.classList.remove("ok-input");
                        campoInput.classList.add("error-input");
                        sacaError.innerText = "El email no es válido, debe de contener un formato de email válido";
                        sacaError.classList.add("show-texto-input");
                        controlError=false;
                    }else{
                        sacaError.classList.remove("show-texto-input");    
                        campoInput.classList.remove("error-input");                        
                        campoInput.classList.add("ok-input");
                        controlError=true;
                    }

                    break;

                case "pass":
                    sacaError = document.getElementById('error-'+campoInput.id);
                    if(!validaClave(campoInput.value)){
                        campoInput.classList.remove("ok-input");
                        campoInput.classList.add("error-input");
                        sacaError.innerText = "La clave no puede tener más de 8 caracteres";
                        sacaError.classList.add("show-texto-input");
                        controlError=false;
                    }else{
                        sacaError.classList.remove("show-texto-input");    
                        campoInput.classList.remove("error-input");                        
                        campoInput.classList.add("ok-input");
                        controlError=true;
                    }

                    break;
                case "pass2":
                    sacaError = document.getElementById('error-'+campoInput.id);
                    let valor1 = document.getElementById("pass").value;
                    let valor2 = document.getElementById("pass2").value;
                    if(!comparaClaves(valor1,valor2)){
                        campoInput.classList.remove("ok-input");
                        campoInput.classList.add("error-input");
                        sacaError.innerText = "Las claves no coinciden";
                        sacaError.classList.add("show-texto-input");
                        controlError=false;
                    }else{
                        sacaError.classList.remove("show-texto-input");    
                        campoInput.classList.remove("error-input");                        
                        campoInput.classList.add("ok-input");
                        controlError=true;
                    }
                break;     
                default:
                    controlError=false;
                    break;       
            }
        }
    }
    return controlError;

}

function validaNombre(valor){
    let encuentraNumeros = valor.replace(/[^0-9]/g,"").length;  
    if(encuentraNumeros != 0){
        return false;
    } else{
        return true;
    }
}

function validaEmail(valor){
    let expresionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(valor.match(expresionEmail)){
        return true;
    }else{
        return false;
    }
}

function validaClave(valor){    
    if(valor.length>8){
        return false;
    }else{
        return true;
    }
}

function comparaClaves(valor1,valor2){
    if(valor1!=valor2){
        return false;
    }else{
        return true;
    }
}


function validaFormulario(){
    if(validaForm()){
        alert("Gracias por crear tu cuenta!");
        return true;
    }else{
        return false;
    }
}