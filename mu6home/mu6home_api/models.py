from django.db import models
from common.utils import generate_room_id
# Create your models here.

def sudmit_room_id():
    """
    Check if the room ID already exists in the database.
    """
    while True:
        value = generate_room_id()  
        if not Room.objects.filter(room_id=value).exists():
            break
        print(f"Duplicated room ID: {value.upper()}")
    return value

class Room(models.Model):
    name = models.CharField(max_length=100, unique=True, null=False, default='')
    # description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    room_id = models.CharField(max_length=50,default=generate_room_id, unique=True) #code
    host = models.CharField(max_length=50, unique=True)  # session key of the host
    guest_can_pause = models.BooleanField(null=False,default=False)
    votes_to_skip = models.IntegerField(null=False,default=1)
    # owner = models.ForeignKey('auth.User', related_name='rooms', on_delete=models.CASCADE)

    # password = models.CharField(max_length=100, blank=True, null=True)   


    def __str__(self):
        return self.name