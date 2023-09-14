import FavouriteRestaurant from "./FavouriteRestaurant";


const FavouritesList = ({favourites, deleteFromFav}) => {

    const favouriteRestaurant = favourites.map((restaurant,index)=> {
        return <FavouriteRestaurant restaurant={restaurant} key={index} deleteFromFav={deleteFromFav}/>
    })
    return(
        <>
            {favouriteRestaurant}
        </>
    )
}




export default FavouritesList;
