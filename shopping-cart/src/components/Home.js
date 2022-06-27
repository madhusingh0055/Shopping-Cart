import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './Products';
import ProductCard from './ProductCard';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Pagination from '@mui/material/Pagination';
import './Home.css'



const Home = () => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(productList);
  const[offset,setOffset] = useState(1)
  const[pages, setPages] = useState();
  const perpage = 12;
  

  //   async function getProducts (){
  //     const url = "https://dummyjson.com/products";

  //         try {
  //             const response = await axios.get(url);
  //             lists.push(response.data)
  //             setProductList(lists);
  //             console.log(lists);

  //         }
  //         catch (error) {
  //             console.log(error);
  //         }
  //       }



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
    <div className='wrapper'>


      <div className='input'>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
          <Form.Control
            placeholder="Search By Product Name" onChange={SearchString} value={search}

          />
        </InputGroup>

        {/* <input type="text" onChange={SearchString} value={search}></input> */}
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
  )
}


export default Home