const getReadBooks=()=>{
    const readBooks=localStorage.getItem('Read-Books');
    if(readBooks){
       return JSON.parse(readBooks);  
    }
    return [];
}

const saveReadBooks=(id)=>{
    const readBooks= getReadBooks();
    const exist= readBooks.find((bookId)=> bookId===id);
    if(!exist){
        readBooks.push(id);
        localStorage.setItem('Read-Books', JSON.stringify(readBooks))
    }
}



const getWishBooks=()=>{
    const wishBooks=localStorage.getItem('Wish-List');
    if(wishBooks){
       return JSON.parse(wishBooks);  
    }
    return [];
}

const saveWishBooks=(id)=>{
    const wishBooks= getWishBooks();
    const exist= wishBooks.find((bookId)=> bookId===id);
    if(!exist){
        wishBooks.push(id);
        localStorage.setItem('Wish-List', JSON.stringify(wishBooks))
    }
}

export {saveReadBooks, getReadBooks,saveWishBooks,getWishBooks};