SHELL := /bin/bash
export BASH_ENV := runcom/bash

generate-cert:
	@BASH_ENV=.env.development ./scripts/certificate-ssl.sh 

install:
	@sh ./scripts/install.sh && docker compose build

start: 
	@make generate-cert && docker compose up

down: 
	@docker compose down
