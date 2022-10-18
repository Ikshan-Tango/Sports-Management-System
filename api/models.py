from django.db import models
from django.contrib.auth.models import User

# Create your models here.

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
    """Contains info about the timeslot bookings"""

    TIMESLOT_LIST = (
        (0, '09:00 – 09:30'),
        (1, '10:00 – 10:30'),
        (2, '11:00 – 11:30'),
        (3, '12:00 – 12:30'),
        (4, '13:00 – 13:30'),
        (5, '14:00 – 14:30'),
        (6, '15:00 – 15:30'),
        (7, '16:00 – 16:30'),
        (8, '17:00 – 17:30'),
    )

    host = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    date = models.DateField(help_text="YYYY-MM-DD")
    timeslot = models.IntegerField(choices=TIMESLOT_LIST)

    def __str__(self):
         return '{} {} {}'.format(self.date, self.timeslot, self.host)
