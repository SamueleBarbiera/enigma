import axios from 'axios'

export async function fetchGetJSON(url: string) {
    try {
        const res = await axios.get(url)
        console.log("🚀 - file: api-helpers.ts - line 6 - fetchGetJSON - res", res.data)
        return res.data
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw err
    }
}

export async function fetchPostJSON(url: string, data?: {}, amount?: any) {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({data, amount}), // body data type must match "Content-Type" header
        })
        return await response.json()
    } catch (err) {
        console.log({ '❌ Payment failed ': err })
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw err
    }
}
