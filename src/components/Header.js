const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
            <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                 height="60"
                 alt="MDB Logo"
                 loading="lazy" />
                 <p>Hello Wellcome to my Ai Picture Engine</p>
        </a>
        
      
        
      </div>

    </nav>
    <form className="searchBar">
      <div className="input-group" style={{ width: '800px', margin:"auto" }}>
      <input type="search" className="form-control rounded" placeholder="Search Something" aria-label="Search" aria-describedby="search-addon" />
       <button type="button" className="btn btn-outline-primary">search search search</button>
     </div>

      </form>
    </div>
  )
}

export default Header