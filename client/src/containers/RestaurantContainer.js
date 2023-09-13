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
    const [dishesList, setDishesList] = useState(null);

    const [priceFilter, setPriceFilter] = useState(null); // Price filter
    const [boroughFilter, setBoroughFilter] = useState(null); // Borough filter
    const [cuisineFilter, setCuisineFilter]= useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null); // restaurant selected
    const selectCuisines = ["AMERICAN",
        "BRITISH",
       "CHINESE",
        "FRENCH",
        "GREEK",
        "INDIAN",
        "ITALIAN",
        "JAPANESE",
        "KENYAN",
        "KOREAN",
        "MEDITERRANEAN",
        "MEXICAN",
        "NIGERIAN",
        "PAKISTANI",
        "THAI",
        "TURKISH",
        "SOMALIAN",
        "VIETNAMESE",
        "ZIMBABWEAN"];



    // fetch restaurant data from data loader
    const fetchRestaurants = async () =>{
        const response = await fetch("http://localhost:8080/restaurants");
        const data = await response.json()
        setRestaurantList(data);
        setFilteredList(data);
        console.log(data);


    }
    const fetchByCuisine = async () =>{
        const response = await fetch("http://localhost:8080/restaurants?cuisine=" +cuisineFilter);
        const data = await response.json()
       setFilteredList(data);
        console.log(data);


    }

    // fetch data on load at the start of the run
    useEffect(() => {
        fetchRestaurants();

    },[])

    useEffect(() => {
        applyFilters()

    },[cuisineFilter,priceFilter,boroughFilter])

    useEffect(() => {
        fetchByCuisine()

    },[cuisineFilter])


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
        if (cuisineFilter) {
            fetchByCuisine()
        
        }

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
    const filterByPrice = (value) => {setPriceFilter(value); // Set price filter state
        setDishesList(null);
        //applyFilters(); // Apply filters to update filteredList  -- we took it out here to make it apply when we change state and applied it to useeffect
    };

    // Handle borough filter
    const filterByBorough = (borough) => {
        setBoroughFilter(borough); // Set borough filter state
        setDishesList(null);

        //applyFilters(); // Apply filters to update filteredList -- we took it out here to make it apply when we change state and applied it to useeffect
    };

    const filterByCuisine = (cuisine) => {
        setCuisineFilter(cuisine);
        // setDishesList(null);
    }

    const handleResetFilters = () => {
        // Reset filter values
        setPriceFilter(null);
        setBoroughFilter(null);
        setCuisineFilter(null);
        setFilteredList([...restaurantList]);
        setDishesList(null);

    };

    const ifTrue = (status) => {
        if(status === true){
            return "Yes";
        }
        return "No";
    }

    const displayDishes = () => {
        const displayDish = dishesList.map((dish, index) => {
            return <>
                <h4>{dish.name}</h4>
                <ul>
                    <li>Vegetarian: {ifTrue(dish.vegetarian)}</li>
                    <li>Vegan: {ifTrue(dish.vegen)}</li>
                    <li>Dairy Free: {ifTrue(dish.dairyFree)}</li>
                    <li>Halal: {ifTrue(dish.halal)}</li>
                </ul>
                </>;
        });
        return displayDish;
    }

    return(
        <>
            <NavBar />
            <HeroImage />
            <hr></hr>
            <BoroughMap filterByBorough={filterByBorough} />
            <div className={"ResetButton"}>
                <p className="borough-name">{boroughFilter ? boroughFilter : "Please select above"}</p>
                <button onClick={handleResetFilters}> <strong>Reset Filters</strong> </button>
            </div>

            <div className="price-range-buttons">
                <button value="LOW" onClick={()=>{filterByPrice("LOW")}} >£</button>
                <button value="MEDIUM" onClick={()=>filterByPrice("MEDIUM")}>££</button>
                <button value="HIGH" onClick={()=>filterByPrice("HIGH")}>£££</button>
            </div>
            <div className="cuisine-selecter">
                <select id="restaurantSelect" onChange={(e)=> filterByCuisine(e.target.value)} value={cuisineFilter || ''}>
                    <option value="">Please select cuisine</option>
                    {selectCuisines.map((cuisine, index) => (
                        <option key={index} value={cuisine}>
                            {cuisine}
                        </option>
                    ))}
                </select>
            </div>
            <FavouritesList deleteFromFav = {deleteFromFav}/>
            <div className={"RestaurantBox"}>
            <RestaurantList addToFav = {addToFav} restaurants={filteredList} setDishesList={setDishesList}/>
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
                    <span className="switch-name">Vegetarian</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Dairy Free</span>
                </div>

            </div>
            <div className="dishes">{dishesList ? displayDishes() : <h3>Please select a restaurant</h3>}</div>

            <CustomerReviews />
            <Footer />
        </>

    )

}

export default RestaurantContainer;