import CareScale from './CareScale'
import '../Styles/PlantItem.css'


function handleClick(plantName){
	alert(`vous voulez acheter 1 plante ${plantName}? tres bon choix`)
}


function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={()=>{handleClick(name)}}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem