from flask import Flask
from config import Config
from app.db import mongo
from app.admin import init_admin
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)  # Load Configurations
    
    mongo.init_app(app)  # Initialize MongoDB
    CORS(app)  # Enable CORS

    # Register Blueprints (API Routes)
    from app.routes.user import user_blueprint
    app.register_blueprint(user_blueprint, url_prefix="/users")

    # Initialize Flask-Admin
    init_admin(app)

    return app
