const FavouriteRestaurant = ({ restaurant, deleteFromFav }) => {
    return (
        <>
            <p>{restaurant.name}</p>
            <button className={"circular-button"} onClick={() => deleteFromFav(restaurant)}>❌</button>
        </>
    )
}
export default FavouriteRestaurant;