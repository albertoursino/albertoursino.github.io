from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    """Home view."""
    return render(request, "ursinoalberto/home.html", context={})
