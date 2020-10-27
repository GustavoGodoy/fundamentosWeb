let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa =document.querySelector('#mapa')



function validaNome(){
    let txt = document.querySelector('#textnome')
    if(nome.value.length < 3){
        nome.style.border= "2px solid red"
        txt.innerHTML = 'Nome invalido'
        txt.style.color = "red"
        txt.style.display = 'block'
    }else{
        nome.style.border= "2px solid green"
        txt.innerHTML = ''
        txt.style.display = 'none'
        let nomeOk = true;
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#textemail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail Inválido"
        email.style.border= "2px solid red"
        txtEmail.style.color = 'red'
        txtEmail.style.display = 'block'
    }else{
        txtEmail.innerHTML = "E-mail Válido"
        email.style.border= "2px solid green"
        txtEmail.style.color = 'green'
        txtEmail.style.display = 'none'
        let emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#textassunto')
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto excedeu o limite de 100 caracteres'
        txtAssunto.style.color = "red"
        assunto.style.border = "2px solid red"
        txtAssunto.style.display = 'block'
    }else{
        assunto.style.border = "2px solid green"
        txtAssunto.style.display = 'none'
        let assuntoOk = true;
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario enviado com sucesso!')
    }else{
        alert ('Preencha o formulario corretamente!')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}