export default function Header(){
	return(
	<header className="header">
    <nav className="nav">
      <h2 className="nav__title">Movier</h2>
      <form className="search-form">
        <div className="search-container">
          <input type="search" className="search-input" placeholder="Search...  hit enter" name="movieSearch" />
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" /></svg>
        </div>
      </form>
      <ul className="menu">
        <li className="menu__item menu__item--active"><a href="#!" className="menu__link">item 1</a></li>
        <li className="menu__item"><a href="#!" className="menu__link">item 2</a></li>
        <li className="menu__item"><a href="#!" className="menu__link">item 3</a></li>
      </ul>
      <button className="menu__button">
        <svg className="icon icon__menu icon__menu--active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" /></svg>
        <svg className="icon icon__menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" /></svg>
      </button>
    </nav>
  </header>
	);
}