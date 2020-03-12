    function validarFormulario() {
        var nom = document.getElementById("postNombre").value;
        var med = document.getElementsByName("postMedida")[0].value;
        var can = document.getElementsByName("postCantidad")[0].value;
        var pre = document.getElementsByName("postPrecio")[0].value;
        var sto = document.getElementsByName("postStock")[0].value;
        var fec = document.getElementsByName("postFecha")[0].value;

        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ((nom == "") || (med == "") || (can == "") 
        || (pre == "") || (sto == "") || (fec == "")) {
            alert("Campos Vacios");
            return false;
        }

    }