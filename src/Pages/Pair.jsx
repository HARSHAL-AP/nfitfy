import React,{useEffect,useState} from 'react'
import Styles from "./Tokken.module.css"
import Card from '../Components/Cards/Card'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import axios from 'axios'


const Pair = () => {
  const [query, setquery] = useState("");
  const [data,setdata]=useState([])
 const [isloading,setisloading]=useState(false)
  console.log(query)
  const handelQuery = (values) => {
    setquery(values);
  };
  const getdata=() => {
        setisloading(true)
  axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${query}`).then((r)=>{
   let d=r.data.pairs
   
   if(d.length>10){
    d=d.slice(0, 10);
   }
   
    setdata(d)
      setisloading(false)
  })
  .catch((e)=>{
    console.log(e)
      setisloading(false)
  })

  }
  const handleCalldata=() => {
    getdata()
  }
  return (
    <>
    <Navbar handelq={handelQuery} handelda={handleCalldata}/>
    <div className={Styles.token}>
        <h3>Pair Search Results</h3>
          {isloading&&<h3>Loading........</h3>}
          {data.length===0&&<h4>Search Your query to get Results....</h4>}
        <div className={Styles.cardcontener}>
          {
            data&&data.map((el,index)=>{
              return <Card key={index} obj={el}/>
            })
          }
         
           
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Pair