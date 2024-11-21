// menu.js
document.addEventListener('DOMContentLoaded', function () {
    const menu = `
<body>
    <nav id="navizin">
        <div>
            <a href="index.html"><img src="racismo.png" title="Inicio" class="imagem"></a>
        </div>
        <input type="checkbox" id="Button">
        <label for="Button" id="Button-label"></label> <!-- Botão para mobile -->
        <ul class="OptionsMenu">
            <li class="OptionMenu">
                <a href="oqracismo.html" class="LinkMenu"><p>O que é Racismo?</p></a>
            </li>
            <li class="OptionMenu">
                <a href="funciona.html" class="LinkMenu"><p>Como funciona o Futebol?</p></a>
            </li>
            <li class="OptionMenu">
                <a href="existe.html" class="LinkMenu"><p>Existe Racismo no futebol?</p></a>
            </li>
        </ul>
    </nav>
    <style>
#navizin{
    background-color: blue;
    margin: 0;
    display: flex;
}
p{
margin: 0;
padding: 2vh 0;}
.OptionsMenu{
    justify-content: space-evenly;
    width:100%;
    margin: 0;
}
.OptionMenu{
    box-shadow: 0 0 10px black;
    width: 20vw;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s;
    background: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
}
.OptionMenu:hover{
    font-size: 2.6vh;
    text-shadow: 0 0 2px black;
    scale: 1.2;
    background: linear-gradient(to bottom, white, white, white);
    box-shadow: 0 0 100px white;
}
img:hover {
    transform: rotateZ(360deg);
}
.imagem {
    width: 10vw;
}
.imagem:hover {
    transition: 1s;
}
#Button-label {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    padding: 10px;
}
#Button {
    display: none;
}

    @media (max-width: 670px) {
    #navizin {
        flex-direction: column;
        position: fixed;
        transition: all 0.5s;
        background-color: #0a647a;
        align-items: center;
        display: flex;
        padding: 0 2vh;
        border: 0.5vh solid black;
        box-shadow: 0 0 20px black;
        border-radius: 10px;
        margin-top: -5vh;
        z-index: 10000;
    }
        #navizin:hover{
        margin-top: 0vh;
        }
    #Button-label {
        display: block;
    }
.OptionMenu {
    padding: 1vh 3vw;
    font-size: 2vh;
    font-weight: bold;
    border-radius: 20px;
    transition: all 0.3s;
    box-shadow: 0 0 5px black;
    margin: 3vh;
    width: 80%;
}
    ul {
        display: none;
        flex-direction: column;
    }
    #Button:checked + #Button-label::before {
        content: "✕"; 
    }
    #Button:not(:checked) + #Button-label::before {
        content: "☰";
    }
    #Button:checked + #Button-label + ul{
        display: flex;
    }
    .imagem:hover {
        width: 120px; 
    }
}
    </style>
</body>

    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
});