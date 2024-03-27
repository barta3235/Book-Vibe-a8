import { useLoaderData,useNavigation } from "react-router-dom";
import { getReadBooks } from "../../localstorageRead";
import ShowWishInListedBooks from "../wishListInListed/ShowWishInListedBooks";
import Loader from "../loader/Loader";


const ReadInListed = () => {
    const navigation= useNavigation();
    const books= useLoaderData();
    const localId=getReadBooks();
    console.log(localId);
    
    if(navigation.state=== 'loading') return <Loader></Loader>

    const selectedBooks= books.filter((book)=>localId.includes(book.bookId));


    return (
        <div className="">
            {
                selectedBooks.map((book,idx)=> <ShowWishInListedBooks key={idx} book={book}></ShowWishInListedBooks> )
            }
        </div>
    );
};

export default ReadInListed;