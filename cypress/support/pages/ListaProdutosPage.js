class ListaProdutosPage {
  clicarAdicionarNoCarrinho() {
    cy.get('[data-testid="adicionar carrinho"]').click();
  }

  clicarLimparLista() {
    cy.get('[data-testid="limparLista"]').click();
  }

  clicarPaginaInicial() {
    cy.get('[data-testid="paginaInicial"]').click();
  }

  validarMensagemEmConstrucao() {
    cy.contains('Em construção aguarde').should('be.visible');
  }
}

export default ListaProdutosPage;
