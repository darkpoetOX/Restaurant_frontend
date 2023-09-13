import DishesList from "./DishesList"

const Restaurant =({addToFav, restaurant, setDishesList})=>{

    // this is the loop which retrieves all of the dishes of a specific restaurant as the dishes come in an array as a json object
    const dishList = restaurant.dishes.map((dish,index)=>{
        return <DishesList dish={dish} key={index}/>
    })

    const selectRestaruant = () => {
        setDishesList(restaurant.dishes);
    }

    return(
        <>
        <p>{restaurant.name}</p>
        {/*<p>{dishList}</p>*/}

        <button onClick={selectRestaruant}>Select</button>
        <button onClick={() => addToFav(restaurant)}>❤️</button>

        </>
    )
}
export default Restaurant;