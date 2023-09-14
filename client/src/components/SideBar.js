import FavouritesList from "./FavouritesList";

const SideBar = ({show ,favourites, deleteFromFav}) => {
  //    11 mins 50 tells you about react icons


  return (
    <div className={show ? 'sidenav active':'sidenav'}>
        <FavouritesList favourites={favourites} deleteFromFav = {deleteFromFav} />
        {/*<ul>*/}
        {/*    <li>*/}
        {/*        <a href="">Home</a>*/}
        {/*    </li>*/}
        {/*</ul>*/}
    </div>
  );
}
export default SideBar;