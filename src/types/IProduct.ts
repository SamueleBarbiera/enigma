import { Product } from 'use-shopping-cart/core'

/* eslint-disable @typescript-eslint/no-extra-semi */
export interface IProduct extends Product {
    
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

export interface ImageUrl {
    data: Data
    status: number
    statusText: string
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
;[]

export interface Options {
    value: string
    label: string
    checked: boolean
}
