if [ ! -d "$PWD/.cert" ]; then
  mkdir .cert
fi

mkcert -install
mkcert -key-file $PWD/.cert/key.pem -cert-file $PWD/.cert/cert.pem ""$VITE_HOST""
