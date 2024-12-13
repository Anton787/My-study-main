from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    print(request.method)
    return 'Hello, world!'

@app.route('/test/<id>')
def index2(id):
    return f'TEST page {id}'

@app.route('/math/<float:number1>/<float:number2>')
def math(number1, number2):
    return str(number1 - number2)

if __name__ == "__main__":
    app.run()