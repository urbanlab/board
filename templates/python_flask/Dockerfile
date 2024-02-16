FROM python:3.10.0-buster

WORKDIR /app

COPY ./requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY ./src /app

WORKDIR /app/src

ENTRYPOINT ["flask", "run", "--host=0.0.0.0", "--debug"]
