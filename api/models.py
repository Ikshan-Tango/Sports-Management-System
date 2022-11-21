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
    # REQUIRED_FIELDS = ["roll_no"]


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

    # """Contains info about the timeslot bookings"""

    # TIMESLOT_LIST = (
    #     (0, '09:00 – 09:30'),
    #     (1, '10:00 – 10:30'),
    #     (2, '11:00 – 11:30'),
    #     (3, '12:00 – 12:30'),
    #     (4, '13:00 – 13:30'),
    #     (5, '14:00 – 14:30'),
    #     (6, '15:00 – 15:30'),
    #     (7, '16:00 – 16:30'),
    #     (8, '17:00 – 17:30'),
    # )

    # host = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    # date = models.DateField(help_text="YYYY-MM-DD")
    # timeslot = models.IntegerField(choices=TIMESLOT_LIST)

    court = models.ForeignKey(Court, on_delete=models.CASCADE)
    time_slot = models.TimeField()
    # open = models.BooleanField(default=True)

    def __str__(self):
        return "{} {}".format(self.court.name, self.time_slot)
