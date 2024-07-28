from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    """Home view."""
    return render(request, "ursinoalberto/home.html", context={})


def resume(request: HttpRequest) -> HttpResponse:
    """Resume view."""
    return render(request, "ursinoalberto/resume.html", context={})


def master_thesis(request: HttpRequest) -> HttpResponse:
    """Master's thesis view."""
    return render(request, "ursinoalberto/master_thesis.html", context={})


def bachelor_thesis(request: HttpRequest) -> HttpResponse:
    """Bachelor's thesis view."""
    return render(request, "ursinoalberto/bachelor_thesis.html", context={})
