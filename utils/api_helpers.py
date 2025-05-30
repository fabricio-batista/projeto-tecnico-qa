import requests
import uuid

BASE_URL = "https://serverest.dev"

def gerar_email_unico():
    """Gera um e-mail único para evitar conflitos."""
    return f"fabricio_{uuid.uuid4().hex[:8]}@teste.com"

def criar_usuario(nome, email, senha, administrador=False):
    payload = {
        "nome": nome,
        "email": email,
        "password": senha,
        "administrador": "true" if administrador else "false"
    }

    response = requests.post(f"{BASE_URL}/usuarios", json=payload)
    return response

def logar_usuario(email, senha):
    payload = {
        "email": email,
        "password": senha
    }

    response = requests.post(f"{BASE_URL}/login", json=payload)
    response.raise_for_status()
    return response.json()["authorization"]
