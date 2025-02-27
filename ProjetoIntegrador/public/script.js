document.addEventListener('DOMContentLoaded', function () {
    // Carregar estabelecimentos quando a página for carregada
    fetch('/estabelecimentos/api')
      .then(response => response.json())
      .then(estabelecimentos => {
        const container = document.getElementById('estabelecimentos');
        estabelecimentos.forEach(estabelecimento => {
          const div = document.createElement('div');
          div.classList.add('col-md-4', 'mb-4');
          div.innerHTML = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${estabelecimento.nome}</h5>
                <p class="card-text"><strong>Endereço:</strong> ${estabelecimento.endereco}</p>
                <p class="card-text"><strong>Telefone:</strong> ${estabelecimento.telefone}</p>
              </div>
            </div>
          `;
          container.appendChild(div);
        });
      })
      .catch(error => console.error('Erro ao carregar estabelecimentos:', error));
  });
  