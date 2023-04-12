// Armazena uma referência à div ultimas-avaliacoes
const ultimasAvaliacoes = document.querySelector('#last-ratings');

// Função para atualizar a div container teste com as últimas avaliações
const URL = "http://localhost:3000"

function generateStarRating(score) {
    const stars = ['<i class="far fa-star"></i>', '<i class="fas fa-star-half-alt"></i>', '<i class="fas fa-star"></i>'];
    const scoreFloor = Math.floor(score);
    const scoreDiff = score - scoreFloor;
    let html = '';
    for (let i = 0; i < scoreFloor; i++) {
      html += stars[2];
    }
    if (scoreDiff >= 0.5) {
      html += stars[1];
    }
    const remaining = 5 - scoreFloor - (scoreDiff >= 0.5 ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
      html += stars[0];
    }
    return html;
  }
  

function atualizaAvaliacoes() {
    // Limpa a div container teste
    ultimasAvaliacoes.innerHTML = '';

    // Faz uma requisição para obter as últimas avaliações
    fetch(`${URL}/ratings`)
        .then(response => response.json())
        .then(ratings => {
            // Para cada avaliação, cria um novo elemento HTML e adiciona à div ultimas-avaliacoes
            ratings.forEach(rating => {
                const date = new Date(rating.createdAt);
                const options = {
                    day: "2-digit",
                    month: "long"
                };
                const formattedDate = date.toLocaleDateString("pt-BR", options);

                const ratingElement = document.createElement("div");
                ratingElement.classList.add("ratings");
                ratingElement.innerHTML =
                    `
                    <p>${rating.Organizations[0].name}<p>
                    <p>${rating.Organizations[0].amountOfReviews} Avaliações</p>
                    <p>"${rating.title}"</p>
                    <p>Avaliado em ${formattedDate}</p>
                    <div class="star-rating">
                        ${generateStarRating(rating.score)}
                    </div>
                    <p>${rating.review}</p>
                `;
                ultimasAvaliacoes.appendChild(ratingElement);
            });
    
        })
        .catch(error => {
            console.log(error);
        });
    }    

// Chama a função para carregar as avaliações iniciais
atualizaAvaliacoes();


const form = document.querySelector('form');

const searchOrganization = async (name) => {
    const response = await fetch(`${URL}/organizations?name=${name}`);
    const empresas = await response.json();
    return empresas;
};


const empresaList = document.getElementById('empresa-list');

document.getElementById('razaoSocialAvaliacao').addEventListener('keyup', async function() {
    const name = this.value;
    const empresas = await searchOrganization(name);
    if (name.length >= 3) {
        empresaList.innerHTML = '';
        empresas.forEach((empresa) => {
            const li = document.createElement('option');
            li.innerText = empresa.name;
            li.addEventListener('click', () => {
                this.value = empresa.name;
                empresaList.innerHTML = '';
                this.dataset.organizationId = empresa.id; // Adiciona o id ao dataset do input
                console.log('this.dataset.OrganizationID', this.dataset.organizationId);
            });
            empresaList.appendChild(li);
        });
    } else {
        empresaList.innerHTML = '';
    }
});
// Adiciona um event listener para o botão de enviar a avaliação
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const personId = "cc765d0e-810d-483d-87c0-274349eb5628";
    const organizationId = form.elements['razaoSocialAvaliacao'].dataset.organizationId;
    const title = document.getElementById('tituloAvaliacao').value;
    const review = document.getElementById('avaliacao').value;
    const score = document.querySelector('input[name="star"]:checked').value;
    const dateRate = new Date().toISOString();

    const response = await fetch(`${URL}/addRating`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personId,
            organizationId,
            title,
            review,
            score,
            dateRate
        })
    });

    const rating = await response.json();
    form.reset()

    // Chama a função para atualizar a div container teste com as novas avaliações
    atualizaAvaliacoes();
});