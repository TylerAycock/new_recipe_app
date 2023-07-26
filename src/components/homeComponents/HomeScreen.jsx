import {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import SearchBar from './SearchBar'


// const testRecipe = [
//   {
//     recipe_name: " Meatloaf",
//     image_url: "https://www.budgetbytes.com/wp-content/uploads/2021/09/Classic-Meatloaf-side.jpg",
//     recipe_id: 1,
//   },
//   {
//     recipe_name: "Spaghetti",
//     image_url: "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg",
//     recipe_id: 2,
//   },
//   {
//     recipe_name: "Sushi",
//     image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5RQNvshlVpf5QjPi6RsV296sT-qiyofLWl4ErXXU&s",
//     recipe_id: 3,
//   },
// ];

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
      <SearchBar theRecipes={theRecipes}/>
    </div>
  )
}

export default HomeScreen