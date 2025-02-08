import SalesOrders from "@/components/title_pages";
import OrderDetails from "@/sections/sales/orders-list/orderDetails";


export default function Orders(){
    return(
<main>
<SalesOrders title1="Sales /" title2="Order Details" />

<OrderDetails/>
</main>


)
}