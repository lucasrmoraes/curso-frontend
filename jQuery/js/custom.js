// instancia jquery e evita conflitos

jQuery(function($){

    let titulos = $('h4') // tag
    let itens = $('.featured-item') // class
    let destaques = $('#featured') // id
    
    console.log(titulos.first()); //trabalhando desta forma evita conflitos, caso esteja trabalhando com varias bibliotecas.
})