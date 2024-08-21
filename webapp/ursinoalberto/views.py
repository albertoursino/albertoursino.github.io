from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    """Render the main view of the website."""
    return render(request, "ursinoalberto/home.html", context={})


def master_thesis(request: HttpRequest) -> HttpResponse:
    """Master's thesis view."""
    return render(request, "ursinoalberto/master_thesis.html", context={})


def bachelor_thesis(request: HttpRequest) -> HttpResponse:
    """Bachelor's thesis view."""
    return render(request, "ursinoalberto/bachelor_thesis.html", context={})
