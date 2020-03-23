$(document).ready(function () {
    var artyom = new Artyom();

    const inicio = {
        lang: "pt-PT", // A lot of languages are supported. Read the docs !
        continuous: true, // recognize 1 command and stop listening !
        listen: true, // Start recognizing
        debug: true, // Show everything in the console

    };

    artyom.initialize(inicio);

    var funcLigarLampada = {
        indexes: ['Ligar primeira lâmpada', 'ligar segunda lâmpada', 'ligar terceira lâmpada'],
        action: function (i) {
            if (i == 0) {

                let estado = lampada1.getAttribute('data-state');

                if (estado == 'off') {

                    firebase.database().ref('lampada').set('on');
                    artyom.say('Certo! Ligando a lâmpada');

                } else if (estado == 'on') {
                    artyom.say('Essa lâmpada já está ligada!');

                }

            } else if (i == 1) {
                let estado = lampada2.getAttribute('data-state');

                if (estado == 'off') {

                    firebase.database().ref('lampada2').set('on');
                    artyom.say('Certo! Ligando a lâmpada');
                } else {
                    artyom.say('Essa lâmpada já está ligada!');
                }
            } else if (i == 2) {
                let estado = lampada3.getAttribute('data-state');

                if (estado == 'off') {
                    artyom.say('Certo! Ligando a lâmpada');
                    firebase.database().ref('lampada3').set('on');
                } else {
                    artyom.say('Essa lâmpada já está ligada!');
                }
            }
        }
    };


    var funcDesligarLampada = {
        indexes: ['desativar primeira lâmpada', 'desativar segunda lâmpada', 'desativar terceira lâmpada'],
        action: function (i) {
            if (i == 0) {
                let estado = lampada1.getAttribute('data-state');

                if (estado == 'on') {

                    firebase.database().ref('lampada').set('off');
                    artyom.say('Certo! Desligando a lâmpada');
                } else {
                    artyom.say('Essa lâmpada já está desligada!');
                }

            } else if (i == 1) {
                let estado = lampada2.getAttribute('data-state');

                if (estado == 'on') {

                    firebase.database().ref('lampada2').set('off');
                    artyom.say('Certo! Desligando a lâmpada');
                } else {
                    artyom.say('Essa lâmpada já está desligada!');
                }
            } else if (i == 2) {
                let estado = lampada3.getAttribute('data-state');

                if (estado == 'on') {

                    firebase.database().ref('lampada3').set('off');
                    artyom.say('Certo! Desligando a lâmpada');
                } else {
                    artyom.say('Essa lâmpada já está desligada!');
                }
            }
        }
    };

    var funTime = {
        indexes: ['Que Horas São'],
        action: function (i) {
            if (i == 0) {
                data = new Date();
                hora = data.getHours();
                minutos = data.getMinutes();
                artyom.say("São " + hora + "horas e " + minutos + "minutos");
            }
        }
    };

    var funPagina = {
        indexes: ['Abra meu gmail', 'abra meu site'],
        action: function (i) {
            if (i == 0) {
                artyom.say("Abrindo Gmail");
                window.open('http://www.sistemagestaoescolar.com.br/sipf2/', "_blank");
            } else {
                artyom.say("Certo, abrindo seu site!");
                window.open('http://www.sistemagestaoescolar.com.br/sipf2/', "_blank");
            }
        }
    };

    var agradece = {
        indexes: ['obrigado'],
        action: function (i) {
            if (i == 0) {
                artyom.say("por nada, estou aqui para ajudar!");

            }
        }
    };

    /*artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
        if(isFinal){
            $('.testeTexto').html(recognized);
            console.log("Final recognized text: " + recognized);
        }else{
            console.log(recognized);
            $('.testeTexto').html('...');
        }
    });*/

    artyom.addCommands(funcLigarLampada);
    artyom.addCommands(funcDesligarLampada);
    artyom.addCommands(funTime);
    artyom.addCommands(funPagina);
    artyom.addCommands(agradece);
  

    $('#fala1').click(function () {
        artyom.simulateInstruction("ligar lâmpada um"); //Simulate a voice  command with voice "hello".
    });
    $('#fala2').click(function () {
        artyom.simulateInstruction("ligar lâmpada dois"); //Simulate a voice  command with voice "hello".
    });
    $('#fala3').click(function () {
        artyom.simulateInstruction("desligar lâmpada um"); //Simulate a voice  command with voice "hello".
    });
    $('#fala4').click(function () {
        artyom.simulateInstruction("desligar lâmpada três"); //Simulate a voice command with voice "hello".
    });

});
