from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

class Show:
    db_name = 'shows'
    def __init__(self,db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.network = db_data['network']
        self.date_made = db_data['date_made']
        self.description = db_data['description']
        self.user_id = db_data['user_id']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT INTO shows (name, network, date_made, description, user_id) VALUES (%(name)s,%(network)s,%(date_made)s,%(description)s,%(user_id)s);"
        return connectToMySQL(cls.db_name).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM shows;"
        results =  connectToMySQL(cls.db_name).query_db(query)
        all_shows = []
        for row in results:
            print(row['date_made'])
            all_shows.append( cls(row) )
        return all_shows
    
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM shows LEFT JOIN users ON shows.user_id = users.id WHERE shows.id = %(id)s;"
        results = connectToMySQL(cls.db_name).query_db(query,data)
        row = results[0]
        show=cls(row)
        userdata={
            "id": row["users.id"],
            "first_name": row["first_name"],
            "last_name": row["last_name"],
            "email": row["email"],
            "password": row["password"],
            "created_at": row["users.created_at"],
            "updated_at": row["users.updated_at"],
        }
        show.creator =user.User(userdata)
        return show

    @classmethod
    def update(cls, data):
        query = "UPDATE shows SET name=%(name)s, network=%(network)s, date_made=%(date_made)s, description=%(description)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)
    
    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM shows WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

    @staticmethod
    def validate_show(show):
        is_valid = True
        if len(show['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters","show")
        if len(show['network']) < 3:
            is_valid = False
            flash("Network must be at least 3 characters","show")
        if len(show['description']) < 3:
            is_valid = False
            flash("Description must be at least 3 characters","show")
        if show['date_made'] == "":
            is_valid = False
            flash("Please enter a date","show")
        return is_valid