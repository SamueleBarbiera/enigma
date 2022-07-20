export async function fetcher(url: RequestInfo, options: object = {}) {
    const res: Response = await fetch(url, options)
    const data: unknown = await res.json()
    return data
}
