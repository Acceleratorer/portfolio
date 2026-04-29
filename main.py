from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="Accelra Portfolio")

app.mount(
    "/",
    StaticFiles(directory=BASE_DIR, html=True),
    name="static",
)
