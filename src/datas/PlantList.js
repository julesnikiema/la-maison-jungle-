export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: true
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: true
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: false
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale: false
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isBestSale: false
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale: true
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: true
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale: true
	}
]

// Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes

// const plantcategory = plantcategory.reduce((acc, item)=>{

//     if (!acc.includes(item.category)) {
//         acc.push(item.category);
//     }
// },[]);

// console.log(plantcategory); // Output: ['classique', 'extérieur', 'plante grasse']

//L'utilisation de .reduce() sur plantList permet d'extraire les catégories uniques de plantes.
// À chaque itération, la fonction de rappel vérifie si la catégorie de l'élément en cours (item.category) est déjà présente 
//dans l'accumulateur (acc). Si elle n'est pas présente, elle est ajoutée à l'accumulateur. 
//Le résultat final est un tableau contenant uniquement les catégories uniques extraites de plantList.
