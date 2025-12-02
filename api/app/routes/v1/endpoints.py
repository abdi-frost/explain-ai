from fastapi import APIRouter, HTTPException
from app.models.requests import ExplainRequest
from app.services.gemini import GeminiService

router = APIRouter()
ai_service = GeminiService()

@router.post("/explain")
async def explain_code_endpoint(request: ExplainRequest):
    try:
        explanation = await ai_service.explain_code(request.code, request.level)
        return {"explanation": explanation}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))