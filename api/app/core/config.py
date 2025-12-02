from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    GEMINI_API_KEY: str
    ENVIRONMENT: str = "local"
    # Accept a comma-separated string in the env (or JSON list). Use None when unset.
    ALLOWED_ORIGINS: str | None = None

    @property
    def allowed_origins(self) -> list[str]:
        """Return a list of allowed origins.

        Supports the following env formats for `ALLOWED_ORIGINS`:
        - JSON list: `["https://a.com","http://localhost:3000"]`
        - Comma separated: `https://a.com,http://localhost:3000`
        If unset or empty, falls back to `http://localhost:3000`.
        """
        raw = self.ALLOWED_ORIGINS
        if not raw:
            return ["http://localhost:3000"]

        raw = raw.strip()
        # Try JSON first (supports lists)
        try:
            import json

            parsed = json.loads(raw)
            if isinstance(parsed, list):
                return [str(x).strip() for x in parsed if x]
        except Exception:
            pass

        # Fallback: comma-separated
        return [part.strip() for part in raw.split(",") if part.strip()]

    class Config:
        env_file = ".env"

settings = Settings()