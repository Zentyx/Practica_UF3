function paginaCargada() {

    var nombreFormulario = document.getElementById("inGeneradorFormulario");
    var btnGeneraFormulario = document.getElementById("btnGeneradorFormulario");
    var divContenedor = document.getElementById("contenedor");

    btnGeneraFormulario.addEventListener('click', generarFormulario);

    function generarFormulario() {
        if (nombreFormulario.value != '') {
            var div = document.createElement('div');
            var btnEditarFormulario = document.createElement('button');
            var btnBorrarFormulario = document.createElement('button');

            btnEditarFormulario.setAttribute('id', 'editarFormulario' + nombreFormulario.value);
            var contenidoEditar = document.createTextNode('EditarFormulario');
            btnEditarFormulario.appendChild(contenidoEditar);
            btnBorrarFormulario.setAttribute('id', 'borrarFormulario' + nombreFormulario.value);
            var contenidoBorrar = document.createTextNode('BorrarFormulario');
            btnBorrarFormulario.appendChild(contenidoBorrar);


            div.setAttribute('id', nombreFormulario.value+'container');
            div.appendChild(btnEditarFormulario);
            div.appendChild(btnBorrarFormulario);
            divContenedor.appendChild(div);

        } else {
            alert("debes darle un nombre al formulario");
        }

    }

}




