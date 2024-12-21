from flask import Flask, render_template, send_file
import os

app = Flask(__name__, template_folder=os.path.dirname(os.path.realpath(__file__)))


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/<path:filename>")
def get_file(filename):
    file_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), filename)

    if os.path.isfile(file_path):
        return send_file(file_path)
    else:
        return "File not found", 404


if __name__ == "__main__":
    app.run(debug=True)
