import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/styles.css'; // Import CSS file for styling
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

const HeroSection = () => {
  const [postersData, setPostersData] = useState([]);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Reference to the Firebase database collection
    const db = getFirestore(app);
    const advertisementCollection = collection(db, 'students');

    // Fetch posters from Firebase Firestore
    const fetchPosters = async () => {
      try {
        const snapshot = await getDocs(advertisementCollection);
        const posters = snapshot.docs.map((doc) => doc.data().imageURL);
        setPostersData(posters);
        console.log('Images fetched from Firebase:', posters);
      } catch (error) {
        console.error('Error fetching posters:', error);
      }
    };

    fetchPosters();
  }, []);

  return (
    <div className="hero">
      {/* Carousel for background images */}
      <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={true}>
        {postersData.map((poster, index) => (
          <div key={index}>
            <img key={index} src={poster} alt={`Background${index + 1}`} />
          </div>
        ))}
      </Carousel>

      {/* Foreground content 
      <div className="hero__content">
        <h1 className="hero__title">Your Title Here</h1>
        <p className="hero__subtitle">Your Subtitle Here</p>
      </div> */}
    </div>
  );
};

export default HeroSection;
