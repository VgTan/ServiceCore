import React, { useState } from 'react';
import { FaBookmark, FaRegBookmark, FaStar, FaFireAlt , FaHandshake, FaMapMarker} from 'react-icons/fa';
import './wc.css';
import { useNavigate, Link } from 'react-router-dom';

export function Products(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div key={props.id} className='productCard'>
        <Link to={`/ac/${props.id}`} className="productLink">
        <FaHandshake className={"productCard__cart"} />
        </Link>
        <FaRegBookmark className={"productCard__wishlist"} />

        {isBookmarked ? (
          <FaBookmark className={"productCard__wishlistClicked"} onClick={handleBookmarkClick} />
        ) : (
          <FaRegBookmark className={"productCard__wishlist"} onClick={handleBookmarkClick} />
        )}

        <FaFireAlt className={"productCard__fastSelling"} />
        <Link to={`/ac/${props.id}`} className="productLink">
        <div className="productImageWrapper">
          <img src={props.image} alt='product-img' className='productImage'></img>
        </div>
        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack__1'>
            <div className='productPrice'>Rp{props.price}</div>
            <div className='productSales'>{props.totalSales} kali di sewa</div>
          </div>
          <div className='displayStack__2'>
            <div className='productRating'>
              {[...Array(props.rating)].map((index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
            <h3 className='productName'>{props.productType}</h3>
            <div className='productTime'>{props.timeLeft}</div>
          </div>
          <div className='displayStack__3'>      
            
            <h3 className='productLocation'> <FaMapMarker className='productCard__location'/> {props.kota}</h3>
          </div>
        </div>
        </Link>
      </div>
  );
}