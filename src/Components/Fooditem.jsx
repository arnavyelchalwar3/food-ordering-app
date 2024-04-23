import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
const Fooditem = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10  lg:justify-start mx-6'>
      {FoodData.map((food)=>{
        return <FoodCard 
        key={food.id} 
        id={food.id} 
        name={food.name} 
        price={food.price} 
        desc={food.desc}
        rating={food.rating}
        image={food.img}
        />
      })  }
    </div>
  )
}

export default Fooditem