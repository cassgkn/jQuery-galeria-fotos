
    // função callback do click para o bottao
    document.querySelector('header button').addEventListener('click', function(e){
        
    })

    //função jQuery para criar slide, neste caso p/ botão nova imagem(irá descer "inserir Nova Imagem")
    $('header button').click(function(){
        $('form').slideDown();
    })

    //função jQuery para recolher slide, neste caso p/ botão cancelar irá recolher slide
    $('header button').click(function(){
        $('#botao-cancelar').click(function(){
            $('form').slideUp();
        })

    // função on (vamos usar pra remover o comportamento do formulario)
    $('form').on('submit', function(e){
       e.preventDefault(); 
       const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //recuperando o id do html
       const novoItem = $('<li style="display: none"></li>'); //cria elemento dinamico, as tags li que são as imagens
       $(`<img src='${enderecoDaNovaImagem}'/>`).appendTo(novoItem); // adiciona a imagem no elemento dinamico através da função appendTo() 
       $(`
            <div class='overlay-imagem-link'>
                <a href='${enderecoDaNovaImagem}' target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
       `).appendTo(novoItem); // adiciona a div no elemento dinamico através da função appendTo()
        $(novoItem).appendTo('ul'); // adiciona o elemento dinamico <li> dentro do elemneto pai <ul>
        $(novoItem).fadeIn(1000); // aplica função animação de surgir
        $('#endereco-imagem-nova').val(''); // zera o campo de inserir url
    })
})
