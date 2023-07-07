function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "renanpqd" && password === "renan") {
      alert("Login com sucesso!");
    } else {
      alert("Usuário ou Senha incorretos!");
    }
  }