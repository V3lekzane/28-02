import Typography from '@mui/material/Typography'
import Logo from 'assets/logo.png'
type Props = {}
const logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" />
        </Typography>
    )
}
export default logo
