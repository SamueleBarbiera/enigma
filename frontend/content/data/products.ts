import axios from 'axios'
export default async function data() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias`)
        return res.data
    } catch (err) {
        throw new Error(err)
    }
}
