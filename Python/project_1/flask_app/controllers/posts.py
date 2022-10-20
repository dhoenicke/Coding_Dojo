from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.post import Post
from flask_app.models.user import User


@app.route('/new/post')
def new_post():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":session['user_id']
    }
    return render_template('new_post.html',user=User.get_by_id(data))


@app.route('/create/post',methods=['POST'])
def create_post():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Post.validate_post(request.form):
        return redirect('/new/post')
    data = {
        "name": request.form["name"],
        "date_made": request.form["date_made"],
        "description": request.form["description"],
        "user_id": session["user_id"]
    }
    Post.save(data)
    return redirect('/dashboard')

@app.route('/edit/post/<int:id>')
def edit_post(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    user_data = {
        "id":session['user_id']
    }
    return render_template("edit_post.html",edit=Post.get_one(data),user=User.get_by_id(user_data))

@app.route('/update/post',methods=['POST'])
def update_post():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Post.validate_post(request.form):
        return redirect('update/post/')
    data = {
        "name": request.form["name"],
        "date_made": request.form["date_made"],
        "description": request.form["description"],
        "id": request.form['id']
    }
    Post.update(data)
    return redirect('/dashboard')

@app.route('/post/<int:id>')
def show_post(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    user_data = {
        "id":session['user_id']
    }
    return render_template("show_post.html",show=Post.get_one(data),user=User.get_by_id(user_data))

# @app.route('/create-comment/post',methods=['POST'])
# def create_comment():
#     if 'user_id' not in session:
#         return redirect('/logout')
#     if not Post.validate_post(request.form):
#         return redirect('/show/post')
#     data = {
#         "name": request.form["name"],
#         "date_made": request.form["date_made"],
#         "description": request.form["description"],
#         "user_id": session["user_id"]
#     }
#     Post.save(data)
#     return redirect('/dashboard')

@app.route('/destroy/post/<int:id>')
def destroy_post(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":id
    }
    Post.destroy(data)
    return redirect('/dashboard')
