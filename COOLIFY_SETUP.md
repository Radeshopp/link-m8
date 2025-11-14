# تعليمات تثبيت link-m8 على Coolify

## المتطلبات قبل البدء
- حساب Coolify نشط
- مستودع GitHub متصل (Radeshopp/link-m8)
- Domain أو استخدام IP مباشر

## خطوات التثبيت على Coolify

### 1️⃣ إضافة تطبيق جديد
```
1. انتقل إلى Coolify Dashboard
2. اختر "Create Application" أو "New Application"
3. اختر "GitHub" كمصدر التطبيق
4. اختر المستودع: Radeshopp/link-m8
5. اختر الفرع: main
```

### 2️⃣ إعدادات البناء (Build Settings)
```
Build Command:        npm run build
Start Command:        npm start
Public Directory:     dist
Port:                8080
Node Version:         20 (Alpine recommended)
```

### 3️⃣ متغيرات البيئة (Environment Variables)
أضف المتغيرات التالية:
```
NODE_ENV=production
HOST=0.0.0.0
PORT=8080
```

### 4️⃣ إعدادات الخادم (Server Configuration)
✅ **هام**: تأكد من:
- استماع الخادم على `0.0.0.0:8080` (وليس localhost)
- عدم استخدام --no-install-scripts
- تفعيل caching للـ node_modules

### 5️⃣ Domain/URL
```
- أضف Domain إذا توفر
- أو استخدم الرابط المؤقت: https://your-project.coolify.io
- تأكد من HTTPS
```

## ملفات الإعدادات المهمة

### ✅ `nixpacks.toml` - معروّف مسبقاً
يحتوي على:
- [install]: npm ci
- [build]: npm run build
- [start]: npm start
- [env]: NODE_ENV, HOST, PORT

### ✅ `Dockerfile` - معروّف مسبقاً
- بناء متعدد المراحل
- Node 20 Alpine
- خادم Express مدمج

### ✅ `server.js` - خادم الإنتاج
- يخدم الملفات من مجلد `dist`
- يستمع على `0.0.0.0:8080`
- يدعم SPA routing

## ما الذي يحدث تلقائياً بعد الدفع إلى GitHub

1. ✅ Coolify يكتشف التغييرات
2. ✅ يشغل `npm ci` (تثبيت التبعيات)
3. ✅ يشغل `npm run build` (بناء Vite)
4. ✅ يشغل `npm start` (تشغيل Express server)
5. ✅ التطبيق متاح على الرابط المعطى

## استكشاف الأخطاء

### ❌ Bad Gateway
**السبب**: الخادم لا يستمع على 0.0.0.0
**الحل**: تأكد من متغيرات البيئة (HOST=0.0.0.0, PORT=8080)

### ❌ Build Failed
**السبب**: مشاكل في package-lock.json
**الحل**: تم حلها بالفعل - الملف محدّث

### ❌ Command Not Found
**السبب**: npm ci أو npm start غير موجود
**الحل**: تحقق من package.json والملفات موجودة بشكل صحيح

### ❌ Port Already in Use
**السبب**: منفذ 8080 مشغول
**الحل**: غيّر PORT في Environment Variables (لكن Coolify يوفر 8080 عادة)

## اختبار محلي (قبل الدفع)

```bash
# بناء المشروع
npm run build

# تشغيل الخادم محلياً
npm start

# زيارة http://localhost:8080
```

## ملاحظات مهمة

⚠️ **لا تغيّر**:
- `server.js` (يستمع على 0.0.0.0:8080)
- `package.json` scripts (start, build, etc.)
- `nixpacks.toml` (معروّف للـ Coolify)

✅ **آمن للتغيير**:
- `src/` - كود التطبيق
- `public/` - الملفات الثابتة
- `tailwind.config.ts` - التصميم
- `vite.config.ts` - إعدادات البناء

## بعد التثبيت

1. اختبر التطبيق من الرابط المعطى
2. افتح Developer Console للتحقق من Errors
3. تحقق من أن الملفات تُحمّل بشكل صحيح (CSS, JS)
4. اختبر وظائف المشروع (LinkChecker, MediaPlayer, etc.)

---

### ✨ الخلاصة
المشروع مُعد بالكامل للـ Coolify! 
- ✅ Docker معروّف
- ✅ Nixpacks معروّف
- ✅ Server مخصص
- ✅ متغيرات البيئة صحيحة

فقط ادفع التغييرات وأنشئ Deployment جديد في Coolify!
