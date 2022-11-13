from sys import api_version
from django.shortcuts import render
from django.http import JsonResponse


from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Equipment, Court, Timeslot, CustomUser

from .serializers import EquipmentSerializer, CourtSerializer, TimeslotSerializer

from datetime import datetime

# Create your views here.


# Following is the view just for reference for the api caller
@api_view(["GET"])
def getRoutes(request):
    routes = [
        "GET /api",
        "GET /api/equipments",
        "GET /api/equipments/<str:pk>/",
        "PUT /api/equipments/<str:pk>/update",
        "GET /api/courts",
        "GET /api/courts/<str:pk>/",
        "PUT /api/courts/<str:pk>/update",
        "GET /api/timeslots",
        "GET /api/timeslots/<str:pk>/",
        "PUT /api/timeslots/<str:pk>/update",
    ]
    return Response(routes)


# following views are to get the whole lists of certain type of data
@api_view(["GET"])
def getEquipments(request):
    equipments = Equipment.objects.all()
    serializer = EquipmentSerializer(equipments, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getCourts(request):
    courts = Court.objects.all()
    serializer = CourtSerializer(courts, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getTimeslots(request):
    courts = Timeslot.objects.all()
    serializer = TimeslotSerializer(courts, many=True)
    return Response(serializer.data)


# following views are to get a particular object of a certain data
@api_view(["GET"])
def getEquipment(request, pk):
    equipments = Equipment.objects.get(id=pk)
    serializer = EquipmentSerializer(equipments, many=False)
    return Response(serializer.data)


@api_view(["GET"])
def getCourt(request, pk):
    courts = Court.objects.get(id=pk)
    serializer = CourtSerializer(courts, many=False)
    print(serializer.data)
    return Response(serializer.data)


@api_view(["GET"])
def getTimeslot(request, pk):
    timeslots = Timeslot.objects.get(id=pk)
    serializer = TimeslotSerializer(timeslots, many=False)
    return Response(serializer.data)


@api_view(["GET"])
def getAvailableTimeslots(request, pk):
    # print(request.body)
    # print(request.GET["date"])
    date = request.GET["date"]

    new_date = datetime.strptime(date, "%Y-%m-%d")

    court = Court.objects.get(id=pk)
    timeslots_ids = Timeslot.objects.filter(court=court).values_list("id", flat=True)

    occupied_user = CustomUser.objects.filter(date=new_date, time__court__id=pk)

    occupied_timeslots = occupied_user.values_list("time", flat=True)

    available_timeslots = []

    for timeslot_id in timeslots_ids:
        if timeslot_id not in occupied_timeslots:
            timeslot = Timeslot.objects.get(id=timeslot_id)
            serializer = TimeslotSerializer(timeslot, many=False)
            available_timeslots.append(serializer.data)

    return Response(available_timeslots)


# FOLLOWING VIEWS ARE FOR UPDATING AN OBJECT OF SOME CERTAIN TYPE
@api_view(["PUT"])
def updateEquipment(request, pk):
    print(request.data)
    data = request.data  # it will return the json object of the thingy that has been updated

    equipment = Equipment.objects.get(id=pk)

    serializer = EquipmentSerializer(
        instance=equipment, data=data
    )  # instance = equipment will load the original data, but then its data will be replaced by the request data

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["PUT"])
def updateCourt(request, pk):

    data = request.data  # it will return the json object of the thingy that has been updated

    court = Court.objects.get(id=pk)

    serializer = CourtSerializer(
        instance=court, data=data
    )  # instance = equipment will load the original data, but then its data will be replaced by the request data

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["PUT"])
def updateTimeslot(request, pk):

    data = request.data  # it will return the json object of the thingy that has been updated

    timeslot = Timeslot.objects.get(id=pk)

    serializer = TimeslotSerializer(
        instance=timeslot, data=data
    )  # instance = equipment will load the original data, but then its data will be replaced by the request data

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


# For deletion


@api_view(["DELETE"])
def deleteEquipment(request, pk):
    equipment = Equipment.objects.get(id=pk)
    equipment.delete()
    return Response("Equipment was deleted")


@api_view(["DELETE"])
def deleteCourt(request, pk):
    court = Court.objects.get(id=pk)
    court.delete()
    return Response("Court was deleted")


@api_view(["DELETE"])
def deleteTimeslot(request, pk):
    timeslot = Timeslot.objects.get(id=pk)
    timeslot.delete()
    return Response("Timeslot was deleted")
