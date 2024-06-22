let inputText = document.getElementById('text')
let imgBox = document.querySelector('.imgBox');
let qrImg = document.querySelector('.qrImg');


function generateQR() {
    if (inputText.value.length > 0) {

        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
    }
    else {

        inputText.classList.add('error')
        inputText.style.borderColor = 'red';

        setTimeout(() => {
            inputText.classList.remove('error')
            inputText.style.borderColor = 'rgba(0, 0, 0, 0.5)';
        }, 1000);
    }
}


