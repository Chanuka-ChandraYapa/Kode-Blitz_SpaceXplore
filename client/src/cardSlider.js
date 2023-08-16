import React, { useState } from "react";
import "./cardSlider.css";

import NewCard from "./components/Aluthcardeka/new_card";

const CardSlider = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const cardData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611246981370-93febc04e6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Here is the title",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Here is the title ldjfhslkhfl",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?cs=srgb&dl=pexels-marx-ilagan-616376.jpg&fm=jpg",
      title: "Here is the title ldjfhslkhfl",
    },
    {
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/220/373/87/model-women-pornstar-actress-wallpaper-preview.jpg",
      title: "If you know, you know",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-girl-with-cute-face_144627-11578.jpg?w=2000",
      title: "lorem ipsum",
    },
    {
      imageUrl:
        "https://s2.best-wallpaper.net/wallpaper/iphone/1601/Little-Caprice-02_iphone_640x960.jpg",
      title: "lorem ipsum kachata thapa",
    },
    // Add more card data objects here
  ];

  const handlePrevClick = () => {
    // setCardIndex(Math.max(cardIndex - 1, 0));
    const prevIndex = (cardIndex - 1 + cardData.length) % cardData.length;
    setCardIndex(prevIndex);
  };

  const handleNextClick = () => {
    // setCardIndex(Math.min(cardIndex + 1, cardData.length - 1));
    const nextIndex = (cardIndex + 1) % cardData.length;
    setCardIndex(nextIndex);
  };

  return (
    <div className="card-slider-container">
      <div className="card-slider">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${index === cardIndex ? "active" : ""}`}
            style={{ "--card-index": cardIndex }}
          >
            <NewCard
              imageUrl={card.imageUrl}
              title={card.title}
              index={index}
            />
          </div>
        ))}
      </div>
      <button id="prevBtn" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button id="nextBtn" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default CardSlider;


// import React from "react";
// import {
//   useSwipeable,
//   SwipeableList,
//   SwipeableListItem,
// } from "react-swipeable-views";
// import "./cardSlider.css";



// import New_card from "./components/Aluthcardeka/new_card";

// const CardSlider = () => {
//   const cardData = [
//     {
//       imageUrl:
//         "https://images.unsplash.com/photo-1611246981370-93febc04e6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww&w=1000&q=80",
//       title: "Here is the title",
//     },
//     {
//       imageUrl:
//         "https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//       title: "Here is the title ldjfhslkhfl",
//     },
//     {
//       imageUrl:
//         "https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?cs=srgb&dl=pexels-marx-ilagan-616376.jpg&fm=jpg",
//       title: "Here is the title ldjfhslkhfl",
//     },
//   ];

//   const handlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe("left"),
//     onSwipedRight: () => handleSwipe("right"),
//   });

//   return (
//     <SwipeableList>
//       {cardData.map((card, index) => (
//         <SwipeableListItem key={index} {...handlers}>
//           <div className="card">
//             <New_card imageUrl={card.imageUrl} title={card.title} />
//           </div>
//         </SwipeableListItem>
//       ))}
//     </SwipeableList>
//   );
// };

// export default CardSlider;
