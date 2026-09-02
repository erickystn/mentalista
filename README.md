# 🔮 Mentalista — Jogo de Adivinhação em JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Alura](https://img.shields.io/badge/Imersão_Dev-Alura-0070BA?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

---

## 🔗 Demonstração e Execução

* **Arquivo Principal:** `index.html` (executável diretamente em qualquer navegador moderno)
* **Público e Contexto:** Projeto didático desenvolvido durante a **Imersão Dev** da **Alura**

---

## 📖 Visão Geral

O **Mentalista** é uma aplicação web interativa em formato de jogo desenvolvida com **HTML5**, **CSS3** e **JavaScript puro**, criada para exercitar conceitos essenciais de lógica algorítmica, controle de fluxo condicional, tratamento de entradas de usuário e manipulação de estado do **DOM**.

No jogo, o sistema sorteia secretamente um número inteiro pseudoaleatório no intervalo entre **0 e 10**. O jogador dispõe de **3 tentativas** para acertar o valor, recebendo dicas automáticas a cada erro indicando se o número secreto é maior ou menor que o palpite fornecido.

---

## ✨ Funcionalidades e Regras de Jogo

* 🎲 **Sorteio Pseudoaleatório Seguro:** Geração dinâmica do número secreto a cada carregamento utilizando `Math.random() * 11` truncado para inteiro.
* 🎯 **Mecânica de Dicas Inteligentes:**
  * Informa se o palpite foi **maior** ou **menor** que o número sorteado.
  * Contagem regressiva informando quantas tentativas ainda restam em tempo real.
* 🛡️ **Validação de Entrada Defensiva:**
  * Bloqueio imediato de entradas vazias (`isNaN`) ou valores fora do espectro permitido ($< 0$ ou $> 10$), alertando o jogador sem consumir tentativas.
* 🔒 **Bloqueio de Interface ao Final da Partida:**
  * Ao acertar ou esgotar as 3 tentativas, o campo de texto é desabilitado (`disabled`).
  * O botão de ação altera dinamicamente seu rótulo para "Ver Resposta" e revela o número secreto em caso de derrota.

---

## 🎯 Diferenciais e Destaques Técnicos

1. **Vanilla JavaScript Sem Frameworks:** Toda a reatividade de interface (alteração de classes, inserção de mensagens e desativação de formulário) é feita através da API nativa do DOM (`document.getElementById`, `setAttribute`, `innerHTML`).
2. **Gerenciamento de Estado Simplificado:** Controle de ciclo de vida do jogo baseado em variáveis globais previsíveis (`numeroSecreto`, `tentativas`, `acertou`), garantindo legibilidade e fácil manutenção.
3. **Design Temático Imersivo:** Estilização com paleta escura moderna, tipografia importada via Google Fonts e layout centralizado.

---

## 🏗️ Estrutura do Repositório

```text
mentalista/
├── index.html          # Interface visual com contêiner, formulário e área de feedback
├── script.js           # Lógica do sorteio, validações, dicas e controle de tentativas
├── style.css           # Estilos visuais, fontes, background e componentes
└── README.md           # Documentação técnica consolidada do projeto
```

---

## 🎨 Fluxograma da Lógica do Jogo

```text
              [ Jogador Digita Palpite e Clica 'Chutar' ]
                                  │
                                  ▼
                     [ Valor é válido (0 a 10)? ]
                     /                          \
              (Não) v                            v (Sim)
      [ Exibe alerta de erro ]          [ Consome 1 tentativa ]
      [ Mantém tentativas ]                      │
                                                 ▼
                                        [ Acertou o número? ]
                                        /                   \
                                 (Sim) v                     v (Não)
                         [ Vitória! ]           [ Restam tentativas? ]
                         [ Desativa input ]     /                    \
                                         (Sim) v                      v (Não)
                                 [ Exibe dica: ]              [ Fim de Jogo! ]
                                 [ Maior ou Menor ]           [ Revela o número ]
```

---

## ⚙️ Como Executar

A aplicação não necessita de nenhuma instalação ou servidor Node.js prévio:

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/erickystn/mentalista.git
   cd mentalista
   ```
2. **Executar:**
   * Dê dois cliques diretamente no arquivo `index.html` para abri-lo em qualquer navegador web;
   * Ou utilize a extensão **Live Server** no VS Code.

---

## 💻 Trecho do Algoritmo em Destaque

Lógica central de validação e dicas em `script.js`:

```javascript
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (chute < 0 || chute > 10 || isNaN(chute)) {
    elementoResultado.innerHTML = "Digite numeros de 0 a 10";
    return;
  }

  if (tentativas > 0) {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Você Acertou!";
      tentativas = 0;
      acertou = true;
    } else {
      if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Você errou, o número é maior!<br>Você possui " + (tentativas - 1) + " tentativas restantes";
      } else {
        elementoResultado.innerHTML = "Você errou, o número é menor!<br>Você possui " + (tentativas - 1) + " tentativas restantes";
      }
    }
    tentativas--;
  }
}
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estruturação de cabeçalho, campos de formulário e container |
| **CSS3** | Layout centralizado, tipografia temática e estilização de botões |
| **JavaScript (ES6+)** | Lógica de sorteio, verificação de condições e controle de tentativas |

---

## 👤 Autor & 📄 Licença

Desenvolvido por **[Ericky Sant'ana](https://github.com/erickystn)** no âmbito da **Imersão Dev (Alura)**.

Distribuído sob a licença **MIT**.
