// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const menu = `
    <style>
    body
{
    background-color: white;
    margin :0
}
a{
    text-decoration:none;
    color : black;
    }
.um
{
    background: rgb(120, 49, 153);
    color: black;
}
#dois
{
    background: rgb(0, 255, 255);
    color: black;
}
ul
{
    list-style: none; 
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
}
nav
{
    background-color: #0a647a;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
}
.roboto-condensed {
  font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
.p3
{
    color: black;
}
p:hover,
a:hover {
color: rgb(218, 218, 0);
transition : 1s;
}
nav, ul 
{
    display: flex;
    flex-direction: row;
}
li
{
    padding: 0 20px;
}
button
{
    background-color: transparent;
    border: none;
    color: white;
    font-size: 36px;
    position: absolute ;
    right: 10px;
    top: 10px;
    display: none;
}
}
li:hover,{
    cursor:pointer;
    opacity: 0.5;
    background-color: 255, 255, 255, 0.2;
}
.imagem{
width:120px;
}
.imagem:hover {
width:140px;
transition:1s;
}

    align:}

@media (max-width: 768px){
    nav, ul {
        flex-direction: column; /*alinha em coluna */
    }
    ul{
        text-align: center;
        margin: 0;
        height: 0;

    }
    nav{
        padding-top: 0px; /*espaço pra dentro */
        align-items: flex-start; /*alinha os itens flex no início do container*/

    }
    h1{
        margin: 10px;

    }
    button{
        display: flex;
    }
    li, ul{
        width: 100%;
    }
}
    </style>
    <nav>
        <div class = "logo">
            <a href ="index.html"><img src = "racismo.png" title = "Inicio" class="imagem"></a>
        </div>
        <ul>
            <li>
                <p classs="p3"><a href ="oqracismo.html" class="roboto-condensed">O que é Racismo?</a></p>
            </li>
            <li>
                <p><a href ="funciona.html" class="roboto-condensed">Como funciona o Futebol?</a></p>
            </li>
            <li>
                <p><a href ="existe.html" class="roboto-condensed">Existe Racismo no futebol?</a></p>
            </li>
        </ul>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
});
