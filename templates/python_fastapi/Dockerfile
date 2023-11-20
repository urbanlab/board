FROM python:3.10.0-buster

# install python dependencies fastapi
RUN pip install fastapi uvicorn[standard]

WORKDIR /app

COPY ./src /app

ENTRYPOINT ["uvicorn", "main:app" ,"--reload" ,"--host" ,"0.0.0.0" ,"--port" ,"8000"]