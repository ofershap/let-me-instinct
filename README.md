# Let Me Instinct That For You

בדיוק כמו Let Me Google That For You - אבל עם אינסטינקט.

- פותחים את האתר, כותבים שאלה ומקבלים לינק לשיתוף.
- מי שפותח את הלינק רואה אנימציית הקלדה של ההודעה, ואז וואטסאפ נפתח מול אינסטינקט עם ההודעה מוכנה לשליחה - נשאר רק ללחוץ שלח.

**Live:** https://let-me-instinct.pages.dev

Static single-page site (`index.html`), deployed to Cloudflare Pages via Wrangler:

```bash
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... npx wrangler pages deploy . --project-name=let-me-instinct --branch=main
```
