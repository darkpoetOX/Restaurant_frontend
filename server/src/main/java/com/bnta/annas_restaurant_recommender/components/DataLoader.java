package com.bnta.annas_restaurant_recommender.components;

import com.bnta.annas_restaurant_recommender.models.*;
import com.bnta.annas_restaurant_recommender.repositories.DishRepository;
import com.bnta.annas_restaurant_recommender.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner{

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    DishRepository dishRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Dish dish1 = new Dish("Sushi", false, false, true, true, Cuisine.JAPANESE);
        Dish dish2 = new Dish("Spaghetti Bolognese", false, false, false, true, Cuisine.ITALIAN);
        Dish dish3 = new Dish("Tacos", false, false, true, false, Cuisine.MEXICAN);
        Dish dish4 = new Dish("Siu Mai", false, false, true, false, Cuisine.CHINESE);
        Dish dish5 = new Dish("Margherita Pizza", true, false, false, true,Cuisine.ITALIAN);
        Dish dish6 = new Dish("Grass", true, true, true, true, Cuisine.MEDITERRANEAN);
        Dish dish7 = new Dish("Fish and Chips", false, false, true, true, Cuisine.BRITISH);
        Dish dish8 = new Dish("Lamb Biryani", false, false, false, true, Cuisine.PAKISTANI);
        Dish dish9 = new Dish("Hawaiian Pizza", false, false, false, false, Cuisine.AMERICAN);
        Dish dish10 = new Dish("Burrito", false, false, false, true, Cuisine.MEXICAN);
        Dish dish11 = new Dish("Chicken Souvlaki Banh Mi", false, false, false, true,Cuisine.GREEK);
        Dish dish12 = new Dish("Chicken wings and chips", false, false, true, true, Cuisine.BRITISH);
        Dish dish13 = new Dish("Wagyu Burger and chips", false, false, false, true, Cuisine.JAPANESE);
        Dish dish14 = new Dish("Sushi", true, true, true, true, Cuisine.JAPANESE);
        Dish dish15 = new Dish("Focaccia", true, true, true, true, Cuisine.ITALIAN);
        Dish dish16 = new Dish("Raviolo", true, false, false, true, Cuisine.ITALIAN);
        Dish dish17 = new Dish("Lobster", false, false, false, true, Cuisine.FRENCH);
        Dish dish18 = new Dish("Vegetable Gyoza", true, true, true, false, Cuisine.JAPANESE);
        Dish dish19 = new Dish("Chicken Gyoza", false, false, true, false, Cuisine.JAPANESE);
        Dish dish20 = new Dish("Noodle Soup", true, true, true, true, Cuisine.JAPANESE);
        Dish dish21 = new Dish("Sashimi", false, false, true, true, Cuisine.JAPANESE);
        Dish dish22 = new Dish("Prawns", false, false, false, true, Cuisine.GREEK);
        Dish dish23 = new Dish("Pho", true, true, true, false, Cuisine.VIETNAMESE);
        Dish dish24 = new Dish("Egg Fried Rice", true, false, true, true, Cuisine.JAPANESE);
        Dish dish25 = new Dish("Nigiri", false, false, true, true, Cuisine.JAPANESE);
        Dish dish26 = new Dish("Sirloin Steak", false, false, false, true, Cuisine.FRENCH);
        Dish dish27 = new Dish("Rice", true, true, true, true, Cuisine.JAPANESE);
        Dish dish28 = new Dish("Sundae", true, false, false, true, Cuisine.AMERICAN);
        Dish dish29 = new Dish("Pad Thai", false, false, true, true, Cuisine.THAI);
        Dish dish30 = new Dish("Chicken Pad Kee Mao", false, false, false, true, Cuisine.THAI);
        Dish dish31 = new Dish("Vegetable Spring Rolls", true, true, true, true, Cuisine.THAI);
        Dish dish32 = new Dish("Rice Cakes", true, true, true, true, Cuisine.THAI);
        Dish dish33 = new Dish("Chicken Satay", false, false, true, false, Cuisine.CHINESE);
        Dish dish34 = new Dish("Cheeseburger", false, false, false, true, Cuisine.AMERICAN);
        Dish dish35 = new Dish("French Fries", true, true, true, true, Cuisine.AMERICAN);
        Dish dish36 = new Dish("Potato Gratin", true, false, false, true, Cuisine.FRENCH);
        Dish dish37 = new Dish("Caprese Salad", true, false, false, true, Cuisine.ITALIAN);
        Dish dish38 = new Dish("Greek Salad", true, false, false, true, Cuisine.GREEK);
        Dish dish39 = new Dish("Caesar Salad", true, true, true, true, Cuisine.AMERICAN);
        Dish dish40 = new Dish("Hot Dog", false, false, false, true, Cuisine.AMERICAN);
        Dish dish41 = new Dish("Pepperoni Pizza", false, false, false, false, Cuisine.ITALIAN);
        Dish dish42 = new Dish("Ribs", false, false, true, false, Cuisine.AMERICAN);

        dishRepository.saveAll(List.of(dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9, dish10, dish11, dish12, dish13,dish14, dish15, dish16,
                dish17, dish18, dish19, dish20, dish21, dish22, dish23, dish24, dish25, dish26, dish27,dish28,dish29, dish30, dish31, dish32, dish33,
                dish34, dish35, dish36, dish37, dish38, dish39, dish40, dish41, dish42));

        List<Restaurant> restaurants = new ArrayList<>();
        restaurants.add(new Restaurant("Bob's Seafood", Borough.SOUTHWARK, PriceRange.MEDIUM, 3, List.of(dish1, dish17, dish22, dish35,dish39)));
        restaurants.add(new Restaurant("Morley's", Borough.LEWISHAM, PriceRange.LOW, 5, List.of(dish34, dish35,dish12,dish40,dish42,dish38)));
        restaurants.add(new Restaurant("Circolo Popolare", Borough.WESTMINSTER, PriceRange.MEDIUM,5, List.of(dish2,dish4, dish13, dish15,dish16,dish26, dish36, dish39,dish37)));
        restaurants.add(new Restaurant("Hakkasan", Borough.KENSINGTONANDCHELSEA, PriceRange.HIGH, 5, List.of(dish2, dish4, dish15, dish16, dish1, dish37, dish22)));
        restaurants.add(new Restaurant("Van of Life", Borough.HACKNEY, PriceRange.LOW, 1, List.of(dish3, dish5, dish7, dish9, dish10,dish33,dish35)));
        restaurants.add(new Restaurant("Nandos-Lewisham", Borough.LEWISHAM, PriceRange.MEDIUM, 5, List.of(dish12, dish27,dish33, dish35,dish39, dish42)));
        restaurants.add(new Restaurant("Franco Manca", Borough.LEWISHAM, PriceRange.HIGH, 5, List.of(dish2, dish5,dish9,dish15,dish16,dish22,dish37,dish41)));
        restaurants.add(new Restaurant("Angelina", Borough.HACKNEY, PriceRange.HIGH, 4,List.of(dish1,dish14,dish15,dish16,dish17,dish21,dish22)));
        restaurants.add(new Restaurant("Kulukulu Sushi", Borough.WESTMINSTER, PriceRange.LOW, 4, List.of(dish1,dish14,dish17,dish21,dish23,dish22,dish25,dish27,dish32)));
        restaurants.add(new Restaurant("Rasa Sayang", Borough.WESTMINSTER, PriceRange.MEDIUM, 0, List.of(dish12,dish13,dish1,dish14,dish15,dish16,dish17,dish21,dish22)));
        restaurants.add(new Restaurant("Yeye Noodle", Borough.WESTMINSTER, PriceRange.LOW, 3, List.of(dish1, dish21,dish20,dish21,dish22,dish23,dish24,dish29,dish31,dish32)));
        restaurants.add(new Restaurant("Sushi Show", Borough.ISLINGTON, PriceRange.LOW, 5, List.of(dish23,dish22,dish25, dish1,dish14,dish17,dish21,dish27,dish32)));
        restaurants.add(new Restaurant("Happy Lamb Hotpot", Borough.CAMDEN, PriceRange.MEDIUM, 3, List.of(dish19,dish4,dish1,dish17,dish22,dish26,dish18,dish32)));
        restaurants.add(new Restaurant("Bulgogi", Borough.KENSINGTONANDCHELSEA, PriceRange.MEDIUM, 4, List.of(dish42,dish37,dish26,dish22,dish17,dish36,dish35,dish13,dish2)));
        restaurants.add(new Restaurant("Dim Sum Duck", Borough.ISLINGTON, PriceRange.LOW, 2, List.of(dish4,dish20,dish31,dish18,dish24,dish32,dish33,dish27,dish19)));
        restaurants.add(new Restaurant("Kintan Japanese BBQ", Borough.CAMDEN, PriceRange.MEDIUM, 5, List.of(dish22, dish26 ,dish42, dish27,dish33)));
        restaurants.add(new Restaurant("Papa Noodle", Borough.CAMDEN, PriceRange.MEDIUM, 4, List.of(dish30, dish29,dish31,dish27,dish23,dish20)));
        restaurants.add(new Restaurant("Eat of Eden", Borough.LAMBETH, PriceRange.MEDIUM, 3, List.of(dish27,dish14,dish31,dish15,dish18,dish23,dish35, dish39)));
        restaurants.add(new Restaurant("Chin Chin labs", Borough.WESTMINSTER, PriceRange.LOW, 5,List.of(dish28)));
        restaurants.add(new Restaurant("Rudys Pizzeria", Borough.WESTMINSTER, PriceRange.MEDIUM, 3, List.of(dish41,dish37,dish5,dish9,dish38)));
        restaurants.add(new Restaurant("Tattu London", Borough.CAMDEN, PriceRange.HIGH, 4, List.of(dish17,dish21,dish4,dish1,dish27,dish33,dish24)));
        restaurants.add(new Restaurant("Marugame Udon", Borough.BARNET, PriceRange.LOW, 3, List.of(dish30, dish27,dish29,dish31,dish23,dish20)));
        restaurants.add(new Restaurant("Viet Cafe", Borough.SOUTHWARK, PriceRange.MEDIUM, 4,List.of(dish11,dish23,dish31)));
        restaurants.add(new Restaurant("Gokyuzu", Borough.HARINGEY, PriceRange.MEDIUM, 3, List.of(dish42,dish12,dish35,dish26,dish13)));
        restaurants.add(new Restaurant("Gopals Corner", Borough.TOWERHAMLETS, PriceRange.LOW, 4, List.of(dish20,dish22,dish27,dish32)));
        restaurants.add(new Restaurant("J.J.Moon's-Wetherspoons", Borough.HILLINGDON, PriceRange.LOW, 0,List.of(dish7, dish35, dish40, dish8, dish10,dish5, dish28, dish41, dish34, dish42)));
        restaurantRepository.saveAll(restaurants);

    }
}
