import '../Styles/Banner.css'
//importer le logo 
import logo from '../Assets/logo.png'


function Banner() {

//mettons le tritre dans une variable

    const title = "la maison jungle "

    return (
    <div className="lmg-banner" > 
    <img src={logo} alt='la maison jungle ' className='lmj-logo' />
    <h1 className='lmj-title' >{title}</h1>
    </div>
    )
}

export default Banner