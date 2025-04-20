function clonarVitrine() {
    var vitrineContent = $('#vitrine-1 .vitrine-container').html();
    $('#vitrine-2').html('<div class="vitrine-container">' + vitrineContent + '</div>');
}