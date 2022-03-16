from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import api

app = FastAPI()

origins = [
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/convert")
async def convert(amount: str, fromCurrency: str, to: str):
    return api.convert_currency(amount, fromCurrency, to)