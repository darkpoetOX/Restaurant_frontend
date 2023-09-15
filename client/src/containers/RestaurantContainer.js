import {useState,useEffect} from "react";
import NavBar from "../components/NavBar";
import FavouritesList from "../components/FavouritesList";
import RestaurantList from "../components/RestaurantList";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import BoroughMap from "../components/BoroughMap";
import { Carousel } from "react-bootstrap";
import SideBar from "../components/SideBar";


const RestaurantContainer = () =>{

    // create the initial states
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [favouritesList, setFavouritesList] = useState([]);
    const [dishesList, setDishesList] = useState([]);
    const [filteredDishesList, setFilteredDishesList]=useState([]);

    const [carouselIndex, setCarouselIndex] = useState(0);

    const [priceFilter, setPriceFilter] = useState(null); // Price filterc
    const [boroughFilter, setBoroughFilter] = useState(null); // Borough filter
    const [cuisineFilter, setCuisineFilter]= useState(null);
    const [halal, setHalal]= useState(false);
    const [vegan, setVegan]= useState(false);
    const [vegetarian, setVegetarian]= useState(false);
    const [dairyFree, setDairyFree]= useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null); // restaurant selected
    const selectCuisines = ["AMERICAN",
        "BRITISH",
       "CHINESE",
        "FRENCH",
        "GREEK",
        // "INDIAN",
        "ITALIAN",
        "JAPANESE",
        // "KENYAN",
        // "KOREAN",
        "MEDITERRANEAN",
        "MEXICAN",
        // "NIGERIAN",
        "PAKISTANI",
        "THAI",
        // "TURKISH",
        // "SOMALIAN",
        "VIETNAMESE",
        // "ZIMBABWEAN"
        ];

    const [showSideBar, setShowSideBar] = useState(false);



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

    },[cuisineFilter,priceFilter,boroughFilter])

    useEffect(()=>{
        applyDietaryFilters()
    },[halal,vegan,vegetarian,dairyFree, filteredDishesList])


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
        if (cuisineFilter) {
            filteredListCopy = filteredListCopy.filter( (restaurant) => {
                return restaurant.dishes.some((dish) => dish.cuisines === cuisineFilter)
            })
          }

        setFilteredList(filteredListCopy);
        setSelectedRestaurant(null);
    };

    const applyDietaryFilters=()=>{
        let filteredDishesListCopy = [...dishesList];
        if (halal){
            filteredDishesListCopy = filteredDishesListCopy.filter(
                (dish) => dish.halal === true
            );
        }
        if (vegan){
            filteredDishesListCopy = filteredDishesListCopy.filter(
                (dish) => dish.vegan === true
            );
        }
        if (vegetarian){
            filteredDishesListCopy = filteredDishesListCopy.filter(
                (dish) => dish.vegetarian === true
            );
        }
        if (dairyFree){
            filteredDishesListCopy = filteredDishesListCopy.filter(
                (dish) => dish.dairyFree === true
            );
        }
        setFilteredDishesList(filteredDishesListCopy)

    }

    // Handle price filter
    const filterByPrice = (value) => {
        setPriceFilter(value); // Set price filter state
        setDishesList([]);
        setFilteredDishesList([]);
        //applyFilters(); // Apply filters to update filteredList  -- we took it out here to make it apply when we change state and applied it to useeffect
    };

    // Handle borough filter
    const filterByBorough = (borough) => {
        setBoroughFilter(borough); // Set borough filter state
        setDishesList([]);
        setFilteredDishesList([]);

        //applyFilters(); // Apply filters to update filteredList -- we took it out here to make it apply when we change state and applied it to useeffect
    };

    const filterByCuisine = (cuisine) => {
        setCuisineFilter(cuisine);
        setDishesList([]);
        setFilteredDishesList([]);

    }

    const handleResetFilters = () => {
        // Reset filter values
        setPriceFilter(null);
        setBoroughFilter(null);
        setCuisineFilter(null);
        setFilteredList([...restaurantList]);
        setDishesList([]);
        setFilteredDishesList([]);
        setHalal(false);
        setVegan(false);
        setVegetarian(false);
        setDairyFree(false);
        setSelectedRestaurant(null);

    };

    const maxDishesPerCarousel = 5;
    
    const displayDishes = () => {
        let finalCarousel = [];
        let page = 1;
        while(page <= Math.ceil(filteredDishesList.length/maxDishesPerCarousel)){
            const eachCarousel = filteredDishesList.filter((dish, index) => {
                if(index >= (page-1)*maxDishesPerCarousel && index < page*maxDishesPerCarousel){ // index 0-4
                    return dish;
                }
            })
            .map((dish, index) => {
                    return <>
                    <label className={`dish-title${index}`}>{dish.name}</label>
                    <img src={`./Images/dishes/${dish.id}.jpg`} className={"images"} alt={dish.name}/>
                    </>
            });
            finalCarousel.push(<Carousel.Item>{eachCarousel}</Carousel.Item>);
            page++;
        }
        return finalCarousel
    }

    const updateFilteredDishesList = (newFilteredDishesList) => {
        setCarouselIndex(0);
        setFilteredDishesList(newFilteredDishesList); //every time filtered dishes is updated, callback to re render carousel
        setTimeout(() => {
            const dishesCarousel = document.querySelector(".footer")
            dishesCarousel.scrollIntoView({behavior: "smooth"})
        }, 230)
    } 

    const handleSelect = (selectedIndex) => {
        setCarouselIndex(selectedIndex);
      };

    return(
        <>
            <NavBar  />
            {/*added a sidebar*/}
            <div className="openSideBarButton">
                <button className="circular-button" onClick={() => setShowSideBar(!showSideBar)}>❤️</button>
            </div>
            <SideBar show={showSideBar} favourites={favouritesList} deleteFromFav={deleteFromFav}/>
            <HeroImage />
            <br/>
            <BoroughMap filterByBorough={filterByBorough} />
            <div className={"ResetButton"}>
                <p className="borough-name">{boroughFilter ? boroughFilter : "Please select above"}</p>
                <button onClick={handleResetFilters}> <strong>Reset Filters</strong> </button>
            </div>

            <div className="price-range-buttons">
            <button value="LOW" onClick={() => filterByPrice("LOW")}
            style={{ backgroundColor: priceFilter === "LOW" ? '#98c199' : '#d2cca1' }} >
            £
            </button>
            <button 
            value="MEDIUM" 
            onClick={() => filterByPrice("MEDIUM")}
            style={{ backgroundColor: priceFilter === "MEDIUM" ? '#98c199' : '#d2cca1' }}
            >
            ££
            </button>
            <button 
            value="HIGH" 
            onClick={() => filterByPrice("HIGH")}
            style={{ backgroundColor: priceFilter === "HIGH" ? '#98c199' : '#d2cca1' }}
            >
                £££
            </button>
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
            <div className={"RestaurantBox"}>
            <RestaurantList addToFav = {addToFav} restaurants={filteredList} selectedRestaurant={selectedRestaurant} setDishesList={setDishesList} updateFilteredDishesList={updateFilteredDishesList} setSelectedRestaurant={setSelectedRestaurant}/>
            </div>
            <div className={"slider-css"}>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox" checked={halal} onChange={()=>setHalal(!halal)}/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Halal</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox" checked={vegan} name="vegan" onChange={()=>setVegan(!vegan)}/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Vegan</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox" checked={vegetarian} onChange={()=>setVegetarian(!vegetarian)}/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Vegetarian</span>
                </div>

                <div className="switch-container">
                    <label className="switch">
                        <input type="checkbox" checked={dairyFree} onChange={()=>setDairyFree(!dairyFree)}/>
                        <span className="slider round"></span>
                    </label>
                    <span className="switch-name">Dairy Free</span>
                </div>
               
            </div> <br/>
            <div className="dishes">
                {(filteredDishesList.length !== 0) ?  
                <Carousel 
                    interval={null} 
                    activeIndex={carouselIndex} 
                    onSelect={handleSelect}> 
                        {displayDishes()} 
                </Carousel> : 
                <h3 className="please-select">Please select a restaurant</h3>}
            </div>
            <br/>
            <CustomerReviews />
            <Footer />
        </>

    )

}

export default RestaurantContainer;