from django.contrib import admin
from django.urls import path,include
from .views import main, RoomListView, CreateRoomView, GetRoomView

urlpatterns = [
    path("home", RoomListView.as_view(), name='room-list'),
    path("room/create-room", CreateRoomView.as_view(), name='create-room'),
    path("room/detail", GetRoomView.as_view()),
]
