function fazerLogin() {
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');

    let jsonData = {
        email: emailInput.value,
        password: passwordInput.value
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
                window.location.href = "../index.html"
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

// TODO: colocar o redirecionamento do código para página de cadastro
const registerButton = document.getElementById('register-button');
registerButton.addEventListener('click', function () {
    window.location.href = "../cadastro.html"; // altere 'cadastrar.html' pelo nome da sua página de cadastro
});