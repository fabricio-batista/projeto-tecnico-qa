import pytest
import requests
from utils.api_helpers import criar_usuario, logar_usuario, gerar_email_unico

BASE_URL = "https://serverest.dev"

@pytest.fixture
def usuario_autenticado():
    nome = "Fabrício Carrinho"
    email = gerar_email_unico()
    senha = "teste123"

    criar_usuario(nome, email, senha)
    token = logar_usuario(email, senha)
    return {
        "email": email,
        "token": token
    }

def test_adicionar_produto_ao_carrinho(usuario_autenticado):
    # Buscar produtos
    response_produtos = requests.get(f"{BASE_URL}/produtos")
    response_produtos.raise_for_status()
    produtos = response_produtos.json()["quantidade"]

    assert produtos > 0, "Nenhum produto disponível para adicionar ao carrinho."

    produto_id = response_produtos.json()["produtos"][0]["_id"]

    # Adicionar ao carrinho
    payload_carrinho = {
        "produtos": [
            {
                "idProduto": produto_id,
                "quantidade": 1
            }
        ]
    }

    headers = {
        "Authorization": usuario_autenticado["token"]
    }

    response_carrinho = requests.post(
        f"{BASE_URL}/carrinhos", json=payload_carrinho, headers=headers
    )

    assert response_carrinho.status_code == 201
    body = response_carrinho.json()
    assert body["message"] == "Cadastro realizado com sucesso"
    assert "_id" in body, "ID do carrinho não encontrado"
