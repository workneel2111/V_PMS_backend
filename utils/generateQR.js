const QRCode = require("qrcode");

const generateQRCode = async (text) => {
    try {
        const qr = await QRCode.toDataURL(text);
        return qr;
    } catch (error) {
        console.log(error);
    }
};

module.exports = generateQRCode;