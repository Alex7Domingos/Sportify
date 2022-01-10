let musicas = [
    {titulo:"Música oficial champions league", artista:"-Tema oficial - Champions League-", src:"assets/musicas/Música-Oficial-da-Champions-League.mp3",
    img: "assets/imagens/champions.png"},
    {titulo:"Tema Airton Senna", artista:"-Tema oficial - Airton Senna-", src:"assets/musicas/Ayrton-Senna-Tema-da-vitória.mp3",
    img: "assets/imagens/airton.jpg"},
    {titulo:"Survivor", artista:"-Eye Of The Tiger-", src:"assets/musicas/Survivor-Eye-Of-The-Tiger.mp3",
    img: "assets/imagens/boxe.jpg"},
    {titulo:"We are the champions", artista:"-Queen-", src:"assets/musicas/Queen-We-Are-The-Champions.mp3",
    img: "assets/imagens/we-are.jpg"}
]

let musica = document.querySelector("audio");

let indexMusica = 0;

let imagem = document.querySelector("#image-fundo");
let nomeMusica = document.querySelector(".title h2");
let nomeArtista = document.querySelector("#artist");

renderizarMusica(indexMusica);

// Events
document.querySelector("#button-play").addEventListener("click", tocarMusica);
document.querySelector("#button-pause").addEventListener("click", pararMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".anterior").addEventListener("click", () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
})

document.querySelector(".proxima").addEventListener("click", () => {
    indexMusica++;
    if (indexMusica > 3){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
})


// Functions
function renderizarMusica(index) {
    musica.setAttribute("src", musicas[index].src);
    musica.addEventListener("loadeddata", () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src =  musicas[index].img;
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector("#button-play").style.display = "none";
    document.querySelector("#button-pause").style.display = "block";
}

function pararMusica() {
    musica.pause();
    document.querySelector("#button-pause").style.display = "none";
    document.querySelector("#button-play").style.display = "block"
}

function atualizarBarra() {
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor(musica.currentTime / musica.duration * 100) + "%";   
}