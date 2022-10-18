from time import time
from django.contrib import admin

# Register your models here.

from .models import Equipment,Court, Timeslot

admin.site.register(Equipment)
admin.site.register(Court)
admin.site.register(Timeslot)

