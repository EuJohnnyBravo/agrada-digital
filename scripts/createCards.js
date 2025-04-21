const cardsImg = [
    {
        src: 'produto1',
        title: 'Produto do teste de desenvolvedor front-end da agência Agrada',
        price: 2049.00,
        discount: 15,
        installments: 10,
    },
    {
        src: 'produto2',
        title: 'Produto do teste de desenvolvedor front-end da agência Agrada',
        price: 2049.00,
        discount: 15,
        installments: 10,
    },
    {
        src: 'produto3',
        title: 'Produto do teste de desenvolvedor front-end da agência Agrada',
        price: 2049.00,
        discount: 15,
        installments: 10,
    },
    {
        src: 'produto4',
        title: 'Produto do teste de desenvolvedor front-end da agência Agrada',
        price: 2049.00,
        discount: 15,
        installments: 10,
    },
]

function criarImagemProduto(produto) {
    const picture = $('<picture/>')
    const source = $('<source/>')
        .attr('media', '(min-width: 768px)')
        .attr('srcset', `./assets/images/${produto.src}@2x.png`)
    const img = $('<img/>')
        .attr('src', `./assets/images/${produto.src}.png`)
        .attr('alt', `imagem ${produto.title}`)
    picture.append(source, img)
    return picture
}

function criarTituloProduto(title) {
    return $('<h2 class="titulo"/>').text(title)
}

function criarPrecoProduto(price) {
    return $('<p class="preco"/>').text(`R$ ${price.toFixed(2).replace('.', ',')}`)
}

function criarDescontoProduto(price, discount) {
    const precoDesconto = price - (price * discount) / 100
    return $('<p class="desconto"/>').text(`R$ ${precoDesconto.toFixed(2).replace('.', ',')}`)
}

function criarParcelamentoProduto(price, installments) {
    const valorParcela = price / installments
    return $('<p/>').text(`ou ${installments}x de R$ ${valorParcela.toFixed(2).replace('.', ',')}`)
}

function criarBotaoComprar() {
    return $('<button class="btn btn-green btn-comprar"/>').text('Comprar')
}

function criarCardProduto(produto) {
    const card = $('<div class="cartao-produtos"/>')
    card.append(
        criarImagemProduto(produto),
        criarTituloProduto(produto.title),
        criarPrecoProduto(produto.price),
        criarDescontoProduto(produto.price, produto.discount),
        criarParcelamentoProduto(produto.price, produto.installments),
        criarBotaoComprar()
    )
    return card
}

function adicionarProdutoAoSlider(produto) {
    const cardSlider = $('<div class="swiper-slide"/>')
    const card = criarCardProduto(produto)
    cardSlider.append(card)
    $('#slide').append(cardSlider)
}

//para ter mais produtos no slider
cardsImg.forEach(adicionarProdutoAoSlider)
cardsImg.forEach(adicionarProdutoAoSlider)

