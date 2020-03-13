function validarGuardar(){
    var num1=document.getElementById('Nombre').value;   
    var num2=document.getElementById('Medida').value;
    var num3=document.getElementById('Cantidad').value;
    var num4=document.getElementById('Precio').value;
    var num5=document.getElementById('Stock').value;
    var num6=document.getElementById('Fecha').value;
    
    
    if (num1==="") {
        alert("¡Ingresa un valor en la caja Nombre!");
        return false;
    }
    if (num2==="") {
        alert("¡Ingresa un valor en la caja Marca!");
        return false;
    }
    if (num3=="") {
        alert("¡Ingresa un valor en la caja Cantidad!");
        return false;
    }
    if (num4=="") {
        alert("¡Ingresa un valor en la caja Precio!");
        return false;
    }
    if (num5=="") {
        alert("¡Ingresa un valor en la caja Stock!");
        return false;
    }
    if (num6=="") {
        alert("¡Ingresa un valor en la caja Fecha!");
        return false;
    }
    }
    
    