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
// 720 e 110 são os limites superior e inferior do campo para os jogadores azuis
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
  const campo = document.getElementById("campo").getBoundingClientRect();
  const bola = document.getElementById("bola");
  let posicaoXBola = 440; // Posições iniciais da bola
  let posicaoYBola = 355;
  let direcaoBolaX = 1; // Direção inicial
  let direcaoBolaY = 1;
  let velocidadeXBola = 10; // Determina o nivel de velocidade da bola
  let velocidadeYBola = 10;
  const raioBola = 22; // Raio e seu diâmetro
  const retanguloBola = bola.getBoundingClientRect();
  const jogadoresAzuis = [ // Vetor que guarda os jogadores azuis para teste de colisão
    document.getElementById("jogadoraz1"),
    document.getElementById("jogadoraz2"),
    document.getElementById("jogadoraz3"),
    document.getElementById("jogadoraz4"),
    document.getElementById("jogadoraz5"),
    document.getElementById("jogadoraz6"),
    document.getElementById("jogadoraz7"),
    document.getElementById("jogadoraz8"),
    document.getElementById("jogadoraz9")
  ];
  const dimensoesJogadoresAzuis = jogadoresAzuis.map(jogador => jogador.getBoundingClientRect());
  
  const jogadoresVermelhos = [ // Vetor que guarda os jogadores vermelhos para teste de colisão
    document.getElementById("jogadorverm1"),
    document.getElementById("jogadorverm2"),
    document.getElementById("jogadorverm3"),
    document.getElementById("jogadorverm4"),
    document.getElementById("jogadorverm5"),
    document.getElementById("jogadorverm6"),
    document.getElementById("jogadorverm7"),
    document.getElementById("jogadorverm8"),
    document.getElementById("jogadorverm9")
  ];
  const dimensoesJogadoresVermelhos = jogadoresVermelhos.map(jogador2 => jogador2.getBoundingClientRect());


  // Move a bola e faz os testes de colisão, atualizando a posição dela a cada 50 milissegundos
  setInterval(function() {
    posicaoXBola += velocidadeXBola; // Movimenta a bola inicialmente
    posicaoYBola += velocidadeYBola;

    // Verifica colisão da bola com as paredes laterais do campo
    if (posicaoXBola + raioBola > 890 || posicaoXBola - raioBola < 10) {
      velocidadeXBola = -velocidadeXBola;
    }

    // Verifica colisão da bola com as paredes esquerda e direita do campo
    if (posicaoYBola + raioBola > 710 || posicaoYBola - raioBola < 10) {
      velocidadeYBola = -velocidadeYBola;
    }
	

for (let i = 0; i < jogadoresAzuis.length; i++) {  // Testa colisão da bola com jogadores azuis
  const raioJogador = 22;	
  const jogadorAtual = jogadoresAzuis[i].getBoundingClientRect();
  const centroBolaX = posicaoXBola + raioBola;
  const centroBolaY = posicaoYBola + raioBola;
  const centroJogadorX = jogadorAtual.left - campo.left + raioJogador;
  const centroJogadorY = jogadorAtual.top - campo.top + raioJogador;
  const distanciaX = Math.abs(centroBolaX - centroJogadorX);
  const distanciaY = Math.abs(centroBolaY - centroJogadorY);
  
  // Verifica colisão na direção horizontal
  if (distanciaX < raioBola + raioJogador && distanciaY < raioBola + raioJogador) {
    if (centroBolaX < centroJogadorX) { // colisão na esquerda
      velocidadeXBola *= -1;
    } else { // colisão na direita
      velocidadeXBola *= -1;
    }
  }
  
  // Verifica colisão na direção vertical
  if (distanciaX < raioBola + raioJogador && distanciaY < raioBola + raioJogador) {
    if (centroBolaY < centroJogadorY) { // colisão acima
      velocidadeYBola *= -1; 
    } else { // colisão abaixo
      velocidadeYBola *= -1;
    }
  }
}

for (let i = 0; i < jogadoresVermelhos.length; i++) { // Testa colisão da bola com jogadores vermelhos
  const raioJogador = 18;	
  const jogadorAtualV = jogadoresVermelhos[i].getBoundingClientRect();
  const centroBolaX = posicaoXBola + raioBola;
  const centroBolaY = posicaoYBola + raioBola;
  const centroJogadorVX = jogadorAtualV.left - campo.left + raioJogador;
  const centroJogadorVY = jogadorAtualV.top - campo.top + raioJogador;
  const distanciaVX = Math.abs(centroBolaX - centroJogadorVX);
  const distanciaVY = Math.abs(centroBolaY - centroJogadorVY);
  
  // Verifica colisão na direção horizontal
  if (distanciaVX < raioBola + raioJogador && distanciaVY < raioBola + raioJogador) {
    if (centroBolaX < centroJogadorVX) { // colisão na esquerda
      velocidadeXBola *= -1;
    } else { // colisão na direita
      velocidadeXBola *= -1;
    }
  }
  
  // Verifica colisão na direção vertical
  if (distanciaVX < raioBola + raioJogador && distanciaVY < raioBola + raioJogador) {
    if (centroBolaY < centroJogadorVY) { // colisão acima
      velocidadeYBola *= -1;	  
    } else { // colisão abaixo
      velocidadeYBola *= -1;
    }
  }
}

	      // Atualiza a posição da bola
    bola.style.left = posicaoXBola + "px";
    bola.style.bottom = posicaoYBola + "px";

  }, 30);
}


// Função de movimentação dos jogadores vermelhos
function movimentajogadoresvermelhos() {
const jogadorVermelho2 = document.getElementById("jogadorverm2"); 
let posicaoJogadorVermelho2 = 320;

  document.addEventListener("keydown", function(event) {
    event.preventDefault();

    const campo = document.getElementById("campo");

    if (event.key === "w" && posicaoJogadorVermelho2 < 519) {
      posicaoJogadorVermelho2 += 8;
      jogadorVermelho2.style.bottom = posicaoJogadorVermelho2 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho2 > 160) {
      posicaoJogadorVermelho2 -= 8;
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
      posicaoJogadorVermelho3 += 8;
      jogadorVermelho3.style.bottom = posicaoJogadorVermelho3 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho3 > 440) {
      posicaoJogadorVermelho3 -= 8;
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
      posicaoJogadorVermelho1 += 8;
      jogadorVermelho1.style.bottom = posicaoJogadorVermelho1 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho1 > 300) {
      posicaoJogadorVermelho1 -= 8;
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
      posicaoJogadorVermelho6 += 8;
      jogadorVermelho6.style.bottom = posicaoJogadorVermelho6 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho6 > 560) {
      posicaoJogadorVermelho6 -= 8;
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
      posicaoJogadorVermelho5 += 8;
      jogadorVermelho5.style.bottom = posicaoJogadorVermelho5 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho5 > 160) {
      posicaoJogadorVermelho5 -= 8;
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
      posicaoJogadorVermelho4 += 8;
      jogadorVermelho4.style.bottom = posicaoJogadorVermelho4 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho4 > 370) {
      posicaoJogadorVermelho4 -= 8;
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
      posicaoJogadorVermelho8 += 8;
      jogadorVermelho8.style.bottom = posicaoJogadorVermelho8 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho8 > 160) {
      posicaoJogadorVermelho8 -= 8;
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
      posicaoJogadorVermelho9 += 8;
      jogadorVermelho9.style.bottom = posicaoJogadorVermelho9 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho9 > 560) {
      posicaoJogadorVermelho9 -= 8;
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
      posicaoJogadorVermelho7 += 8;
      jogadorVermelho7.style.bottom = posicaoJogadorVermelho7 + "px";
    } else if (event.key === "s" && posicaoJogadorVermelho7 > 310) {
      posicaoJogadorVermelho7 -= 8;
      jogadorVermelho7.style.bottom = posicaoJogadorVermelho7 + "px";
    }

    posicaoJogadorVermelho7 = parseInt(jogadorVermelho7.style.bottom);
  });
}


function detectagol() { // Função que detecta gol para o time vermelho ou azul
  var balizaesq = document.getElementById("balizaesq");
  var balizadir = document.getElementById("balizadir");
  let balizaesqX = 5;
  let balizadirX = 850;
  let balizaesqY1 = 320;
  let balizaesqY2 = 415;
  let balizadirY1 = 370;
  let balizadirY2 = 460;
  const bola = document.getElementById("bola");
  let posicaoXBola = 440; // Posições iniciais da bola
  let posicaoYBola = 355;
  let golsvermelho = 0;
  let golsazul = 0;

  // Verifica se a bola está dentro da baliza esquerda
  if (posicaoXBola < balizaesqX && posicaoYBola > balizaesqY1 &&
      posicaoYBola < balizaesqY2) {
    // Incrementa o placar do time vermelho
	golsvermelho += 1;
    document.getElementById("resultadotimevermelho").innerHTML = "Time Vermelho: " +golsvermelho;
	const somGol = new Audio("somdegol.mp3"); // Constante que guarda o som de fundo
  }
  // Verifica se a bola está dentro da baliza direita
  else if (posicaoXBola > balizadirX && posicaoYBola > balizadirY1 &&
      posicaoYBola < balizadirY2) {
    // Incrementa o placar do time azul
	golsazul += 1;
    document.getElementById("resultadotimeazul").innerHTML = "Time Azul: " +golsazul;
	const somGol = new Audio("somdegol.mp3");
  }
}