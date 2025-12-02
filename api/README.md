### Structure

api/
├── app/
│   ├── __init__.py
│   ├── main.py              # Application Entry Point
│   ├── core/                # Config & Settings
│   │   ├── __init__.py
│   │   └── config.py        
│   ├── services/            # Business Logic (The AI Brain)
│   │   ├── __init__.py
│   │   └── gemini.py
│   ├── models/              # Data structures (Pydantic)
│   │   ├── __init__.py
│   │   └── requests.py
│   ├── api/                 # REST Routes
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       └── endpoints.py
│   └── graphql/             # GraphQL Schema & Resolvers
│       ├── __init__.py
│       └── schema.py
├── .env                     # Secrets
├── requirements.txt         # Dependencies
└── vercel.json              # Deployment config