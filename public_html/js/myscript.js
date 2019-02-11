function paginaCargada() {

    var nombreFormulario = document.getElementById("inGeneradorFormulario");
    var btnGeneraFormulario = document.getElementById("btnGeneradorFormulario");
    var divContenedor = document.getElementById("contenedor");

    btnGeneraFormulario.addEventListener('click', generarFormulario);

    function generarFormulario() {
        if (nombreFormulario.value != '') {
            var div = document.createElement('div');
            var btnEditarFormulario=document.createElement('button');
            var btnBorrarFormulario=document.createElement('button');
            
            btnEditarFormulario.setAttribute(id,'editarFormulario'+nombreFormulario);
            btnBorrarFormulario.setAttribute(id,'borrarFormulario'+nombreFormulario);
            
            div.setAttribute('id', nombreFormulario.value);
            divContenedor.appendChild(div);
            
        }else{
            alert("debes darle un nombre al formulario");
        }

    }

}




