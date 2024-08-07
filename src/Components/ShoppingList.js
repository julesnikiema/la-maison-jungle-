import { plantList } from "../datas/PlantList";
import PlantItem from './PlantItem'
import Categories from "./Categories";
import '../Styles/ShoppingList.css';
import { useState } from "react";

//     Le composant ShoppingList retourne un élément <div> contenant deux listes <ul> :

function ShoppingList({cart , updateCart}) {


	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	return (
		<div className='lmj-shopping-list' >
       {/* La première liste affiche les catégories uniques des plantes extraites à l'aide de reduce() et .map(). */}
	   <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
		/>


			<ul className='lmj-plant-list' >
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
             {/* La seconde liste (ul.lmj-plant-list) affiche toutes les plantes de plantList avec leurs noms et, 
        le cas échéant, l'indication de promotion spéciale. */}
		<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}



export default ShoppingList
