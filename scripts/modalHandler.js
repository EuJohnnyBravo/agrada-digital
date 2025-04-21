const elements = $('.modal-overlay, .modal');

$('.btn-comprar').click(function () {
    elements.addClass('active');
});

$('.close-modal').click(function () {
    elements.removeClass('active');
});