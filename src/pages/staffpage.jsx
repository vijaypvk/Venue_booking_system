
import React from "react";
import Sidebar from "../components/sidebar";
import Table from "../components/table";

function Staffpage() {
    

    return (
        <div className="dashboard flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex flex-col p-4 w-full lg:w-4/5">
                <h2 className="text-2xl font-semibold mb-6">Staff Detials</h2>
                
                <div>
                    <Table/>
                </div>
              </div>
              </div>
    );
}

export default Staffpage;
