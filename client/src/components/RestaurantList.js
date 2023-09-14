import Restaurant from "./Restaurant"

const RestaurantList = ({addToFav, restaurants, setDishesList, updateFilteredDishesList}) => {
    const restaurantCompenents= restaurants.map((restaurant,index)=>{
        return (
            <div className={"EachRestaurant"}>
            <Restaurant restaurant={restaurant} key={index} addToFav={addToFav} setDishesList={setDishesList} updateFilteredDishesList={updateFilteredDishesList}/> </div>)
    })

    return(
        <>
            {restaurantCompenents}
        </>
    )
}
export default RestaurantList;