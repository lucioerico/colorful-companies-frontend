// Get all form data
const form = document.getElementById('fields-form');
const cancelButton = document.querySelector('.cancel-button');
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements["name"];
    const email = form.elements["email"];
    const cpf = form.elements["cpf"];
    const address = form.elements["address"];
    const city = form.elements["city"];
    const password = form.elements["password"];
    const confirmPassword = form.elements["confirm-password"];

    //Fields validation
    if (name.value === "") {
        displayMessage("error", "O Campo 'Nome' é obrigatório.");
    } else if (email.value === "") {
        displayMessage("error", "O Campo 'E-mail' é obrigatório.");
    } else if (cpf.value === "") {
        displayMessage("error", "O Campo 'CPF' é obrigatório.");
    } else if (city.values === "") {
        displayMessage("error", "O Campo 'Cidade' é obrigatório.");
    } else if (address.values === "") {
        displayMessage("error", "O Campo 'Endereço' é obrigatório.");
    } else if (password.value === "") {
        displayMessage("error", "O Campo 'Senha' é obrigatório.");
    } else if (password.value !== confirmPassword.value) {
        displayMessage("error", "A confirmação da senha é inválida.");
    } else {

        // HTTP Request
        fetch('http://localhost:3000/addPerson', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': "application/json"
            },

            body: JSON.stringify(        {
                "name": name.value,
                "cpf": cpf.value,
                "city": city.value,
                "address": address.value,
                "password": password.value,
                "email": email.value,
            }),
        })
        .then(response => {
            if(response.ok) {
                displayMessage("success", "Cadastro efetuado com sucesso!")
                setTimeout(() => window.location.replace("../login/index.html"), 3000);        
            } else {
                response.json().then(json => displayMessage("error", json.error))
            }
        })
        .catch(error => {
            console.error("Erro no cadastro: ", error)
            displayMessage("error", "Ocorreu um erro interno, tente novamente mais tarde")
        });
    }
});

cancelButton.addEventListener('click', (event) => window.location.href = "../login/index.html" );

function displayMessage(type, message) {
    if (type === 'error') {
        errorMessage.innerHTML = message;
        errorMessage.style.display = "flex";
    } else if (type === 'success') {
        successMessage.innerHTML = message;
        successMessage.style.display = "flex";
    }
}
