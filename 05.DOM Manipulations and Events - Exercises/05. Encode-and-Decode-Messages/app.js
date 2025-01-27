function encodeAndDecodeMessages() {
    let [senderTextarea, receiverTextarea] = document.getElementsByTagName('textarea');
    let [encodeBtn, decodeBtn] = document.getElementsByTagName('button');

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode)

    function encode() {
        let encodedText = senderTextarea.value.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
        receiverTextarea.value = encodedText;
        senderTextarea.value = '';
    }

    function decode() {
        let decodedText = receiverTextarea.value.split('').map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join('')
        receiverTextarea.value = decodedText;
    }
}