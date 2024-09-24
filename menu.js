// menu.js
document.addEventListener('DOMContentLoaded', function() {
    const menu = `
    <style>
    body
{
    background-color: white;
    margin :0
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
    background-color: yellow;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
}
h1, p
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
h1
{
    margin: 0 20px;
    padding: 10px;
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
h1:hover{
border-radius:30px;
color : white;
transition: 1s;
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
                <p><a href ="oqracismo.html">O que é Racismo?</a></p>
            </li>
            <li>
                <p><a href ="funciona.html">Como funciona o Futebol?</a></p>
            </li>
            <li>
                <p><a href ="existe.html">Existe Racismo no futebol?</a></p>
            </li>
        </ul>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', menu);
});
