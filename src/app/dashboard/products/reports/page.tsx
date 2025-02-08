import SalesOrders from "@/components/title_pages";
import ProductTable from "@/sections/Prodcuts/productsTable";
import MaterialsTable from "@/sections/Prodcuts/reports/matrial_table_needed";
import ProductDistribution from "@/sections/Prodcuts/reports/wilaya_ws";

export default function Orders(){
    return(
<main>
<SalesOrders title1="Products /" title2="Prodcut Analytics" />

<ProductDistribution/>
<div className="flex ">
    <div>
<MaterialsTable/>
    </div>
    <div>

    </div>
</div>
</main>


)
}