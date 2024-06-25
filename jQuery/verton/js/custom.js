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
         console.log( $(this).find("h4").text() + ' esgotado')
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

   $('#form-submit').on('click', function(){

      if($('#email').val()!=''){

         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, duracao, function(){
            console.log($(this).val())
            
         })
      }      

      
   });

   /*
      *Evento nav-modal-open - Se encontra no topo da pág. na aba de navegação
      *rel -  estamos usando este atributo para vincular ao "id=contato" está linha 237 index.html
   */

   $(".nav-modal-open").on("click", function(){

      let elem = $(this).attr("rel")


      $('.modal-body').html($('#'+elem).html()) //está vinculando o atributo "rel" com o variavel "elem" - Clicando em "Contato na página" dps no "lanch"
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modalId'))
   
      myModal.show()

   })

   /*
   *Validação formuário
   */

   $('body').on('submit', 'modal-body .form', function(e){
      e.preventDefatult() //Impede que nosso formulário seja enviado vazio
      
      const inputName = $('#nome').val()
      const inputEmail = $('#email').val()
      const inputEndereco = $("#endereço").val()

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid') ||  inputEndereco.hasClass('invalid')){

         return false

      } else {

         $(this).submit()

      } //hasClass - verifica se o campo da classe existe ou não

   })

   function validate(elem){
      if(elem.val() == ''){
         console.log('o campo de ' + elem.attr("name") + ' é obrigatório') // Demonstra ao usuário campo é obrigatório
         elem.parent().find('.text-muted').show() // Mostra qual campo é obrigatório
         elem.addClass('invalid') // Criando classe invalido caso o campo seja preenchido errado

         return false

      } else{
         elem.parent().find('.text-muted').hide() // Remove a função caso esteja preenchido corretamente
         elem.removeClass('invalid')
      }
   }


   $('body').on('blur', '#nome', function () {
      validate($(this))
   })

   $('body').on('blur', '#email', function () {
      validate($(this))
   })

   $('body').on('keyup', '#celular', function () {
      validate($(this))
      $(this).mask('00000-0000');
   })

   $('body').on('keyup', '#cpf', function () {
      validate($(this))
      $(this).mask('000.000.000-00');
   })

   $('body').on('blur', '#endereço', function () {
      validate($(this))
   })

   $('body').on('keyup', '#cep', function () {
      validate($(this))
      $(this).mask('00000-000')
   })

})