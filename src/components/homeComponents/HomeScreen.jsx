import {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import SearchBar from './SearchBar'


const testRecipe = [
  {
    name: " Meatloaf",
    img: "https://www.budgetbytes.com/wp-content/uploads/2021/09/Classic-Meatloaf-side.jpg",
    directions: "mix it up, put in pan, bake at 350",
  },
  {
    name: "Spaghetti",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg",
    directions: "boil pasta, add sauce, top with too much cheese",
  },
  {
    name: "Sushi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5RQNvshlVpf5QjPi6RsV296sT-qiyofLWl4ErXXU&s",
    directions: "cut fish, cover in rice, roll it up",
  },
];

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
      <SearchBar testRecipe={testRecipe}/>
    </div>
  )
}

export default HomeScreen