import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (<Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
    >
        <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
    </Menu>);

    const renderDropDownMail = (
        <div className="drop-down-card-menu" style={{ position: "absolute", top: "70px", right: "0" }}>
            <h4 className="drop-down-card-header">Message Center</h4>
            <a onClick={() => setShowMail(!showMail)} class="drop-down-card-item" href="#">
                <div class="drop-down-card-item-image-w">
                    <img class="drop-down-card-item-image" src="https://picsum.photos/id/1/200/300" alt="..." />
                    <div class="status-indicator"></div>
                </div>
                <div class="drop-down-card-item-content">
                    <div class=" drop-down-card-item-title text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.
                    </div>
                    <div class="drop-down-card-item-sub-title">Emily Fowler · 58m
                    </div>
                </div>
            </a>
            <div className="drop-down-card-item-divider"></div>

            <a onClick={() => setShowMail(!showMail)} class="drop-down-card-item" href="#">
                <div class="drop-down-card-item-image-w">
                    <img class="drop-down-card-item-image" src="https://picsum.photos/id/1/200/300" alt="..." />
                    <div class="status-indicator"></div>
                </div>
                <div class="drop-down-card-item-content">
                    <div class=" drop-down-card-item-title text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.
                    </div>
                    <div class="drop-down-card-item-sub-title">Emily Fowler · 58m
                    </div>
                </div>
            </a>

        </div >);

    const renderDropDownAlerts = (
        <div className="drop-down-card-menu" style={{ position: "absolute", top: "70px", right: "0" }}>
            <h4 className="drop-down-card-header">Alerts Center</h4>
            <a onClick={() => setShowAlerts(!showAlerts)} class="drop-down-card-item" href="#">
                <div class="drop-down-card-item-image-w">
                    <img class="drop-down-card-item-image" src="https://picsum.photos/id/1/200/300" alt="..." />

                </div>
                <div class="drop-down-card-item-content">
                    <div class=" drop-down-card-item-title text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.
                    </div>
                    <div class="drop-down-card-item-sub-title">Emily Fowler · 58m
                    </div>
                </div>
            </a>
            <div className="drop-down-card-item-divider"></div>

            <a onClick={() => setShowAlerts(!showAlerts)} class="drop-down-card-item" href="#">
                <div class="drop-down-card-item-image-w">
                    <img class="drop-down-card-item-image" src="https://picsum.photos/id/1/200/300" alt="..." />

                </div>
                <div class="drop-down-card-item-content">
                    <div class=" drop-down-card-item-title text-truncate">Hi there! I am wondering if you can help me with a
                        problem I've been having.
                    </div>
                    <div class="drop-down-card-item-sub-title">Emily Fowler · 58m
                    </div>
                </div>
            </a>

        </div >);

    const [showMail, setShowMail] = useState(false);
    const [showAlerts, setShowAlerts] = useState(false);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton onClick={() => setShowMail(!showMail)} size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={8} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={() => setShowAlerts(!showAlerts)}
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box >
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar >
            </AppBar >
            {renderMobileMenu}
            {renderMenu}
            {showMail ? renderDropDownMail : null}
            {showAlerts ? renderDropDownAlerts : null}
        </Box >
    );
}
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));
