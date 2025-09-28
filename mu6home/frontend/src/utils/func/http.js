const API_BASE = "/api"; // adjust to match your backend

function formatUrl(template, args) {
  if (!args) return template;
  if (!Array.isArray(args)) args = [args]; // normalize single value into array

  return template.replace(/{(\d+)}/g, (match, index) => {
    const value = args[index];
    return value !== undefined ? encodeURIComponent(value) : match;
  });
}

async function request(method, url, data) {
  const opts = { method, headers: {} };

  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }

  const res = await fetch(`${API_BASE}${url}`, opts);
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`HTTP ${res.status}: ${msg}`);
  }

  // Try parsing JSON, fallback to text if not JSON
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  }
  return res.text();
}

export const http = {
  get: (urlTemplate, ...args) => request("GET", formatUrl(urlTemplate, args)),
  post: (url, data) => request("POST", url, data),
  put: (url, data) => request("PUT", url, data),
  delete: (url) => request("DELETE", url),
};
