import {useState,useEffect} from "react";
import NavBar from "../components/NavBar";
import FavouritesList from "../components/FavouritesList";
import RestaurantList from "../components/RestaurantList";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";


const RestaurantContainer = () =>{

    // create the  initial states
    const [restaurantList, setRestaurantList] = useState([]); 
    const [filteredList, setFilteredList] = useState([]);
    const [favouritesList, setFavouritesList] = useState([]);

    // fetch restaurant data from data loader
    const fetchRestaurants = async () =>{ 
        const response = await fetch("http://localhost:8080/restaurants"); 
        const data = await response.json()
        setRestaurantList(data);
        setFilteredList(data);
        console.log(data);
        
        
    }

    // fetch data on load at the start of the run
    useEffect(() => {
        fetchRestaurants();

    },[])


    const addToFav = (restaurant) => {
        if (!favouritesList.includes(restaurant)){
            const updatedFavourites = [...favouritesList, restaurant]
            setFavouritesList(updatedFavourites);
        }
    }

    const deleteFromFav = (deleteRestaurant) => {
        const updatedFavourites = favouritesList.filter((restaurant) => restaurant.name !== deleteRestaurant.name)
        setFavouritesList(updatedFavourites)
    }

    return(
        <>
          <NavBar />
            <HeroImage />
          <FavouritesList deleteFromFav = {deleteFromFav}/>
          <RestaurantList addToFav = {addToFav} />  
          <CustomerReviews />  
          <Footer />  
        </>

    )

}

export default RestaurantContainer;