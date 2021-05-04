from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from rest_framework.status import status
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
            return JsonResponse(serialized_todos.data, safe=False)
        except Exception:
            return HttpResponse(status=500)
    elif request.method == "POST":
        todo = JSONParser().parse(request)
        serialized_todo = TodoSerializer(data=todo)

        if serialized_todo.is_valid():
            serialized_todo.save()
            return HttpResponse(status=200)

        return HttpResponse(status=400)


@csrf_exempt
def todo_operation(request, id):
    try:
        todo = Todo.objects.get(id=id)
    except Exception:
        return HttpResponse(status=404)

    if request.method == "GET":
        serialized_todo = TodoSerializer(todo)
        return JsonResponse(serialized_todo.data, safe=False)
    elif request.method == "PATCH":
        update_todo = JSONParser().parse(request)
        serialized_update_todo = TodoSerializer(todo, data=update_todo)

        if serialized_update_todo.is_valid():
            serialized_update_todo.save()
            return JsonResponse(serialized_update_todo.data, safe=False)
        return HttpResponse(status=400)
    elif request.method == "DELETE":
        todo.delete()
        return HttpResponse(status=200)

    return HttpResponse(status=400)
