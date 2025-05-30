import LoginPage from '../support/pages/LoginPage';
import ListaProdutosPage from '../support/pages/ListaProdutosPage';

const loginPage = new LoginPage();
const listaProdutosPage = new ListaProdutosPage();

describe('Adição de produto ao carrinho', () => {
  it('Deve adicionar um produto ao carrinho e verificar mensagem final', () => {
    cy.fixture('usuario_dinamico').then(({ email, senha }) => {

    // Acessar e logar
    loginPage.visitar();
    loginPage.preencherEmail(email);
    loginPage.preencherSenha(senha);
    loginPage.submeterLogin();
    loginPage.validarMensagemDeSucesso();

    // Ir para lista de produtos
    cy.wait(2000);
    loginPage.clicarAdicionarLista('Logitech MX Vertical');
    
    // Adicionar ao carrinho
    cy.wait(2000);
    listaProdutosPage.clicarAdicionarNoCarrinho();

    // Verificar mensagem de em construção
    listaProdutosPage.validarMensagemEmConstrucao();
  });
  });
});
