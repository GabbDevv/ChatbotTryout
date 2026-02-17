import icon from '../resources/icon.svg';

function Header() {
  return (
    <header className="header">
        <div>
            <img src={icon} className='icon'/>
        </div>
        <div>
           <h1>Header Component</h1> 
        </div>
      
    </header>
  );
}

export default Header;