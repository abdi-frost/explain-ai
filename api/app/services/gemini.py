from google import genai
from app.core.config import settings
from enum import Enum

class Level(Enum):
    JUNIOR = "junior"
    INTERMEDIATE = "intermediate"
    SENIOR = "senior"

class GeminiService:
    def __init__(self):
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY)

    async def explain_code(self, code: str, level: Level = Level.INTERMEDIATE.value) -> str:
        """
        Generates a text explanation based on the user's expertise level.
        """
        prompts = {
            "junior": (
                "You are a helpful mentor teaching a complete beginner. "
                "Explain the following code using simple analogies (like cooking, traffic, or lego). "
                "Avoid technical jargon where possible. Explain *what* the code does."
            ),
            "intermediate": (
                "You are a senior developer doing a code review for a mid-level colleague. "
                "Explain the logic flow, standard libraries used, and any Pythonic idioms. "
                "Focus on *how* the code achieves its goal."
            ),
            "senior": (
                "You are a principal engineer. Analyze this code for performance complexity (Big O), "
                "security vulnerabilities, edge cases, and architectural patterns. "
                "Be concise and technical."
            )
        }

        system_instruction = prompts.get(level.value, prompts[Level.INTERMEDIATE.value])
        full_prompt = f"{system_instruction}\n\nCode Snippet:\n```\n{code}\n```"
        
        response = self.client.models.generate_content(model="gemini-2.5-flash", contents=full_prompt)
        print(response)
        return response.text

    async def analyze_refactor(self, code: str):
        """
        Generates structured data: complexity score and a refactored version.
        Note: We ask for JSON format to make parsing easier for GraphQL.
        """
        prompt = (
            "Analyze the following code. Return a JSON object (no markdown formatting) with these fields: "
            "1. 'complexity_score' (integer 1-10), "
            "2. 'tags' (list of strings, e.g., 'recursion', 'database'), "
            "3. 'refactored_code' (string, the improved version). "
            f"\nCode:\n{code}"
        )
        # Note: In a production app, use Gemini's 'response_mime_type="application/json"' feature
        # For now, we will assume text output for simplicity or basic parsing.
        response = await self.model.generate_content_async(prompt)
        return response.text