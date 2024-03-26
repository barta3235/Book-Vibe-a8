
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './hom.css'


const Showbookinhome = ({eachbook}) => {
    return (
        <Link to='/bookdetail' className="rounded-2xl p-6 border bg-base-100">
            <div className=" flex justify-center">
               <img className="w-[326px] h-[326px] mb-[24px] rounded-2xl" src={eachbook.image} alt="" />
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mb-[16px]">
                {
                        eachbook.tags.map((tag,idx)=> <h1 key={idx} className="px-4 text-[#23BE0A] bg-base-200 rounded-[24px] text-center">{tag}</h1>)
                }
            </div>
            <h1 className="text-[24px] font-bold mb-[16px]">{eachbook.bookName}</h1>
            <h1 className="mb-[16px] font-medium">By: {eachbook.author}</h1>
            <hr />
            <div className="mt-[16px] flex justify-between items-center">
                <h1>Fiction</h1>
                <div className="flex font-medium gap-[10px] items-center">
                     <h1>{eachbook.rating}</h1>
                     <div>
                        <FaRegStar />
                     </div>
                </div>
            </div>

            
        </Link>
    );
};

export default Showbookinhome;