
import logo from './logo.jpg';


function  Header(){
    return(
<div class="container-fluid">
   <nav class="navbar navbar-light bg-light">
          <span class="navbar-header"><img src={logo} alt='logo.jpg'/>Know India</span>
          <ul class="nav justify-content-end">
            <li class="nav-item ">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/history">History</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/india">My India My Pride</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/culture"> Culture</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contact">Contact us</a>
            </li>
          </ul>
      </nav>
      </div>

    );
}

export default Header;