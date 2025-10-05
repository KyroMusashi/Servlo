function entrar() {
  const nome = document.getElementById('nome').value;
  if (nome.trim() !== "") {
    localStorage.setItem("usuario", nome);
    window.location.href = "home.html";
  } else {
    alert("Por favor, digite seu nome!");
  }
}

window.onload = function() {
  const usuario = localStorage.getItem("usuario");
  const spanUsuario = document.getElementById("usuario");
  if (usuario && spanUsuario) {
    spanUsuario.textContent = usuario;
  }
};