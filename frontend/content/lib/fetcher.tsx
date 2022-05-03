import axios from "axios"

export async function fetcher(url: string, options = {}) {
    let res
    if (!options) {
        res = await axios.get(url.toString())
    } else {
        res = await axios.get(url.toString(), options)
    }
    const data = await res.data
    return data
}
