import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'



// La fonction CareScale prend deux propriétés (props) en entrée : scaleValue et careType. 
// Elle utilise ces propriétés pour générer une série 
// d'icônes (☀️ ou 💧) qui représentent un certain niveau de soin (careType).
function CareScale({ scaleValue, careType }) {

    // Cette ligne définit une constante range qui est un tableau contenant les valeurs [1, 2, 3]. 
    // Ce tableau est utilisé pour déterminer combien de fois 
    // l'icône appropriée sera affichée en fonction de scaleValue
	const range = [1, 2, 3]
    const scaleType =
    careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )
	return (

		<div>
        {/* range.map : La méthode map est utilisée pour itérer sur chaque élément du tableau range (rangeElem). */}
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
        // Condition ternaire dans map : Pour chaque rangeElem, si scaleValue est supérieur ou égal à rangeElem, 
        // un élément span est créé avec la clé définie par rangeElem converti en chaîne (rangeElem.toString()). 
        // L'élément span contient scaleType (soit ☀️ ou 💧). Si scaleValue est inférieur à rangeElem,
        //  null est retourné, donc aucun élément span n'est créé pour cette itération.
	)
}

export default CareScale