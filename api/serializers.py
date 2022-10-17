from rest_framework.serializers import ModelSerializer
from .models import Equipment

class EquipmentSerializer(ModelSerializer):
    class Meta:
        model = Equipment
        feilds = '__all__'
        exclude = []