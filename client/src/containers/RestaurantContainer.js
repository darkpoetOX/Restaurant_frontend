import {useState,useEffect} from "react";
import NavBar from "../components/NavBar";
import FavouritesList from "../components/FavouritesList";
import RestaurantList from "../components/RestaurantList";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import BoroughMap from "../components/BoroughMap";


const RestaurantContainer = () =>{

    // create the  initial states
    const [restaurantList, setRestaurantList] = useState([]); 
    const [filteredList, setFilteredList] = useState([]);
    const [favouritesList, setFavouritesList] = useState([]);

    const [priceFilter, setPriceFilter] = useState(null); // Price filter
    const [boroughFilter, setBoroughFilter] = useState(null); // Borough filter


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
            console.log(updatedFavourites);
        }
    }

    const deleteFromFav = (deleteRestaurant) => {
        const updatedFavourites = favouritesList.filter((restaurant) => restaurant.name !== deleteRestaurant.name)
        setFavouritesList(updatedFavourites)
    }

    // Apply active filters to update filteredList
    const applyFilters = () => {
        let filteredListCopy = [...restaurantList];

        if (priceFilter) {
            filteredListCopy = filteredListCopy.filter(
                (restaurant) => restaurant.priceRange === priceFilter
            );
        }

        if (boroughFilter) {
            filteredListCopy = filteredListCopy.filter(
                (restaurant) => restaurant.borough === boroughFilter
            );
        }

        setFilteredList(filteredListCopy);
    };

    // Handle price filter
    const filterByPrice = (value) => {
        setPriceFilter(value); // Set price filter state
        applyFilters(); // Apply filters to update filteredList
    };

    // Handle borough filter
    const filterByBorough = (borough) => {
        setBoroughFilter(borough); // Set borough filter state
        applyFilters(); // Apply filters to update filteredList
    };

    const handleResetFilters = () => {
        // Reset filter values to their defaults or clear them
        setPriceFilter(null);
        setBoroughFilter(null);
        setFilteredList([...restaurantList]);
        // Add similar lines for other filters
    };

    return(
        <>
            <NavBar />
            <HeroImage />
            <BoroughMap filterByBorough={filterByBorough} />
            <p>{boroughFilter}</p>
            <button onClick={handleResetFilters}>Reset Filters</button>
            <div className="price-range-buttons">
                <button value="LOW" onClick={()=>filterByPrice("LOW")}>£</button>
                <button value="MEDIUM" onClick={()=>filterByPrice("MEDIUM")}>££</button>
                <button value="HIGH" onClick={()=>filterByPrice("HIGH")}>£££</button>
            </div>
            <FavouritesList deleteFromFav = {deleteFromFav}/>
            <RestaurantList addToFav = {addToFav} restaurants={filteredList} />  
            <CustomerReviews />  
            <Footer />  
        </>

    )

}

export default RestaurantContainer;