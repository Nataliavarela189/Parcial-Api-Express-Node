const apiUrl = 'http://localhost:3000/musculos';



// Función para cargar todos los mùsculos
async function cargarMusculos() {
    try {
        const response = await fetch('http://localhost:3000/musculos') // hago la peticion al endpoint
        const data = await response.json(); // parseo las respuestas a un array
        const tbody = document.getElementById('tabla-contenido'); // elijo el cuerpo de la tabla
        tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
        data.forEach(musculo => { // recorro el array creando filas
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${musculo.nombre}</td>
            <td>${musculo.funcion}</td>
            <td>${musculo.ubicacion}</td>
            <td>${musculo.tipoFibra}</td>
            <td>${musculo.acciones}</td>
            <td>${musculo.enlace}</td>
            <td>
                <button onclick="eliminarMusculo(${musculo.id})">Eliminar</button>
                <button onclick="actualizarMusculo(${musculo.id})">Actualizar</button>
            </td>
        `;
        tbody.appendChild(row);
    });

    } catch (error) {
        console.error(error);
    }
}
//VA ACAAA
cargarMusculos();
