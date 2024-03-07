function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
  }
  
  function show(nome) {
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if (nome && nome.trim() !== "") {
      div.style.display = "block";
      document.getElementById("exampleFormControlInput1").style.background =
        "none";
    } else {
      document.getElementById("error").style.display = "flex";
    }
  }
  
  function fechar() {
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background =
      "lightpink";
  }
  
  function calcularTotal() {
    var selectErrado = document.getElementById("selectErrado");
    var selecQuestion = document.getElementById("selecQuestion");
    var selectConv = document.getElementById("selectConv");
    var resultadoSpan = document.getElementById("resultado");
  
    var total = 0;
    var error = 0;
    var quest = 0;
    var conv = 0;
  
    switch (selectErrado.value) {
      case "Hackear uma escola":
        total += 2800.90;
        error = 2800.90;
        break;
      case "Hackear uma empresa":
        total += 8500.50;
        error = 8500.50;
        break;
      case "Hackear um amigo":
        total += 800.50;
        error = 800.50;
        break;
        case "Hackear algo a sua escolha":
        total += 9999.99;
        error = 9999.99;
        break;
    
    }
  
    switch (selecQuestion.value) {
      case "Criar propagandas falsas":
        total += 20.90;
        quest = 20.90;
        break;
      case "Criar jogos pay2win":
        total += 29.90;
        quest = 29.90;
        break;
      case "Gerar inscritos falsos para um canal":
        total += 30.50;
        quest = 30.50;
        break;
      case "Suco de laranjaGerar seguidores para redes sociais":
        total += 31.50;
        quest = 31.50;
        break;
    }
  
    switch (selectConv.value) {
      case "Resolver erro de codigo":
        total += 32.5;
        conv = 32.5;
        break;
      case "Fazer um site de segurança comum":
        total += 150.50;
        conv = 150.50;
        break;
      case "Fazer um jogo simples para computador":
        total += 150.00;
        conv = 150.00;
        break;
      case "Fazer um wallpaper (pc e celular) animado":
        total += 69.90;
        conv = 69.90;
        break;
    }
  
    document.getElementById("total").style.display = "flex";
    document.getElementById("error").innerHTML = error.toFixed(2);
    document.getElementById("quest").innerHTML = quest.toFixed(2);
    document.getElementById("conv").innerHTML = conv.toFixed(2);
  
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
  }
  
  function limpar() {
    document.getElementById("total").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectErrado").value = "Selecione um serviço";
    document.getElementById("selecQuestion").value = "Selecione um serviço";
    document.getElementById("selectConv").value = "Selecione um serviço";
  }