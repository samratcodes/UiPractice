import './contact.scss'
const Contact = () => {
  return (
    <div className="Contact">
      <div className="left">
        <div className="Email">
          <i className="fa-solid fa-envelope"></i>hello.colorlib.@gmail.com
        </div>

        <div className="Number">
          <i className="fa-solid fa-phone"></i>+6511.88.888
        </div>
      </div>
      <div className="right">
        <div className="Socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>

        <div className="Country">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="usa"
          />{" "}
          <select name="Language" id="Language">
            <option value="English">English</option>
            <option value="Nepali">Nepali</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <div className="login">
          <i className="fa-solid fa-user"></i>
          Login
        </div>
      </div>
    </div>
  );
}

export default Contact