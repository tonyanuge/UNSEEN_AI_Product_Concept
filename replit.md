# UNSEEN - Privacy-Focused Dating App

## Overview
UNSEEN is a privacy-focused dating application designed to foster emotional connections through anonymous communication. Its core purpose is to enable users to "Fall for the soul, not the selfie" by facilitating text or voice conversations before any visual identity is revealed. The project aims to disrupt traditional dating apps by prioritizing genuine connection and privacy, thereby increasing market potential for users seeking deeper relationships.

**Current Status:** Complete real-time messaging system operational with robust authentication handling. All premium restrictions completely removed - ALL features are now available to ALL users without any monetization barriers. **MAJOR SUCCESS (Aug 18, 2025):** COMPLETE REMOVAL of ALL AI-powered features successfully completed. Both AI Relationship Coach AND AI-Powered Conversation Prompts have been systematically eliminated from the entire application per user request. Comprehensive cleanup completed across: server-side storage functions, database schema (coaching tables, prompts tables, and aiPrompts tables completely removed), client-side UI components, all AI-related API endpoints, and prompt generation engines. All AI coaching buttons, brain icons, debugging components, prompt-related functionality, and OpenAI integrations have been systematically removed. Database migration successfully executed removing 9,320+ prompt records and all coaching data. The application now operates without ANY AI assistance features, focusing purely on direct human-to-human connections. Enhanced WebSocket implementation provides instant message delivery, cross-user notifications, and browser alerts for offline users. Anonymous aliases maintained throughout conversations (SeekerLeaf41, BrightSilk29, etc.). Auto-refresh fallback (every 3 seconds) ensures seamless messaging even without WebSocket connections. Centralized authentication utilities prevent OAuth/test user ID resolution bugs across all WebSocket connections. Comprehensive A/B testing infrastructure using 20 working test user accounts (test001@unseen.app to test020@unseen.app) accessible through email/password authentication.

**MAJOR MILESTONE (Aug 26, 2025):** Complete GitHub-first developer system established for scalable SaaS development. Comprehensive monorepo structure created with modern tooling: Turbo for build orchestration, automated CI/CD workflows (GitHub Actions), quality gates (ESLint, Prettier, TypeScript, Jest, Husky), Railway/Render deployment configurations, Sentry error tracking integration, comprehensive documentation (README, CONTRIBUTING, ARCHITECTURE, API docs), and complete development infrastructure ready for team collaboration.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The application employs a full-stack architecture with a React-based frontend utilizing Wouter, TanStack Query, Radix UI (with shadcn/ui), and Tailwind CSS, built with Vite. The backend is an Express.js application with TypeScript, PostgreSQL (using Drizzle ORM), and Replit Auth for authentication. Real-time communication is handled via WebSockets for chat functionality.

**Key Architectural Decisions:**
- **Progressive Disclosure UI/UX**: Information, including user identities, is revealed gradually based on user-defined rules and interaction depth, maintaining anonymity until users choose otherwise.
- **Anonymous Avatars**: Consistent, gradient-based avatars are generated from user IDs to ensure anonymity and a unique visual identity without revealing personal attributes.
- **Three-Phase Verification System**: A robust multi-factor authentication, LinkedIn professional verification, and AI-based photo verification system is integrated to build trust and ensure genuine profiles. This system is subject to A/B testing for optimization.
- **Personalized Onboarding Journey**: An adaptive 8-step onboarding process tailors the user experience based on relationship goals, leading to personalized recommendations for communication settings and match criteria.
- **Tiered Identity Visibility**: A system progresses users from anonymous aliases ("Mystical handles") to first names, and then to full profiles, based on conversation depth and engagement criteria.
- **Real-time Communication**: WebSocket integration facilitates live chat with features like message broadcasting, delivery confirmations, and online status tracking. Voice chat is also enabled via WebRTC, activating when conversation quality thresholds are met.
- **Compatibility Scoring**: A multi-dimensional algorithm assesses user compatibility based on onboarding responses and behavioral data, guiding the matching process.
- **Dual Authentication System**: Supports both Replit OAuth for regular users and email/password authentication for test users, with seamless session management and unlimited feature access for all test accounts.
- **A/B Testing Infrastructure**: Complete system with 20 test user accounts (test001@unseen.app to test020@unseen.app) for conducting user experience experiments and feature testing.
- **GitHub-First Development**: Comprehensive monorepo structure with Turbo build system, automated CI/CD pipelines, quality gates, deployment automation to Railway/Render, error tracking with Sentry, and complete documentation for scalable team development.

## External Dependencies
- **Database**: Neon Database (PostgreSQL)
- **Authentication**: Replit Auth service
- **UI Components**: Radix UI
- **Date Handling**: date-fns
- **Real-time Communication**: Native WebSocket API
- **Development**: TypeScript, ESBuild, PostCSS
```