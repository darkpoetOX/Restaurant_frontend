import React from "react";
import FavouriteRestaurant from "./FavouriteRestaurant";

const FavouritesList = ({ favourites, deleteFromFav }) => {
    const favouriteRestaurants = favourites.map((restaurant) => (
        <div className="restaurant-box" key={restaurant.id}>
            <FavouriteRestaurant restaurant={restaurant} deleteFromFav={deleteFromFav} />
        </div>
    ));

    return <div>{favouriteRestaurants}</div>;
};

export default FavouritesList;





