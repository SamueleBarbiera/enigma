export function formatAmountForDisplay(amount: number, currency: string): number {
    const numberFormat = Number(
        new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency,
            minimumIntegerDigits: 2,
        }).format(amount * 10)
    )

    return numberFormat
}

export function formatAmountForStripe(amount: number, currency: string): number {
    const numberFormat = new Intl.NumberFormat(['it-IT'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    })
    const parts = numberFormat.formatToParts(amount)
    let zeroDecimalCurrency = true
    for (const part of parts) {
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false
        }
    }
    return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}

export function formatAmountFromStripe(amount: number, currency: string): number {
    const numberFormat = new Intl.NumberFormat(['it-IT'], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol',
    })
    const parts = numberFormat.formatToParts(amount)
    let zeroDecimalCurrency = true
    for (const part of parts) {
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false
        }
    }
    return zeroDecimalCurrency ? amount : Math.round(amount / 100)
}
