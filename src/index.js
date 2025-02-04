const bandeiras = {
    Visa: numero => /^4/.test(numero),
    Mastercard: numero => /^5[1-5]/.test(numero) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/.test(numero),
    Elo: numero => /^(4011|4312|4389)/.test(numero),
    "American Express": numero => /^3[47]/.test(numero),
    Discover: numero => /^6011/.test(numero) || /^65/.test(numero) || /^64[4-9]/.test(numero),
    Hipercard: numero => /^6062/.test(numero),
    Enroute: numero => /^(2149|2014)/.test(numero),
    Voyager: numero => /^8699/.test(numero),
    Aura: numero => /^50/.test(numero),
    JCB: numero => /^35/.test(numero),
    Diners: numero => /^30/.test(numero) || /^36/.test(numero) || /^38/.test(numero)
};

function validadorCartao(numero) {
    numero = String(numero);
    if (numero.length < 13 || numero.length > 16) {
        return 'INVALIDO';
    } else {
        for (const [bandeira, verifica] of Object.entries(bandeiras)) {
            if (verifica(numero)) {
                return bandeira;
            }
        }
        return 'INVALIDO';
    }
}


function verificarCartao() {
    const numeroCartao = "214970147766543";
    const resultado = validadorCartao(numeroCartao);
    console.log(`Bandeira: ${resultado}`);
}


verificarCartao();