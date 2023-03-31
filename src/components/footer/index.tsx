import './footer.css';
import Logo from '../../assets/logo_PopCorn.svg';

export default function Footer(){
    return (
        <footer>
            <div className='footer'>
            </div>
            <div className='footerDetail' >
                <div>
                    <img src={Logo}/>
                </div>
                <div>
                    <p className='title'> Sommaire</p>
                    <p>Accueil</p>
                    <p>Catégorie</p>
                </div>
                <div>
                    <p>Mentions légales</p>
                    <p>Politique de confidentialité</p>
                </div>
                <div>
                    <p className='title'>Dev</p>
                    <p>Maxime</p>
                    <p>Cheikh</p>
                    <p>Alexis</p>
                    <p>Axel</p>
                </div>
            </div>
        </footer>
    )
}