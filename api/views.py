from sys import api_version
from django.shortcuts import render
from django.http import JsonResponse


from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Equipment

from .serializers import EquipmentSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [ 
        'GET /api',
        'GET /api/equipments',
        'GET /api/equipments/<str:pk>/'

    ]
    return Response( routes )

@api_view(['GET'])
def getEquipments(request):
    equipments = Equipment.objects.all()
    serializer = EquipmentSerializer(equipments, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def getEquipment(request,pk):
    equipments = Equipment.objects.get(id=pk)
    serializer = EquipmentSerializer(equipments, many= False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateEquipment(request,pk):
    
    data = request.data #it will return the json object of the thingy that has been updated

    equipment = Equipment.objects.get(id=pk)

    serializer = EquipmentSerializer(instance=equipment , data=data) #instance = equipment will load the original data, but then its data will be replaced by the request data

    return Response(serializer.data)
