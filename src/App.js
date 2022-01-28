import './App.css';
import 'antd/dist/antd.css';
import * as React from 'react';
import { Input } from 'antd';
import axios from 'axios';
import { Image } from 'antd';


function App() {
  const { Search } = Input;

  const [images, setImages] = React.useState([]);

  let getImages = (searchText) => {
    axios.post('http://localhost:5000/api/search', { searchText })
      .then((response) => {
        console.log(response.data.response);
        setImages(response.data.response.results);
      });
  }
  return (
    <div className="App">
      <div style={{ height:'10vh',paddingTop:'1.5%',paddingLeft:'1%' }}>
        <Search placeholder="input search text" allowClear onSearch={(searchText) => {
          getImages(searchText)
        }} style={{ width: 500 }} />
      </div>
      <div style={{ width: '100%',height:'90vh',display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'10px 10px'}}>
        {
          (images.length > 0) ? <ImageGrid images={images}></ImageGrid> : ""
        }
      </div>

    </div>
  );
}

export default App;




function ImageGrid(props) {
  return (
    props.images.map((item) => {
      return <div><Image width={400} height={300} src={`${item.urls.regular}`} /></div>
    })
  )
}