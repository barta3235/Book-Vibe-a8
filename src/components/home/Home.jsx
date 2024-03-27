import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Showbookinhome from "../showbookinhome/Showbookinhome";
import './home.css'

const Home = () => {

   const [allbooks,setAllbook]=useState([]);
   
   useEffect(()=>{
      fetch('/book.json')
      .then(res=> res.json())
      .then(data=> setAllbook(data));
   },[])


    return (
        <div className="mb-[100px] mx-[5px] md:mx-[0px]">
            {/* banner */}
            <div className="pic hero bg-[#1313130D] flex flex-col lg:flex-row  md:px-[100px] py-[60px] rounded-[24px] mb-[80px]">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-[100%] ">
                    <img src="https://i.ibb.co/QjJ6LzS/no6.jpg" className="rounded-lg w-[320px] h-[380px]" />
                    <div className="">
                        <p className="py-6 text-[56px] font-bold mb-[48px] text-center md:text-left">Books to freshen<br />up your bookshelf</p>
                        <Link to="/listedbooks"><button className="btn btn-success bg-[#23BE0A] text-white">View The List</button></Link>
                    </div>
                </div>
            </div>

            <h1 className="text-center mb-[36px] text-[40px] font-bold">Books</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    allbooks.map((eachbook)=> <Showbookinhome key={eachbook.id} eachbook={eachbook}></Showbookinhome>)
                }
            </div>

        </div>
    );
};

export default Home;