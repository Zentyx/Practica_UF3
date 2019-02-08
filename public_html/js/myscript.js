function paginaCargada() {

    var nombreFormulario = document.getElementById("inGeneradorFormulario");
    var btnGeneraFormulario = document.getElementById("btnGeneradorFormulario");
    var divContenedor = document.getElementById("contenedor");

    btnGeneraFormulario.addEventListener('click', generarFormulario);

    function generarFormulario() {
        if (nombreFormulario.value != '') {
            var div = document.createElement('div');
            div.setAttribute('id', nombreFormulario.value);
            divContenedor.appendChild(div);
        }else{
            alert("debes darle un nombre al formulario");
        }

    }

}




