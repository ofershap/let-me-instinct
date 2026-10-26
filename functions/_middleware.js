// Non-spoiling dynamic OG for Let Me Instinct share links:
// og:title = the question from ?q= (approved by user 26.10 17:04-17:05).
// Static fields (description, image) stay as served; no tool name, no mechanism.
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

class OgTitleRewriter {
  constructor(title) { this.title = title; }
  element(el) { el.setAttribute('content', this.title); }
}

export async function onRequest(context) {
  const response = await context.next();
  const ct = response.headers.get('content-type') || '';
  if (!ct.includes('text/html')) return response;
  const url = new URL(context.request.url);
  const q = (url.searchParams.get('q') || '').trim();
  if (!q) return response;
  const title = escapeHtml(q.slice(0, 90));
  return new HTMLRewriter()
    .on('meta[property="og:title"]', new OgTitleRewriter(title))
    .transform(response);
}
