export interface Providers {
    facebook: Provider
    google: Provider
}

export interface Provider {
    callbackUrl: string
    id: string
    name: string
    signinUrl: string
    type: string
}
