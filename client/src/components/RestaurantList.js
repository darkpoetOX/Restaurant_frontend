import Restaurant from "./Restaurant"

const RestaurantList = ({addToFav, restaurants}) => {
    const restaurantCompenents= restaurants.map((restaurant,index)=>{
        return (
            <div className={"EachRestaurant"}>
            <Restaurant restaurant={restaurant} key={index} addToFav={addToFav}/> </div>)
    })

    return(
        <>
            {restaurantCompenents}
        </>
    )
}
export default RestaurantList;