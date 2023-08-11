function validate() {
    var username = document.querySelector("input#text").value;
    var password = document.getElementById("input#password").value;
    if (username === "renanpqd" && password === "renan1607") {
      alert("Login com sucesso!");
    } else {
      alert("Usuário ou Senha incorretos!");
    }
  }