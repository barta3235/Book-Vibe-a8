import { MdKeyboardArrowDown } from "react-icons/md";

const PartOfListedBooks = () => {
    return (
        <div>
            <h1 className=" rounded-2xl mb-[32px] text-[28px] font-bold py-[34px] bg-base-200 text-center">Books</h1>

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
    );
};

export default PartOfListedBooks;