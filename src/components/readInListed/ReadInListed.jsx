import { useLoaderData,useNavigation } from "react-router-dom";
import { getReadBooks } from "../../localstorageRead";
import ShowR from "./ShowR";
import Loader from "../loader/Loader";
import { useContext, useState } from "react";
import { sortContext } from "../listedbooks/Listedbooks";
import { useEffect } from "react";



const ReadInListed = () => {
    const navigation= useNavigation();
    const books= useLoaderData();
    const localId=getReadBooks();
    console.log(localId);

    const sortval= useContext(sortContext);
    console.log('yikes1:',sortval);

    const [herebooks,setHerebooks]=useState([]);

    useEffect(()=>{
        const selectedBooks= books.filter((book)=>localId.includes(book.bookId));
        setHerebooks(selectedBooks);
    },[])

    
    
    if(navigation.state=== 'loading') return <Loader></Loader>

    


    return (
        <div>
            {
                herebooks.map((book)=> <ShowR key={book.bookId} book={book}></ShowR>)
            }
        </div>
    );
};

export default ReadInListed;