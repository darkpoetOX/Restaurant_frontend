import Restaurant from "./Restaurant"

const RestaurantList = ({addToFav, restaurants, setDishesList, updateFilteredDishesList, setSelectedRestaurant, selectedRestaurant}) => {
    const restaurantCompenents= restaurants.map((restaurant,index)=>{
        return (
            <div className={"EachRestaurant"}>
            <Restaurant 
                restaurant={restaurant} 
                key={index} 
                addToFav={addToFav} 
                setDishesList={setDishesList} 
                updateFilteredDishesList={updateFilteredDishesList} 
                setSelectedRestaurant={setSelectedRestaurant}
                selectedRestaurant={selectedRestaurant}/> </div>)
    })

    return(
        <>
            {restaurantCompenents}
        </>
    )
}
export default RestaurantList;