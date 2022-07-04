import React from 'react'
import './SearchPage.css'
import { Button } from "@mui/material"
import SearchResult from './SearchResult'
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>

            <p>62 Stays · 26 august to 30 august · 2 guests</p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More filters</Button>
        </div>
        <SearchResult
          img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=20"
          location="Private room in the center of Nigeria"
          title="Stay at this Luxury House"
          description="1 guest · 1 bed · 1.5 shared bedrooms · wifi · kitchen · Free Parking · Washing Machine"
          star="4.56"
          price="$50 / night"
          total="$100 total" 
        />

        <SearchResult
          img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=20"
          location="Private room in the center of Nigeria"
          title="Stay at this Luxury House"
          description="1 guest · 1 bed · 1.5 shared bedrooms · wifi · kitchen · Free Parking · Washing Machine"
          star="4.56"
          price="$50 / night"
          total="$100 total" 
        />

        <SearchResult
          img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=20"
          location="Private room in the center of Nigeria"
          title="Stay at this Luxury House"
          description="1 guest · 1 bed · 1.5 shared bedrooms · wifi · kitchen · Free Parking · Washing Machine"
          star="4.56"
          price="$50 / night"
          total="$100 total" 
        />

        <SearchResult
          img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=20"
          location="Private room in the center of Nigeria"
          title="Stay at this Luxury House"
          description="1 guest · 1 bed · 1.5 shared bedrooms · wifi · kitchen · Free Parking · Washing Machine"
          star="4.56"
          price="$50 / night"
          total="$100 total" 
        />
 
    </div>
  )
}

export default SearchPage