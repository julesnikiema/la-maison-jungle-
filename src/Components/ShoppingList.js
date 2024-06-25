import { plantList } from "../datas/PlantList";
import PlantItem from './PlantItem'

import '../Styles/ShoppingList.css';


function ShoppingList() {

//     Le composant ShoppingList retourne un élément <div> contenant deux listes <ul> :

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
       {/* La première liste affiche les catégories uniques des plantes extraites à l'aide de reduce() et .map(). */}

			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
             {/* La seconde liste (ul.lmj-plant-list) affiche toutes les plantes de plantList avec leurs noms et, 
        le cas échéant, l'indication de promotion spéciale. */}
        <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}



export default ShoppingList
