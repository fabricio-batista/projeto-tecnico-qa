import LoginPage from '../support/pages/LoginPage';

const loginPage = new LoginPage();

describe('Login com usuário válido', () => {
  it('Deve realizar o login com sucesso', () => {
    // Para que as credenciais abaixo funcionem, é preciso que o teste cadastro.cy.js tenha sido executado primeiro
    const email = 'fabricio_teste_qa@teste.com'; 
    const senha = '123456';

    // Acessar página de login
    loginPage.visitar();

    // Preencher dados
    loginPage.preencherEmail(email);
    loginPage.preencherSenha(senha);
    loginPage.submeterLogin();

    // Validar login com sucesso
    loginPage.validarMensagemDeSucesso();
  });
});
