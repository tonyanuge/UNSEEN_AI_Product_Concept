# WebSocket Authentication Guide

## Critical Issue Resolved: OAuth User ID Resolution Bug

### The Problem
A critical bug was discovered where OAuth users (like PeacefulSatin80) couldn't establish WebSocket connections due to incorrect user ID resolution. The code was trying to extract user IDs with `(user as any).id || user.id` which was backwards for the authentication system.

### The Solution
Created centralized authentication utilities in `client/src/lib/authUtils.ts` that correctly handle both OAuth and test users:

```typescript
// ✅ CORRECT: Use centralized utility
import { getUserId, getUserDebugLabel } from '@/lib/authUtils';
const userId = getUserId(user);

// ❌ WRONG: Manual ID extraction (prone to bugs)
const userId = (user as any).id || user.id;
```

## Authentication Architecture

### User Types
1. **OAuth Users** (Regular users via Replit authentication)
   - User ID stored in: `user.id`
   - Example: PeacefulSatin80 (44651055), BrightSilk29 (44408289)

2. **Test Users** (A/B testing accounts)
   - User ID stored in: `user.claims.sub`
   - Example: test001@unseen.app through test020@unseen.app

### Required Utilities

Always use these functions from `@/lib/authUtils`:

```typescript
import { getUserId, getUserDebugLabel, isTestUser } from '@/lib/authUtils';

// Get user ID safely
const userId = getUserId(user);
if (!userId) {
  console.error('No user ID found!');
  return; // Don't attempt WebSocket connection
}

// Get debug-friendly user label
const userLabel = getUserDebugLabel(user);
console.log('WebSocket connecting for:', userLabel);

// Check if test user
const isTest = isTestUser(user);
```

## WebSocket Connection Checklist

When creating any WebSocket connection:

1. ✅ Import auth utilities: `import { getUserId, getUserDebugLabel } from '@/lib/authUtils'`
2. ✅ Extract user ID safely: `const userId = getUserId(user)`
3. ✅ Check for null: `if (!userId) return;`
4. ✅ Use debug label: `const userLabel = getUserDebugLabel(user)`
5. ✅ Log connections: `console.log('WebSocket connecting for:', userLabel)`

## Files Updated with Proper Authentication

### Core WebSocket Files
- ✅ `client/src/pages/chat.tsx` - Chat WebSocket connections
- ✅ `client/src/components/ui/global-notification-handler.tsx` - Global notifications
- ✅ `client/src/pages/websocket-debug.tsx` - Debug tool
- ✅ `client/src/lib/authUtils.ts` - Centralized utilities (NEW)

### Files That Don't Need Changes
- ✅ `client/src/lib/websocket.ts` - Takes userId as parameter
- ✅ `client/src/pages/simple-ws-test.tsx` - Uses hardcoded test values

## Testing Requirements

Before deploying any WebSocket feature:

1. **Test OAuth Users**: Verify regular users can connect (like PeacefulSatin80)
2. **Test User Accounts**: Verify test001@unseen.app through test020@unseen.app work
3. **Check Server Logs**: Ensure both user types appear in WebSocket connection logs
4. **Real-time Delivery**: Verify messages appear instantly without page refresh

## Future Development Guidelines

### DO ✅
- Always use `getUserId(user)` for user ID extraction
- Always check for null user IDs before WebSocket connections
- Use `getUserDebugLabel(user)` for logging
- Test with both OAuth and test users

### DON'T ❌
- Never use manual ID extraction like `user.id` or `user.claims.sub`
- Never skip null checks for user IDs
- Never assume authentication structure without checking both user types
- Never deploy WebSocket features without testing both authentication methods

## Emergency Debugging

If WebSocket connections fail for any user:

1. Check `/websocket-debug` page for that user
2. Look for their user ID in server logs
3. Verify they're using `getUserId()` utility
4. Check browser console for JavaScript errors
5. Test with both OAuth and test user accounts

## Version History

- **2025-08-15**: Fixed critical OAuth user WebSocket connection bug
- **2025-08-15**: Created centralized authentication utilities
- **2025-08-15**: Updated all WebSocket connection points
- **2025-08-15**: Added comprehensive testing and documentation