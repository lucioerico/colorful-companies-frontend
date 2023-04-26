// Get all form data
const form = document.getElementById('fields-form');
const errorMessage = document.getElementById("error-message");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements["name"];
    const email = form.elements["email"];
    const telephone = form.elements["telephone"];
    const address = form.elements["address"];
    const password = form.elements["password"];
    const confirmPassword = form.elements["confirm-password"];


    if (name.value === "") {
        displayError("O Campo 'Nome' é obrigatório.");
    } else if (email.value === "") {
        displayError("O Campo 'E-mail' é obrigatório.");
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
        const formData = Object.fromEntries(event.target)
        register(formData)
    }
});

function displayError(message) {
    errorMessage.innerHTML = message;
    errorMessage.style.display = "flex";
}

function register(data) {
    console.log(data);
}