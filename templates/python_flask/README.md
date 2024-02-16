# 🐍 Python x Flask 
A python flask boilerplate with a simple example of a REST API and http authentication.

## Getting Started

You need to have docker installed in your machine.

### Configuration

To configure the environment variables, you need to create a `.env` file in the root of the project. You can use the `.env.example` file as a template.

### Development

To start the development server, run the following command:

```bash
docker-compose up
```
The development server will be available at `http://localhost:API_PORT` where `API_PORT` is the port defined in the `.env` file.

Two routes are available:

- `/` - A simple route that returns a welcome message.
- `/api/v1/mypet/<myPetName>` - A route that returns a json with the name of the pet

To stop the development server, run the following command:

```bash
docker-compose down
```



