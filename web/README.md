# Explain AI - Web Frontend

Modern, intuitive web interface for the Explain AI platform. Built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Features

- **Beautiful UI**: Gradient-rich design with smooth animations
- **Code Editor**: Syntax-aware code input with tab support
- **Level Selector**: Toggle between junior, intermediate, and senior explanations
- **Real-time Processing**: Instant feedback with loading states
- **Markdown Support**: Rich text formatting for explanations
- **Clipboard Integration**: Quick paste and copy functionality
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Navigate to the web directory**
   ```bash
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Configure the API endpoint**
   
   Update `config/api.ts` with your backend URL:
   ```typescript
   export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
web/
├── app/                      # Next.js App Router
│   ├── components/          # React components
│   │   ├── code-editor.tsx      # Code input component
│   │   ├── level-selector.tsx   # Expertise level picker
│   │   └── explanation-panel.tsx # Results display
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page component
│   ├── globals.css          # Global styles
│   └── types.ts             # TypeScript type definitions
├── config/                  # Configuration files
│   └── api.ts              # API endpoint configuration
├── lib/                     # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 UI Components

### Code Editor
- Syntax highlighting support
- Tab key handling for indentation
- Sample code preloaded
- Paste from clipboard functionality
- Keyboard shortcuts (Cmd/Ctrl + Enter to submit)

### Level Selector
Three expertise levels with distinct styles:
- 🟢 **Junior**: Green theme for beginners
- 🔵 **Intermediate**: Blue theme for mid-level developers
- 🟣 **Senior**: Purple theme for advanced users

### Explanation Panel
- Markdown rendering with `react-markdown`
- GitHub-flavored markdown support
- Copy to clipboard functionality
- Loading states with spinner animation

## 📦 Tech Stack

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Beautiful icon set
- **react-markdown**: Markdown rendering
- **class-variance-authority**: Type-safe component variants

## 🎯 Key Features Explained

### Keyboard Shortcuts
- **Tab**: Insert tab character in code editor
- **Cmd/Ctrl + Enter**: Submit code for explanation

### Responsive Design
The UI adapts seamlessly from mobile to desktop:
- Single column layout on mobile
- Two-column grid on larger screens
- Touch-friendly controls

### Error Handling
- Network error detection
- Invalid response handling
- User-friendly error messages

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### API Integration

The app connects to the backend API at:
```typescript
POST /api/v1/explain
```

Request format:
```json
{
  "code": "your code here",
  "level": "intermediate"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   - Import project in Vercel dashboard
   - Vercel auto-detects Next.js

2. **Configure environment variables**
   - Add `NEXT_PUBLIC_API_URL` in project settings

3. **Deploy**
   - Push to your repository
   - Vercel automatically deploys

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🎨 Customization

### Theme Colors
Edit `app/globals.css` to customize the color scheme:
```css
--color-primary: #14b8a6; /* Teal */
--color-secondary: #6366f1; /* Indigo */
```

### Fonts
The app uses the Geist font family from `next/font`. Modify in `app/layout.tsx`.

## 🧪 Development

### Linting
```bash
npm run lint
```

### Build Check
```bash
npm run build
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

Created with ❤️ by **[Abdi Frost](https://abdifrost.vercel.app)**

## 🔗 Related

- [API Backend Documentation](../api/README.md)
- [Project Root](../README.md)

---

For API setup and documentation, see the [api directory](../api/README.md).
