import axios from 'axios'

export async function fetchGetJSON(url: string) {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw err
    }
}

export async function fetchPostJSON(url: string, data?: {}) {
    try {
        // Default options are marked with *
        const response = await axios.post(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data || {}), // body data type must match "Content-Type" header
        })
        return await response.data
    } catch (err) {
        console.log({ '❌ Payment failed ': err })
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw err
    }
}
