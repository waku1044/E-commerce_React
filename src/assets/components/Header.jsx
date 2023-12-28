import Logo from '../img/Logo.svg'




const Header = () => {

    return (
        <header className="text-center">
            <img src={Logo} className="logo w-50" alt="Logo" />
            
        </header>
    )
}

export default Header;