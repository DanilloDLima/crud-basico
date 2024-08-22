document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crudForm');
    const recordsContainer = document.getElementById('recordsContainer');
    let records = []; // Lista para armazenar os registros

    // Função para adicionar um novo registro
    function addRecord(nome, email, telefone) {
        const record = {
            nome: nome,
            email: email,
            telefone: telefone
        };
        records.push(record);
        displayRecords();
    }

    // Função para exibir os registros
    function displayRecords() {
        recordsContainer.innerHTML = ''; // Limpar container antes de exibir novos registros
        records.forEach((record, index) => {//percorre a constante record cada item, pegando tambem o index
            const recordDiv = document.createElement('div');
            recordDiv.classList.add('record');
            recordDiv.innerHTML = `
                <p>Nome: ${record.nome}</p>
                <p>Email: ${record.email}</p>
                <p>Telefone: ${record.telefone}</p>
                <button onclick="deleteRecord(${index})">Excluir</button>
            `;
            recordsContainer.appendChild(recordDiv);
        });
    }

    // Função para excluir um registro
    window.deleteRecord = function(index) {
        records.splice(index, 1); // Remove o registro da lista
        displayRecords(); // Atualiza a exibição dos registros
    };

    // Adiciona um ouvinte de evento para o formulário
    form.addEventListener('submit', (event) => {//captura o evento de submit do formulario
        event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Adiciona o registro e limpa o formulário
    addRecord(nome, email, telefone);
    form.reset(); // Limpa o formulário após o envio
    });
});
