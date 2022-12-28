
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

//https://api.coindesk.com/v1/bpi/currentprice.json
//axious is lightweight package and use to make http request in any js library like react,angular or vue.
//axios make it easy to send asynchronous http request to Rest endpoints
//and perfrom CRUD operations
//its fetch api upgraded function
// npm install axios
// using this we can call all http methods(advanatge)
//get post patch delete
//axios work is to call api
//promises are .then
function App() {
  const [myData, setmyData] = useState([])
  useEffect(() => {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((respnse) => {

      const bitcoin = respnse.data.bpi;
      setmyData(bitcoin);
      console.log("response is", respnse.data.bpi);
    })
  }, []);


  return (
    <div>
      <form>
        <h2>Real Time Bitcoin Xchnage Rates</h2>
        {/* post=all the data from bpi */}
        {myData.map((post) => {
          //const{ symbol, description, rate_float}=post;
          return <div className='bitcoin-currency'>
            <h4 className='left'>Currency {post.description}</h4>
            <h4 className='mid'>Currency {post.symbol}</h4>
            <h4 className='right'>Bitcoin Rate {post.rate_float}</h4>
          </div>
        })}
      </form>

    </div>

  );
  // <ol>
  //        {myData.map((post) => {
  //       //const{ symbol, description, rate_float}=post;
  //       return <div className='bitcoin-currency'>
  //       <li key={post} >Currency {post.description} Symbol {post.symbol} Bitcoin Rate {post.rate_float}</li>
  //       </div>
  //       })}

}

export default App;
