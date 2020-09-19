from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def main():
    return render_template('index.html')

@app.route("/dashboard/<username>")
def dash(username):
    return render_template('dashboard.html', name=username)

@app.route("/search")
def sear():
    return render_template('search.html')

if __name__ == '__main__':
    app.run(debug=True)

