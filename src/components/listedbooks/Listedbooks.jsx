import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";


const Listedbooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div >
            <div>
                <h1 className="pic rounded-2xl mb-[32px] text-[28px] font-bold py-[34px] bg-base-200 text-center">Books</h1>

                {/* dropdown */}
                <div className="flex justify-center items-center mb-[60px]">
                    <details className="dropdown flex justify-center items-center w-[120px]">
                        <summary className="m-1 btn bg-[#23BE0A] text-white btn-success"><h1>Sort By </h1><h1 className="text-2xl"><MdKeyboardArrowDown /></h1>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Rating</a></li>
                            <li><a>Number of Pages</a></li>
                            <li><a>Published Year</a></li>
                        </ul>
                    </details>
                </div>
            </div>



            {/* listed books */}
            <div className="flex items-center overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                <Link to='' onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 md:px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>

                <Link to='wishlist' onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 md:px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wish List</span>
                </Link>
            </div>

            <div className='mt-[32px] mb-[76px]'>
                <Outlet></Outlet>
            </div>






        </div>
    );
};

export default Listedbooks;