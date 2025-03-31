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
console.log("Valor actual de P4_PAIS:", $v("P4_PAIS"));

input.addEventListener("countrychange", function () {
    var countryData = iti.getSelectedCountryData();  // Obtener datos del país seleccionado

    console.log("Código del país seleccionado: ", countryData.iso2);
    console.log("Nombre del país seleccionado: ", countryData.name);

    // Asignar el nombre del país al campo de solo lectura
    $s("P4_PAIS", countryData.name);

    // Forzar una actualización del campo en APEX
    apex.item("P4_PAIS").setValue(countryData.name);

    console.log("Valor de P4_PAIS actualizado:", $v("P4_PAIS"));
});


console.log("Valor actual de P4_PAIS:", $v("P4_PAIS"));
