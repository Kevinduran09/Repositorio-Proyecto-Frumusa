//animaciones
const fields = document.querySelectorAll('.text_field, .password, .number_field');

fields.forEach(field => {
    const label = document.querySelector(`label[for="${field.id}"]`);

    if (label) {
        field.addEventListener('focus', () => {
            label.style.top = '-20px';
            label.style.fontSize = '12px';
            label.style.color = '#2c662d';
        });

        field.addEventListener('blur', () => {
            if (field.value === '') {
                label.style.top = '50%';
                label.style.fontSize = '16px';
                label.style.color = '#999';
            }
        });
    }
});

//limpiar los campos del formulario
document.getElementById('P2NUMEROIDENTIFICACION').value = '';
document.getElementById('P2TIPOCLIENTE').value = '';
document.getElementById('P2NOMBRECOMPLETO').value = '';
document.getElementById('P2RESIDENCIA').value = '';
document.getElementById('P2TELEFONO').value = '';
document.getElementById('P2CORREOELECTRONICO').value = '';
document.getElementById('P2CONTRASENA').value = '';

//evento para limitar el la cantidad de caracteres en P2NUMEROIDENTIFICACION 
document.getElementById("P2TIPOCLIENTE").addEventListener("change", function () {
    const tipoCliente = this.value;
    const numeroIdentificacion = document.getElementById("P2NUMEROIDENTIFICACION");

    if (tipoCliente === "Fisico") {
        numeroIdentificacion.setAttribute("maxlength", "9");
    } else if (tipoCliente === "Juridico") {
        numeroIdentificacion.setAttribute("maxlength", "12");
    }

    numeroIdentificacion.value = "";
});






