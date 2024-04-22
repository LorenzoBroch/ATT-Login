const usuario = {
    nome: "lorenzo",
    senha: "abc"
}

function login() {
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value
    
    if((usuario.nome == nome) && (usuario.senha == senha)) {
        alert("autenticado")
        window.location.pathname = "/pagina2.html" //window.location.pathname para mudar a página e redirecionar a partir do nome da pagina'
    } else {
        alert("autenticação falhou")
        document.getElementById('nome').value = ""; //resetando o valor da lable para outra tentativa
        document.getElementById('senha').value = ""; //resetando o valor da lable para outra tentativa
        
    }
}
function mostrarResultado() {  //pego o elemento do ID de "usuarioNome" na pagina 2 e atribuo ele ao nome e a senha do usuario
    document.getElementById("usuarioNome").innerHTML = usuario.nome;
    document.getElementById("usuarioSenha").innerHTML = usuario.senha;
}

