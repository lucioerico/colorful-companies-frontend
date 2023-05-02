// Armazena uma referência ao formulário
const form = document.getElementById('form');

// Armazena uma referência aos campos do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmarSenha').value;
    const data = {
        name,
        cpf,
        email,
        city,
        address,
        password,
        confirmPassword
    };

    fetch('http://localhost:3000/addPerson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});