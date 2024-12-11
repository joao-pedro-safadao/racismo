document.addEventListener('DOMContentLoaded', function () {
    let isReading = false;
    let speechInstance = null;

    function readAloud() {
        if (isReading) {
            window.speechSynthesis.cancel();
            isReading = false;
        } else {
            const content = document.querySelector('.content').innerText;
            speechInstance = new SpeechSynthesisUtterance(content);

            speechInstance.lang = 'pt-BR'; // Define o idioma para português do Brasil

            // Definir a voz preferida, se disponível
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => voice.name === 'Google português do Brasil');
            if (preferredVoice) {
                speechInstance.voice = preferredVoice;
            }

            window.speechSynthesis.speak(speechInstance);
            isReading = true;

            // Quando terminar de ler, redefinir a variável isReading
            speechInstance.onend = () => {
                isReading = false;
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
