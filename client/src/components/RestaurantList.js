import Restaurant from "./Restaurant"

const RestaurantList = ({addToFav, restaurants, setDishesList}) => {
    const restaurantCompenents= restaurants.map((restaurant,index)=>{
        return (
            <div className={"EachRestaurant"}>
            <Restaurant restaurant={restaurant} key={index} addToFav={addToFav} setDishesList={setDishesList}/> </div>)
    })

    return(
        <>
            {restaurantCompenents}
        </>
    )
}
export default RestaurantList;