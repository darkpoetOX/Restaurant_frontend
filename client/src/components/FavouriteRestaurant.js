const FavouriteRestaurant = ({ restaurant, deleteFromFav }) => {
    return (
        <>
            <p>{restaurant.name}</p>
            <button onClick={() => deleteFromFav(restaurant)}>💔</button>
        </>
    )
}
export default FavouriteRestaurant;