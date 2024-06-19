// instancia jquery e evita conflitos
// jQuery(function($){

$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
    
    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id
    
    //console.log(titulos.first()); //trabalhando desta forma evita conflitos, caso esteja trabalhando com varias bibliotecas.

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark strech-link');
    // $('.featured-item:first h4').star('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').hide() - oculta conteudo
    // $('.featured-item:first h4').show() - faz função oposta ao hide
    // $('.featured-item:first h4').fade()


   /*
      *Manipulação de eventos
      *Aparece a msg no topo da tela, caso não tenha mais o produto disponivel

   */

   $('.featured-item a').on('blur', function(event){

      event.preventDefatult();

      alert('Produto esgotado');

   })

   /*
   *Callback
   *entendendo ações que começam ao termino de outra

   */

   $('.featured-item:nth(2)')
      .hide(5000, function(){
         //este é o callback
         console.log( $(this).find("h4").text() + 'esgotado')
      })
      .show(2000, function(){
         console.log( $(this).find("h4").text() + ' em estoque')
      })

   /*
   *Animações
   */

   const duracao = 1000 // equivale 1 seg

   $('.featured-item:nth(1)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao) // função de esconder Ps: fica opaco a img
      .fadeIn(duracao) // função de exibir
      .toggle(duracao) // ele inverte a animção anterior
      .toggle(duracao)

   $('#form-submit').on('click', function(e){

      e.preventDefatult()

      if($('#email').val() !='' ){

         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, duracao, function(){
            console.log($(this).val())
            
         })
      }      

      
   });

})