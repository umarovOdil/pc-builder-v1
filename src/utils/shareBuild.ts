type BuildMap = Record<string, string>

function toB64Url(str: string): string {
  const bytes = new TextEncoder().encode(str)
  let bin = ""
  bytes.forEach((b) => (bin += String.fromCharCode(b)))
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function fromB64Url(s: string): string {
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/")
  const padded = b64.padEnd(Math.ceil(b64.length / 4) * 4, "=")
  const bin = atob(padded)
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

export function encodeBuild(build: Record<string, string | null | undefined>): string {
  const clean: BuildMap = {}
  for (const [k, v] of Object.entries(build)) {
    if (typeof v === "string" && v) clean[k] = v
  }
  return toB64Url(JSON.stringify(clean))
}

export function decodeBuild(token: string): BuildMap | null {
  try {
    const data = JSON.parse(fromB64Url(token))
    if (!data || typeof data !== "object" || Array.isArray(data)) return null

    const clean: BuildMap = {}
    for (const [k, v] of Object.entries(data)) {
      if (typeof v === "string") clean[k] = v
    }
    return clean
  } catch {
    return null
  }
}
