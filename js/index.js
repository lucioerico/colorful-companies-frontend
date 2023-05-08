const ultimasAvaliacoes = document.querySelector('#last-ratings');

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
	ultimasAvaliacoes.innerHTML = '';

	fetch(`${URL}/ratings`)
		.then(response => response.json())
		.then(ratings => {
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

atualizaAvaliacoes();

const form = document.querySelector('form');

const searchOrganization = async (name) => {
	const response = await fetch(`${URL}/organizations?name=${name}`);
	const empresas = await response.json();
	return empresas;
};

const empresaList = document.getElementById('empresa-list');

document.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('#avaliar');

	modal.addEventListener('shown.bs.modal', async function() {
		const name = document.getElementById('empresa-list').value;
		const empresas = await searchOrganization(name);
		const empresaList = document.getElementById('empresa-list');

		let selectOrganizationOption = document.createElement("option");
		empresaList.innerHTML = '';
		selectOrganizationOption.append('Selecione uma empresa')
		selectOrganizationOption.setAttribute('disabled', true);
		selectOrganizationOption.setAttribute('selected', true);
		empresaList.append(selectOrganizationOption)
		empresas.forEach((empresa) => {
			const option = document.createElement('option');
			option.innerText = empresa.name;
			option.setAttribute('data-organization-id', empresa.id);
			option.addEventListener('click', () => {
				document.getElementById('empresa-list').value = empresa.name;
				empresaList.innerHTML = '';
				this.dataset.organizationId = empresa.id
				document.getElementById('organizationId').value = empresa.id;
			});

			empresaList.appendChild(option);
		});
	});
});

form.addEventListener('submit', async (event) => {
	event.preventDefault();

	const title = document.getElementById('tituloAvaliacao').value;
	const review = document.getElementById('avaliacao').value;
	const score = document.querySelector('input[name="star"]:checked');

	if (!title || !review || !score) {
		const errorMessage = document.createElement('div');
		errorMessage.textContent = `Todos os campos são obrigatórios. Por favor, verifique o preenchimento e tente novamente.`;
		errorMessage.classList.add('error-message');

		form.insertBefore(errorMessage, form.firstChild);

		return;
	}
	const personId = "cc765d0e-810d-483d-87c0-274349eb5628";
	const organizationId = form.elements['empresa-list'].options[form.elements['empresa-list'].selectedIndex].getAttribute('data-organization-id');

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
			score: score.value,
			dateRate
		})
	});

	const rating = await response.json();
	form.reset()

	const successModal = document.createElement('div');
	successModal.classList.add('modal', 'fade');
	successModal.setAttribute('id', 'successModal');
	successModal.setAttribute('tabindex', '-1');
	successModal.setAttribute('aria-labelledby', 'successModalLabel');
	successModal.setAttribute('aria-hidden', 'true');
	successModal.innerHTML = `
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p class="sucessfull-sent">Avaliação enviada com sucesso!</p>
                </div>
                <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-rated btn-size"
            data-bs-dismiss="modal">Fechar</button>
        </div>
            </div>
        </div>
    `;

	document.body.appendChild(successModal);

	const modal = new bootstrap.Modal(document.getElementById('successModal'));
	modal.show();

	const avaliarModal = document.getElementById('avaliar');
	const bootstrapModal = bootstrap.Modal.getInstance(avaliarModal);
	bootstrapModal.hide();

	atualizaAvaliacoes();
});

const removeError = () => {
	const errorMessage = form.querySelector('.error-message');
	if (errorMessage) {
		errorMessage.remove();
	}
}
form.addEventListener('input', () => {
	removeError()
});

const resetForm = () => {
	removeError()
	form.reset()
}