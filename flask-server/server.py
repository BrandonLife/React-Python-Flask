# https://www.youtube.com/watch?v=67h5bLVnSgI
# https://medium.com/@presh_onyee/activating-virtualenv-on-windows-using-git-bash-python-3-7-1-6b4b21640368
from flask import Flask

app = Flask(__name__)

# Members Api Route


@app.route('/members')
def members():
    return{"members": ["Member1", "Member2", "Member3"]}


if __name__ == "__main__":
    app.run(debug=True)