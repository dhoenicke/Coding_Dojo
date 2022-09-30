from flask import Flask, render_template

app=Flask(__name__)

@app.route("/")
def initial_render():
    return "Playground"

@app.route("/play")
def block_render():
    return render_template('playground1.html')

@app.route("/play/<number_of_boxes>")
def block_repeat(number_of_boxes):
    return render_template('playground2.html')

@app.route("/play/<number_of_boxes>/<color_change>")
def box_color(number_of_boxes,color_change):
    return render_template('playground3.html')


if __name__ == "__main__":
    app.run(debug=True)