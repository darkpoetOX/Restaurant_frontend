import {useState,useEffect} from "react";
import NavBar from "../components/NavBar";
import FavouritesList from "../components/FavouritesList";
import RestaurantList from "../components/RestaurantList";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import BoroughMap from "../components/BoroughMap";


const RestaurantContainer = () =>{

    // create the initial states
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

    useEffect(() => {
        applyFilters()

    },[priceFilter,boroughFilter])


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
        //applyFilters(); // Apply filters to update filteredList  -- we took it out here to make it apply when we change state and applied it to useeffect
    };

    // Handle borough filter
    const filterByBorough = (borough) => {
        setBoroughFilter(borough); // Set borough filter state
        //applyFilters(); // Apply filters to update filteredList -- we took it out here to make it apply when we change state and applied it to useeffect
    };

    const handleResetFilters = () => {
        // Reset filter values
        setPriceFilter(null);
        setBoroughFilter(null);
        setFilteredList([...restaurantList]);
    };

    return(
        <>
            <NavBar />
            <HeroImage />
            <BoroughMap filterByBorough={filterByBorough} />
            <p>{boroughFilter}</p>
            <div className={"ResetButton"}>
                <button onClick={handleResetFilters}> <strong>Reset Filters</strong> </button>
            </div>

            <div className="price-range-buttons">
                <button value="LOW" onClick={()=>filterByPrice("LOW")}>£</button>
                <button value="MEDIUM" onClick={()=>filterByPrice("MEDIUM")}>££</button>
                <button value="HIGH" onClick={()=>filterByPrice("HIGH")}>£££</button>
            </div>
            <FavouritesList deleteFromFav = {deleteFromFav}/>
            <div className={"RestaurantBox"}>
            <RestaurantList addToFav = {addToFav} restaurants={filteredList} />
            </div>

            <div className={"slider-css"}>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Halal</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox" name="vegan"/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Vegan</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Veg</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Dairy Free</span>
                </div>

            </div>

            <CustomerReviews />
            <Footer />
        </>

    )

}

export default RestaurantContainer;