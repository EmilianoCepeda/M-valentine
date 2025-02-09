$(document).ready(function() {
    var text = "Texto que se ilumina letra por letra"; // Texto que quieres curvar
    var radius = 120; // Radio del círculo
    var angle; // Ángulo
    var letters = text.split(''); // Separa el texto en letras

    // Añade cada letra al contenedor en la posición correcta
    letters.forEach(function(letter, index) {
        var span = $("<span>").text(letter).addClass("letter").appendTo("#container");

        // Calcula el ángulo solo para la mitad superior del círculo
        angle = (index / letters.length) * 180; // Divide la parte superior del círculo en partes
        var x = radius * Math.cos(angle * Math.PI / 180); // Posición en X
        var y = radius * Math.sin(angle * Math.PI / 180); // Posición en Y

        // Ajusta la posición de la letra
        span.css({
            left: (150 + x) + 'px', // 150 es la mitad del ancho del contenedor
            top: (75 + y) + 'px', // 75 es la mitad del alto del contenedor
            transform: 'translate(-50%, -50%)' // Centra cada letra en su posición
        });

        // Añade clase para el efecto de iluminación
        span.addClass("highlight"); 
    });
});
