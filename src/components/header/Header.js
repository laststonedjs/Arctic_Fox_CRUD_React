import "./Header.css";
// assets
import logo from "../../assets/images/logo0.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <img
          src={logo}
          alt="logo"
          class="img-fluid rounded-start"
          style={{ width: "20%", height: "15%", borderRadius: "70%", display: "flex", justifyContent: "flex-start" }}
        />
      </div>
      <div style={{ marginRight: "2%", marginTop: "1.5%" }}>
        <p class="company-name">Arctic Foxes</p>
      </div>
    </div>
  );
};

export default Header;