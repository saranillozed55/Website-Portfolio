
function Header() {

    return(
        <header>
            <h1>My Website</h1>
            {/* nav: navigation*/}

            <nav>

                {/* ul: Unorder List*/}
                <ul>
                    {/* li: list items and a href: hyperlinks*/}
                    <li><a href ="#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Services</a></li>
                    <li><a href ="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header