import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const product = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/variantetaglias?populate=*`)
}
