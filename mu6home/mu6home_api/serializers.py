from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'name', 'room_id', 'guest_can_pause', 'votes_to_skip', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    # def create(self, validated_data):
    #     validated_data['room_id'] = sudmit_room_id()
    #     return super().create(validated_data)


class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('name', 'guest_can_pause', 'votes_to_skip')


    # def create(self, validated_data):
    #     validated_data['room_id'] = sudmit_room_id()
    #     return super().create(validated_data)