import React from 'react';
import { useParams } from 'react-router-dom';
import Details from './person/infoDataScience';
import './personDetail.css';
import { FaIdCardAlt, FaCheckSquare, FaCogs, FaEnvelope, FaPhone, FaBookmark, FaRegBookmark, FaStar, FaFireAlt, FaHandshake, FaMapMarker } from 'react-icons/fa';
import Ingfo from './ingfo';
import Heading from '../Header';
import Footer from '../Footer';

export function PersonDetailsSci(props) {
  const { id } = useParams();

  // Use the 'id' and 'name' values as needed in your component

  console.log(Details); // Log Details to the console to inspect its structure

  const personDetails = Details.find((detail) => detail.id == id);

  const handlePhoneClick = () => {
    window.location.href = 'https://wa.me/628117454648';
  };

  return (
    <>
      <div className='containerDetail'>
        <div className='cardDetail'>
          <div className='cardDetail-head'>
            <img src={personDetails.image} />
            <div className='cardDetail-headInfo'>
              {personDetails ? (
                <h2>{personDetails.name}</h2>
              ) : (
                <h2>Person not found</h2>
              )}
              <div className='cardDetail-rating'>
                {[...Array(personDetails.rating)].map((index) => (
                  <FaStar id={index + 1} key={index} />
                ))}
                <p className='cardDetail-ratingNum'> {personDetails.rating}</p>
                <p className='cardDetail-ratingSales'> ( {personDetails.totalSales} ) </p>
              </div>
            </div>
            <FaFireAlt className='cardDetail-fire' />
          </div>
          <div className='cardDetail-body'>
            <div className='cardDetail-bodyContact'>
              <div className='cardDetail-number'>
                <a href='https://wa.me/628117454648' onClick={handlePhoneClick}>
                  <FaPhone className='cardDetail-logoPhone' />
                </a>
                <p>{personDetails.number}</p>
              </div>
              <div className='cardDetail-email'>
                <FaEnvelope className='cardDetail-logoEmail' />
                <p>{personDetails.email}</p>
              </div>
              <div className='cardDetail-location'>
                <FaMapMarker className='cardDetail-logoLocation' />
                <p>{personDetails.location}</p>
              </div>
            </div>
            <div className='cardDetail-bodySkills'>
              <FaCogs className='cardDetail-logoSkillTitle' />
              <h1 className='cardDetail-logoSkillTitleText'> Skills </h1>
            </div>
            <br />
            <div className='cardDetail-bodySkillList'>
              <div className='cardDetail-bodySkillComp'>
                <FaCheckSquare className='cardDetail-bodySkillComp' />
                <p>{personDetails.skill1}</p>
              </div>
              <div className='cardDetail-bodySkillComp'>
                <FaCheckSquare className='cardDetail-bodySkillComp' />
                <p>{personDetails.skill2}</p>
              </div>
              <div className='cardDetail-bodySkillComp'>
                <FaCheckSquare className='cardDetail-bodySkillComp' />
                <p>{personDetails.skill3}</p>
              </div>
            </div>
            <br />
            <div className='cardDetail-bodyStatement'>
              <div className='cardDetail-bodyStatementTitle'>
                <FaIdCardAlt className='cardDetail-logoStatement' />
                <h2>About Me</h2>
              </div>
              <br />
              <p>Halo! Nama saya {personDetails.name}, Saya telah bekerja selama 5 tahun dalam bidang Edukasi, saya adalah ahli dalam mengajar dan kursus!</p>
              <p>Saya akan menjamin kualitas pengajaran dan pembelajaran anda ataupun anak anda!</p>
            </div>
          </div>
        </div>
        <Ingfo
          price={personDetails.price}
          pricePremium={personDetails.pricePremium}
        />
      </div>
    </>
  );
}