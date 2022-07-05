const inputs = document.querySelectorAll('.input');

const handleFocus = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-ativo');
}
const handleFocusOut = ({target}) =>{
    if(target.value === ''){
    const span = target.previousElementSibling;
    span.classList.remove('span-ativo');
}
}


inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));



function cadastrar(){
    alert("Botão clicado");
}

let labelNome = document.querySelector("#labelNome");
let nome = document.querySelector("#nome");

let labelUsuario = document.querySelector("#labelUsuario");
let usuario = document.querySelector("#usuario");

let labelSenha = document.querySelector("#labelSenha");
let senha = document.querySelector("#senha");

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
        
    }else{

    }
});