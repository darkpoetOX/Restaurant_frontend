import Restaurant from "./Restaurant"

const RestaurantList = ({addToFav, restaurants, setDishesList, setFilteredDishesList}) => {
    const restaurantCompenents= restaurants.map((restaurant,index)=>{
        return (
            <div className={"EachRestaurant"}>
            <Restaurant restaurant={restaurant} key={index} addToFav={addToFav} setDishesList={setDishesList} setFilteredDishesList={setFilteredDishesList}/> </div>)
    })

    return(
        <>
            {restaurantCompenents}
        </>
    )
}
export default RestaurantList;