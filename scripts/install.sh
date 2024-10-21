if ! [ -x "$(command -v mkcert)" ]; then
  if [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then 
    sudo apt install libnss3-tools
    wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
    sudo mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert
    sudo chmod +x /usr/bin/mkcert
  fi

  if [ "$(uname)" == "Darwin" ]; then
    brew install mkcert
  fi
fi
