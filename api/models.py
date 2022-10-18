from django.db import models

# Create your models here.

class Equipment(models.Model):
    name = models.CharField(max_length=50)

    number = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.name


class Court(models.Model):
    name = models.CharField(max_length=50)

    number = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.name
