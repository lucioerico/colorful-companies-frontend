// Get all form data
const form = document.getElementById('fields-form');
const errorMessage = document.getElementById("error-message");

form.addEventListener('submit', async (event) => {
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
        displayError("O Campo 'Nome' é obrigatório.");
    } else if (email.value === "") {
        displayError("O Campo 'E-mail' é obrigatório.");
    } else if (cpf.value === "") {
        displayError("O Campo 'CPF' é obrigatório.");
    } else if (city.values === "") {
        displayError("O Campo 'Cidade' é obrigatório.");
    } else if (address.values === "") {
        displayError("O Campo 'Endereço' é obrigatório.");
    } else if (password.value === "") {
        displayError("O Campo 'Senha' é obrigatório.");
    } else if (password.value !== confirmPassword.value) {
        displayError("A confirmação da senha é inválida.");
    } else {

        try {
            // HTTP Request
            const response = await fetch('http://localhost:3000/addPerson', {
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
            });
            
            const result = await response.json();
            
            //redirect
            alert("Cadastrado!")            
        } catch (error) {
            //handle error
            console.log(error);
            displayError("Ocorreu um erro, tente mais tarde")
        }
    }
});

function displayError(message) {
    errorMessage.innerHTML = message;
    errorMessage.style.display = "flex";
}
