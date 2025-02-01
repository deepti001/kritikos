from app.db import mongo

class UserModel:
    @staticmethod
    def get_all_users():
        return list(mongo.db.users.find({}, {"_id": 1, "name": 1, "email": 1}))

    @staticmethod
    def create_user(name, email):
        return mongo.db.users.insert_one({"name": name, "email": email})

    @staticmethod
    def get_user_by_id(user_id):
        from bson import ObjectId
        return mongo.db.users.find_one({"_id": ObjectId(user_id)})

    @staticmethod
    def update_user(user_id, name, email):
        from bson import ObjectId
        return mongo.db.users.update_one({"_id": ObjectId(user_id)}, {"$set": {"name": name, "email": email}})

    @staticmethod
    def delete_user(user_id):
        from bson import ObjectId
        return mongo.db.users.delete_one({"_id": ObjectId(user_id)})
