$(document).ready(function(){
    // Botão de "hamburger" para o menu
    $('.hamburger').on('click', function() {
        $('.nav-links').toggleClass('nav-active');
    });

    // Efeito hover nos botões de compra
    $('.btn').hover(function(){
        $(this).css('background-color', '#218838');
    }, function(){
        $(this).css('background-color', '#28a745');
    });
});
