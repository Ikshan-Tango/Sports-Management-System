from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("users/<str:pk>/",views.get_user,name="user-data"),
    path("tokens/",views.get_token,name="token-data"),
    

    path("login/", views.user_login, name="login"),
    path("register/", views.user_register, name="register"),
    path("equipments/", views.getEquipments, name="equipments"),
    path("courts/", views.getCourts, name="courts"),
    path("timeslots/", views.getTimeslots, name="timeslots"),
    path("courts/<str:pk>/availableTimeslots/", views.getAvailableTimeslots, name="availableTimeslots"),
    path("equipments/<str:pk>/update", views.updateEquipment, name="update-equipment"),
    path("courts/<str:pk>/update", views.updateCourt, name="update-court"),
    path("timeslots/<str:pk>/update", views.updateTimeslot, name="update-timeslot"),
    path("equipments/<str:pk>/delete", views.deleteEquipment, name="delete-equipment"),
    path("courts/<str:pk>/delete", views.deleteCourt, name="delete-court"),
    path("timeslots/<str:pk>/delete", views.deleteTimeslot, name="delete-timeslot"),
    path("equipments/<str:pk>/", views.getEquipment, name="equipment"),
    path("courts/<str:pk>/", views.getCourt, name="court"),
    path("timeslots/<str:pk>/", views.getTimeslot, name="time-slot"),

    path("check-login/", views.check_login, name="check-login"),
]
