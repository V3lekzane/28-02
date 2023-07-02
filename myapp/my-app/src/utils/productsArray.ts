export type Product = {
    id: number
    title: string
    decscription: string
    price: number
    valute: string
    capacity: string
}
const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        decscription: 'This is iPhone 12...',
        valute: 'EUR',
        price: 750,
        capacity: 'phone',
    },
    {
        id: 2,
        title: 'iPhone 8',
        decscription: 'This is iPhone 8...',
        valute: 'EUR',
        price: 850,
        capacity: 'phone',
    },
    {
        id: 3,
        title: 'iPhone X ',
        decscription: 'This is iPhone X... ',
        valute: 'EUR',
        price: 1250,
        capacity: 'phone',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
export default productsArray
