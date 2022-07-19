export async function fetcher(url: string, options = {}) {
    let res
    if (!options) {
        res = await fetch(url.toString())
    } else {
        res = await fetch(url.toString(), options)
    }
    const data = await res.json()
    return data
}
