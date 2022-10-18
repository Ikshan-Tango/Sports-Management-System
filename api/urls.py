from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.getRoutes,name="routes"),
    path('equipments/',views.getEquipments,name="equipments"),
    path('courts/',views.getCourts,name="courts"),

    path('equipments/<str:pk>/update',views.updateEquipment,name="update-equipment"),
    path('courts/<str:pk>/update',views.updateCourt,name="update-court"),

    path('equipments/<str:pk>/',views.getEquipment,name="equipment"),
    path('courts/<str:pk>/',views.getCourt,name="court"),
    


]
