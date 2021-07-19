const form = document.getElementById('form')

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados ={
        nome,
        email,
    }

    let converteDados = JSON.stringify(dados);
    localStorage.setItem('lead', converteDados)
    
    let coletorCadastro = document.getElementById('coletor-cadastro')
    let carregando = `<div class="formularioCarregado"><p> Carregando...</p>
    </div>`
    let pronto = `<div class="formularioCarregado"><p>Obrigado por se cadastrar! Você receberá um email com todas 
    as informações em instantes!</p>
    </div>`

    
    let titulo = document.getElementById('title-form')
    titulo.parentNode.removeChild(titulo);

    coletorCadastro.innerHTML = carregando

    setTimeout(() =>{
        coletorCadastro.innerHTML = pronto
    }, 2000) 
})