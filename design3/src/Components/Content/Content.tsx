import'./Content.scss'
const Content = () => {
  return (
    <div className="Content">
      <div className="Content__Text">
        <div className="Content__Text__head">
          Listen to your Favourite music anytime, anywhere
        </div>
        <div className="Content__Text__description">
          Listen to more than 800 million music from top artists. I Unrealesed
          tracks which are best and will boom when it will release .
        </div>
        <div className="Content__Text__Download">
          Download app <i className="fa-solid fa-download"></i>
        </div>
      </div>
      <div className="Content__images">
        <img
          className="img1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUVrkO7NyVp8u1gbHx6A6UEzeBjQ3G5iSig&usqp=CAU"
          alt=""
        />
        <img
          className="img2"
          src="https://img.freepik.com/free-photo/medium-shot-smiley-man-wearing-headphones_23-2149480753.jpg"
          alt=""
        />
        <img
          className="img3"
          src="https://media.istockphoto.com/id/1361916857/photo/full-length-body-size-view-of-attractive-cheerful-carefree-woman-dancing-isolated-on-bright.jpg?s=170667a&w=0&k=20&c=2kYxjSKPrjYl03l8ww3wG5I4AfrnuhwR5qX2C4VYY5w="
          alt=""
        />
        <img
          className="img4"
          src="https://c.saavncdn.com/editorial/NowTrending_20220914084524.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Content