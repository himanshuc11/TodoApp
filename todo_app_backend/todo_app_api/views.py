from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from django.db.models import Q

from rest_framework import status
from rest_framework.response import Response

from .serializer import TodoSerializer
from .models import Todo


# Create your views here.
@api_view(["GET", "POST"])
def index(request):
    if request.method == "GET":
        try:
            todos = Todo.objects.all()
            serialized_todos = TodoSerializer(todos, many=True)
            return Response(serialized_todos.data)
        except Exception:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == "POST":
        serialized_todo = TodoSerializer(data=request.data)

        if serialized_todo.is_valid():
            serialized_todo.save()
            return Response(status=status.HTTP_200_OK)

        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PATCH", "DELETE"])
def todo_operation(request, uid, id):
    try:
        check_user = Q(uid=uid)
        check_id = Q(id=id)
        todo = Todo.objects.filter(check_user & check_id)[0]
    except Exception:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serialized_todo = TodoSerializer(todo)
        return Response(serialized_todo.data)
    elif request.method == "PATCH":
        serialized_update_todo = TodoSerializer(todo, data=request.data)

        if serialized_update_todo.is_valid():
            serialized_update_todo.save()
            return Response(serialized_update_todo.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)
