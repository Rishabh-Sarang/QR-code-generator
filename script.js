function generateQR(){
    let qrimg = document.getElementById("qrimg");
    let qrtext = document.getElementById("qrtext");
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
}