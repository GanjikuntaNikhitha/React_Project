import { IMG_CDN_URL } from '../config';
const imgCdn = IMG_CDN_URL;

export const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating, lastMileTravelString }) => {
    return (
        <div className="restaCard">
            <img src={imgCdn +
                cloudinaryImageId} />
            <div className="card-title">{name}</div>
            <div className="card-text">{cuisines.join(", ")}</div>
            <div className="params">
                <span className="card-rating">
                    {avgRating}
                </span>
                <span className="card-text">{lastMileTravelString} minutes</span>
            </div>

        </div>
    );
};
