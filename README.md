# About project

É um boilerplate criado com a principais stack no frontend 

```
* Vite + React
* Typescript
* Docker
* Make
* Jest
* Sistema de roteamento (modelo Next);
* Eslint / prettier
* TLS/SSL;
```

# Requirements

- Docker
- Make
- mkcert

# Setup

Instale as dependências:

```bash
make install
```

Inicie o projeto:

```bash
make start
```

Verifique se seu .env.development está com esses parâmetros:

```bash
VITE_HTTPS=true
VITE_PORT=443
VITE_HOST=localhost
```

Certifique-se se o link está funcionando:

```bash
https://localhost:443
```
