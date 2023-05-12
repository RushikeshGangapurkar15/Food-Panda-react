import { CDN_URL } from "../common/const";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, deliveryTime, avgRating } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="img"
        src={CDN_URL + resData.data.cloudinaryImageId}
      />

      <div className="res-text">
        <h3>{name}</h3>

        <p>{cuisines.join(", ")} </p>
        {/* <p>{resData.data.address} </p> */}
        <p>Time : {deliveryTime} mins</p>
        <p></p>
        <p>
          <b>Price : {costForTwo / 100} ₹ For two</b>
        </p>
        <div className="rating">
          <p className="rating-count">⭐ {avgRating}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
