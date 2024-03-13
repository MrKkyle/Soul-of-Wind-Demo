#!/bin/bash

# Please do not modify this file, modify the .env file within this directory
# If you are unable to run this file then run
# chmod +x ./scripts/run.sh

function check_prerequisites() {
    if [ ! -f '.env' ]
    then
        echo "error: .env not configured, please setup."
        exit;
    fi
}

function create_workspace() {
    ## Shopify Integrator Docs
    cd ../
    echo "---creating workspace---"

    if [ -d "Soul-of-Wind-Demo" ]
    then
        cd Soul-of-Wind-Demo
        echo "pulling latest 'Soul-of-Wind-Demo'"
        git pull
    else
        git clone "https://github.com/MrKkyle/Soul-of-Wind-Demo"
        cd Soul-of-Wind-Demo
    fi
}

function check_docker() {
    if ! command -v docker &> /dev/null
    then
        echo "error: Docker required but it's not installed or running";
        echo "error: Please visit https://www.docker.com/";
        exit;
    fi
}

function install_app() {
    # removes stopped service containers 
    docker-compose rm -f

    echo "---Running Docker compose build---"

    if ! docker compose build; then
        echo "error: could not run docker compose";
        exit;
    fi

    echo "---Running Docker compose up---"

    # tells docker to recreate all containers regardless of whether
    # the images have been changed or not 
    if ! docker compose up -d --force-recreate; then
        echo "error: could not run docker compose";
        exit;
    fi
}

check_prerequisites
create_workspace
check_docker
install_app