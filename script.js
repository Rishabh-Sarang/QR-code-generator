function generateQR(){
    let qrtext = document.getElementById("qrtext").value.trim();
    if (qrtext === "") {
        alert('please enter the url');
        return;
    }
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: qrtext,
        size: 150
    });
}