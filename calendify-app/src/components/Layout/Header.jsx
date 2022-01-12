import PropTypes from 'prop-types'

import { AppBar, Toolbar, Typography, Container } from '@mui/material'

import Navigation from './Navigation'
import UserMenu from './UserMenu'

const Header = ({ title }) => {
    return (
        <header className="header">
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            {title}
                        </Typography>
                        <Navigation />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            {title}
                        </Typography>

                        <UserMenu />
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header