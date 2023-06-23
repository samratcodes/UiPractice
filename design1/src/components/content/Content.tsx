import'./Content.scss'
const Content = () => {
  return (
    <div className="content">
      <div className="content__part">
        <div className="text">
          SANDIEGO <br />
          DESIGN <br />
          WEEK
        </div>
        <div className="circle">
          <div className="red-circle">
            <div className="triangle"></div>
          </div>
        </div>
        <div className="content__part__left">
          <div className="date">12 Aug  2021</div>
          <div className="address">3968 CARSON STREET,SAN DIEGO,CA92101 </div>
          <div className='buy'>
            Buy Tickets 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content