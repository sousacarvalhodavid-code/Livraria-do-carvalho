// 1. Variáveis globais (Nomes que o HTML espera)
let totalItens = 0;
let valorTotal = 0;

// 2. Função para Adicionar ao Carrinho
document.querySelector('.btn-finalizar').style.background = "#10b981"; // Muda para verde quando tem item
document.querySelector('.btn-finalizar').style.transform = "scale(1.1)"; // Dá um leve destaque
function adicionarAoCarrinho(nomeLivro, preco) {
    totalItens = totalItens + 1;
    valorTotal = valorTotal + preco;

    // Atualiza os números no topo do site
    document.getElementById('qtd-itens').innerText = totalItens;
    document.getElementById('valor-total').innerText = valorTotal.toFixed(2);

    alert(nomeLivro + " adicionado com sucesso!");
}

// 3. Função para Finalizar o Pedido (WhatsApp)
function finalizarPedido() {
    if (totalItens === 0) {
        alert("Seu carrinho está vazio! Escolha um livro primeiro.");
        return;
    }

    // Configurações do WhatsApp
    const numeroZap = "5561999936085"; 
    const mensagem = `Olá! Gostaria de comprar ${totalItens} livros. Total: R$ ${valorTotal.toFixed(2)}. Como faço o pagamento?`;
    
    // Cria o link e abre a conversa
    const url = `https://wa.me/${numeroZap}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}