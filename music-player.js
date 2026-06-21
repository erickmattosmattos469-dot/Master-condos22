(function () {
  'use strict';

  function addMusicPlayer() {
    // Create audio element
    var audio = document.createElement('audio');
    audio.id = 'ambient-music';
    audio.src = '/ambient-music.mp3';
    audio.loop = true;
    audio.volume = 0.15; // Low volume (15%)
    document.body.appendChild(audio);

    // Create music player button
    var playerContainer = document.createElement('div');
    playerContainer.id = 'music-player-container';
    playerContainer.style.cssText = [
      'position: fixed',
      'bottom: 24px',
      'left: 24px',
      'z-index: 50',
      'display: flex',
      'align-items: center',
      'gap: 12px',
      'background: rgba(220, 38, 38, 0.1)',
      'border: 1px solid rgba(239, 68, 68, 0.3)',
      'border-radius: 12px',
      'padding: 12px 16px',
      'backdrop-filter: blur(12px)',
      'font-family: Inter, sans-serif',
      'cursor: pointer',
      'transition: all 0.3s ease',
    ].join(';');

    // Create button
    var button = document.createElement('button');
    button.id = 'music-toggle-btn';
    button.style.cssText = [
      'background: none',
      'border: none',
      'color: #ef4444',
      'font-size: 18px',
      'cursor: pointer',
      'padding: 0',
      'width: 24px',
      'height: 24px',
      'display: flex',
      'align-items: center',
      'justify-content: center',
      'transition: all 0.2s ease',
    ].join(';');
    button.innerHTML = '🔊';
    button.title = 'Toggle Music';

    // Create label
    var label = document.createElement('span');
    label.style.cssText = [
      'color: #ef4444',
      'font-size: 12px',
      'font-weight: 600',
      'text-transform: uppercase',
      'letter-spacing: 0.05em',
      'white-space: nowrap',
    ].join(';');
    label.textContent = 'Music';

    // Add hover effect
    playerContainer.addEventListener('mouseenter', function () {
      this.style.background = 'rgba(220, 38, 38, 0.15)';
      this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
    });

    playerContainer.addEventListener('mouseleave', function () {
      this.style.background = 'rgba(220, 38, 38, 0.1)';
      this.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    });

    // Toggle music on click
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      if (audio.paused) {
        audio.play();
        button.innerHTML = '🔊';
        localStorage.setItem('music-playing', 'true');
      } else {
        audio.pause();
        button.innerHTML = '🔇';
        localStorage.setItem('music-playing', 'false');
      }
    });

    playerContainer.addEventListener('click', function () {
      button.click();
    });

    // Append elements
    playerContainer.appendChild(button);
    playerContainer.appendChild(label);
    document.body.appendChild(playerContainer);

    // Try to autoplay (may be blocked by browser)
    var shouldPlay = localStorage.getItem('music-playing') !== 'false';
    if (shouldPlay) {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(function () {
          // Autoplay was prevented, user needs to click
          button.innerHTML = '🔇';
          localStorage.setItem('music-playing', 'false');
        });
      }
    } else {
      button.innerHTML = '🔇';
    }

    // Handle visibility change (pause when tab is hidden)
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        audio.pause();
      } else if (localStorage.getItem('music-playing') !== 'false') {
        audio.play();
      }
    });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addMusicPlayer);
  } else {
    addMusicPlayer();
  }
})();
