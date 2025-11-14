# Coolify Configuration - صيغة صحيحة

## متغيرات البيئة - الصيغة الصحيحة تماماً

### Copy & Paste الأوامر التالية بالضبط:

```
NODE_ENV
production
```

```
HOST
0.0.0.0
```

```
PORT
8080
```

---

## الخطوات في Coolify:

1. افتح: Configuration → Environment Variables
2. اضغط: "Add Variable"
3. في الحقل "Key" اكتب: `NODE_ENV`
4. في الحقل "Value" اكتب: `production`
5. اضغط "Save"
6. كرر نفس العملية للمتغيرات الأخرى

---

## ⚠️ تحذيرات شائعة:

### الخطأ في الصورة:
```
"NODE_ENV" with value "production"  ← قد يكون هناك مشكلة
```

**الحل**: 
- تأكد أن القيمة بدون علامات اقتباس
- اضغط Update/Save بعد التغيير
- اعد النشر (Redeploy)

---

## القيم الصحيحة:

| المتغير | القيمة | النوع |
|--------|--------|--------|
| NODE_ENV | production | String (بدون علامات) |
| HOST | 0.0.0.0 | IP Address |
| PORT | 8080 | Number |

---

## بعد الإضافة:

1. اضغط "Save All"
2. اذهب للتطبيق
3. اضغط "Redeploy"
4. انتظر 3-5 دقائق
5. تحقق من الأخطاء في السجلات
