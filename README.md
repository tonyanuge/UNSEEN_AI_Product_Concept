# Unseen - Privacy-Focused Dating Platform

> Fall for the soul, not the selfie

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### One-Command Local Setup
```bash
git clone <repository-url>
cd unseen
npm install
npm run dev
```

This will start:
- API server on `http://localhost:3001`
- Web app on `http://localhost:3000`

## 📁 Project Structure

```
├── apps/
│   ├── web/          # Next.js frontend application
│   └── api/          # Node.js/Express backend API
├── packages/
│   ├── ui/           # Shared React components
│   └── lib/          # Shared utilities and functions
├── docs/             # Architecture and documentation
└── .github/          # GitHub workflows and templates
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev          # Start all services in development mode
npm run build        # Build all packages and applications
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Run ESLint across all packages
npm run lint:fix     # Fix auto-fixable ESLint issues
npm run typecheck    # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check if code is properly formatted

# Maintenance
npm run clean        # Clean build artifacts and node_modules
```

## 🌐 Environment Variables

### Web App (.env.local)
```bash
API_URL=http://localhost:3001
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

### API Server (.env)
```bash
PORT=3001
NODE_ENV=development
SENTRY_DSN=your_sentry_dsn_here
DATABASE_URL=your_database_url_here
```

## 📋 Health Checks

- **API Health**: `http://localhost:3001/health`
- **Web Health**: `http://localhost:3000/health`

## 🔗 Live Links

### Staging
- **Web**: https://unseen-web-staging.railway.app
- **API**: https://unseen-api-staging.railway.app

### Production  
- **Web**: https://unseen-web.railway.app
- **API**: https://unseen-api.railway.app

## 🏗️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Build Tool**: Turbo (monorepo)
- **Testing**: Jest, React Testing Library, Supertest  
- **Code Quality**: ESLint, Prettier, Husky
- **Deployment**: Railway
- **Monitoring**: Sentry, UptimeRobot

## 🤝 Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## 📖 Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 📞 Support

- Create an issue for bug reports or feature requests
- Check [discussions](../../discussions) for questions
- Review [wiki](../../wiki) for detailed guides