const funcaoCriaNovoBody = () => {
  const velhoBody = document.getElementById("velhoBody");
  const criaNovoBody = document.createElement("div");
  criaNovoBody.setAttribute("id", "novoBody");
  velhoBody.append(criaNovoBody);
};

const funcaoCriaNovissimoBody = () => {
  const novoBody = document.getElementById("novoBody");
  const criaNovissimoBody = document.createElement("div");
  criaNovissimoBody.setAttribute("id", "novissimoBody");
  novoBody.append(criaNovissimoBody);
};

const adicionaEventoImprimir = () => {
  const inputNome = document.getElementById("inputNome");
  const inputMasculino = document.getElementById("inputMasculino");
  const inputFeminino = document.getElementById("inputFeminino");

  const btn_imprimir = document.getElementById("btn_imprimir");
  btn_imprimir.addEventListener("click", () => {
    const armazenaNome = inputNome.value.toUpperCase();
    if (inputNome.value == "") {
      alert("Preencha o campo nome");
    } else if (inputNome.value.length < 3) {
      alert("O nome deve conter pelo menos 3 letras");
    } else if (inputMasculino.checked) {
      const novoBody = document.getElementById("novoBody");
      const novissimoBody = document.getElementById("novissimoBody");
      funcaoCriaCertificadoImpressao();
      const nomeCrianca = document.getElementById("nomeCrianca");
      nomeCrianca.innerHTML = inputNome.value.toUpperCase();
      novissimoBody.remove();
      window.print();
      novoBody.remove();
      funcaoCriaNovoBody();
      funcaoCriaNovissimoBody();
      funcaoCriaMenu();
      funcaoCriaMain();
      const inputMasculino = document.getElementById("inputMasculino");
      inputMasculino.checked = true;
      funcaoCriaCertificadoAmostra();
      funcaoRecuperaNome(armazenaNome);
      funcaoCriaFooter();
    } else if (inputFeminino.checked) {
      const novoBody = document.getElementById("novoBody");
      const novissimoBody = document.getElementById("novissimoBody");
      funcaoCriaCertificadoImpressao();
      const nomeCrianca = document.getElementById("nomeCrianca");
      nomeCrianca.innerHTML = inputNome.value.toUpperCase();
      novissimoBody.remove();
      window.print();
      novoBody.remove();
      funcaoCriaNovoBody();
      funcaoCriaNovissimoBody();
      funcaoCriaMenu();
      funcaoCriaMain();
      const inputFeminino = document.getElementById("inputFeminino");
      inputFeminino.checked = true;
      inputNome.value = armazenaNome;
      funcaoCriaCertificadoAmostra();
      funcaoRecuperaNome(armazenaNome);
      funcaoCriaFooter();
    } else {
      alert("Escolha um gênero");
    }
  });
};

const funcaoRecuperaNome = (armazenaNome) => {
  const inputNome = document.getElementById("inputNome");
  inputNome.value = armazenaNome;
  const nomeCrianca = document.querySelector(".nomeCrianca");
  nomeCrianca.innerHTML = armazenaNome;
};

const funcaoCriaMain = () => {
  const novissimoBody = document.getElementById("novissimoBody");

  const criaMain = document.createElement("main");
  novissimoBody.append(criaMain);

  const criaEntradaDados = document.createElement("section");
  criaEntradaDados.setAttribute("id", "entradaDados");
  criaMain.append(criaEntradaDados);

  const criaH1 = document.createElement("h1");
  criaH1.innerHTML = "Gerador Certificado 1";
  criaEntradaDados.append(criaH1);

  const criaP = document.createElement("p");
  criaP.innerHTML = "Preencha os campos abaixo:";
  criaEntradaDados.append(criaP);

  const criaDivInputWrapper1 = document.createElement("div");
  criaDivInputWrapper1.setAttribute("class", "inputWrapper");
  criaEntradaDados.append(criaDivInputWrapper1);

  const criaLabel1 = document.createElement("label");
  criaLabel1.setAttribute("for", "inputNome");
  criaLabel1.setAttribute("class", "labelInputNome");
  criaLabel1.innerHTML = "Nome:";
  criaDivInputWrapper1.append(criaLabel1);

  const criaInput1 = document.createElement("input");
  criaInput1.setAttribute("type", "text");
  criaInput1.setAttribute("id", "inputNome");
  criaDivInputWrapper1.append(criaInput1);

  const criaDivGeneros = document.createElement("div");
  criaDivGeneros.setAttribute("id", "generos");
  criaEntradaDados.append(criaDivGeneros);

  const criaDivInputWrapper2 = document.createElement("div");
  criaDivInputWrapper2.setAttribute("class", "inputWrapper");
  criaDivGeneros.append(criaDivInputWrapper2);

  const criaLabel2 = document.createElement("label");
  criaLabel2.setAttribute("for", "inputMasculino");
  criaLabel2.setAttribute("class", "inputGenero");
  criaDivInputWrapper2.append(criaLabel2);

  const criaInput2 = document.createElement("input");
  criaInput2.setAttribute("type", "radio");
  criaInput2.setAttribute("id", "inputMasculino");
  criaInput2.setAttribute("class", "inputRadio");
  criaInput2.setAttribute("name", "genero");
  criaLabel2.append(criaInput2);

  const criaSpan1 = document.createElement("span");
  criaSpan1.innerHTML = "Masculino";
  criaLabel2.append(criaSpan1);

  const criaDivInputWrapper3 = document.createElement("div");
  criaDivInputWrapper3.setAttribute("class", "inputWrapper");
  criaDivGeneros.append(criaDivInputWrapper3);

  const criaLabel3 = document.createElement("label");
  criaLabel3.setAttribute("for", "inputFeminino");
  criaLabel3.setAttribute("class", "inputGenero");
  criaDivInputWrapper3.append(criaLabel3);

  const criaInput3 = document.createElement("input");
  criaInput3.setAttribute("type", "radio");
  criaInput3.setAttribute("id", "inputFeminino");
  criaInput3.setAttribute("class", "inputRadio");
  criaInput3.setAttribute("name", "genero");
  criaLabel3.append(criaInput3);

  const criaSpan2 = document.createElement("span");
  criaSpan2.innerHTML = "Feminino";
  criaLabel3.append(criaSpan2);

  const criaDivBtnImprimir = document.createElement("div");
  criaDivBtnImprimir.setAttribute("id", "divBtnImprimir");
  criaEntradaDados.append(criaDivBtnImprimir);

  adicionaEventoCriaCertificadoAmostra();

  const criaBtn_imprimir = document.createElement("button");
  criaBtn_imprimir.setAttribute("id", "btn_imprimir");
  criaBtn_imprimir.innerHTML = "Imprimir certificado";
  criaDivBtnImprimir.append(criaBtn_imprimir);

  adicionaEventoImprimir();

  const criaPreVisualizacao = document.createElement("section");
  criaPreVisualizacao.setAttribute("id", "preVisualizacao");
  criaMain.append(criaPreVisualizacao);

  const criaH2 = document.createElement("h2");
  criaH2.innerHTML = "Pré-visualização:";
  criaPreVisualizacao.append(criaH2);
};

const funcaoCriaFooter = () => {
  const novissimoBody = document.getElementById("novissimoBody");
  const criaFooter = document.createElement("footer");
  novissimoBody.append(criaFooter);

  const criaDivNexten = document.createElement("div");
  criaDivNexten.setAttribute("id", "divNexten");
  criaFooter.append(criaDivNexten);

  const criaANexten = document.createElement("a");
  criaANexten.setAttribute(
    "href",
    "https://bra.ifsp.edu.br/projetos-alunos/nexten-tads/pg_nexten.php"
  );
  criaDivNexten.append(criaANexten);

  const criaImagemNexten = document.createElement("img");
  criaImagemNexten.setAttribute("src", "./images/logo_nexten.png");
  criaImagemNexten.setAttribute("id", "imagemNexten");
  criaImagemNexten.setAttribute(
    "alt",
    "Logotipo do Núcleo de estudo da Curricularização da Extensão TADS"
  );
  criaANexten.append(criaImagemNexten);

  const criaDivIfsp = document.createElement("div");
  criaDivIfsp.setAttribute("id", "divIfsp");
  criaFooter.append(criaDivIfsp);

  const criaAIfsp = document.createElement("a");
  criaAIfsp.setAttribute("href", "https://bra.ifsp.edu.br/");
  criaDivIfsp.append(criaAIfsp);

  const criaImagemIfsp = document.createElement("img");
  criaImagemIfsp.setAttribute("id", "imagemIfsp");
  criaImagemIfsp.setAttribute("src", "./images/logo_ifsp.png");
  criaImagemIfsp.setAttribute(
    "alt",
    "Logotipo do Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - Câmpus Bragança Paulista"
  );
  criaAIfsp.append(criaImagemIfsp);

  const criaDivAutores = document.createElement("div");
  criaDivAutores.setAttribute("id", "autores");
  criaFooter.append(criaDivAutores);

  const criaH3 = document.createElement("h3");
  criaH3.innerHTML = "Créditos do Site";
  criaDivAutores.append(criaH3);

  const criaP1 = document.createElement("p");
  criaP1.innerHTML = "<strong>Desenvolvido por:</strong>";
  criaDivAutores.append(criaP1);

  const criaUl1 = document.createElement("ul");
  criaDivAutores.append(criaUl1);

  const criaLi1Ul1 = document.createElement("li");
  criaLi1Ul1.innerHTML = "Arthur Brenneisem Dias de Souza";
  criaUl1.append(criaLi1Ul1);

  const criaLi2Ul1 = document.createElement("li");
  criaLi2Ul1.innerHTML = "Gustavo de Oliveira Silva";
  criaUl1.append(criaLi2Ul1);

  const criaLi3Ul1 = document.createElement("li");
  criaLi3Ul1.innerHTML = "Lybio Croton de Moraes Junior";
  criaUl1.append(criaLi3Ul1);

  const criaLi4Ul1 = document.createElement("li");
  criaLi4Ul1.innerHTML = "Matheus Mota Gomes Florencio";
  criaUl1.append(criaLi4Ul1);

  const criaP2 = document.createElement("p");
  criaP2.innerHTML = "<strong>Professor:</strong>";
  criaDivAutores.append(criaP2);

  const criaUl2 = document.createElement("ul");
  criaDivAutores.append(criaUl2);

  const criaLi1Ul2 = document.createElement("li");
  criaLi1Ul2.innerHTML = "Rafael da Silva Muniz";
  criaUl2.append(criaLi1Ul2);

  const criaP3 = document.createElement("p");
  criaP3.innerHTML = "<strong>Curso:</strong>";
  criaDivAutores.append(criaP3);

  const criaUl3 = document.createElement("ul");
  criaDivAutores.append(criaUl3);

  const criaLi1Ul3 = document.createElement("li");
  criaLi1Ul3.innerHTML = "Tecnologia em Análise e Desenvolvimento de Sistemas";
  criaUl3.append(criaLi1Ul3);

  const criaP4 = document.createElement("p");
  criaP4.innerHTML = "<strong>Disciplina:</strong>";
  criaDivAutores.append(criaP4);

  const criaUl4 = document.createElement("ul");
  criaDivAutores.append(criaUl4);

  const criaLi1Ul4 = document.createElement("li");
  criaLi1Ul4.innerHTML =
    "Extensão como Metodologia de Ensino 2 - 2º semestre de 2023";
  criaUl4.append(criaLi1Ul4);

  const criaP5 = document.createElement("p");
  criaP5.innerHTML = "<strong>Instituição:</strong>";
  criaDivAutores.append(criaP5);

  const criaUl5 = document.createElement("ul");
  criaDivAutores.append(criaUl5);

  const criaLi1Ul5 = document.createElement("li");
  criaLi1Ul5.innerHTML =
    "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - Câmpus Bragança Paulista";
  criaUl5.append(criaLi1Ul5);

  const criaP6 = document.createElement("p");
  criaP6.innerHTML = "<strong>Demanda atendida gratuitamente pelo:</strong>";
  criaDivAutores.append(criaP6);

  const criaUl6 = document.createElement("ul");
  criaDivAutores.append(criaUl6);

  const criaLi1Ul6 = document.createElement("li");
  criaLi1Ul6.innerHTML =
    "Núcleo de Estudo da Curricularização da Extensão TADS";
  criaUl6.append(criaLi1Ul6);
};

const adicionaEventoMobileMenuIcon = () => {
  const hamburgerButton = document.getElementById("hamburgerButton");
  hamburgerButton.addEventListener("click", () => {
    const menuMobile = document.querySelector(".mobileMenu");

    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      document.querySelector(".icon").src = "./images/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add("open");
      document.querySelector(".icon").src = "./images/close_white_36dp.svg";
    }
  });
};

const funcaoCriaMenu = () => {
  const novissimoBody = document.getElementById("novissimoBody");
  const criaHeader = document.createElement("header");
  novissimoBody.append(criaHeader);

  const criaNav = document.createElement("nav");
  criaNav.setAttribute("class", "menu");
  criaHeader.append(criaNav);

  const criaDivLogo = document.createElement("div");
  criaDivLogo.setAttribute("class", "logo");
  criaNav.append(criaDivLogo);

  const criaALogo = document.createElement("a");
  criaALogo.setAttribute("href", "https://www.pequenosguerreiros.org.br/wp/");
  criaALogo.setAttribute("class", "linkLogo");
  criaDivLogo.append(criaALogo);

  const criaImagemLogo = document.createElement("img");
  criaImagemLogo.setAttribute("src", "./images/logo_pequenos_guerreiros.png");
  criaImagemLogo.setAttribute("id", "imagemLogo");
  criaImagemLogo.setAttribute("alt", "Logotipo do Pequenos Guerreiros");
  criaALogo.append(criaImagemLogo);

  const criaDivNavList = document.createElement("div");
  criaDivNavList.setAttribute("class", "navList");
  criaNav.append(criaDivNavList);

  const criaUl = document.createElement("ul");
  criaDivNavList.append(criaUl);

  const criaLi1 = document.createElement("li");
  criaLi1.setAttribute("class", "navItem");
  criaUl.append(criaLi1);

  const criaA1 = document.createElement("a");
  criaA1.setAttribute("href", "https://www.pequenosguerreiros.org.br/wp/");
  criaA1.innerHTML = "Home";
  criaA1.setAttribute("class", "navLink");
  criaLi1.append(criaA1);

  const criaLi2 = document.createElement("li");
  criaLi2.setAttribute("class", "navItem");
  criaUl.append(criaLi2);

  const criaA2 = document.createElement("a");
  criaA2.setAttribute("href", "./index.html");
  criaA2.innerHTML = "Certificado 1";
  criaA2.setAttribute("class", "navLink");
  criaLi2.append(criaA2);

  // const criaLi3 = document.createElement("li");
  // criaLi3.setAttribute("class", "navItem");
  // criaUl.append(criaLi3);

  // const criaA3 = document.createElement("a");
  // criaA3.setAttribute("href", "./pages/certificado2.html");
  // criaA3.innerHTML = "Certificado 2";
  // criaA3.setAttribute("class", "navLink");
  // criaLi3.append(criaA3);

  // const criaLi4 = document.createElement("li");
  // criaLi4.setAttribute("class", "navItem");
  // criaUl.append(criaLi4);

  // const criaA4 = document.createElement("a");
  // criaA4.setAttribute("href", "./pages/certificado3.html");
  // criaA4.innerHTML = "Certificado 3";
  // criaA4.setAttribute("class", "navLink");
  // criaLi4.append(criaA4);

  const criaDivMobileMenuIcon = document.createElement("div");
  criaDivMobileMenuIcon.setAttribute("class", "mobileMenuIcon");
  criaNav.append(criaDivMobileMenuIcon);

  const criaBotao = document.createElement("button");
  criaBotao.setAttribute("id", "hamburgerButton");
  criaDivMobileMenuIcon.append(criaBotao);

  const criaImagemIcon = document.createElement("img");
  criaImagemIcon.setAttribute("class", "icon");
  criaImagemIcon.setAttribute("src", "./images/menu_white_36dp.svg");
  criaBotao.append(criaImagemIcon);

  const criaDivMobileMenu = document.createElement("div");
  criaDivMobileMenu.setAttribute("class", "mobileMenu");
  criaHeader.append(criaDivMobileMenu);

  const criaUlMobile = document.createElement("ul");
  criaDivMobileMenu.append(criaUlMobile);

  const criaLi1Mobile = document.createElement("li");
  criaLi1Mobile.setAttribute("class", "navItem");
  criaUlMobile.append(criaLi1Mobile);

  const criaA1Mobile = document.createElement("a");
  criaA1Mobile.setAttribute(
    "href",
    "https://www.pequenosguerreiros.org.br/wp/"
  );
  criaA1Mobile.innerHTML = "Home";
  criaA1Mobile.setAttribute("class", "navLink");
  criaLi1Mobile.append(criaA1Mobile);

  const criaLi2Mobile = document.createElement("li");
  criaLi2Mobile.setAttribute("class", "navItem");
  criaUlMobile.append(criaLi2Mobile);

  const criaA2Mobile = document.createElement("a");
  criaA2Mobile.setAttribute("href", "./index.html");
  criaA2Mobile.innerHTML = "Certificado 1";
  criaA2Mobile.setAttribute("class", "navLink");
  criaLi2Mobile.append(criaA2Mobile);

  // const criaLi3Mobile = document.createElement("li");
  // criaLi3Mobile.setAttribute("class", "navItem");
  // criaUlMobile.append(criaLi3Mobile);

  // const criaA3Mobile = document.createElement("a");
  // criaA3Mobile.setAttribute("href", "./pages/certificado2.html");
  // criaA3Mobile.innerHTML = "Certificado 2";
  // criaA3Mobile.setAttribute("class", "navLink");
  // criaLi3Mobile.append(criaA3Mobile);

  // const criaLi4Mobile = document.createElement("li");
  // criaLi4Mobile.setAttribute("class", "navItem");
  // criaUlMobile.append(criaLi4Mobile);

  // const criaA4Mobile = document.createElement("a");
  // criaA4Mobile.setAttribute("href", "./pages/certificado3.html");
  // criaA4Mobile.innerHTML = "Certificado 3";
  // criaA4Mobile.setAttribute("class", "navLink");
  // criaLi4Mobile.append(criaA4Mobile);

  adicionaEventoMobileMenuIcon();
};

const funcaoCriaCertificadoAmostra = () => {
  const inputMasculino = document.getElementById("inputMasculino");
  const inputFeminino = document.getElementById("inputFeminino");

  if (inputMasculino.checked) {
    const preVisualizacao = document.getElementById("preVisualizacao");
    preVisualizacao.remove();

    const main = document.querySelector("main");
    const criaPreVisualizacao = document.createElement("section");
    criaPreVisualizacao.setAttribute("id", "preVisualizacao");
    main.append(criaPreVisualizacao);

    const criaH2 = document.createElement("h2");
    criaH2.innerHTML = "Pré-visualização:";
    criaPreVisualizacao.append(criaH2);

    const criaDivPreVisualizacaoMenino = document.createElement("div");
    criaDivPreVisualizacaoMenino.setAttribute("id", "preVisualizacaoMenino");
    criaPreVisualizacao.append(criaDivPreVisualizacaoMenino);

    const criaCertificadoAmostra = document.createElement("img");
    criaCertificadoAmostra.setAttribute("alt", "Certificado masculino");
    criaCertificadoAmostra.setAttribute(
      "src",
      "./images/certificado1_menino.png"
    );
    criaDivPreVisualizacaoMenino.append(criaCertificadoAmostra);

    const criaDivNomeMenino = document.createElement("div");
    criaDivNomeMenino.setAttribute("id", "divNomeMenino");
    criaDivPreVisualizacaoMenino.append(criaDivNomeMenino);

    const criaSpan = document.createElement("span");
    criaSpan.setAttribute("class", "nomeCrianca");
    criaDivNomeMenino.append(criaSpan);

    const inputNome = document.getElementById("inputNome");

    criaSpan.innerHTML = inputNome.value.toUpperCase();

    adicionaEventoTecla();
  } else if (inputFeminino.checked) {
    const preVisualizacao = document.getElementById("preVisualizacao");
    preVisualizacao.remove();

    const main = document.querySelector("main");
    const criaPreVisualizacao = document.createElement("section");
    criaPreVisualizacao.setAttribute("id", "preVisualizacao");
    main.append(criaPreVisualizacao);

    const criaH2 = document.createElement("h2");
    criaH2.innerHTML = "Pré-visualização:";
    criaPreVisualizacao.append(criaH2);

    const criaDivPreVisualizacaoMenina = document.createElement("div");
    criaDivPreVisualizacaoMenina.setAttribute("id", "preVisualizacaoMenina");
    criaPreVisualizacao.append(criaDivPreVisualizacaoMenina);

    const criaCertificadoAmostra = document.createElement("img");
    criaCertificadoAmostra.setAttribute("alt", "Certificado feminino");
    criaCertificadoAmostra.setAttribute(
      "src",
      "./images/certificado1_menina.png"
    );
    criaDivPreVisualizacaoMenina.append(criaCertificadoAmostra);

    const criaDivNomeMenina = document.createElement("div");
    criaDivNomeMenina.setAttribute("id", "divNomeMenina");
    criaDivPreVisualizacaoMenina.append(criaDivNomeMenina);

    const criaSpan = document.createElement("span");
    criaSpan.setAttribute("class", "nomeCrianca");
    criaDivNomeMenina.append(criaSpan);

    const inputNome = document.getElementById("inputNome");

    criaSpan.innerHTML = inputNome.value.toUpperCase();

    adicionaEventoTecla();
  } else {
    const preVisualizacao = document.getElementById("preVisualizacao");

    const criaDivPreVisualizacaoMenino = document.createElement("div");
    criaDivPreVisualizacaoMenino.setAttribute("id", "preVisualizacaoMenino");
    preVisualizacao.append(criaDivPreVisualizacaoMenino);

    const criaCertificadoAmostra = document.createElement("img");
    criaCertificadoAmostra.setAttribute("alt", "Certificado masculino");
    criaCertificadoAmostra.setAttribute(
      "src",
      "./images/certificado1_menino.png"
    );
    criaDivPreVisualizacaoMenino.append(criaCertificadoAmostra);

    const criaDivNomeMenino = document.createElement("div");
    criaDivNomeMenino.setAttribute("id", "divNomeMenino");
    criaDivPreVisualizacaoMenino.append(criaDivNomeMenino);

    const criaSpan = document.createElement("span");
    criaSpan.setAttribute("class", "nomeCrianca");
    criaDivNomeMenino.append(criaSpan);

    const inputNome = document.getElementById("inputNome");

    criaSpan.innerHTML = inputNome.value.toUpperCase();

    adicionaEventoTecla();
  }
};

const funcaoCriaCertificadoImpressao = () => {
  const inputMasculino = document.getElementById("inputMasculino");

  if (inputMasculino.checked) {
    const novoBody = document.getElementById("novoBody");
    const criaCertificadoImpressao = document.createElement("img");
    criaCertificadoImpressao.setAttribute(
      "src",
      "./images/certificado1_menino.png"
    );
    novoBody.append(criaCertificadoImpressao);

    const criaDivNomeMeninoImpressao = document.createElement("div");
    criaDivNomeMeninoImpressao.setAttribute("id", "divNomeMeninoImpressao");
    novoBody.append(criaDivNomeMeninoImpressao);

    const criaSpan = document.createElement("span");
    criaSpan.setAttribute("id", "nomeCrianca");
    criaDivNomeMeninoImpressao.append(criaSpan);
  } else {
    const novoBody = document.getElementById("novoBody");
    const criaCertificadoImpressao = document.createElement("img");
    criaCertificadoImpressao.setAttribute(
      "src",
      "./images/certificado1_menina.png"
    );
    novoBody.append(criaCertificadoImpressao);

    const criaDivNomeMeninaImpressao = document.createElement("div");
    criaDivNomeMeninaImpressao.setAttribute("id", "divNomeMeninaImpressao");
    novoBody.append(criaDivNomeMeninaImpressao);

    const criaSpan = document.createElement("span");
    criaSpan.setAttribute("id", "nomeCrianca");
    criaDivNomeMeninaImpressao.append(criaSpan);
  }
};

const adicionaEventoCriaCertificadoAmostra = () => {
  const inputRadio = [...document.querySelectorAll(".inputRadio")];

  inputRadio.map((el) => {
    el.addEventListener("click", () => {
      funcaoCriaCertificadoAmostra();
    });
  });
};

const adicionaEventoTecla = () => {
  const inputNome = document.getElementById("inputNome");
  const nomeCrianca = document.querySelector(".nomeCrianca");

  inputNome.addEventListener("input", (evt) => {
    let nomeSujo = evt.target.value.toUpperCase();
    const limpaNome = evt.target.value
      .replace(/[^a-zA-ZáàâãéèêíïóôõúçÁÀÂÃÉÈÊÍÏÓÔÕÚÇ\s]/g, "")
      .toUpperCase();

    const nomeLimpo = limpaNome.replace(/\s+/g, " ");

    if (nomeLimpo != limpaNome) {
      alert("Não é permitido usar mais de um espaço para separar nomes");
      inputNome.value = nomeLimpo;
      limpaNome = inputNome.value;
    }

    if (nomeSujo != limpaNome) {
      nomeSujo = limpaNome;
      nomeCrianca.innerHTML = limpaNome;
      inputNome.value = nomeCrianca.innerHTML;
      alert("Caractere inválido");
    } else {
      nomeCrianca.innerHTML = limpaNome;
      inputNome.value = nomeCrianca.innerHTML;
    }

    if (inputNome.value.length > 32) {
      alert("Máximo de 32 caracteres atingido");
      nomeCrianca.innerHTML = nomeCrianca.innerHTML.slice(0, 32);
      inputNome.value = nomeCrianca.innerHTML;
    }

    if (inputNome.value.charAt(0) === " ") {
      inputNome.value = inputNome.value.trim();
      nomeCrianca.innerHTML = inputNome.value;
    }
  });
};

funcaoCriaNovoBody();
funcaoCriaNovissimoBody();
funcaoCriaMenu();
funcaoCriaMain();
funcaoCriaCertificadoAmostra();
funcaoCriaFooter();
