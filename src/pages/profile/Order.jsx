import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../utils/context/UserContext'
import { getAllOrdersByCustomer } from '../../utils/api-call/getAllOrdersByCustomer'

const Order = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(UserContext)
    const id = user.id
    useEffect(() => {
        getAllOrdersByCustomer(id)
            .then((response) => {
                setOrders(response.data.data)
            })
            .catch((error) => {
                console.log(error.response.data.message);
            })
    }, [id])
    console.log(orders);
    return (
        <div>
            {orders.map((item) => (
                <p key={item.id}>{item.total_price}</p>
            ))}

        </div>
    )
}

export default Order
