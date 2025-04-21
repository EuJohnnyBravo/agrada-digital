$(document).ready(function () {
    const elements = $('.modal-overlay, .modal');
    let quantidade = 0;

    $('.btn-comprar').click(function () {
        elements.addClass('active');
        quantidade++;

        $('#quantidade')
            .addClass('quantidade')
            .text(quantidade);
    });

    $('.close-modal').click(function () {
        elements.removeClass('active');
    });
});