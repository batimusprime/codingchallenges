from django.urls import path, include
#From relative import the views
from . import views

urlpatterns = [
    path('/', views.index, name="index"),
]
