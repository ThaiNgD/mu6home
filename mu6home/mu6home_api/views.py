from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .models import Room
from .serializers import RoomSerializer, CreateRoomSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
def main(request):
    return HttpResponse("Welcome to Mu6Home API!")


class RoomListView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def get(self, request, format=None):
        return Response({"message": "Use POST to create a room."}, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            votes_to_skip = serializer.validated_data.get('votes_to_skip')
            guest_can_pause = serializer.validated_data.get('guest_can_pause')
            name = serializer.validated_data.get('name')
            host = self.request.session.session_key

            queryset = Room.objects.filter(host=host)

            if queryset.exists():
                # Update existing room
                room = queryset[0]
                room.votes_to_skip = votes_to_skip
                room.guest_can_pause = guest_can_pause
                room.name = name
                room.save(update_fields=['votes_to_skip', 'guest_can_pause', 'name'])
                return Response(RoomSerializer(room).data, status=status.HTTP_200_OK)

            else:
                # Create new room
                room = Room(
                    host=host,
                    votes_to_skip=votes_to_skip,
                    guest_can_pause=guest_can_pause,
                    name=name
                )
                room.save()
                return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        # If serializer invalid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetRoomView(APIView):
    serializer_class = RoomSerializer
    lookup_url_kwarg = 'roomCode'

    def get(self, request, format=None):
        room_id = request.GET.get(self.lookup_url_kwarg)

        if room_id != None:
            room = Room.objects.filter(room_id=room_id)
            if len(room) > 0:
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Room Not Found': 'Invalid Room Code.'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)