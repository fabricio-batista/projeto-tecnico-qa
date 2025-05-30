class LoginPage {
  visitar() {
    cy.visit('https://front.serverest.dev/login');
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-testid="senha"]').type(senha);
  }

  submeterLogin() {
    cy.get('[data-testid="entrar"]').click();
  }

  clicarAdicionarLista(produtoNome) {
    cy.contains('.card', produtoNome) // localiza o card do produto específico
        .within(() => {
        cy.contains('button', 'Adicionar a lista').click(); // clica no botão dentro desse card
        });
  }

  validarMensagemDeSucesso() {
    cy.contains('Produtos').should('be.visible');
  }
}

export default LoginPage;
