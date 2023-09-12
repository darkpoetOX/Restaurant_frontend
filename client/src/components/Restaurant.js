import DishesList from "./DishesList"

const Restaurant =({addToFav, restaurant})=>{


    const dishCompenents= restaurant.dishes.map((dish,index)=>{
        return <DishesList restaurant={restaurant} key={index} dish={restaurant.dishes[index]}/>
    })
    return(
        <>
        <p>{restaurant.name}</p>
        <button onClick={() => addToFav(restaurant)}>❤️</button>

        </>
    )
}
export default Restaurant;