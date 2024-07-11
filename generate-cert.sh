if ! [ -x "$(command -v mkcert)" ]; then
  sudo apt install libnss3-tools
  wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
  sudo mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert
  sudo chmod +x /usr/bin/mkcert
fi

mkcert -install
mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem 'localhost'