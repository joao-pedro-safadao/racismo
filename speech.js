document.addEventListener('DOMContentLoaded', function () {
    function readAloud() {
        const content = document.getElementById('container').innerText;
        const speech = new SpeechSynthesisUtterance(content);

        speech.lang = 'pt-BR'; // Define o idioma para português do Brasil

        // Definir a voz preferida, se disponível
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => voice.name === 'Google português do Brasil');
        if (preferredVoice) {
            speech.voice = preferredVoice;
        }

        window.speechSynthesis.speak(speech);
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
