$(document).ready(function () {
    $('#exampleModal').modal('show');

    $('[data-bs-toggle="tooltip"]').tooltip();   

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
    });

    

    
});

