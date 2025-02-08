"use client";
import React, { useState } from "react";
import SalesOrders from "@/components/title_pages";
import Customers_table from "./custmerslisttable";
import CustomerForm from "./popup_form_customers";

export default function Custmers_page() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="relative">
            <section className={showForm ? "opacity-50 pointer-events-none" : "opacity-100"}>
                <div className="flex items-center justify-between">
                    <SalesOrders title1="Sales /" title2="Customers" />
                    <button 
                        className="bg-blue-600 text-white font-bold py-2 px-3 rounded-xl"
                        onClick={() => setShowForm(true)}
                    >
                        Add New Customer
                    </button>
                </div>
                <Customers_table />
            </section>

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white  rounded-lg shadow-lg w-96 max-h-[90vh] overflow-auto">
                        <CustomerForm onSubmit={() => setShowForm(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}
