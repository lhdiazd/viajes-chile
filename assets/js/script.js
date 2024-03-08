$(document).ready(function () {
    // Muestra el modal con el ID "exampleModal" al cargar la página
    $('#exampleModal').modal('show');

    // Activa el tooltip de Bootstrap para elementos con el atributo "data-bs-toggle" igual a "tooltip"
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Asigna un controlador de eventos a todos los enlaces en la página
    $("a").on('click', function (event) {
        // Verifica si el enlace tiene un valor de fragmento en su URL
        if (this.hash !== "") {
            // Evita el comportamiento predeterminado del enlace para evitar que la página se cargue nuevamente
            event.preventDefault();

            // Almacena el valor del fragmento del enlace en la variable "hash"
            var hash = this.hash;

            // Realiza una animación de desplazamiento suave hasta el elemento en la página identificado por el fragmento del enlace
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {                
                window.location.hash = hash;
            });
        }
    });
});

