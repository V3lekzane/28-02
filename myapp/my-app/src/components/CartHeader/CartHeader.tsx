import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import './CartHeader.scss'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productsObject)
    console.log(productsArray)
    return (
        <div className="totalprice">
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}
            </div>
        </div>
    )
}

export default CartHeader
