import React, { useState, useEffect } from 'react';
import { Products } from './pekerja';
import contents from './person/dataInfoSM';

export default function App() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=9');
        const data = await response.json();

        const shuffledContents = contents.sort(() => Math.random() - 0.5); // Shuffle the contents array randomly

        const userDataWithPrice = data.results.map((user, index) => {
          const content = shuffledContents[index];
          return {
            ...user,
            image: content.image,
            nama: content.name,
            location: content.location,
            kota: content.kota,
            id: content.id,
            price: content.price,
            totalSales: content.totalSales,
            productType: content.productType,
            rating: content.rating,
          };
        });

        setUserData(userDataWithPrice);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="App">
      {error && <p>Error: {error}</p>}
      {userData.map((user) => (
        <Products
          id={user.id}
          key={user.login.uuid}
          image={user.image}
          name={`${user.nama}`}
          email={user.email}
          phone={user.phone}
          location={`${user.location.city}, ${user.location.country}`}
          price={user.price}
          totalSales={user.totalSales}
          timeLeft={`${user.productType}`}
          kota={`${user.location}`}
          rating={user.rating}
        />
      ))}
    </div>
  );
}