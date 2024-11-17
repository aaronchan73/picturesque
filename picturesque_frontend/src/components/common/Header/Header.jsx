import { useNavigate } from 'react-router';
import Logo from '../../../assets/logo.png';

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="text-black py-3 mb-4">
      <div className="container m-2">
        <div className="row align-items-center">
          <div className="col">
            <div className="d-flex flex-column align-items-start" style={{ width: "fit-content" }}>
              <div className="d-flex justify-content-center" style={{ width: "100%" }}>
                <img
                  src={Logo}
                  alt="Picturesque Logo"
                  className="mb-2"
                  style={{
                    width: "40px",
                    height: "auto",
                  }}
                />
              </div>
              <h3 style={{ fontSize: "16pt", fontFamily: "'Nanum Myeongjo', serif" }}>
                Picturesque
              </h3>
            </div>
          </div>
          <div className="col-auto">
            <nav>
              <ul className="nav">
                <li className="nav-item px-5">
                  <a href="/" className="nav-link text-black">
                    Library
                  </a>
                </li>
                <li>
                  <button
                    className="btn btn-outline-dark rounded"
                    style={{
                      border: "3px solid #187D81",
                      color: "black",
                    }}
                    onClick={() => navigate('upload')}
                  >
                    {" "}
                    + Create new
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
