import FavouritesList from "./FavouritesList";

const SideBar = ({show ,favourites, deleteFromFav}) => {
  //    11 mins 50 tells you about react icons


  return (
    <div className={show ? 'sidenav active':'sidenav'}>
        <h3>Favourite Restaurants</h3>
        <FavouritesList className="favouriteList" favourites={favourites} deleteFromFav = {deleteFromFav} />
    </div>
  );
}
export default SideBar;