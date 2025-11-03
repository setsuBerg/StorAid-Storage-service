import React, {useState, useEffect} from 'react'
import ServiceItem from './ServiceItem'
import axios from 'axios'


const ServiceList = () => {
    const [serviceItems, setServiceItems] = useState([]) 

    const getDataUsingAxios = async () => {
        const res = await axios.get('https://onatrix-api.azurewebsites.net/api/services')
        setServiceItems(res.data)
    }

    useEffect(() => {
        getDataUsingAxios()
    }, [])




  return (
    <div className='services'>
        {
            serviceItems.map((item) => (<ServiceItem key={item.id} item={item} />))
        }
    </div>
    )
}

export default ServiceList