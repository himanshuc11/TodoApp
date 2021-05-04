from django.db import models


# Create your models here.
class Todo(models.Model):
    task_description = models.CharField(max_length=100)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.task_description