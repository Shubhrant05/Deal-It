import axios from 'axios'
import React, { useState , useEffect} from 'react'
import NavbarHeader from '../navbar/navbar'
import Complaints from './complaints'
const ENDPOINT = "http://localhost:4000"

const Dashboard = () => {
    const [data, setData] = useState([])
    
    const getData = () => {
        try {
            axios.get(`${ENDPOINT}/allcomplaints`)
                .then((res) => {
                setData(res.data)
                })
                .catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getData()
    }, [])
    
  return (
      <div>
          <NavbarHeader/>
          <div style={{textAlign:"center"}} className='text-2xl lg:text-6xl m-3'>Here are all your <span style={{color:"rgb(58,177,155)"}}>due complaints</span></div>
          {
              data?.filter(ele => ele.isresolved === false).map((ele) => {
                  return (
                      <Complaints subject={ele.subject} desc={ele.description} status={ele.isresolved} date = {ele.date} />
                  )
              })
          }
      </div>
  )
}

export default Dashboard