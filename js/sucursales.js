const horarios = {
    "Sucursal A": {
        "Lunes": "9:00 AM - 5:00 PM",
        "Martes": "9:00 AM - 5:00 PM",
        "Miércoles": "9:00 AM - 5:00 PM",
        "Jueves": "9:00 AM - 5:00 PM",
        "Viernes": "9:00 AM - 5:00 PM",
        "Sábado": "Cerrado",
        "Domingo": "Cerrado"
    },
    "Sucursal B": {
        "Lunes": "10:00 AM - 6:00 PM",
        "Martes": "10:00 AM - 6:00 PM",
        "Miércoles": "10:00 AM - 6:00 PM",
        "Jueves": "10:00 AM - 6:00 PM",
        "Viernes": "10:00 AM - 6:00 PM",
        "Sábado": "Cerrado",
        "Domingo": "Cerrado"
    },
    "Sucursal C": {
        "Lunes": "8:00 AM - 4:00 PM",
        "Martes": "8:00 AM - 4:00 PM",
        "Miércoles": "8:00 AM - 4:00 PM",
        "Jueves": "8:00 AM - 4:00 PM",
        "Viernes": "8:00 AM - 4:00 PM",
        "Sábado": "Cerrado",
        "Domingo": "Cerrado"
    },
    "Sucursal D": {
        "Lunes": "9:30 AM - 5:30 PM",
        "Martes": "9:30 AM - 5:30 PM",
        "Miércoles": "9:30 AM - 5:30 PM",
        "Jueves": "9:30 AM - 5:30 PM",
        "Viernes": "9:30 AM - 5:30 PM",
        "Sábado": "Cerrado",
        "Domingo": "Cerrado"
    },
    "Sucursal E": {
        "Lunes": "11:30 AM - 5:30 PM",
        "Martes": "11:30 AM - 5:30 PM",
        "Miércoles": "11:30 AM - 5:30 PM",
        "Jueves": "11:30 AM - 5:30 PM",
        "Viernes": "11:30 AM - 5:30 PM",
        "Sábado": "11:30 AM - 3:30 PM",
        "Domingo": "Cerrado"
    }
};

// Función para mostrar los horarios de la sucursal seleccionada
function mostrarHorarios(sucursal) {
    const contenedorHorarios = document.getElementById('horarios');
    contenedorHorarios.innerHTML = ""; // Limpiamos cualquier contenido previo

    for (const [dia, horario] of Object.entries(horarios[sucursal])) {
        const p = document.createElement('p');
        p.textContent = `${dia}: ${horario}`;
        contenedorHorarios.appendChild(p);
    }
    document.getElementById('popup').style.display = 'flex';
}

// Función para cerrar la ventana emergente
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});

// Añadir event listeners a los botones de horarios
document.querySelectorAll('.horario-link').forEach((link, index) => {
    link.addEventListener('click', function () {
        const sucursal = `Sucursal ${String.fromCharCode(65 + index)}`; // A, B, C, D
        mostrarHorarios(sucursal);
    });
});
