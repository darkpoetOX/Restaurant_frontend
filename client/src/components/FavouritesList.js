import FavouriteRestaurant from "./FavouriteRestaurant";

const FavouritesList = ({ favourites, deleteFromFav }) => {
    const favouriteRestaurants = favourites.map((restaurant, index) => (
        <li key={index}>
            {/* wrapped each FavouriteRestaurant component with an individual <li> element. T*/}
            <FavouriteRestaurant restaurant={restaurant} deleteFromFav={deleteFromFav} />
        </li>
    ));

    return <ul>{favouriteRestaurants}</ul>;
};

export default FavouritesList;




