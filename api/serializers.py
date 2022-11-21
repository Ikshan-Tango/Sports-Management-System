from rest_framework.serializers import ModelSerializer
from .models import Equipment, Court, Timeslot


class EquipmentSerializer(ModelSerializer):
    class Meta:
        model = Equipment
        fields = "__all__"
        exclude = []


class CourtSerializer(ModelSerializer):
    class Meta:
        model = Court
        fields = "__all__"
        exclude = []


class TimeslotSerializer(ModelSerializer):
    class Meta:
        model = Timeslot
        fields = "__all__"
        exclude = []
