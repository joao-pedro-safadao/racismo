// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const menu = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Responsivo</title>
    <style>
        body {
            background-color: white;
            margin: 0;
        }
        a {
            text-decoration: none;
            color: black;
        }
        .um {
            background: rgb(120, 49, 153);
            color: black;
        }
        #dois {
            background: rgb(0, 255, 255);
            color: black;
        }
        ul {
            list-style: none; 
            padding: 0;
            display: flex;
            justify-content: flex-end; /* Alinha os itens à direita */
            align-items: center;
        }
        .divracismo {
            font-size: 150px;
            text-align: center;
            color: steelblue;
            background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        #pracismo {
            color: black;
            text-align: justify;
            font-size: 25px;
            padding: 0px 5px;
            margin: 5px 100px;
        }
        nav {
            background-color: #0a647a;
            padding: 0 20px;
            justify-content: space-between;
            align-items: center;
            display: flex;
        }
        .roboto-condensed {
            font-family: "Roboto Condensed", sans-serif;
            font-optical-sizing: auto;
            font-weight: normal;
            font-style: normal;
        }
        .p3 {
            color: black;
        }
        p:hover, a:hover {
            color: rgb(218, 218, 0);
            transition: 1s;
        }
        li {
            padding: 0 20px;
        }
        img:hover {
            transform: rotateY(180deg);
        }
        .imagem {
            width: 120px;
        }
        .imagem:hover {
            width: 140px;
            transition: 1s;
        }
        #menu-toggle-label {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
            padding: 10px;
        }
        #menu-toggle {
            display: none;
        }
        @media (max-width: 700px) {
            nav {
                flex-direction: column;
                align-items: flex-start;
            }
            #menu-toggle-label {
                display: block;
            }
            ul {
                display: none;
                flex-direction: column;
                width: 100%;
            }
            #menu-toggle:checked + #menu-toggle-label::before {
                content: "✕"; /* Muda o ícone para "X" */
            }
            #menu-toggle:not(:checked) + #menu-toggle-label::before {
                content: "☰"; /* Ícone de menu */
            }
            #menu-toggle:checked + #menu-toggle-label + ul {
                display: flex; /* Mostra o menu quando o checkbox é marcado */
            }
            .imagem:hover {
                width: 120px; /* Remove o efeito hover em dispositivos móveis */
            }
            li {
                padding: 10px 0;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div>
            <a href="index.html"><img src="racismo.png" title="Inicio" class="imagem"></a>
        </div>
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" id="menu-toggle-label"></label> <!-- Botão para mobile -->
        <ul>
            <li>
                <p><a href="oqracismo.html" class="roboto-condensed">O que é Racismo?</a></p>
            </li>
            <li>
                <p><a href="funciona.html" class="roboto-condensed">Como funciona o Futebol?</a></p>
            </li>
            <li>
                <p><a href="existe.html" class="roboto-condensed">Existe Racismo no futebol?</a></p>
            </li>
        </ul>
    </nav>
</body>
</html>

    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
});
