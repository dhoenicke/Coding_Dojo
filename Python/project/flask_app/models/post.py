from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user, post

class Post:
    db_name = 'posts'
    def __init__(self,db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.date_made = db_data['date_made']
        self.description = db_data['description']
        self.user_id = db_data['user_id']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT INTO posts (name, date_made, description, user_id) VALUES (%(name)s,%(date_made)s,%(description)s,%(user_id)s);"
        return connectToMySQL(cls.db_name).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM posts;"
        results =  connectToMySQL(cls.db_name).query_db(query)
        all_posts = []
        for row in results:
            print(row['date_made'])
            all_posts.append( cls(row) )
        return all_posts
    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE posts.id = %(id)s;"
        results = connectToMySQL(cls.db_name).query_db(query,data)
        row = results[0]
        post=cls(row)
        userdata={
            "id": row["users.id"],
            "first_name": row["first_name"],
            "last_name": row["last_name"],
            "email": row["email"],
            "password": row["password"],
            "created_at": row["users.created_at"],
            "updated_at": row["users.updated_at"],
        }
        post.creator = user.User(userdata)
        return post

    @classmethod
    def update(cls, data):
        query = "UPDATE posts SET name=%(name)s, date_made=%(date_made)s, description=%(description)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM posts WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

    @staticmethod
    def validate_post(post):
        is_valid = True
        if len(post['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters","post")
        if len(post['description']) < 3:
            is_valid = False
            flash("Description must be at least 3 characters","post")
        if post['date_made'] == "":
            is_valid = False
            flash("Please enter a date","post")
        return is_valid