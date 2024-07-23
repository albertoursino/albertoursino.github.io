from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("resume.pdf", views.resume, name="resume"),
]
