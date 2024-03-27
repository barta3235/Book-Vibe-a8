import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import './root.css'

const Root = () => {
    
    return (
        <div>
            <div className="h-[57px] font-work">
               <Header></Header>
            </div>
            <div className="h-[40px]"></div>
            <div className="md:mx-[100px] min-h-[calc(100vh-97px)] font-work">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;