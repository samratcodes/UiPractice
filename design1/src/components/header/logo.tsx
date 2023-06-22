import './Logo.scss'

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="https://i.pinimg.com/originals/d1/cb/b3/d1cbb399c90abc93f8b1acb33e327416.png"
        alt="logo"
      />
      <div className='logo__text'>Evento</div>
    </div>
  );
}

export default Logo