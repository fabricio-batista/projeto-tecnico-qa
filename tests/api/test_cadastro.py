# tests/api/test_criar_usuario.py
from utils.api_helpers import criar_usuario, gerar_email_unico

def test_criar_usuario_com_sucesso():
    nome = "Fabrício QA"
    email = gerar_email_unico()
    senha = "teste123"

    response = criar_usuario(nome, email, senha)

    assert response.status_code == 201
    body = response.json()
    assert body["message"] == "Cadastro realizado com sucesso"
    assert "_id" in body
