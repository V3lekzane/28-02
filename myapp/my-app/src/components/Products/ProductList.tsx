import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import Valute from 'components/curbutton/Valute'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const ProductList = ({ addProductToCart }: Props) => (
    <>
        <Valute />
        <Typography
            component="h2"
            variant="h3"
            align="center"
            sx={{
                marginBottom: '30px',
            }}
        >
            Our shop page
        </Typography>
        <Grid container spacing={4}>
            {productsArray.map(({ id, title, decscription, price, valute }) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <ProductListItem
                        id={id}
                        title={title}
                        decscription={decscription}
                        price={price}
                        valute={valute}
                        addProductToCart={addProductToCart}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)

export default ProductList
