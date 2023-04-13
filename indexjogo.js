function jogar (){
  const somFundo = new Audio("campione2000.mp3"); // Constante que guarda o som de fundo
  // Chamadas as funções que compõem o game
  somFundo.play();	
  movimentajogadoresazuis();
  movimentabola();  
  movimentajogadoresvermelhos();
  detectagol();
}

function movimentajogadoresazuis(){ // Função de movimento dos jogadores azuis
// Monta a ação de movimento dos jogadores de defesa do timeazul
// 720 e 110 são os limites superior e inferior do campo
const jogadorAzul2 = document.getElementById("jogadoraz2"); 
let posicaoJogadorAzul2 = 590;

  document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul2 < 720) {
      posicaoJogadorAzul2 += 10;
      jogadorAzul2.style.bottom = posicaoJogadorAzul2 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul2 > 410) {
      posicaoJogadorAzul2 -= 10;
      jogadorAzul2.style.bottom = posicaoJogadorAzul2 + "px";
    }

    posicaoJogadorAzul2 = parseInt(jogadorAzul2.style.bottom);
  });
  
const jogadorAzul3 = document.getElementById("jogadoraz3");
let posicaoJogadorAzul3 = 270;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul3 < 440) {
      posicaoJogadorAzul3 += 10;
      jogadorAzul3.style.bottom = posicaoJogadorAzul3 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul3 > 110) {
      posicaoJogadorAzul3 -= 10;
      jogadorAzul3.style.bottom = posicaoJogadorAzul3 + "px";
    }

// Atualiza a posição dos jogadores de acordo com a coordenada bottom
    posicaoJogadorAzul3 = parseInt(jogadorAzul3.style.bottom);
  });
  
const jogadorAzul1 = document.getElementById("jogadoraz1");
let posicaoJogadorAzul1 = 420;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul1 < 600) {
      posicaoJogadorAzul1 += 10;
      jogadorAzul1.style.bottom = posicaoJogadorAzul1 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul1 > 300) {
      posicaoJogadorAzul1 -= 10;
      jogadorAzul1.style.bottom = posicaoJogadorAzul1 + "px";
    }

    posicaoJogadorAzul1 = parseInt(jogadorAzul1.style.bottom);
  });
  
  // Monta a ação dos jogadores de meio de campo do time azul
const jogadorAzul6 = document.getElementById("jogadoraz6");
let posicaoJogadorAzul6 = 420;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul6 < 550) {
      posicaoJogadorAzul6 += 10;
      jogadorAzul6.style.bottom = posicaoJogadorAzul6 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul6 > 260) {
      posicaoJogadorAzul6 -= 10;
      jogadorAzul6.style.bottom = posicaoJogadorAzul6 + "px";
    }

    posicaoJogadorAzul6 = parseInt(jogadorAzul6.style.bottom);
  });
  
const jogadorAzul5 = document.getElementById("jogadoraz5");
let posicaoJogadorAzul5 = 590;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul5 < 720) {
      posicaoJogadorAzul5 += 10;
      jogadorAzul5.style.bottom = posicaoJogadorAzul5 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul5 > 430) {
      posicaoJogadorAzul5 -= 10;
      jogadorAzul5.style.bottom = posicaoJogadorAzul5 + "px";
    }

    posicaoJogadorAzul5 = parseInt(jogadorAzul5.style.bottom);
  }); 

const jogadorAzul4 = document.getElementById("jogadoraz4");
let posicaoJogadorAzul4 = 270;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul4 < 400) {
      posicaoJogadorAzul4 += 10;
      jogadorAzul4.style.bottom = posicaoJogadorAzul4 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul4 > 110) {
      posicaoJogadorAzul4 -= 10;
      jogadorAzul4.style.bottom = posicaoJogadorAzul4 + "px";
    }

    posicaoJogadorAzul4 = parseInt(jogadorAzul4.style.bottom);
  });
// Monta o movimento dos jogadores de ataque do time azul
const jogadorAzul8 = document.getElementById("jogadoraz8");
let posicaoJogadorAzul8 = 590;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul8 < 720) {
      posicaoJogadorAzul8 += 10;
      jogadorAzul8.style.bottom = posicaoJogadorAzul8 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul8 > 430) {
      posicaoJogadorAzul8 -= 10;
      jogadorAzul8.style.bottom = posicaoJogadorAzul8 + "px";
    }

    posicaoJogadorAzul8 = parseInt(jogadorAzul8.style.bottom);
  });
  
const jogadorAzul9 = document.getElementById("jogadoraz9");
let posicaoJogadorAzul9 = 420;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul9 < 550) {
      posicaoJogadorAzul9 += 10;
      jogadorAzul9.style.bottom = posicaoJogadorAzul9 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul9 > 260) {
      posicaoJogadorAzul9 -= 10;
      jogadorAzul9.style.bottom = posicaoJogadorAzul9 + "px";
    }

    posicaoJogadorAzul9 = parseInt(jogadorAzul9.style.bottom);
  }); 

const jogadorAzul7 = document.getElementById("jogadoraz7");
let posicaoJogadorAzul7 = 270;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorAzul7 < 400) {
      posicaoJogadorAzul7 += 10;
      jogadorAzul7.style.bottom = posicaoJogadorAzul7 + "px";
    } else if (event.key === "s" && posicaoJogadorAzul7 > 110) {
      posicaoJogadorAzul7 -= 10;
      jogadorAzul7.style.bottom = posicaoJogadorAzul7 + "px";
    }

    posicaoJogadorAzul7 = parseInt(jogadorAzul7.style.bottom);
  });      
}


// Função que movimenta a bola
function movimentabola(){
  const bola = document.getElementById("bola");
  let posicaoXBola = 440; // Posições iniciais da bola
  let posicaoYBola = 355;
  let velocidadeXBola = 10; // Determina o nivel de velocidade da bola
  let velocidadeYBola = 10;
  const raioBola = 22; // Raio e seu diâmetro
      const bolaBounds = bola.getBoundingClientRect();
    const bolaX = bolaBounds.left + bolaBounds.width / 2;
    const bolaY = bolaBounds.bottom - bolaBounds.height / 2;
      const jogadorAzul1 = document.getElementById("jogadoraz1");
    const jogadorAzul2 = document.getElementById("jogadoraz2");
    const jogadorAzul3 = document.getElementById("jogadoraz3");
    const jogadorAzul4 = document.getElementById("jogadoraz4");
    const jogadorAzul5 = document.getElementById("jogadoraz5");
    const jogadorAzul6 = document.getElementById("jogadoraz6");
	const jogadorAzul7 = document.getElementById("jogadoraz7");
	const jogadorAzul8 = document.getElementById("jogadoraz8");
	const jogadorAzul9 = document.getElementById("jogadoraz9");
	const jogadorAzul1Dimensoes = jogadorAzul1.getBoundingClientRect();
    const jogadorAzul2Dimensoes = jogadorAzul2.getBoundingClientRect();
    const jogadorAzul3Dimensoes = jogadorAzul3.getBoundingClientRect();
    const jogadorAzul4Dimensoes = jogadorAzul4.getBoundingClientRect();
    const jogadorAzul5Dimensoes = jogadorAzul5.getBoundingClientRect();
    const jogadorAzul6Dimensoes = jogadorAzul6.getBoundingClientRect();
    const jogadorAzul7Dimensoes = jogadorAzul7.getBoundingClientRect();
	const jogadorAzul8Dimensoes = jogadorAzul8.getBoundingClientRect();
	const jogadorAzul9Dimensoes = jogadorAzul9.getBoundingClientRect();

  // Move a bola a cada 50 milissegundos
  setInterval(function() {
    posicaoXBola += velocidadeXBola;
    posicaoYBola += velocidadeYBola;


    // Verifica colisão com as paredes laterais do campo
    if (posicaoXBola + raioBola > 890 || posicaoXBola - raioBola < 10) {
      velocidadeXBola = -velocidadeXBola;
    }

    // Verifica colisão com as paredes esquerda e direita do campo
    if (posicaoYBola + raioBola > 710 || posicaoYBola - raioBola < 10) {
      velocidadeYBola = -velocidadeYBola;
    }
	
    // Atualiza a posição da bola
    bola.style.left = posicaoXBola + "px";
    bola.style.bottom = posicaoYBola + "px";
  }, 50);
}


// Função de movimentação dos jogadores vermelhos
function movimentajogadoresvermelhos() {
const jogadorVermelho2 = document.getElementById("jogadorverm2"); 
let posicaoJogadorVermelho2 = 320;

  document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho2 < 519) {
      posicaoJogadorVermelho2 += 10;
      jogadorVermelho2.style.bottom = posicaoJogadorVermelho2 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho2 > 160) {
      posicaoJogadorVermelho2 -= 10;
      jogadorVermelho2.style.bottom = posicaoJogadorVermelho2 + "px";
    }

    posicaoJogadorVermelho2 = parseInt(jogadorVermelho2.style.bottom);
  });
  
const jogadorVermelho3 = document.getElementById("jogadorverm3");
let posicaoJogadorVermelho3 = 620;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho3 < 780) {
      posicaoJogadorVermelho3 += 10;
      jogadorVermelho3.style.bottom = posicaoJogadorVermelho3 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho3 > 440) {
      posicaoJogadorVermelho3 -= 10;
      jogadorVermelho3.style.bottom = posicaoJogadorVermelho3 + "px";
    }

// Atualiza a posição dos jogadores de acordo com a coordenada bottom
    posicaoJogadorVermelho3 = parseInt(jogadorVermelho3.style.bottom);
  });
  
const jogadorVermelho1 = document.getElementById("jogadorverm1");
let posicaoJogadorVermelho1 = 470;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho1 < 670) {
      posicaoJogadorVermelho1 += 10;
      jogadorVermelho1.style.bottom = posicaoJogadorVermelho1 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho1 > 300) {
      posicaoJogadorVermelho1 -= 10;
      jogadorVermelho1.style.bottom = posicaoJogadorVermelho1 + "px";
    }

    posicaoJogadorVermelho1 = parseInt(jogadorVermelho1.style.bottom);
  });
  
  // Monta a ação dos jogadores de meio de campo do time azul
const jogadorVermelho6 = document.getElementById("jogadorverm6");
let posicaoJogadorVermelho6 = 660;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho6 < 780) {
      posicaoJogadorVermelho6 += 10;
      jogadorVermelho6.style.bottom = posicaoJogadorVermelho6 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho6 > 560) {
      posicaoJogadorVermelho6 -= 10;
      jogadorVermelho6.style.bottom = posicaoJogadorVermelho6 + "px";
    }

    posicaoJogadorVermelho6 = parseInt(jogadorVermelho6.style.bottom);
  });
  
const jogadorVermelho5 = document.getElementById("jogadorverm5");
let posicaoJogadorVermelho5 = 320;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho5 < 490) {
      posicaoJogadorVermelho5 += 10;
      jogadorVermelho5.style.bottom = posicaoJogadorVermelho5 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho5 > 160) {
      posicaoJogadorVermelho5 -= 10;
      jogadorVermelho5.style.bottom = posicaoJogadorVermelho5 + "px";
    }

    posicaoJogadorVermelho5 = parseInt(jogadorVermelho5.style.bottom);
  }); 

const jogadorVermelho4 = document.getElementById("jogadorverm4");
let posicaoJogadorVermelho4 = 470;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho4 < 640) {
      posicaoJogadorVermelho4 += 10;
      jogadorVermelho4.style.bottom = posicaoJogadorVermelho4 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho4 > 370) {
      posicaoJogadorVermelho4 -= 10;
      jogadorVermelho4.style.bottom = posicaoJogadorVermelho4 + "px";
    }

    posicaoJogadorVermelho4 = parseInt(jogadorVermelho4.style.bottom);
  });
// Monta o movimento dos jogadores de ataque do time azul
const jogadorVermelho8 = document.getElementById("jogadorverm8");
let posicaoJogadorVermelho8 = 320;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho8 < 415) {
      posicaoJogadorVermelho8 += 10;
      jogadorVermelho8.style.bottom = posicaoJogadorVermelho8 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho8 > 160) {
      posicaoJogadorVermelho8 -= 10;
      jogadorVermelho8.style.bottom = posicaoJogadorVermelho8 + "px";
    }

    posicaoJogadorVermelho8 = parseInt(jogadorVermelho8.style.bottom);
  });
  
const jogadorVermelho9 = document.getElementById("jogadorverm9");
let posicaoJogadorVermelho9 = 660;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho9 < 780) {
      posicaoJogadorVermelho9 += 10;
      jogadorVermelho9.style.bottom = posicaoJogadorVermelho9 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho9 > 560) {
      posicaoJogadorVermelho9 -= 10;
      jogadorVermelho9.style.bottom = posicaoJogadorVermelho9 + "px";
    }

    posicaoJogadorVermelho9 = parseInt(jogadorVermelho9.style.bottom);
  }); 

const jogadorVermelho7 = document.getElementById("jogadorverm7");
let posicaoJogadorVermelho7 = 610;

    document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho7 < 590) {
      posicaoJogadorVermelho7 += 10;
      jogadorVermelho7.style.bottom = posicaoJogadorVermelho7 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho7 > 310) {
      posicaoJogadorVermelho7 -= 10;
      jogadorVermelho7.style.bottom = posicaoJogadorVermelho7 + "px";
    }

    posicaoJogadorVermelho7 = parseInt(jogadorVermelho7.style.bottom);
  });
}


function detectagol() {
let golTimeAzul = 0;
let golTimeVermelho = 0;
  const bola = document.getElementById("bola");
  const raioBola = 22;
  const balizaesqBounds = balizaesq.getBoundingClientRect();
  let posicaoXBola = 440;
  let posicaoYBola = 355;
  
  if (posicaoXBola <= 50 && posicaoYBola >= 287 && posicaoYBola <= 430) {
    // a bola tocou na baliza esquerda, adicione um gol para o time vermelho
    golTimeVermelho += 1;
    document.getElementById("resultadotimevermelho").innerHTML = "Time Vermelho: " + golTimeVermelho;
  } else if (posicaoXBola >= 810 && posicaoYBola >= 287 && posicaoYBola <= 430) {
    // a bola tocou na baliza direita, adicione um gol para o time azul
    golTimeAzul += 1;
    document.getElementById("resultadotimeazul").innerHTML = "Time Azul: " + golTimeAzul;
  }
}