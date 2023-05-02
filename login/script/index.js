function fazerLogin() {
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    const jsonData = {
        email: emailInput.value,
        senha: passwordInput.value
    };

    fetch('http://localhost:3000/findLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('success-message').style.display = 'block';
            } else {
                response.text().then(mensagem => {
                    const messageContainer = document.getElementById('message-container');
                    messageContainer.innerHTML = mensagem;
                    messageContainer.style.display = 'block';
                });
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao tentar fazer login:', error);
            alert('Ocorreu um erro ao tentar fazer login!');
        });
}

function mostrarFormularioCadastro() {
    const formCadastro = document.getElementById('formCadastroCliente');
    formCadastro.style.display = 'block';
}

const loginForm = document.getElementById('fields-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fazerLogin();
});

const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', mostrarFormularioCadastro);