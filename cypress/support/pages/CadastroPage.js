class CadastroPage {
  visitar() {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
  }

  preencherNome(nome) {
    cy.get('[data-testid="nome"]').type(nome);
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-testid="password"]').type(senha);
  }

  marcarComoAdministrador() {
    cy.get('[data-testid="checkbox"]').check();
  }

  submeterCadastro() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  validarMensagemDeSucesso() {
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  }
}

export default CadastroPage;
