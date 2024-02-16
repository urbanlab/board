from flask import Flask
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
import os
import random
API_PASSWORD = os.environ.get('API_PASSWORD')
API_USERNAME = os.environ.get('API_USERNAME')


app = Flask(__name__)
auth = HTTPBasicAuth()

@auth.verify_password
def verify_password(username, password):
    if username == API_USERNAME and password == API_PASSWORD:
        return username

@app.route("/")
@auth.login_required
def hello_world():
    return "🚀 App is running"


# APi example route returning pet param from query string
@app.route("/api/v1/mypet/<name>", methods=['GET'])
@auth.login_required
def mypet(name):

    emojis = ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🐧"]
    random_emoji = random.choice(emojis)

    #return f"{random_emoji} {name}"
    return {
        "pet": name,
        "name": random_emoji
    }