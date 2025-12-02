from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from strawberry.fastapi import GraphQLRouter
from app.routes.v1.endpoints import router as api_router
# from app.graphql.schema import schema
from datetime import datetime
from app.core.config import settings

app = FastAPI(title="Code Explainer Agent")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# REST Routes
app.include_router(api_router, prefix="/api/v1")

# 2. Mount GraphQL Routes
# graphql_app = GraphQLRouter(schema)
# app.include_router(graphql_app, prefix="/graphql")

@app.get("/")
def read_root():
    return {
        "status": "ok", 
        "message": "Code Explainer API is running",
        "time": datetime.now().isoformat()
    }