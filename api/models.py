from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    username = None
    roll_no = models.CharField(max_length=10, unique=True)
    fine = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    equipmentBooked = models.ForeignKey("Equipment", on_delete=models.SET_NULL, blank=True, null=True)
    # courtBooked = models.ForeignKey("Court", on_delete=models.SET_NULL, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    time = models.ForeignKey("TimeSlot", on_delete=models.SET_NULL, blank=True, null=True)
    USERNAME_FIELD = "roll_no"
    # REQUIRED_FIELDS = ["username"]


class Equipment(models.Model):
    name = models.CharField(max_length=50)
    number = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.name


class Court(models.Model):
    name = models.CharField(max_length=50)
    number = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.name


class Timeslot(models.Model):
    """Contains time slots for courts"""

    court = models.ForeignKey(Court, on_delete=models.CASCADE)
    time_slot = models.TimeField()

    def __str__(self):
        return "{} {}".format(self.court.name, self.time_slot)
