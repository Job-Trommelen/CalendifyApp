import { useState, useContext } from 'react'

import { Box, IconButton, Menu, MenuItem, Tooltip, Avatar, Typography, Button, Stack } from '@mui/material'

import AuthContext from '../../store/auth-context'

const settings = ['Profile', 'Account', 'Logout']

const UserMenu = () => {
    const authContext = useContext(AuthContext)

    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <div className="userMenu">
            {authContext.isLoggedIn && (
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Job Trommelen" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            )}
            {!authContext.isLoggedIn && (
                <Stack direction="row" spacing={2}>
                    <Button
                        key="signin"
                        variant="contained"
                        color="success"
                    >
                        Sign In
                    </Button>
                    <Button
                        key="register"
                        variant="contained"
                        color="error"
                    >
                        Register
                    </Button>
                </Stack>
            )}
        </div>
    )
}

export default UserMenu