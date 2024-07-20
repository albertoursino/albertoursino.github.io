from pathlib import Path

from django.http import FileResponse, HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    """Home view."""
    return render(request, "ursinoalberto/home.html", context={})


def resume(request: HttpRequest) -> HttpResponse:
    """Resume view."""
    return render(request, "ursinoalberto/resume.html", context={})
