from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user


class Band:
    db_name = 'bands'
    def __init__(self, db_data):
        self.id = db_data['id']
        self.name = db_data['name']
        self.genre = db_data['genre']
        self.city = db_data['city']
        self.user_id = db_data['user_id']
        self.created_at = db_data['created_at']
        self.updated_at = db_data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO bands (name, genre, city, user_id) VALUES (%(name)s,%(genre)s,%(city)s,%(user_id)s);"
        return connectToMySQL(cls.db_name).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM bands;"
        results =  connectToMySQL(cls.db_name).query_db(query)
        all_bands = []
        for row in results:
            all_bands.append( cls(row) )
        return all_bands

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM bands WHERE id = %(id)s;"
        results = connectToMySQL(cls.db_name).query_db(query, data)
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = "UPDATE bands SET name=%(name)s, genre=%(genre)s, city=%(city)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query, data)

    @classmethod
    def destroy(cls, data):
        query = "DELETE FROM bands WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query, data)

    @classmethod
    def users_with_bands(cls, data):
        query = "SELECT * FROM bands JOIN users ON bands.user_id = users.id WHERE user_id = %(id)s;"
        results = connectToMySQL('bands').query_db(query, data)
        bands = []
        for result in results:
            band = cls(result)
            band.user = user.User(result)
            bands.append(band)
        print(bands)
        return results


    @staticmethod
    def validate_band(band):
        is_valid = True
        if len(band['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters", "band")
        if len(band['city']) < 3:
            is_valid = False
            flash("City must be at least 3 characters", "band")
        if len(band['genre']) < 3:
            is_valid = False
            flash("Genre must be at least 3 characters", "band")
        return is_valid