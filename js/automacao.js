var firebaseConfig = {
    apiKey: "AIzaSyAMn93wSdsOy-TrpIRktXaCD0za8y9seZk",
    authDomain: "automacao-borba.firebaseapp.com",
    databaseURL: "https://automacao-borba.firebaseio.com",
    projectId: "automacao-borba",
    storageBucket: "automacao-borba.appspot.com",
};
firebase.initializeApp(firebaseConfig);

let lampada1 = document.querySelector('#lampada1');
let lampada2 = document.querySelector('#lampada2');
let lampada3 = document.querySelector('#lampada3');


/*lampada1.addEventListener('click', () => {
    console.log('clicou');
    let estado = lampada1.getAttribute('data-state');
    if (estado == 'off') {
        firebase.database().ref('lampada').set('on');

    } else {
        firebase.database().ref('lampada').set('off');
    }

});*/


function clicaLampada(lampada, lampadaFB) {
    console.log('clicou');
    let estado = lampada.getAttribute('data-state');
    if (estado == 'off') {
        firebase.database().ref(lampadaFB).set('on');
    } else {
        firebase.database().ref(lampadaFB).set('off');
    }
};

$(lampada1).click(function () {
    clicaLampada(lampada1, 'lampada');
});
$(lampada2).click(function () {
    clicaLampada(lampada2, 'lampada2');
});
$(lampada3).click(function () {
    clicaLampada(lampada3, 'lampada3');
});



function mudaBotao(lampadaFB, lampada) {
    firebase.database().ref(lampadaFB).on('value', snapshot => {
        let l = snapshot.val();
        if (l == 'on') {
            $(lampada).html('Desligar');
            $(lampada).addClass('btn-danger');
            $(lampada).removeClass('btn-success');
            lampada.setAttribute('data-state', 'on');
        } else {
            $(lampada).html('Ligar');
            $(lampada).addClass('btn-success');
            $(lampada).removeClass('btn-danger');
            lampada.setAttribute('data-state', 'off');
        }
    });
}

mudaBotao('lampada',lampada1);
mudaBotao('lampada2',lampada2);
mudaBotao('lampada3',lampada3);
