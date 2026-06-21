// ================= DADOS (simulação) =================
const usuario = {
  nome: "Yuri",
  username: "@yuri123",
  email: "yuri@email.com"
};

// ================= RENDER =================
document.getElementById("nome").innerText = usuario.nome;
document.getElementById("usuario").innerText = usuario.username;
document.getElementById("inputNome").value = usuario.nome;
document.getElementById("inputEmail").value = usuario.email;

// ================= FOTO =================
const uploadPic = document.getElementById('uploadPic');
const profilePic = document.getElementById('profilePic');

uploadPic.addEventListener('change', function(){
  const file = this.files[0];

  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      profilePic.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});