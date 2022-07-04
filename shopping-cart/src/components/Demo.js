import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Products from './Products';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Pagination } from '@mui/material';
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Demo() {


    const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(productList);
  const[offset,setOffset] = useState(1)
  const[pages, setPages] = useState();
  const perpage = 12;
  


  async function getProducts() {
    setProductList(Products);
    setPages(Math.ceil((Products.length)/perpage))
  }
  // console.log(productList)

  const handleClick = (e) => {
    var value = e.target.textContent;
    setOffset((value-1)*(perpage))
    console.log(value);

 }

  useEffect(() => {
    getProducts()

  }, []);

  const SearchString = (e) => {

    var value = e.target.value.toLowerCase();
    setSearch(value)
    let result = [];
    Products.filter((val) => {
      if (value == "") {
        return val
      }
      else if (val.title.toLowerCase().includes(value.toLowerCase())) {
        result.push(val);
        return val;

      }
    })
    setFilteredData(result);

    console.log(result);

  }





    return (
        <div>
            <div>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" style= {{backgroundColor: "blue"}}>
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
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                SHOOPING CART
                            </Typography>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={SearchString}
                                />
                            </Search>

                            

                        </Toolbar>
                    </AppBar>
                </Box>
            </div>


            <div>

{filteredData.length > 0 ?
  (filteredData.map((items) => (
    <div>
      {/* <p>{items.title}</p>
    <p><img src={items.thumbnail} alt="image" /></p> */}


      <div>
        <ProductCard thumbnail={items.thumbnail} title={items.title} price={items.price} rating={items.rating} />
      </div>
    </div>


  ))) :
  (
    productList.slice(offset,offset+perpage).map((items) => (
      <div>
        {/* <p>{items.title}</p>
        <p><img src={items.thumbnail} alt="image" /></p> */}


        <div>
          <ProductCard thumbnail={items.thumbnail} title={items.title} price={items.price} rating={items.rating} />
        </div>
      </div>


    ))
  )
}

</div>


<div className='pagination'>
 
<Pagination count={pages} hidePrevButton hideNextButton onClick={handleClick} size="large" color="primary"/>
  
</div>
        </div>
    );
}
