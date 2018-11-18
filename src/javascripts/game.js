import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';

// Game content
// PUT IMPORTS HERE


const gameData = {
  id: 'round1',
  title: ' ',
  values: [100, 200, 300, 400, 500],
  bonusCategory: 'Kategorie X',
  categories: {
    // PUT CATEGORIES HERE
  },
};

const $mount = document.getElementById('game');
ReactDOM.render(<Game gameData={gameData} />, $mount);
