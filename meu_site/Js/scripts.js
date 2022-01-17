//ESTA PRIMEIRA LINHA NOS MOSTRA QUANDO ATUALIZAMOS OU ENTRAMOS NO SITE

//    alert('Olá Mundo!');

//"$('')." - ESTE É UM SELETOR BASICO QUE DENTRO DESSAS ASPAS SIMPLES VAI INDICAR ONDE VAMOS APLICAR DEPOIS DO PONTO VEM O EVENTO 
//EX.: CLICK(FUNCTION(){}) DENTRO DO CALBACK TEM A AÇÃO QUE QUANDO CLICAR IRÁ ACONTECER 
//EX.: ALERT('') DENTRO DO PARENTESE ESTÁ O QUE SERÁ MOSTRADO QUENDO CLICAR NO PARAGRAFO
//VAR TEXTO = $(THIS).TEXTO(); ALERT(); ==> DENTRO DO PARENTESES VAI FICAR O QUE VAI SER MOSTRADO QUENDO CLICADO NO PARAGRAFO
//
//SELETOR, EVENTO, CALLBACK, ACAO
//    $('.j_mouseover').click(function () {
//        alert("Passou o mouse no H1. Seu texto é " + $(this).text());
//    });

//SELETOR, EFEITO, CALLBACK, ACAO
//  COM ESTA AÇÃO NO MOMENTO EM QUE CLICO NO LINK ELE ME MOSTRA O SEGUNDO PARAGRAFO
//    $('a').click(function(){
//       $('.a').slideUp();
//       $('.b').slideToggle();
//        return false;
//   })

$(function () {
    //"$('')." - ESTE É UM SELETOR BASICO QUE DENTRO DESSAS ASPAS SIMPLES VAI INDICAR ONDE VAMOS APLICAR DEPOIS DO PONTO VEM O EVENTO 
//EX.: CLICK(FUNCTION(){}) DENTRO DO CALBACK TEM A AÇÃO QUE QUANDO CLICAR IRÁ ACONTECER 
//EX.: ALERT('') DENTRO DO PARENTESE ESTÁ O QUE SERÁ MOSTRADO QUENDO CLICAR NO PARAGRAFO
//VAR TEXTO = $(THIS).TEXTO(); ALERT(); ==> DENTRO DO PARENTESES VAI FICAR O QUE VAI SER MOSTRADO QUENDO CLICADO NO PARAGRAFO
//

//COM ISSO ELE TRAVARÁ TODOS OS MENUS NÃO NOS LEVANDO PARA LUGAR NENHUM MAS APENAS ESTA CLASS QUE NÃO



//   DESLIZA O MENU
    $('.main_menu a[class!="special"]').click(function () {
//    AÇÃO
//'VAR GOTO' É PARA ONDE NÓS VAMOS; SERÁ IGUAL A $(THIS) OU SEJA O ELEMENTO EM QUE EU CLICAR; 
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
//        VAI MOSTRAR ONDE ESTÁ POSICIONADO CADA UM
//        O REPLACE É PARA REMOVER #

//        CONSOLE É ONDE VAMOS ACOMPANHAR O EFEITO DE NOSSO SITE; O "CONSOLE.CLEAR" ELE VAI LIMPAR e o 'CONSOLE.LOG(GOTO) É PARA MOSTRAR O QUE PEDIMOS
//        console.clear();
//        console.log(goto);
        return false;

    });

//    SUSPENDE MENU
//MEU SELETOR É A JANELA DO NAVEGADOR
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.main_header').outerHeight() + 150) {
//            FAZ COM QUE FIXA O MEU MENU MESMO QUANDO ESTIVER NO FIM DA PAGINA VOU PODER VISUALIZAR MEU MENU
            $('body').css('padding-top', $('.main_header').outerHeight());
            $('.main_header').addClass('main_header_fixed');
            $('.j_back').fadeIn('slow');
        } else {
            $('body').css('padding-top', '0');
            $('.main_header').removeClass('main_header_fixed');
            $('.j_back').fadeOut('slow');
        }
    });

//    BACK TOPO
    $('.j_back').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });


//FORMULARIO

//    FORM SUBMIT
    $('.j_formsubmit').submit(function () {

//        É PARA ARMAZENAR OS DADOS DO FORMULARIO
        var dados = $(this).serialize();

        $.ajax({
            url: 'js/ajax.php',
            data: dados,
            type: 'post',
            dataType: 'json',
            beforeSend: function () {
                $('.form_load').fadeIn();
            },
            success: function (data) {
                console.clear();
                console.log(data);
                $('.form_load').fadeOut();
//                ELE VAI AGRADECER POR ENVIA A MENSAGEM
                alert("Olá "+data.nome+". Obrigado por enviar sua mensagem " + data.mensagem + " via " + data.email + "!");
            }
        });
        return false;
    });
});


