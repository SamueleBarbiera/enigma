/* eslint-disable @typescript-eslint/no-extra-semi */
import { Product } from 'use-shopping-cart/core'

export interface GetProductsResponse {
    data: Product[]
}

export interface ProductsData {
    products: Product[]
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

export interface ImageUrl {
    data: Data
}

export interface Data {
    url: string
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
// eslint-disable-next-line no-extra-semi
;[]

export interface Options {
    value: string
    label: string
    checked: boolean
}
