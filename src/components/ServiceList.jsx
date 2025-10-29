// import React, {useState, useEffect} from 'react'
// import ServiceItem from './ServiceItem'
// import axios form 'axios'


// const ServiceList = () => {
//     const [serviceItems, setServiceItems] = useState([]) 

//     const getDataUsingFetch = async () => {
//         const res = await fetch('https://onatrix-api.azurewebsites.net/api/services')
//         const data = await res.json()
//         setServiceItems(data)
//     }

//     const getDataUsingAxios = async () => {
//         const res = await axios.get('https://onatrix-api.azurewebsites.net/api/services')
//         setServiceItems(res.data)
//     }



//     useEffect(() => {
//         getDataUsingFetchData()
//         getDataUsingAxios()
//     }, [])




//   return (
//     <div className='services'>
//         {
//             serviceItems.map((item)) => (<ServiceItem key={item.id} item={item} />))
//         }
//     </div>
//   )
// }

// export default ServiceList