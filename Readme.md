# Validador de bandeira de Cartões de Crédito

Este projeto é um validador de cartões de crédito que identifica a bandeira do cartão com base no número fornecido.

## Estrutura do Projeto

## Bandeiras Suportadas

O validador suporta as seguintes bandeiras de cartões de crédito:

- Visa: começa com 4
- Mastercard: começa com os dígitos entre 51 e 55, ou entre 2221 e 2720
- Elo: começa com 4011, 4312, 4389
- American Express: começa com 34 ou 37
- Discover: começa com 6011, 65 ou com a faixa entre 644 a 649
- Hipercard: começa com 6062
- Enroute: começa com 2149 ou 2014
- Voyager: começa com 8699
- Aura: começa com 50
- JCB: começa com 35
- Diners: começa com 30, 36 ou 38

## Como Usar

1. Clone o repositório:

    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```

2. Navegue até o diretório do projeto:

    ```sh
    cd src
    ```

3. Execute o script [index.js](http://_vscodecontentref_/1):

    ```sh
    node index.js
    ```

## Exemplo de Uso

O script [index.js](http://_vscodecontentref_/2) contém uma função [verificarCartao](http://_vscodecontentref_/3) que valida um número de cartão de crédito e imprime a bandeira correspondente no console. Você pode alterar o número do cartão na função [verificarCartao](http://_vscodecontentref_/4) para testar diferentes números de cartões.

```javascript
function verificarCartao() {
    const numeroCartao = "214970147766543";
    const resultado = validadorCartao(numeroCartao);
    console.log(`Bandeira: ${resultado}`);
}

verificarCartao();
