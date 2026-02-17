import icon from '../resources/icon.svg';

function Header() {
  return (
    <header className="header">
        <div className="header-content">
            <img src={icon} className='icon'/>
            <h1>愛ChatBotte</h1> 
        </div>
      
    </header>
  );
}

export default Header;