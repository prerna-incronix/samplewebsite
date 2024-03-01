import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/styles.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

const HeroSection = () => {
  const [postersData, setPostersData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero">
      {/* Carousel for background images */}
      <Carousel
        autoPlay
        infiniteLoop
        showArrows
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
        onChange={handleSlideChange}
        selectedItem={currentSlide}
      >
        {postersData.map((poster, index) => (
          <div key={index}>
            <img src={poster} alt={`Background${index + 1}`} />
          </div>
        ))}
      </Carousel>
      {/* Styling for the overlay */}
      {/* <div className="overlay"></div> */}
      {/* Styling for the arrow controls */}
      {/* <div className="arrow-controls">
        <button className="control-arrow control-prev" onClick={() => setCurrentSlide(currentSlide - 1)} />
        <button className="control-arrow control-next" onClick={() => setCurrentSlide(currentSlide + 1)} />
      </div> */}
    </div>
  );
};

export default HeroSection;
