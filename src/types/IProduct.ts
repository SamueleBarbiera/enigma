import { AxiosResponse } from 'axios'

/* eslint-disable @typescript-eslint/no-extra-semi */
export interface IProduct {
    id: string
    price_id: string
    sku_id: string
    sku: string
    image: string
    price: number
    name: string | null
    description: string | null
    quantity: number | null
    design: string | null
    material: string | null
    created_at: Date
    updated_at: Date | null
}

export interface GetProductsResponse {
    data: IProduct[]
}

export interface ProductsData {
    products: IProduct[]
}

export interface ProdList {
    text: string
    active: boolean
    initialValues: {
        image: string
        name: string
        description: string
        price: number
    }
    redirectPath: string
    buttonText: string
    onSubmit: unknown
}

export interface ImageUrl extends AxiosResponse {
    data: {
        url: string
    }
}

export interface Filtri {
    id: string
    name: string
    options: {
        value: string
        label: string
        checked: boolean
    }[]
}
[]

export interface Options {
    value: string
    label: string
    checked: boolean
}
