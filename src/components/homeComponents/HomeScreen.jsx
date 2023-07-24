import {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'

const HomeScreen = () => {  
  const [theRecipes, setTheRecipes] = useState([])
  
  const getRecipes = async () => {
    try{ 
      let resp = await axios.get('https://recipes.devmountain.com/recipes')
      console.log(resp.data)
      setTheRecipes(resp.data)

    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen