import {useState,useEffect} from "react";

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

    return(
        <>
        
        
        </>
    )

}

export default RestaurantContainer;