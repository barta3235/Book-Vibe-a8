import { getWishBooks } from "../../localstorageRead";
import { useLoaderData,useNavigation } from "react-router-dom";
import ShowWishInListedBooks from "./ShowWishInListedBooks";
import Loader from "../loader/Loader";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { sortContext } from "../listedbooks/Listedbooks";


const WishListInListed = () => {
    const navigation= useNavigation();
    const books= useLoaderData();
    const localId=getWishBooks();

    const sortval= useContext(sortContext);
    console.log('yikes1:',sortval);

    const [herebooks,setHerebooks]=useState([]);
    const [otherbooks,setOtherbooks]=useState([]);

    useEffect(()=>{
        const selectedBooks= books.filter((book)=>localId.includes(book.bookId));
        setHerebooks(selectedBooks);
        setOtherbooks(selectedBooks);
    },[books, localId])

    useEffect(()=>{
        if(sortval==='rating'){
            const anotherarray=[...herebooks].sort((a,b)=>b.rating - a.rating);
            setOtherbooks(anotherarray);
        }else if(sortval==='publishedYear'){
            const anotherarray=[...herebooks].sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
            setOtherbooks(anotherarray);
        }else if(sortval==='noOfPages'){
            const anotherarray=[...herebooks].sort((a,b)=>b.totalPages - a.totalPages);
            setOtherbooks(anotherarray);
        }else{
            setHerebooks(herebooks);
        }
    },[sortval, herebooks])


    if(navigation.state=== 'loading') return <Loader></Loader>


    return (
        <div>
        {
            otherbooks.map((book,idx)=> <ShowWishInListedBooks key={idx} book={book}></ShowWishInListedBooks> )
        }
    </div>
    );
};

export default WishListInListed;