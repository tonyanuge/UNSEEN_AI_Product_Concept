# Contributing to Unseen

Thank you for your interest in contributing to Unseen! This guide will help you get started.

## 🌿 Branch Strategy

### Protected Branches
- `main` - Production-ready code, protected with required status checks

### Branch Naming Convention
- **Features**: `feat/description-of-feature`
- **Bug fixes**: `fix/description-of-fix`
- **Hotfixes**: `hotfix/critical-issue`
- **Chores**: `chore/maintenance-task`

### Examples
```bash
feat/user-authentication
fix/chat-message-rendering
hotfix/security-patch
chore/update-dependencies
```

## 🔄 Pull Request Process

### 1. Create Feature Branch
```bash
git checkout main
git pull origin main
git checkout -b feat/your-feature-name
```

### 2. Make Changes
- Write clean, well-documented code
- Follow existing code style and patterns
- Add tests for new functionality
- Update documentation as needed

### 3. Quality Checks
Run these locally before pushing:
```bash
npm run lint          # Fix linting issues
npm run typecheck     # Check TypeScript types
npm run test          # Ensure all tests pass
npm run format        # Format code
```

### 4. Commit Guidelines
Follow conventional commits:
```bash
feat: add user profile management
fix: resolve chat message ordering
docs: update API documentation
test: add unit tests for auth service
refactor: simplify user matching logic
chore: update dependencies
```

### 5. Push and Create PR
```bash
git push origin feat/your-feature-name
```

Open a pull request with:
- Clear title and description
- Reference any related issues
- Fill out the PR template completely
- Ensure all CI checks pass

## ✅ Pull Request Requirements

### Automated Checks (must pass)
- [ ] Linting passes (`npm run lint`)
- [ ] Type checking passes (`npm run typecheck`)  
- [ ] All tests pass (`npm run test`)
- [ ] Code formatting is correct (`npm run format:check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Health endpoints respond correctly

### Manual Review Criteria
- [ ] Code follows project patterns and style
- [ ] Changes are well-tested
- [ ] Documentation is updated if needed
- [ ] No breaking changes (or properly documented)
- [ ] Security considerations addressed
- [ ] Performance impact considered

## 🧪 Testing Guidelines

### Unit Tests
- Test individual functions and components
- Aim for >80% code coverage
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

```typescript
// ✅ Good
test('should format date in MM/DD/YYYY format', () => {
  const date = new Date('2023-12-25');
  const result = formatDate(date);
  expect(result).toBe('Dec 25, 2023');
});
```

### Integration Tests
- Test API endpoints with supertest
- Test component interactions
- Use realistic data scenarios

## 📝 Code Style Guidelines

### TypeScript
- Use strict TypeScript configuration
- Prefer explicit types over `any`
- Use interfaces for object shapes
- Follow naming conventions:
  - `camelCase` for variables and functions
  - `PascalCase` for classes and interfaces
  - `UPPER_SNAKE_CASE` for constants

### React Components
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused
- Use TypeScript props interfaces

```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  onClick 
}) => {
  // Component implementation
};
```

### API Design
- Use RESTful conventions
- Include proper error handling
- Validate input data
- Return consistent response formats

## 🚀 Local Development

### Setup
```bash
git clone <repository-url>
cd unseen
npm install
npm run dev
```

### Database Setup (if applicable)
```bash
# Database setup commands
npm run db:setup
npm run db:migrate
npm run db:seed
```

### Environment Variables
Copy and configure environment files:
```bash
cp .env.example .env
cp apps/web/.env.local.example apps/web/.env.local
```

## 🐛 Issue Reporting

### Bug Reports
Use the bug report template and include:
- Steps to reproduce
- Expected vs actual behavior  
- Environment details (OS, browser, etc.)
- Screenshots/logs if helpful

### Feature Requests
Use the feature request template and include:
- Problem statement
- Proposed solution
- Use cases and examples
- Acceptance criteria

## 📋 Definition of Done

A task is considered complete when:

- [ ] Code is written and reviewed
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] Changes are tested locally
- [ ] PR is approved and merged
- [ ] Deployment is successful
- [ ] Feature works as expected in staging

## 🆘 Getting Help

- **Questions**: Use GitHub Discussions
- **Bugs**: Create a GitHub Issue
- **Chat**: Join our development Slack (link in README)
- **Documentation**: Check the `/docs` folder

## 📜 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow project guidelines and standards