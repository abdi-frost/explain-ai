# Explain AI 🤖

> Turn raw code into insight with conversational AI

An intelligent code explanation platform that translates complex code snippets into clear, human-friendly explanations tailored to different expertise levels. Powered by Google Gemini AI.

## ✨ Features

- **Multi-Level Explanations**: Get explanations tailored for junior, intermediate, or senior developers
- **Real-Time Processing**: Instant AI-powered code analysis
- **Beautiful UI**: Modern, gradient-rich interface built with Next.js and Tailwind CSS
- **REST API**: FastAPI backend with comprehensive endpoints
- **Language Agnostic**: Explain code written in any programming language

## 🚀 Quick Start

### Prerequisites

- Python 3.9+
- Node.js 18+
- Google Gemini API Key

### Backend Setup (API)

```bash
cd api
pip install -r requirements.txt

# Create .env file with your API key
echo "GEMINI_API_KEY=your_api_key_here" > .env
echo "ENVIRONMENT=local" >> .env

# Run the API
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

### Frontend Setup (Web)

```bash
cd web
npm install

# Configure API endpoint in config/api.ts if needed

# Run the development server
npm run dev
```

The web app will be available at `http://localhost:3000`

## 📚 How It Works

1. **Paste Your Code**: Enter any code snippet in the editor
2. **Select Expertise Level**: Choose between junior, intermediate, or senior
3. **Get Explanation**: Receive a tailored explanation that matches your level

### Expertise Levels

- **Junior**: Simple analogies and beginner-friendly explanations
- **Intermediate**: Logic flow, standard libraries, and coding patterns
- **Senior**: Performance analysis, security considerations, and architectural insights

## 🏗️ Project Structure

```
explain-ai/
├── api/                    # FastAPI backend
│   ├── app/
│   │   ├── core/          # Configuration
│   │   ├── models/        # Pydantic models
│   │   ├── routes/        # API endpoints
│   │   └── services/      # Business logic (Gemini integration)
│   └── requirements.txt
└── web/                   # Next.js frontend
    ├── app/               # Next.js app directory
    ├── components/        # React components
    └── config/           # Configuration files
```

## 🛠️ Tech Stack

### Backend
- **FastAPI**: Modern, fast web framework
- **Google Gemini AI**: Advanced language model for code explanation
- **Pydantic**: Data validation
- **Uvicorn**: ASGI server

### Frontend
- **Next.js 16**: React framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons

## 📖 API Documentation

Once the API is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Main Endpoints

- `POST /api/v1/explain` - Explain code at specified level
  ```json
  {
    "code": "def hello(): print('world')",
    "level": "intermediate"
  }
  ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

Created with ❤️ by **[@abdi-frost](https://abdifrost.vercel.app)**

## 🔮 Future Enhancements

- [ ] GraphQL API support
- [ ] Code refactoring suggestions
- [ ] Multi-language UI support
- [ ] Code complexity analysis
- [ ] Export explanations to various formats
- [ ] User authentication and history

## 📧 Contact

For questions or feedback, reach out to [@abdi-frost](https://abdifrost.vercel.app)

---

**Note**: This project requires a valid Google Gemini API key to function. Get yours at [Google AI Studio](https://makersuite.google.com/app/apikey).
