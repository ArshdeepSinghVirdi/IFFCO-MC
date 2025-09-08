import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from './icons/SearchIcon';
import DropdownArrowIcon from './icons/DropdownArrowIcon';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.grey[200]}`
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  padding: '0 24px',
  minHeight: '120px'
});

const Logo = styled('img')({
  height: '63px',
  width: '101px'
});

const LanguageSelector = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: '6px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '8px',
  fontSize: '14px'
}));

const TopBar = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
});

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[50],
    borderRadius: '100px',
    height: '41px',
    width: '250px',
    '& fieldset': {
      border: 'none'
    }
  },
  '& .MuiInputBase-input': {
    fontSize: '11px',
    color: theme.palette.black,
    padding: '12px 16px'
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main
  }
}));

const ProductsDropdown = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: '8px',
    minWidth: '200px',
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.common.white
  },
  '& .MuiMenuItem-root': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent !important',
    '&:hover': {
      backgroundColor: 'transparent !important',
      color: theme.palette.primary.main,
      '& .MuiTypography-root': {
        color: theme.palette.primary.main
      }
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent !important'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'transparent !important'
    }
  }
}));

const Header: React.FC = () => {
  const [productsAnchor, setProductsAnchor] = useState<null | HTMLElement>(null);
  const [aboutAnchor, setAboutAnchor] = useState<null | HTMLElement>(null);
  const [subMenuAnchor, setSubMenuAnchor] = useState<null | HTMLElement>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);

  const handleProductsHover = (event: React.MouseEvent<HTMLElement>) => {
    setProductsAnchor(event.currentTarget);
  };

  const handleAboutHover = (event: React.MouseEvent<HTMLElement>) => {
    setAboutAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setProductsAnchor(null);
    setAboutAnchor(null);
    setSubMenuAnchor(null);
    setActiveSubMenu(null);
  };

  const handleCloseAbout = () => {
    setAboutAnchor(null);
  };

  const handleCloseProducts = () => {
    setProductsAnchor(null);
    setSubMenuAnchor(null);
    setActiveSubMenu(null);
    setHoveredMenuItem(null);
  };

  const handleNavLeave = () => {
    // Add a small delay before closing to prevent flickering
    setTimeout(() => {
      if (!document.querySelector('[role="presentation"]:hover')) {
        handleClose();
      }
    }, 150);
  };

  const handleMenuItemHover = (event: React.MouseEvent<HTMLElement>, menuType: string) => {
    setHoveredMenuItem(menuType);
    setSubMenuAnchor(event.currentTarget);
    setActiveSubMenu(menuType);
  };

  const handleMenuItemLeave = () => {
    setHoveredMenuItem(null);
    setSubMenuAnchor(null);
    setActiveSubMenu(null);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchor(null);
    setActiveSubMenu(null);
    setHoveredMenuItem(null);
  };

  return (
    <>
      <LanguageSelector>
        <Typography variant="caption">Change Language</Typography>
        <Box sx={{ width: '1px', height: '20px', backgroundColor: 'text.secondary' }} />
        <Typography variant="caption" sx={{ fontWeight: 700 }}>English (UK)</Typography>
        <DropdownArrowIcon width={21} height={12} color="#ed1c24" />
      </LanguageSelector>
      
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo src="/images/iffco-logo.svg" alt="IFFCO-MC Logo" />
          
          <Stack 
            direction="row" 
            spacing={3} 
            alignItems="center"
            onMouseLeave={handleNavLeave}
          >
            <NavButton>Home</NavButton>
            
            <NavButton
              onMouseEnter={handleAboutHover}
              endIcon={<DropdownArrowIcon width={12} height={8} color="#ED1C24" />}
            >
              About Us
            </NavButton>
            
            <NavButton
              onMouseEnter={handleProductsHover}
              endIcon={<DropdownArrowIcon width={12} height={8} color="#ED1C24" />}
            >
              Products
            </NavButton>
            
            <NavButton>KSBY</NavButton>
            <NavButton>CSR</NavButton>
            <NavButton>Careers</NavButton>
            <NavButton>Contact Us</NavButton>
          </Stack>

          <SearchField
            placeholder="Search for products and categories"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon width={16} height={16} color="#717288" />
                </InputAdornment>
              )
            }}
          />
        </StyledToolbar>
      </StyledAppBar>

      {/* About Us Dropdown */}
      <ProductsDropdown
        anchorEl={aboutAnchor}
        open={Boolean(aboutAnchor)}
        onClose={handleCloseAbout}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        onMouseLeave={handleCloseAbout}
        MenuListProps={{
          onMouseLeave: handleCloseAbout
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography>Overview</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Vision & Mission</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Core Objectives</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Board of Directors</Typography>
        </MenuItem>
      </ProductsDropdown>

      {/* Products Dropdown */}
      <ProductsDropdown
        anchorEl={productsAnchor}
        open={Boolean(productsAnchor)}
        onClose={handleCloseProducts}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        MenuListProps={{
          onMouseEnter: () => {
            // Keep dropdown open when mouse is over it
          },
          onMouseLeave: handleCloseProducts
        }}
      >
        <MenuItem 
          onMouseEnter={(e) => handleMenuItemHover(e, 'herbicides')}
          onMouseLeave={handleMenuItemLeave}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <Typography>Herbicides</Typography>
            <Box sx={{ transform: 'rotate(-90deg)' }}>
              <DropdownArrowIcon width={8} height={8} color="#ed1c24" />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem 
          onMouseEnter={(e) => handleMenuItemHover(e, 'insecticides')}
          onMouseLeave={handleMenuItemLeave}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <Typography>Insecticides</Typography>
            <Box sx={{ transform: 'rotate(-90deg)' }}>
              <DropdownArrowIcon width={8} height={8} color="#ed1c24" />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem 
          onMouseEnter={(e) => handleMenuItemHover(e, 'fungicides')}
          onMouseLeave={handleMenuItemLeave}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <Typography>Fungicides</Typography>
            <Box sx={{ transform: 'rotate(-90deg)' }}>
              <DropdownArrowIcon width={8} height={8} color="#ed1c24" />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem 
          onMouseEnter={(e) => handleMenuItemHover(e, 'pgr')}
          onMouseLeave={handleMenuItemLeave}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <Typography>PGR</Typography>
            <Box sx={{ transform: 'rotate(-90deg)' }}>
              <DropdownArrowIcon width={8} height={8} color="#ed1c24" />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem 
          onMouseEnter={(e) => handleMenuItemHover(e, 'biologicals')}
          onMouseLeave={handleMenuItemLeave}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', justifyContent: 'space-between' }}>
            <Typography>Biologicals</Typography>
            <Box sx={{ transform: 'rotate(-90deg)' }}>
              <DropdownArrowIcon width={8} height={8} color="#ed1c24" />
            </Box>
          </Stack>
        </MenuItem>
      </ProductsDropdown>

      {/* Sub Menu for Products */}
      <ProductsDropdown
        anchorEl={subMenuAnchor}
        open={Boolean(subMenuAnchor) && Boolean(activeSubMenu)}
        onClose={handleSubMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onMouseEnter={() => {
          // Keep submenu open when mouse enters
        }}
        onMouseLeave={handleSubMenuClose}
      >
        {activeSubMenu === 'herbicides' && (
          <>
            <MenuItem onClick={handleClose}>
              <Typography>Herbicide Product 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Herbicide Product 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Herbicide Product 3</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
          </>
        )}
        {activeSubMenu === 'insecticides' && (
          <>
            <MenuItem onClick={handleClose}>
              <Typography>Insecticide Product 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Insecticide Product 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
          </>
        )}
        {activeSubMenu === 'fungicides' && (
          <>
            <MenuItem onClick={handleClose}>
              <Typography>Fungicide Product 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Fungicide Product 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
          </>
        )}
        {activeSubMenu === 'pgr' && (
          <>
            <MenuItem onClick={handleClose}>
              <Typography>PGR Product 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>PGR Product 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
          </>
        )}
        {activeSubMenu === 'biologicals' && (
          <>
            <MenuItem onClick={handleClose}>
              <Typography>Biological Product 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Biological Product 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography>Lorem Ipsum</Typography>
            </MenuItem>
          </>
        )}
      </ProductsDropdown>
    </>
  );
};

export default Header;