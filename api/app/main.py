from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from strawberry.fastapi import GraphQLRouter
from app.routes.v1.endpoints import router as api_router
# from app.graphql.schema import schema
from datetime import datetime
from app.core.config import settings

app = FastAPI(
    title="Explain AI API",
    description="AI-powered code explanation API that provides tailored code explanations for different expertise levels using Google Gemini AI",
    version="1.0.0",
    contact={
        "name": "Abdi Frost",
        "url": "https://abdifrost.vercel.app",
    },
    license_info={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT",
    },
)

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
        "name": "Explain AI API",
        "version": "1.0.0",
        "message": "AI-powered code explanation API is running",
        "documentation": "/docs",
        "time": datetime.now().isoformat()
    }