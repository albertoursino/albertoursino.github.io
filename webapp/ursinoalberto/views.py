from pathlib import Path

from django.http import FileResponse, HttpRequest, HttpResponse
from django.shortcuts import render


def home(request: HttpRequest) -> HttpResponse:
    """Home view."""
    return render(request, "ursinoalberto/home.html", context={})


def resume(request: HttpRequest) -> HttpResponse:
    """Resume view."""
    return FileResponse(
        Path.open("webapp/ursinoalberto/static/ursinoalberto/resume.pdf", "rb"),
        content_type="application/pdf",
    )
