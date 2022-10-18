from django.contrib import admin

# Register your models here.

from .models import Equipment,Court

admin.site.register(Equipment)
admin.site.register(Court)
