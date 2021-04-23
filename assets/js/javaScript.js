let nome = window.document.querySelector('#nome')
let email = window.document.querySelector('#email')
let texto = window.document.querySelector('#texto')
let botao = window.document.querySelector('#botao')

let nomeOk
let emailOk
let textoOk

/* VALIDA CAMPO NOME */
nome.addEventListener('keyup', () => {
    let validandoNome = window.document.querySelector('#validaNome')

    if(nome.value.length < 3) {
        /* ALTERA A COR DA BORDA DO INPUT */
        nome.style.border = '2px solid red'
        nome.style.borderRadius = '3px'

        /* IMPRIME NA TELA MENSAGEM PARA O USAURIO */
        validandoNome.innerHTML = 'Nome invalido!'
        validandoNome.style.color = 'red'
        validandoNome.style.width = '98%'
        validandoNome.style.padding = '1%'

        /* VALIDA CAMPO */
        nomeOk = false

    }else {
        /* ALTERA A COR DA BORDA DO INPUT */
        nome.style.border = '2px solid green'

        /* IMPRIME NA TELA MENSAGEM PARA O USAURIO */
        validandoNome.innerHTML = 'Nome valido!'
        validandoNome.style.color = 'green'

        /* VALIDA CAMPO */
        nomeOk = true

    }
})

/* VALIDA CAMPO EMAIL */
email.addEventListener('keyup', () => {
    let validandoEmail = window.document.querySelector('#validaEmail')

    /* CASO TENHA ALGUMA DESSA CONDICOES SABEMOS QUE O EMAIL ESTA INVALIDO */
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.com') == -1) {
        /* ALTERA A COR DA BORDA DO INPUT */
        email.style.border = '2px solid red'
        email.style.borderRadius = '3px'

        /* IMPRIME NA TELA MENSAGEM PARA O USAURIO */
        validandoEmail.innerHTML = 'E-mail invalido!'
        validandoEmail.style.color = 'red'
        validandoEmail.style.width = '98%'
        validandoEmail.style.padding = '1%'

        /* VALIDA CAMPO */
        emailOk = false

    }else {
        /* ALTERA A COR DA BORDA DO INPUT */
        email.style.border = '2px solid green'

        /* IMPRIME NA TELA MENSAGEM PARA O USAURIO */
        validandoEmail.innerHTML = 'E-mail valido!'
        validandoEmail.style.color = 'green'

        /* VALIDA CAMPO */
        emailOk = true

    }

})

/* VALIDA CAMPO TEXTO */
texto.addEventListener('keyup', () => {
    let validandoTexto = window.document.querySelector('#validaTexto')
    /* CONTADOR DE CARACTERES */
    let contadorTexto = window.document.querySelector('#contadorTexto')

    if(texto.value.length < 30 || texto.value.length > 200) {
        /* IMPRIME NA TELA A QUANTIDADE DE CARACTERES DIGITADOS */
        contadorTexto.setAttribute('style', 'color: red;')
        contadorTexto.innerHTML = `[ ${texto.value.length} ]`

        /* ALTERA A COR DA BORDA DO INPUT */
        texto.style.border = '2px solid red'
        texto.style.borderRadius = '3px'

        /* IMPRIME NA TELA MENSAGEM PARA O USAURIO */
        if(texto.value.length < 30) {
            validandoTexto.innerHTML = 'O texto esta muito curto.'

        }else {
            validandoTexto.innerHTML = 'O texto esta muito extenso, maximo 200 caracteres.'
        
        }

        //validandoTexto.innerHTML = 'O texto esta muito extenso, maximo 200 caracteres.'
        validandoTexto.style.color = 'red'
        validandoTexto.style.display = 'block'
        validandoTexto.style.width = '98%'
        validandoTexto.style.padding = '1%'
        validandoTexto.style.border = 'none'

        /* VALIDA CAMPO */
        textoOk = false

    }else {
        /* IMPRIME NA TELA A QUANTIDADE DE CARACTERES DIGITADOS */
        contadorTexto.setAttribute('style', 'color: green;')
        contadorTexto.innerHTML = `[ ${texto.value.length} ]`

        /* ALTERA A COR DA BORDA DO INPUT */
        texto.setAttribute('style', 'border: 2px solid green; border-radius: 3px;')
        //texto.style.borderRadius = '3px'

        /* RETIRA O TEXTO PARA O USUARIO */
        validandoTexto.style.display = 'none'

        /* VALIDA CAMPO */
        textoOk = true

    }

})

/* VALIDA CAMPO BOTAO */
botao.addEventListener('click', () => {
    /* CASO TODOS OS CAMPOS ESTEJAM PREENCHIDOS CORRETAMENTE */
    if(nomeOk && emailOk && textoOk && (texto.value.length >= 30)) {
        alert('Agradecemos seu contato '+ nome.value)
    
    }else {
        /* CASO OS CARACTERES DA MENSAGEM SEJA INFERIOR A 30 E OS DEMAIS CAMPOS ESTEJAM PREENCHIDOS CORRETAMENTE*/
        if(nomeOk && emailOk && texto.value.length < 30) {
            alert('Preencha no minimo 30 caracteres')
            
        /* CASO OS DADOS NAO ESTEJAM PREENCHIDOS CORRETAMENTE */
        }else {
            alert('Preencha corretamente o fomulario antes de envialo')
        }
    }

})