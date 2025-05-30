class ProdutosPage {
  adicionarProdutoAoCarrinho(indice = 0) {
    cy.get('[data-testid="card-produto"]').eq(indice).within(() => {
      cy.get('button').contains('Adicionar a lista').click();
    });
  }

  irParaCarrinho() {
    cy.get('[data-testid="carrinho"]').click();
  }

  validarProdutoNoCarrinho() {
    cy.get('[data-testid="carrinho-item"]').should('exist');
  }
}

export default ProdutosPage;
