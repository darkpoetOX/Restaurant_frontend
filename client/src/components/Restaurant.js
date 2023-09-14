import DishesList from "./DishesList"

const Restaurant =({addToFav, restaurant, setDishesList, updateFilteredDishesList, setSelectedRestaurant, selectedRestaurant})=>{

    // this is the loop which retrieves all of the dishes of a specific restaurant as the dishes come in an array as a json object
    const dishList = restaurant.dishes.map((dish,index)=>{
        return <DishesList dish={dish} key={index}/>
    })

    const selectRestaruant = () => {
        setSelectedRestaurant(restaurant.name);
        setDishesList(restaurant.dishes);
        updateFilteredDishesList(restaurant.dishes);
    }

    return(
        <div className={"EachRestaurant"} style={{ backgroundColor: selectedRestaurant === restaurant.name ? '#98c199' : '#d2cca1' }}>
            <div className="restaurant-head">
                <p className="restaurant-name">{restaurant.name}</p>
                <p className="restaurant-rating"><b>{restaurant.rating}</b> ⭐️</p>
            </div>
            <div className="select-button" >
                <button onClick={selectRestaruant}>Select</button>
                <button onClick={() => addToFav(restaurant)}>❤️</button>
            </div>

        </div>
    )
}
export default Restaurant;