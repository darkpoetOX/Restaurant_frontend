import DishesList from "./DishesList"

const Restaurant =({addToFav, restaurant})=>{

    // this is the loop which retrieves all of the dishes of a specific restaurant as the dishes come in an array as a json object
    const dishList = restaurant.dishes.map((dish,index)=>{
        return <DishesList dish={dish} key={index}/>
    })
    return(
        <>
        <p>{restaurant.name}</p>
        <p>{dishList}</p>

        <button onClick={() => addToFav(restaurant)}>❤️</button>

        </>
    )
}
export default Restaurant;