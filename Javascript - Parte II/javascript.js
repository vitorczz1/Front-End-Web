var alunos = [];

const tabela_aluno = document.getElementById('tabela_aluno');
const btnCadastrar = document.getElementById('btnCadastrar');
const btnListarAlunos = document.querySelector('#btnListarAlunos');

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const ra = document.getElementById('ra').value;
    const idade = document.getElementById('idade').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;

    alunos.push(factoryAluno(nome, ra, idade, endereco, telefone, email, sexo));
});

btnListarAlunos.addEventListener('click', (event) => {
    event.preventDefault();

    while (tabela_aluno.firstChild) {
        tabela_aluno.removeChild(tabela_aluno.lastChild);
    }

    buildAllStudents(alunos);
})

const factoryAluno = (nome, ra, idade, endereco, telefone, email, sexo) => {
    return {
        nome,
        ra,
        idade,
        endereco,
        telefone,
        email,
        sexo
    };
};

const buildStudent = (aluno_obj) => {
    const trElement = document.createElement('tr');

    Object.entries(aluno_obj).forEach(aluno => {
        const tdElement = document.createElement('td');
        const textTD = document.createTextNode(String(aluno[1]));

        tdElement.appendChild(textTD);
        trElement.appendChild(tdElement);
    });

    tabela_aluno.appendChild(trElement);
};

const buildAllStudents = (array) => {
    array.map(student => {

        const trElement = document.createElement('tr');

        Object.entries(student).forEach(item => {
            const tdElement = document.createElement('td');
            const textTD = document.createTextNode(String(item[1]));
            
            tdElement.appendChild(textTD);
            trElement.appendChild(tdElement);
        });
        tabela_aluno.appendChild(trElement);

        document.getElementById('nome').value='';
        document.getElementById('ra').value='';
        document.getElementById('idade').value='';
        document.getElementById('endereco').value='';
        document.getElementById('telefone').value='';
        document.getElementById('email').value='';
        document.getElementById('sexo').value='';
    });
};

function esconde(){
    document.getElementById("cadastrados").style.visibility = "hidden";
}

function tabela(){
    document.getElementById("cadastrados").style.visibility = "visible";
}