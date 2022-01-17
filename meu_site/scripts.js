$(function(){
    alert('Olá Mundo!');
    
    //SELETOR, EVENTO, CALLBACK, ACAO
    $('.j_alert').click(function(){
        var texto = $(this).text();
        alert(texto);
    });
    
    $('a[title="Palavra de Deus"]').click(function(){
        $(this).text($(this).attr('title'));
        
        return false;
    })
});
