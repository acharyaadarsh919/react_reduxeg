import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard'


const Home = () => {
    const productList = [
        {
            name:'Mac book',
            price: 1200,
            imgSrc: "https://www.reliancedigital.in/medias/Apple-MLY33HN-A-Laptop-492850656-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTk5NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDM2Lzk4NTA5NDkzNjk4ODYuanBnfDA4Mzk0NDI3ODI3Zjc5MGVlNTM0NDQ3YzY1ZmI5YTY5ZDM2NGNiMzEwNDlkZTc4ZDQzM2JhNDFlYTVkN2JjOWQ",
            id:'fwfwfwfw'
        },
        {
            name:'Mac book Air',
            price: 1370,
            imgSrc: "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
            id:'difmo'
        },
    ];

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch({
            type:"addToCart",
            payload:options
        });
        dispatch({ type:"calculatePrice" });
        toast.success("Added to Cart")
    }

  return (
    <div className='home'>
        {
            productList.map((i) => (
                <ProductCard key={i.id} id={i.id} name={i.name} imgSrc={i.imgSrc} price={i.price} handler={addToCartHandler} />
            ))
        }
    </div>
  )
}

export default Home