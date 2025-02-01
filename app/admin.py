from flask_admin import Admin
from flask_admin.contrib.pymongo import ModelView
from app.db import mongo
from flask_admin import Admin, expose
from flask_admin.base import AdminIndexView
from wtforms import StringField
from flask_admin.form import rules
from wtforms.validators import DataRequired
from flask_admin.form import SecureForm 





# Secure Admin Panel
class MyAdminIndexView(AdminIndexView):
    @expose('/')
    def index(self):
        if not current_user.is_authenticated:
            return redirect(url_for('login'))
        return super().index()




class UserModelView(ModelView):
    column_list = ("_id", "name", "email")  # Specify MongoDB fields to show in the UI

    form_columns = ("name", "email")  # Form fields for creating/editing

    def scaffold_form(self):
        """Define a form for Flask-Admin"""
        from flask_wtf import FlaskForm

        class UserForm(FlaskForm):
            name = StringField("Name", validators=[DataRequired()])
            email = StringField("Email", validators=[DataRequired()])

        return UserForm
    def scaffold_list_columns(self):
        return ["_id", "name", "email"]  # Explicitly list MongoDB fields

def init_admin(app):
    admin = Admin(app, name="Admin Panel", template_mode="bootstrap3")
    admin.add_view(UserModelView(mongo.db.users, "Users"))

