export interface CntFile {
    id: string
    name: string
    size: string
    source: string
    dimensions: string
    resolution: string
}

export interface File {
    name: string
    size: string
    source: string
    current: boolean
}

export interface InputField {
    type: string
    label: string
    className: string
    placeholder: string
    disabled: object
    rows: number
    min: string
    name: string
}

export interface addImg {
    alt: string
    src: string | null | ArrayBuffer
    accept: string
    sizeLimit: number
    onChangePicture: unknown
}
