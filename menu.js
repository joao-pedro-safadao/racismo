document.addEventListener('DOMContentLoaded', function () {
    const menu = `
<body>
    <nav id="navizin">
        <div>
            <a href="index.html"><img src="racismo.png" title="Inicio" class="imagem"></a>
        </div>
        <input type="checkbox" id="Button">
        <label for="Button" id="Button-label"></label> <!-- Botão para mobile -->
        <ul id="ul1" class="OptionsMenu">
            <li class="OptionMenu">
                <a href="oqracismo.html" class="LinkMenu"><p>O que é Racismo?</p></a>
            </li>
            <li class="OptionMenu">
                <a href="funciona.html" class="LinkMenu"><p>Como funciona o Futebol?</p></a>
            </li>
            <li class="OptionMenu">
                <a href="existe.html" class="LinkMenu"><p>Existe Racismo no futebol?</p></a>
            </li>
            <li class="OptionMenu" id="maisOpcoes">
                <p>Jogadores</p>
                <ul class="SubOptionsMenu" id="subOptions">
                    <li class="SubOptionMenu">
                        <a href="jog1.html" class="LinkMenu"><p>Vinícius Jr.</p></a>
                    </li>
                    <li class="SubOptionMenu">
                        <a href="jog2.html" class="LinkMenu"><p>Daniel Alves</p></a>
                    </li>
                    <li class="SubOptionMenu">
                        <a href="jog3.html" class="LinkMenu"><p>Hulk</p></a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <style>
#navizin{
    background-color: green;
    margin: 0;
    display: flex;
}
p{
    margin: 0;
    padding: 2vh 0;
}
a{
    color:black;
    text-decoration: none;
}

#ul1 {
    list-style: none; 
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.OptionsMenu{
    justify-content: space-evenly;
    width:100%;
    margin: 0;
    display:flex;
    cursor:pointer;
}
.OptionMenu{
    box-shadow: 0 0 4px black;
    width: 20vw;
    text-align: center;
    border-radius: 10px;
    transition: all 0.3s;
    background: linear-gradient(to bottom, #228B22, #00FF00);
    margin-right: 10px; 
}
.OptionMenu:hover{
    font-size: 2.6vh;
    text-shadow: 0 0 2px black;
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
.SubOptionsMenu {
    display: none;
    flex-direction: column;
    padding: 0;
    margin: 0;
}
.SubOptionMenu {
    background: linear-gradient(to bottom, #228B22, #00FF00);
    color: black;
    box-shadow: 0 0 4px black;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    margin-top: 1vh;
}
.SubOptionMenu:hover {
    background: lightgray;
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
    .OptionsMenu{
    display:none;}
    #ul1 {
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

    document.getElementById('maisOpcoes').addEventListener('click', function() {
        const subOptions = document.getElementById('subOptions');
        if (subOptions.style.display === 'none' || subOptions.style.display === '') {
            subOptions.style.display = 'flex';
        } else {
            subOptions.style.display = 'none';
        }
    });

    function readAloud() {
        const content = document.getElementById('container').innerText;
        const speech = new SpeechSynthesisUtterance(content);
        const voices = window.speechSynthesis.getVoices();
        
        // Escolha a voz desejada
        const selectedVoice = voices.find(voice => voice.name === 'Google português do Brasil'); 
        
        if (selectedVoice) {
            speech.voice = selectedVoice;
        }

        speech.lang = 'pt-BR'; // Define o idioma para português do Brasil
        window.speechSynthesis.speak(speech);
    }

    // Aguarde as vozes serem carregadas
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
});
