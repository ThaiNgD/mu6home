from django.urls import path,include
from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('about/', index, name='about'),
    path('contact/', index, name='contact'),
    path('room/<str:roomCode>/', index, name='room'),
]   