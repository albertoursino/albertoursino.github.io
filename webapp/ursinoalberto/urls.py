from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about", views.about, name="about"),
    path("master_thesis.pdf", views.master_thesis, name="master_thesis"),
    path("bachelor_thesis.pdf", views.bachelor_thesis, name="bachelor_thesis"),
]
