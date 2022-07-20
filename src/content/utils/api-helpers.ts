import axios, { AxiosResponse } from 'axios'

export async function fetchGetJSON(url: string) {
    try {
        const res: AxiosResponse = await axios.get(url)
        const data: unknown = await res.data
        return data
    } catch (err:AxiosError) {
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw err
    }
}

export async function fetchPostJSON(url: string, data: object = {}, amount?: number) {
    try {
        // Default options are marked with *
        const res: Response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({ data, amount }), // body data type must match "Content-Type" header
        })
        const dataRes: unknown = await res.json()
        return dataRes
    } catch (err) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        console.log({ '❌ Payment failed ': err })
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw err
    }
}
