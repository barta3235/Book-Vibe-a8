import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks } from "../../localstorageRead";
import { getReadBooks } from "../../localstorageRead";
import { saveWishBooks } from "../../localstorageRead";
import { getWishBooks } from "../../localstorageRead";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailBook = () => {


    const { id } = useParams();
    const intid = parseInt(id);

    const post = useLoaderData();
    const thisbook = post.find((book) => book.bookId === intid);

    const handleRead=()=>{
        const savedReads= getReadBooks();
        if(savedReads.includes(intid)){
            toast("Already added to Reads, cannot process the same request twice");
        }else{
            saveReadBooks(intid);
            toast("Added to Reads");
        }
    }
    const handleWishList=()=>{
        const savedReads= getReadBooks();
        const savedwishes= getWishBooks();
        if(savedReads.includes(intid)){
            toast("The book is added as reads, you cannot wish list it | Request denied");
        }else if(savedwishes.includes(intid)){
            toast("The book is already added in you wish list");
        }else{
            saveWishBooks(intid);
            toast("Added to you Wish List");
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-[50px] mb-[100px]">
            <div className="md:w-1/3 flex justify-center">
                <img className="lg:w-[740px] lg:h-[740px] rounded-2xl" src={thisbook.image} alt="" />
            </div>
            <div className="md:w-2/3 mx-[10px] md:mx-0">
                <h1 className="text-[40px] font-bold mb-[16px]">{thisbook.bookName}</h1>
                <h1 className="text-[20px] font-medium mb-[24px]">By: {thisbook.author}</h1>
                <hr />
                <h1 className="my-[16px] text-[20px] font-medium">{thisbook.category}</h1>
                <hr />
                <h1 className="mt-25px font-normal my-[24px]"><strong>Review: </strong>{thisbook.review}</h1>
                <div className="flex gap-4 mb-[24px]">
                    <h1 className="font-bold">Tags</h1>
                    <div>
                        {
                            thisbook.tags.map((tag, idx) => <span className="mr-[16px] text-[#23BE0A] bg-base-200 rounded-[30px] text-center px-[16px] py-[7px] font-medium" key={idx}>#{tag}</span>)
                        }
                    </div>
                </div>
                <hr />


                <div className="overflow-x-auto mt-[24px] mb-[32px]">
                    <table className="table">
                        <tbody>
                            <tr className="border-none">
                                <td>Number of Pages: </td>
                                <td className="font-semibold">{thisbook.totalPages}</td>
                            </tr>
                            <tr className="border-none">
                                <td>Publisher: </td>
                                <td className="font-semibold">{thisbook.publisher}</td>
                            </tr>
                            <tr className="border-none">
                                <td>Year of Publishing: </td>
                                <td className="font-semibold">{thisbook.yearOfPublishing}</td>
                            </tr>
                            <tr className="border-none">
                                <td>Rating: </td>
                                <td className="font-semibold">{thisbook.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                     <button onClick={handleRead} className="btn bg-white border rounded-lg btn-success">Read</button>
                     <button onClick={handleWishList} className="btn bg-[#50B1C9] text-white border rounded-lg btn-success">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DetailBook;