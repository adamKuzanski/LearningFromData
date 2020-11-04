import flask
from flask import Flask
import json
import pandas as pd

app = Flask(__name__)


@app.route('/from_csv', methods=['GET'])
def start():
    data = csv_to_json()
    return json.dumps(data, indent=4)


@app.route("/movies", methods=["POST"])
def get_data():
    json_data = flask.request.json
    return "JSON value sent: " + json_data


# Run
if __name__ == '__main__':
    def csv_to_json():
        df = pd.read_csv("Data\\movies.csv", sep=";")
        df.columns = ["order", "ID", "Title"]
        df = df.drop(["order"], axis=1)

        result = df.to_json(orient="records")
        parsed = json.loads(result)

        return parsed
    app.run()
