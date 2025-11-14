# Environment Variables Configuration Guide for Coolify

## ✅ Correct Environment Variables Setup

### Step 1: Locate Environment Variables Section
In Coolify Dashboard:
```
Your Application → Configuration → Environment Variables
```

### Step 2: Add Each Variable (Exactly as shown below)

#### Variable 1: NODE_ENV
```
Key:   NODE_ENV
Value: production
```
✅ **Correct**: `production` (lowercase, no quotes)
❌ **Wrong**: `Production`, `"production"`, `PRODUCTION`

#### Variable 2: HOST  
```
Key:   HOST
Value: 0.0.0.0
```
✅ **Correct**: `0.0.0.0` (exactly these numbers and dots)
❌ **Wrong**: `localhost`, `127.0.0.1`, `0.0.0.0:8080`

#### Variable 3: PORT
```
Key:   PORT
Value: 8080
```
✅ **Correct**: `8080` (just the number)
❌ **Wrong**: `:8080`, `port=8080`, `"8080"`

### Step 3: Important Rules

1. **No Quotes**: Never use quotes around values
   - ✅ `production`
   - ❌ `"production"`
   - ❌ `'production'`

2. **Exact Spacing**: No spaces before or after
   - ✅ `HOST=0.0.0.0`
   - ❌ `HOST = 0.0.0.0`
   - ❌ `HOST= 0.0.0.0`

3. **Case Sensitive**: Keys must be uppercase
   - ✅ `NODE_ENV`
   - ❌ `node_env`
   - ❌ `Node_Env`

4. **Complete Match**: Values must match exactly
   - ✅ `production` (all lowercase)
   - ❌ `Production` (capitalized)

### Step 4: Save and Deploy

1. After adding all three variables, click **Save**
2. Go back to your application
3. Click **Redeploy** or **Restart**
4. Wait for deployment to complete (2-5 minutes)
5. Check application logs for confirmation

## 🔍 Verification Checklist

After deployment, verify:
- [ ] Application is accessible via URL
- [ ] No "Bad Gateway" errors
- [ ] Browser console shows no critical errors
- [ ] Server logs show "Listening on 0.0.0.0:8080"

## ⚠️ Common Mistakes

### ❌ Mistake 1: Quotes Around Values
```
NODE_ENV="production"  ← WRONG
NODE_ENV=production    ← CORRECT
```

### ❌ Mistake 2: Spaces in Values
```
HOST = 0.0.0.0         ← WRONG
HOST=0.0.0.0           ← CORRECT
```

### ❌ Mistake 3: Wrong PORT Format
```
PORT=:8080             ← WRONG
PORT=8080              ← CORRECT
```

### ❌ Mistake 4: Using Localhost
```
HOST=localhost         ← WRONG (won't work in Coolify)
HOST=0.0.0.0           ← CORRECT
```

### ❌ Mistake 5: Wrong Case
```
node_env=production    ← WRONG (lowercase key)
NODE_ENV=production    ← CORRECT (uppercase key)
```

## 📋 Final Verification Table

| Variable | Value | Status |
|----------|-------|--------|
| NODE_ENV | production | ✅ Must be lowercase |
| HOST | 0.0.0.0 | ✅ Must be exactly 0.0.0.0 |
| PORT | 8080 | ✅ Must be 8080 (number only) |

## 🆘 If Still Getting Errors

1. **Delete all three variables**
2. **Wait 10 seconds**
3. **Add them again exactly as shown above**
4. **Redeploy the application**
5. **Wait 2-5 minutes for full deployment**
6. **Check application logs**

## 📞 Support Info

If you still see warnings in Coolify:
- Check the exact key names (case-sensitive)
- Ensure no extra spaces or quotes
- Verify the Redeploy was triggered
- Review application logs for specific errors
