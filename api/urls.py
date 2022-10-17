from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('equipments/',views.getEquipments,name="equipments"),

    path('equipments/<str:pk>/update',views.updateEquipment,name="update-equipment"),

    path('equipments/<str:pk>/',views.getEquipment,name="equipment"),


]
