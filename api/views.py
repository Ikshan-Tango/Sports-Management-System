from sys import api_version
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import login, authenticate
from django.shortcuts import redirect

from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Equipment, Court, Timeslot, CustomUser

from .serializers import EquipmentSerializer, CourtSerializer, TimeslotSerializer, UserSerializer, TokenSerializer

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

@api_view(["GET"])
def get_user(request,pk):
    user = CustomUser.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(["GET"])
def get_token(request):
    token = Token.objects.all()
    serializer = TokenSerializer(token, many=True)
    return Response(serializer.data)



@api_view(["POST"])
def user_register(request):
    roll_no = request.data['data']["roll_no"]
    password = request.data['data']["password"]

    try:
        user_exists = CustomUser.objects.get(roll_no=roll_no)
        return Response("User already exists")
        
    except:
        user = CustomUser.objects.create(
            roll_no=roll_no,
            password=password,
        )

        token = Token.objects.create(user=user)

        return Response({"message": "User created successfully", "token": token.key})
    

    # return Response(UserSerializer(user, many=False))
    # return Response("User created")

@api_view(["POST"])
def user_login(request):
    print(request.user)


    roll_no = request.data['data']["roll_no"]
    password = request.data['data']["password"]

    try:
        user = CustomUser.objects.get(roll_no=roll_no, password=password)
        # user = authenticate(roll_no=roll_no, password=password)

        if user is not None:
            token = Token.objects.get(user=user)

            return Response({"message": "Login successful", "token": token.key})
        # return redirect("/dashboard")
        return Response("User Logged in successfully", status=200)
        
    except Exception as e:
        print(e)
        return Response("Invalid Email or Password", status=400)
    
@api_view(["GET"])
# @permission_classes((IsAuthenticated, ))
def check_login(request):
    user = request.user
    if user.is_authenticated:
        return Response("User is logged in")
    else:
        return Response("User is not logged in")



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
