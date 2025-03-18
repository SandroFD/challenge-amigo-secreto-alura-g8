// Lista de los nombres de los amigos secretos
let amigos = [];

// Funcion para agregar nombres a la lista
function agregarAmigo() {
    const texto = document.getElementById("amigo"); // Obtiene el elemento con id de amigo
    const nombre = texto.value.trim(); // Elimina espacios en blanco antes y después de la cadena de caracteres

    // Validaciones
    if (nombre === "") { // Cuando se haya introducido ningun caracter
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) { // Cuando el nombre ya se introdujo en el arreglo
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista();
    texto.value = ""; // Limpia el texto almacenado
}

// Función para actualizar la lista de manera visual
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debe haber al menos 3 nombres para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Operacion para escoger un numero al azar segun la cantidad del arreglo
    const amigoSeleccionado = amigos[indiceAleatorio]; // se guarda en la variable el nombre de la posicion del arreglo

    const resultado = document.getElementById("resultado"); // Obtiene el elemento con id resultado
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSeleccionado}</li>`; // Muestra el resultado
}


