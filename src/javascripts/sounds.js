import { soundManager } from 'soundmanager2';
import dailyDoubleSound from '../sounds/dailydouble.mp3';
import buzzerSound from '../sounds/buzzer.mp3';
import waitingSound from '../sounds/waiting-8bit.mp3';
import wrongSound from '../sounds/wrong.mp3';
import rightSound from '../sounds/right.mp3';

soundManager.setup({
  preferFlash: false,
  onready() {
    soundManager.createSound({
      id: 'dailydouble',
      url: dailyDoubleSound,
      volume: 60,
      multiShot: false,
    });

    soundManager.createSound({
      id: 'buzzer',
      url: buzzerSound,
      volume: 80,
      multiShot: false,
    });

    soundManager.createSound({
      id: 'waiting',
      url: waitingSound,
      volume: 10,
      multiShot: false,
    });

    soundManager.createSound({
      id: 'wrong',
      url: wrongSound,
      volume: 35,
      multiShot: false,
    });

    soundManager.createSound({
      id: 'right',
      url: rightSound,
      volume: 80,
      multiShot: false,
    });
  },
});

export default soundManager;
