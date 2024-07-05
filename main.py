from fastapi import FastAPI

app = FastAPI()

@app.post("/")
async def create_item():
    return {"message": "Item created successfully"}