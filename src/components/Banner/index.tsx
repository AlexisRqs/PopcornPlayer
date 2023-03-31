import './Banner.css';
import Logo from '../../assets/logo_PopCorn.svg';
import SearchBar from "../SearchBar";

export default function Banner() {
    return (
        <>
            <section className="Banner">
                <img src={Logo} alt='logo'/>
                <div>
                    <SearchBar/>
                </div>

            </section>
        </>
    )
}
