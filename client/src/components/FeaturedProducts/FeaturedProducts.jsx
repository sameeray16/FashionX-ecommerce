import React from "react";
import './FeaturedProducts.scss'
import Card from "../Card/Card"
import useFetch from "../../hooks/useFetch";



const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return(
        <div className="FeaturedProducts">
            <div className="top">
                <h1>{type} products</h1>
            </div>
            <div className="bottom">
                {error ? "Something went wrong!" : (loading? "loading" 
                : data?.map((item)=>
                    <Card item={item} key={item.id} className="card"/> )
                )}
            </div>
        </div>
    )
}

export default FeaturedProducts