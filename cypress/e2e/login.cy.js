import LoginPage from '../support/pages/LoginPage';

const loginPage = new LoginPage();

describe('Login com usuário válido', () => {
  it('Deve realizar o login com sucesso', () => {
   cy.fixture('usuario_dinamico').then(({ email, senha }) => {
      loginPage.visitar();

      loginPage.preencherEmail(email);
      loginPage.preencherSenha(senha);
      loginPage.submeterLogin();

      loginPage.validarMensagemDeSucesso();
    });
  });
});
