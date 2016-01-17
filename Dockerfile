FROM node:4-onbuild

# Install Node modules
RUN npm install -g gulp

# Install Node modules
RUN npm install

# Define working directory.
WORKDIR .

# Define default command.
CMD ["bash"]

# replace this with your application's default port
EXPOSE 8080