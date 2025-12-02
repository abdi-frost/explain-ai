from pydantic import BaseModel
from app.services.gemini import Level

class ExplainRequest(BaseModel):
    code: str
    level: Level = Level.INTERMEDIATE