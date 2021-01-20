// import {useState} from 'react';
// import './Card.css';

// function Card({color , translateX}) {
//     const [flag, setFlag] = useState(false);

//     const onMouseOver = () => setFlag(true);
//     const onMouseOut = () => setFlag(false);

//     return (
//         <div className="card-items" 
//             style={{
//                 backgroundColor:color, transform: "translate3d(" + translateX + "px, 100px, 0px)",
//                 zIndex: flag ? 100 : 0,
//                 scale: flag ? 1.2: 1
//             }}
//             onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
//         </div>
//     );
    
//   }
  
//   export default Card;

// const CardList = () => {
//     const colors = ["red", "yellow", "green", "blue"];
//     var translateX = 0;
//     const cards = colors.map((value) => {
//         translateX += 100;
//         return <Card translateX={translateX} color={value} />
//   });

//     return (
//         <div className="App">
//             {cards}
//         </div>
//     // <div>
//     //   <header>{card.title}</header>
//     //   <span>{card.description}</span>
//     // </div>
//   );
// };

// function usePostCards() {
//   const { cards }= useStoreState(state => ({
//     cards: state.post.cards.data
//   }));
//   return { cards };
// };

// export default usePostCards;


// // function App() {
// //   const colors = ["red", "yellow", "green", "blue"];
// //   var translateX = 0;
// //   const cards = colors.map((value) => {
// //     translateX += 100;
// //     return <Card translateX={translateX} color={value} />
// //   });

// //   return (
// //     <div className="App">
// //       {cards}
// //     </div>
// //   );
// // }