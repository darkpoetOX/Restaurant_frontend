import Restaurant from "./Restaurant"

const RestaurantList = ({addToFav, restaurants}) => {
    const restaurantCompenents= restaurants.map((restaurant,index)=>{
        return <Restaurant restaurant={restaurant} key={index} addToFav={addToFav}/>
    })
    return(
        <>
            {restaurantCompenents}
        </>
    )
}
export default RestaurantList;