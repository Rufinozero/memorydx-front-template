// import { useEffect, useState } from 'react';
// import { Card } from '../../components/Card';
// import { cards } from '../../cards';

import { container, cardsContainer } from './styles.module.scss'; 
import { Header } from '../../components/Header';
// import { Footer } from '../../components/Footer';
// import { GameFinishModal } from '../../components/GameFinishModal';

export function Game() {

  // function closeModal() {
  //   setIsOpen(false);
  //   window.location.reload();
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  function checkIfTheGameIsFinished() {
   // Type your code here
  }

  // useEffect(() => {
  //   checkIfTheGameIsFinished();
  // });

  function memorizeCards(card) {
    // Type your code here
  }

  function handleFlipCard(card) {
    // Type your code here
  }

  function verifyIfIsFlipped(cardId) {
    // Type your code here
  }

  function verifyIfIsMemorized(cardId) {
    // Type your code here
  }

  return (
    <>
      {/* <GameFinishModal isOpen={false} closeModal={() => {}}/> */}
      <div className={container}>
        <Header/>
        <h1 style={{ color: '#fff', width: '100%'}}>Welcome to the second part of the workshop \0/</h1>
        <div className={cardsContainer}>

        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

