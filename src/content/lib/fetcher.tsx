import axios, { AxiosResponse } from 'axios'

export async function fetcher(url: string, options: object = {}) {
    const res: AxiosResponse = await axios.get(url, options)
    const data: unknown = await res.data
    return data
}
