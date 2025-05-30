import CadastroPage from '../support/pages/CadastroPage';

const cadastroPage = new CadastroPage();

describe('Cadastro de novo usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    // Dados fictícios e únicos
    const nome = 'Fabrício Teste';
    const email = 'fabricio_teste_qa@teste.com'; //ajustar para gerar randomicamente e armazenar para o login
    const senha = '123456';

    // Acessar o site
    cadastroPage.visitar();

    // Realizar o cadastro
    cadastroPage.preencherNome(nome);
    cadastroPage.preencherEmail(email);
    cadastroPage.preencherSenha(senha);
    // cadastroPage.marcarComoAdministrador();
    cadastroPage.submeterCadastro();

    // Verificar o resultado
    cadastroPage.validarMensagemDeSucesso();
  });
});