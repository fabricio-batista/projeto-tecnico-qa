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

  clicarAdicionarLista() {
    cy.get('.card')
    .its('length') // pega todos os .card dentro da lista 
    .then((len) => {
      if (len > 0) {
        cy.get('.card').first().within(() => { // pega o primeiro .card da lista e dentro dele, busca o botao para clicar
          cy.contains('Adicionar a lista').click();
        });
      } else {
        throw new Error('Nenhum produto disponível para adicionar à lista.');
      }
    });
  }

  validarMensagemDeSucesso() {
    cy.contains('Produtos').should('be.visible');
  }
}

export default LoginPage;
