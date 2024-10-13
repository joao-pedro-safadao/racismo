// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const menu = `
    <style>
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
    justify-content: space-between;
    align-items: center;
    display: flex; /* Certifica-se de que os itens sejam exibidos */
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
    display: flex; /* Certifica-se de que os itens sejam exibidos */
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
    #menu-toggle-label:focus + ul,
    #menu-toggle-label:hover + ul {
        display: flex; /* Mostra o menu */
    }
    ul:hover, ul:focus-within {
        display: flex;
    }
    li {
        padding: 10px 0;
    }
    .imagem:hover
    {
        width: 120px; /* Remove o efeito hover em dispositivos móveis */
    }
}
</style>

<nav>
    <div>
        <a href="index.html"><img src="racismo.png" title="Inicio" class="imagem"></a>
    </div>
    <label id="menu-toggle-label">☰</label> <!-- Botão para mobile -->
    <ul>
        <li>
            <p class="p3"><a href="oqracismo.html" class="roboto-condensed">O que é Racismo?</a></p>
        </li>
        <li>
            <p><a href="funciona.html" class="roboto-condensed">Como funciona o Futebol?</a></p>
        </li>
        <li>
            <p><a href="existe.html" class="roboto-condensed">Existe Racismo no futebol?</a></p>
        </li>
    </ul>
</nav>


    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
});
