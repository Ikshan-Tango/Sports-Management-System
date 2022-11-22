from rest_framework.serializers import ModelSerializer
from rest_framework.authtoken.models import Token
from .models import Equipment, Court, Timeslot, CustomUser


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"
        exclude = []


class TokenSerializer(ModelSerializer):
    class Meta:
        model = Token
        fields = "__all__"
        exclude = []

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
