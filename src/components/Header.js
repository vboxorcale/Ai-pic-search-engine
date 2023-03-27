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
                 <p>Hello</p>
        </a>
        <div class="input-group">
         <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">search</button>
        </div>
        
      </div>
    </nav>
    </div>
  )
}

export default Header