#!/bin/bash

# Update the apt package index
sudo apt update

# Install packages to allow apt to use a repository over HTTPS
sudo apt install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update the apt package index again
sudo apt update

# Install the latest version of Docker Engine and containerd
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Start and enable the Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to the docker group to run Docker commands without sudo
sudo usermod -aG docker $USER

# Display Docker version
docker --version
