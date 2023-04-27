// Get all form data
const form = document.getElementById('fields-form');
const errorMessage = document.getElementById("error-message");

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = form.elements["name"];
    const email = form.elements["email"];
    const cpf = form.elements["cpf"];
    const telephone = form.elements["telephone"];
    const address = form.elements["address"];
    const password = form.elements["password"];
    const confirmPassword = form.elements["confirm-password"];

    //Fields validation
    if (name.value === "") {
        displayError("O Campo 'Nome' é obrigatório.");
    } else if (email.value === "") {
        displayError("O Campo 'E-mail' é obrigatório.");
    } else if (cpf.value === "") {
        displayError("O Campo 'CPF' é obrigatório.");
    } else if (telephone.value === "") {
        displayError("O Campo 'Telefone' é obrigatório.");
    } else if (address.values === "") {
        displayError("O Campo 'Endereço' é obrigatório.");
    } else if (password.value === "") {
        displayError("O Campo 'Senha' é obrigatório.");
    } else if (password.value !== confirmPassword.value) {
        displayError("A confirmação da senha é inválida.");
    } else {
        // Create object from form target data
    
        //const formData = Object.fromEntries(event.target);
    
        try {
            // HTTP Request
            const response = await fetch('http://localhost:3000/addPerson', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': "application/json"
                },
                // body: JSON.stringify(formData)

                // test
                body: JSON.stringify({
                    "name": name.value,
                    "cpf": cpf.value,
                    "email": email.value,
                }),
            });
            
            const result = await response.json();
            console.log(result);
            
            //redirect
            alert("Cadastrado!")            
        } catch (error) {
            displayError("Ocorreu um erro, tente mais tarde")
            
            //handle error
            console.log(error);
        }
    }
});

function displayError(message) {
    errorMessage.innerHTML = message;
    errorMessage.style.display = "flex";
}
