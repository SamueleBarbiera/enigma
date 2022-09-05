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

export interface ImageUrl {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
}

export interface Data {
    url: string
}

export interface Headers {
    connection: string
    'content-length': string
    'content-type': string
    date: string
    etag: string
    'keep-alive': string
    vary: string
}

export interface Config {
    transitional: Transitional
    transformRequest: unknown[]
    transformResponse: unknown[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
    env: Env
    headers: Headers2
    method: string
    url: string
    data: string
}

export interface Transitional {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
}

export interface Env {
    FormData: unknown
}

export interface Headers2 {
    Accept: string
    'Content-Type': string
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
