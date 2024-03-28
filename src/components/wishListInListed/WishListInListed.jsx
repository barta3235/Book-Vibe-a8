import { getWishBooks } from "../../localstorageRead";
import { useLoaderData,useNavigation } from "react-router-dom";
import ShowWishInListedBooks from "./ShowWishInListedBooks";
import Loader from "../loader/Loader";
import { useContext } from "react";
import { sortContext } from "../listedbooks/Listedbooks";


const WishListInListed = () => {
    const navigation= useNavigation();
    const books= useLoaderData();
    const localId=getWishBooks();
    console.log(localId);

    const sortval= useContext(sortContext);
    console.log('yikes2:',sortval);

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

export default WishListInListed;