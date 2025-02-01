# Use an Ubuntu base image
FROM ubuntu:20.04

# Install dependencies
RUN apt-get update && \
    apt-get install -y lua5.1 luarocks && \
    luarocks install lua-cjson && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install KrakenD
RUN apt-get install -y wget && \
    wget https://github.com/devopsfaith/krakend/releases/download/v1.4.0/krakend_1.4.0_linux_amd64.tar.gz && \
    tar -xzf krakend_1.4.0_linux_amd64.tar.gz && \
    mv krakend /usr/local/bin/ && \
    chmod +x /usr/local/bin/krakend && \
    rm krakend_1.4.0_linux_amd64.tar.gz

# Set the working directory
WORKDIR /etc/krakend

# Copy your KrakenD configuration files
COPY ./krakend /etc/krakend

# Command to run KrakenD
CMD ["krakend", "run", "-c", "/etc/krakend/checkout.json"]