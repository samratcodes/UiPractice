import'./First.scss';

const First = () => {
  return (
    <div className="First">
      <div className="First__text">
        <div className="First__text__top">BAG.KIDS</div>
        <div className="First__text__bold">BLACK FRIDAY</div>
        <div className="First__text__lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Ratione obcaecati veniam voluptatibus aper.
        </div>
        <div className="First__text__shopnow">SHOP NOW</div>
      </div>
      <div className="First__sale">
        <div className="First__sale__inside">
          SALE <br />
          50%
        </div>
      </div>
    </div>
  );
}

export default First