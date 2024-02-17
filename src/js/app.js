// // Función para agregar mensajes de texto al chat con animación de letras apareciendo una por una
// function appendTextMessage(sender, message, className, callback) {
//     var chatBox = document.getElementById("chat-box");
//     var messageElement = document.createElement("div");
//     messageElement.classList.add("message", className);

//     // Crear un párrafo y establecer el contenido del párrafo
//     var paragraph = document.createElement("p");
//     paragraph.textContent = sender + ": ";
//     messageElement.appendChild(paragraph);
//     chatBox.appendChild(messageElement);

//     // Inicializar el contador para la animación de las letras
//     var letterIndex = 0;
//     var messageInterval = setInterval(function() {
//         // Agregar una letra del mensaje en cada iteración
//         paragraph.textContent += message.charAt(letterIndex);
//         letterIndex++;
//         // Detener la animación cuando se haya mostrado todo el mensaje
//         if (letterIndex === message.length) {
//             clearInterval(messageInterval);
//             // Si es el último mensaje, limpiar el campo de entrada
//             if (className === "user-message" && messageElement === chatBox.lastChild) {
//                 document.getElementById("user-input").value = "";
//             }
//             // Llamar al callback después de que se haya completado la animación
//             if (typeof callback === "function") {
//                 callback();
//             }
//         }
//         chatBox.scrollTop = chatBox.scrollHeight; // Hacer scroll al final del chat
//     }, 50); // Intervalo de tiempo entre cada letra (ajusta según tu preferencia)
// }

// // Función para agregar imágenes al chat
// function appendImageMessage(sender, imageSrc, className, callback) {
//     var chatBox = document.getElementById("chat-box");
//     var messageElement = document.createElement("div");
//     messageElement.classList.add("message", className);

//     // Crear un elemento de imagen y establecer el atributo src
//     var imageElement = document.createElement("img");
//     imageElement.src = imageSrc;
//     messageElement.appendChild(imageElement);
//     chatBox.appendChild(messageElement);

//     // Llamar al callback después de agregar la imagen al chat
//     if (typeof callback === "function") {
//         callback();
//     }

//     chatBox.scrollTop = chatBox.scrollHeight; // Hacer scroll al final del chat
// }

// // Función para enviar mensajes del bot y del usuario al chat
// function sendMessages() {
//     var messages = document.querySelectorAll("#conversacion .message");
//     var index = 0;
//     sendNextMessage();

//     function sendNextMessage() {
//         if (index < messages.length) {
//             var message = messages[index];
//             var content;

//             // Verificar si el mensaje es un texto o una imagen
//             if (message.querySelector("p")) {
//                 // Si es un mensaje de texto, obtener el contenido del párrafo
//                 content = message.querySelector("p").innerHTML;
//                 var sender = message.classList.contains("bot-message") ? "Bot" : "Tú";
//                 appendTextMessage(sender, content, message.classList.contains("bot-message") ? "bot-message" : "user-message", function() {
//                     index++;
//                     sendNextMessage(); // Llamar a la función para enviar el próximo mensaje después de que se complete la animación
//                 });
//             } else if (message.querySelector("img")) {
//                 // Si es un mensaje de imagen, obtener el atributo src de la etiqueta de imagen
//                 var imageSrc = message.querySelector("img").src;
//                 var sender = message.classList.contains("bot-message") ? "Bot" : "Tú";
//                 appendImageMessage(sender, imageSrc, message.classList.contains("bot-message") ? "bot-message" : "user-message", function() {
//                     index++;
//                     sendNextMessage(); // Llamar a la función para enviar el próximo mensaje después de que se complete la animación
//                 });
//             }
//         }
//     }
// }
// function appendVideoMessage(sender, videoSrc, className, callback) {
//     var chatBox = document.getElementById("chat-box");
//     var messageElement = document.createElement("div");
//     messageElement.classList.add("message", className);

//     // Crear un elemento de video y establecer el atributo src
//     var videoElement = document.createElement("video");
//     videoElement.src = videoSrc;
//     videoElement.controls = true; // Agrega controles de reproducción al video
//     messageElement.appendChild(videoElement);
//     chatBox.appendChild(messageElement);

//     // Llamar al callback después de agregar el video al chat
//     if (typeof callback === "function") {
//         callback();
//     }

//     chatBox.scrollTop = chatBox.scrollHeight; // Hacer scroll al final del chat
// }

// // Iniciar la conversación
// sendMessages();
function animateMessages() {
    var messages = document.querySelectorAll('.chat-box .message');

    messages.forEach(function (message, index) {
        setTimeout(function () {
            message.style.opacity = 1;
        }, index * 1000); // Ajusta el intervalo de tiempo entre cada mensaje
    });

}

// Llama a la función para animar los mensajes después de que la página se cargue completamente
window.onload = function () {
    animateMessages();
};

document.getElementById("sendButton").addEventListener("click", function () {
    var message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        // Convertir el mensaje a minúsculas para hacer comparaciones sin distinción entre mayúsculas y minúsculas
        var messageLowercase = message.toLowerCase();

        // Utilizar expresiones regulares para buscar palabras o frases relacionadas
        if (/la plata/.test(messageLowercase)) {
            window.location.href = "laPlata.html";
        } else if (/alfajor/.test(messageLowercase)) {
            window.location.href = "alfajor.html";
        } else if (/felicidad/.test(messageLowercase)) {
            window.location.href = "felicidad.html";
        } else if (/inicio/.test(messageLowercase)) {
            window.location.href = "inicio.html";
        } else if (/duermen bien/.test(messageLowercase)) {
            window.location.href = "lasPersonasLindasDuermenBien.html";
        } else if (/novios/.test(messageLowercase)) {
            window.location.href = "novios.html";
        } else if (/numero/.test(messageLowercase)) {
            window.location.href = "numeroWhatsApp.html";
        } else if (/la proteina de frutilla/.test(messageLowercase)) {
            window.location.href = "proteFrutilla.html";
        } else if (/regalo/.test(messageLowercase)) {
            window.location.href = "regalos.html";
        } else if (/te amo/.test(messageLowercase)) {
            window.location.href = "teAmo.html";
        } else if (/volver a conocernos/.test(messageLowercase)) {
            window.location.href = "vuelta.html";
        } else if (/san valentin/.test(messageLowercase)) {
            window.location.href = "sanValentin.html";
        } else if (/menu/.test(messageLowercase)) {
            window.location.href = "index.html";
        } else {
            var audio = new Audio('../src/audios/sonido golpe en la cabeza.mp3');

            // Reproducir el audio
            audio.play();
            // Mostrar una alerta si ninguna de las palabras o frases coincide
            Swal.fire({
                title: 'nou nou mur, esa no es la palabra. Escribi menu para volver al inicio',
                html: '<img src="./img/pobreLeCuesta.png" style="width: 200px; height: auto;">',

                showCloseButton: true,
                showConfirmButton: false
            });
        }
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var texto = document.getElementById("textoAnimado").textContent;
    var contenedor = document.getElementById("textoAnimado");
    contenedor.textContent = ""; // Limpiar el contenido original del contenedor

    escribirTextoPorLetras(texto, contenedor);
});

function escribirTextoPorLetras(texto, contenedor) {
    var index = 0;
    var intervalo = setInterval(function () {
        // Agregar letra actual al contenedor
        contenedor.textContent += texto[index];
        index++;

        // Verificar si hemos llegado al final del texto
        if (index >= texto.length) {
            clearInterval(intervalo); // Detener el intervalo
        }
    }, 5); // Tiempo de retraso entre cada letra (en milisegundos)
}

window.addEventListener('DOMContentLoaded', () => {
    // Obtener todas las imágenes dentro del contenedor
    const fotos = document.querySelectorAll('#fotosContainer img');

    // Iterar sobre cada imagen y aplicar animación de aparición lenta
    fotos.forEach((foto, index) => {
        // Establecer un retraso creciente para cada imagen
        setTimeout(() => {
            // Agregar una clase para animar la aparición
            foto.classList.add('show');
        }, index * 1000); // Se puede ajustar el retraso según sea necesario
    });
});