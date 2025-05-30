# utils/api_helpers.py
import requests
import uuid

BASE_URL = "https://serverest.dev"

def gerar_email_unico():
    """Gera um e-mail único para evitar conflitos."""
    return f"fabricio_{uuid.uuid4().hex[:8]}@teste.com"

def criar_usuario():
    email = gerar_email_unico()
    senha = "teste123"
    payload = {
        "nome": "Fabrício QA",
        "email": email,
        "password": senha,
        "administrador": "true"
    }

    response = requests.post(f"{BASE_URL}/usuarios", json=payload)
    response.raise_for_status()

    return {
        "email": email,
        "password": senha
    }

def logar_usuario(email, senha):
    payload = {
        "email": email,
        "password": senha
    }

    response = requests.post(f"{BASE_URL}/login", json=payload)
    response.raise_for_status()
    return response.json()["authorization"]
