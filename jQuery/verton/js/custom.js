// instancia jquery e evita conflitos
// jQuery(function($){

$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
    
    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id
    
    console.log(titulos.first()); //trabalhando desta forma evita conflitos, caso esteja trabalhando com varias bibliotecas.

    // Configuração de produtos

    // $('.featured-item a').addClass('btn btn-dark strech-link');
    // $('.featured-item:first h4').star('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fade()
     
    
})