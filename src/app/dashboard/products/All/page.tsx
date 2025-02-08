import SalesOrders from "@/components/title_pages";
import ProductTable from "@/sections/Prodcuts/productsTable";

export default function Orders(){
    return(
<main>
<SalesOrders title1="Products /" title2="All Products" />
<ProductTable/>
</main>


)
}