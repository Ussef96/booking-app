import React , {useEffect, useState} from 'react'
import BooksIndex from './BooksIndex';
import API from '../axios/api';

const IndexPage = () => {
    // Create state variables
    let [responseData, setResponseData] = useState([])
    // fetches data
    useEffect(() => {
        const fetchBooks = () => {
            API.get('books')
            .then((response)=>{
                 setResponseData(response.data)
            })
            .catch((error) => {
            console.log(error)
            })
        }   
        fetchBooks();
    }, []);
    
    return (
        <BooksIndex props={responseData}/>
    )
    
}
export default IndexPage