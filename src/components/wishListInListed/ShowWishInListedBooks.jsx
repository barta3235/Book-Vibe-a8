import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TbBrandPagekit } from "react-icons/tb";

const ShowWishInListedBooks = ({book}) => {
    return (
        <div className='flex flex-col md:flex-row gap-[25px] p-[24px] border-2 rounded-2xl mb-[24px]'>
            <div>
                <img className='w-[230px] h-[230px] rounded-[16px]' src={book.image} alt="" />
            </div>
            <div>
                <h1 className='text-[24px] font-bold mb-[16px]'>{book.bookName}</h1>
                <h1 className='mb-[16px] font-medium'>By: {book.author}</h1>
                <div className='flex gap-4'>
                    <h1 className="font-bold">Tags</h1>
                    <div>
                        {
                            book.tags.map((tag, idx) => <span className="mr-[16px] text-[#23BE0A] bg-base-200 rounded-[30px] text-center px-[16px] py-[7px] font-medium" key={idx}>#{tag}</span>)
                        }
                    </div>
                    <div className='flex gap-2 justify-center items-center font-medium'>
                        <span className='text-2xl'><CiLocationOn /></span>
                        <h1>Year of Publishing: {book.yearOfPublishing}</h1>
                    </div>
                </div>

                <div className='flex gap-[20px] my-[20px]'>
                        <div className='flex gap-2 justify-center items-center font-medium'>
                            <span className='text-2xl'><GoPeople /></span>
                            <h1>Publisher: {book.publisher}</h1>
                        </div>

                        <div className='flex gap-2 justify-center items-center font-medium'>
                            <span className='text-2xl'><TbBrandPagekit /></span>
                            <h1>Page: {book.totalPages}</h1>
                        </div>
                </div>

                <hr />

                <div className='mt-[17px] flex gap-[12px]'>
                      <div className='px-[20px] text-center py-[11px] bg-[#328EFF26] rounded-[30px] text-[#328EFF] font-medium'>
                        <h1>Category: {book.category}</h1>
                      </div>

                      <div className='px-[20px] text-center py-[11px] bg-[#FFAC3326] rounded-[30px] text-[#FFAC33] font-medium'>
                        <h1>Category: {book.rating}</h1>
                      </div>

                      <div className='px-[20px] text-center py-[11px] bg-[#23BE0A] text-white rounded-[30px] font-semibold'>
                        <Link to={`/bookdetail/${book.bookId}`}>View Details</Link>
                      </div>
                </div>

            </div>
        </div>
    );
};

export default ShowWishInListedBooks;