import pytest
import requests
from utils.api_helpers import criar_usuario

BASE_URL = "https://serverest.dev"

@pytest.fixture
def usuario_valido():
    return criar_usuario()

def test_login_usuario_valido(usuario_valido):
    payload = {
        "email": usuario_valido["email"],
        "password": usuario_valido["password"]
    }

    response = requests.post(f"{BASE_URL}/login", json=payload)

    assert response.status_code == 200
    body = response.json()

    assert "message" in body
    assert body["message"] == "Login realizado com sucesso"
    assert "authorization" in body, "Token de autorização não encontrado na resposta"
