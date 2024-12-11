document.addEventListener('DOMContentLoaded', function () {
    let speechInstance = null;
    let isPaused = false;

    function readAloud() {
        // Verifica se o navegador suporta a API de síntese de fala
        if (!window.speechSynthesis) {
            alert("API de síntese de fala não é suportada pelo seu navegador.");
            return;
        }

        // Se já estiver lendo e não estiver pausado, pause a leitura
        if (speechInstance && !isPaused) {
            window.speechSynthesis.pause();
            isPaused = true;
        } else if (speechInstance && isPaused) {
            // Se já estiver lendo e estiver pausado, retome a leitura
            window.speechSynthesis.resume();
            isPaused = false;
        } else {
            // Inicie a leitura se não estiver lendo
            const content = document.querySelector('.content').innerText;
            speechInstance = new SpeechSynthesisUtterance(content);
            speechInstance.lang = 'pt-BR'; // Define o idioma para português do Brasil

            // Definir a voz preferida, se disponível
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => voice.name === 'Google português do Brasil');
            if (preferredVoice) {
                speechInstance.voice = preferredVoice;
            }

            // Inicie a leitura
            window.speechSynthesis.speak(speechInstance);

            // Quando terminar de ler, redefinir a variável isPaused
            speechInstance.onend = () => {
                speechInstance = null;
                isPaused = false;
            };
        }
    }

    // Certifique-se de que as vozes estejam carregadas antes de tentar usá-las
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            const voices = window.speechSynthesis.getVoices();
            console.log(voices); // Opcional: listar as vozes disponíveis no console
        };
    }

    window.readAloud = readAloud; // Torna a função disponível globalmente
});
