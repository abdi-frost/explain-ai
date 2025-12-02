# Explain AI - API Backend

AI-powered code explanation API built with FastAPI and Google Gemini AI. This backend service provides intelligent code explanations tailored to different expertise levels.

## 🚀 Getting Started

### Prerequisites

- Python 3.9 or higher
- Google Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Navigate to the API directory**
   ```bash
   cd api
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the api directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ENVIRONMENT=local
   ALLOWED_ORIGINS=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   uvicorn app.main:app --reload
   ```

   The API will be available at `http://localhost:8000`

## 📚 API Documentation

Once running, access interactive documentation at:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🏗️ Project Structure

```
api/
├── app/
│   ├── __init__.py
│   ├── main.py              # Application Entry Point & FastAPI app configuration
│   ├── core/                # Configuration & Settings
│   │   ├── __init__.py
│   │   └── config.py        # Environment configuration, CORS settings
│   ├── services/            # Business Logic (AI Integration)
│   │   ├── __init__.py
│   │   └── gemini.py        # Google Gemini AI service
│   ├── models/              # Data Structures (Pydantic Models)
│   │   ├── __init__.py
│   │   └── requests.py      # Request/Response schemas
│   └── routes/              # REST API Endpoints
│       ├── __init__.py
│       └── v1/
│           ├── __init__.py
│           └── endpoints.py # API route handlers
├── .env                     # Environment variables (create this)
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

## 🔌 API Endpoints

### Health Check
```http
GET /
```
Returns API status and version information.

### Explain Code
```http
POST /api/v1/explain
```

**Request Body:**
```json
{
  "code": "def fibonacci(n):\n    return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)",
  "level": "intermediate"
}
```

**Parameters:**
- `code` (string, required): The code snippet to explain
- `level` (string, optional): Expertise level - `"junior"`, `"intermediate"`, or `"senior"` (default: `"intermediate"`)

**Response:**
```json
{
  "explanation": "This is a recursive implementation of the Fibonacci sequence..."
}
```

## 🎯 Explanation Levels

### Junior
- Simple analogies and beginner-friendly language
- Focus on **what** the code does
- Avoids technical jargon
- Uses everyday examples (cooking, traffic, lego)

### Intermediate
- Standard library usage and coding patterns
- Logic flow and implementation details
- Focus on **how** the code achieves its goal
- Pythonic idioms and best practices

### Senior
- Performance complexity (Big O notation)
- Security vulnerabilities and edge cases
- Architectural patterns
- Focus on **why** and optimization opportunities
- Concise and technical analysis

## 🛠️ Tech Stack

- **FastAPI**: Modern, fast web framework for building APIs
- **Google Gemini AI**: Advanced language model for code understanding
- **Pydantic**: Data validation using Python type annotations
- **Uvicorn**: Lightning-fast ASGI server
- **python-dotenv**: Environment variable management

## 🔧 Configuration

Environment variables in `.env`:

| Variable | Description | Default |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Required |
| `ENVIRONMENT` | Deployment environment | `local` |
| `ALLOWED_ORIGINS` | CORS allowed origins (comma-separated) | `http://localhost:3000` |

## 🚀 Deployment

### Vercel (Recommended)

This API is configured for Vercel deployment with serverless functions.

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Set environment variables in Vercel dashboard

### Docker

```bash
# Build image
docker build -t explain-ai-api .

# Run container
docker run -p 8000:8000 --env-file .env explain-ai-api
```

### Traditional Hosting

```bash
# Install production server
pip install gunicorn

# Run with Gunicorn
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

## 🧪 Development

### Running Tests
```bash
pytest tests/
```

### Code Style
```bash
# Format code
black app/

# Lint
flake8 app/
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

Created by **[Abdi Frost](https://abdifrost.vercel.app)**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

For frontend integration, see the [web directory](../web/README.md).