import React from 'react'
import './Home.css'
import Banner from './Banner.js'
import Card from './Card'


function Home() {
  return (
    <div className='home'>
      <Banner/>

      <div className='home__section'>
        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
        />

        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
        />

        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
        />

      </div>

      <div className='home__section'>
        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
          price="$45/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
          price="$45/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
          price="$45/night"
        />

      </div>

      <div className='home__section'>
        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
          price="$45/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
          price="$45/night"
        />

        <Card
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
          title="Entire Homes"
          description="Comfortable private places,
           with room for friends and family."
          price="$45/night"
        />

      </div>

    </div>
  )
}

export default Home