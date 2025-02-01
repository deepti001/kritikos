from flask import Blueprint, request, jsonify
from app.models.user_model import UserModel

user_blueprint = Blueprint("user_routes", __name__)

@user_blueprint.route("/", methods=["GET"])
def get_users():
    return jsonify(UserModel.get_all_users())

@user_blueprint.route("/", methods=["POST"])
def add_user():
    data = request.json
    UserModel.create_user(data["name"], data["email"])
    return jsonify({"message": "User added"}), 201

@user_blueprint.route("/<id>", methods=["GET"])
def get_user(id):
    user = UserModel.get_user_by_id(id)
    return jsonify(user) if user else (jsonify({"error": "User not found"}), 404)

@user_blueprint.route("/<id>", methods=["PUT"])
def update_user(id):
    data = request.json
    UserModel.update_user(id, data["name"], data["email"])
    return jsonify({"message": "User updated"})

@user_blueprint.route("/<id>", methods=["DELETE"])
def delete_user(id):
    UserModel.delete_user(id)
    return jsonify({"message": "User deleted"})
