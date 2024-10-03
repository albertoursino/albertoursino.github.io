from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    """Render the main page of the website."""
    return render(request, "ursinoalberto/home.html", context={})


def master_thesis(request: HttpRequest) -> HttpResponse:
    """Render the Master's Thesis."""
    return render(request, "ursinoalberto/master_thesis.html", context={})


def bachelor_thesis(request: HttpRequest) -> HttpResponse:
    """Render the Bachelor's Thesis."""
    return render(request, "ursinoalberto/bachelor_thesis.html", context={})
