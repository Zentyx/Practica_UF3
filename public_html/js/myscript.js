function paginaCargada() {

    var nombreFormulario = document.getElementById("inGeneradorFormulario");
    var btnGeneraFormulario = document.getElementById("btnGeneradorFormulario");
    var divContenedor = document.getElementById("contenedor");

    btnGeneraFormulario.addEventListener('click', generarFormulario);

    function generarFormulario() {
        if (nombreFormulario.value != '') {
            var div = document.createElement('div');
            var form = document.createElement('div');
            var btnEditarFormulario = document.createElement('button');
            var btnBorrarFormulario = document.createElement('button');
            var tituloFormulario = document.createElement('h5');
            var contenidoEditar = document.createTextNode('Editar Formulario');
            var contenidoBorrar = document.createTextNode('Borrar Formulario');
            var contenidoTitulo = document.createTextNode(nombreFormulario.value);

            btnEditarFormulario.setAttribute('id', nombreFormulario.value + '-editarFormulario');
            btnEditarFormulario.appendChild(contenidoEditar);
            btnBorrarFormulario.setAttribute('id', nombreFormulario.value + '-borrarFormulario');
            btnBorrarFormulario.appendChild(contenidoBorrar);
            tituloFormulario.appendChild(contenidoTitulo);


            form.setAttribute('id', nombreFormulario.value + '-form');
            div.setAttribute('id', nombreFormulario.value + '-container');
            div.appendChild(tituloFormulario);
            div.appendChild(btnEditarFormulario);
            div.appendChild(btnBorrarFormulario);
            div.appendChild(form);
            divContenedor.appendChild(div);

            btnEditarFormulario.addEventListener('click', diseñaFormulario);
            btnBorrarFormulario.addEventListener('click', borraFormulario);
        } else {
            alert("debes darle un nombre al formulario");
        }

        function diseñaFormulario() {
            var idForm = this.id.split('-', 2);
            alert(idForm[0]);
        }

        function borraFormulario() {
            var idForm = this.id.split('-', 2);
            document.getElementById('contenedor').removeChild(document.getElementById(idForm[0]+'-container'));
            
        }

    }

}




