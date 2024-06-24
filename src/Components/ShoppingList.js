import { plantList } from "../datas/PlantList";
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

            {/* plantList.map((plant) => (...)): C'est une méthode JavaScript qui itère sur chaque élément de plantList 
            et retourne un nouveau tableau avec des éléments modifiés ou transformés. */}
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>} 
                
					</li>
				))}
			</ul>
		</div>
	)
}

// {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>} : Cette expression vérifie si plant.isSpecialOffer est vrai (true). Si c'est le cas, elle affiche un élément <div> avec la classe CSS lmj-sales et le texte "Soldes". 
// Sinon, cet élément n'est pas rendu du tout.

export default ShoppingList
