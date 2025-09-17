from flask import Flask

app = Flask(__name__)

@app.route('/python_api', methods=['GET'])
def python_api():
    return 'Python API Response'
