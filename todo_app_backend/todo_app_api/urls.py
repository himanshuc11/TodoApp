from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('<str:uid>/<int:id>/', views.todo_operation, name="todo"),
]