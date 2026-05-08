from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="Accelra Portfolio")


@app.get("/")
def home():
    return FileResponse(BASE_DIR / "index.html")


@app.get("/dashboard")
def dashboard():
    return FileResponse(BASE_DIR / "dashboard" / "index.html")


@app.get("/projects")
def projects():
    return FileResponse(BASE_DIR / "projects" / "index.html")


@app.get("/blog")
def blog():
    return FileResponse(BASE_DIR / "blog" / "index.html")


app.mount("/", StaticFiles(directory=BASE_DIR, html=True), name="static")