﻿function qeReaderTest4(videoElementId,contentElementId) {
    var videoElem = document.getElementById(videoElementId)

    var contentElem = document.getElementById(contentElementId);
    const qrScanner = new QrScanner(videoElem, result => { console.log('decoded qr code:', result); contentElem.innerHTML = result });

    qrScanner.start();

    return qrScanner;
}

function createQrScanner3(videoElementId, contentElementId) {
    var videoElem = document.getElementById(videoElementId)
    var contentElem = document.getElementById(contentElementId);
    const qrScanner = new QrScanner(videoElem, result => { console.log('decoded qr code:', result); contentElem.innerHTML = result });

    return qrScanner;
}