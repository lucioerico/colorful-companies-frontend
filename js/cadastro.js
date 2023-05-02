// Armazena uma referência ao formulário
const form = document.getElementById('form');

// Armazena uma referência aos campos do formulário
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Adiciona um event listener para o botão de enviar o formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Realiza a validação dos campos do formulário
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }

    if (passwordInput.value.trim() === '') {
        isValid = false;
        passwordInput.classList.add('invalid');
    } else {
        passwordInput.classList.remove('invalid');
    }

    if (confirmPasswordInput.value.trim() === '' || confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        isValid = false;
        confirmPasswordInput.classList.add('invalid');
    } else {
        confirmPasswordInput.classList.remove('invalid');
    }

    // Se os campos estiverem válidos, envia os dados para o servidor
    if (isValid) {
        const response = await fetch('http://localhost:3000/addPerson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            })
        });

        const data = await response.json();

        // Redireciona o usuário para a página de login
        window.location.href = 'login.html';
    }
});
