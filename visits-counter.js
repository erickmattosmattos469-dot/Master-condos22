(function () {
  'use strict';

  // Add visits counter to the page at the very top
  function addVisitsCounter() {
    // Create a MutationObserver to wait for the React app to load
    var observer = new MutationObserver(function () {
      // Look for the main container
      var rootElement = document.getElementById('root');
      
      if (rootElement && rootElement.firstChild && !document.getElementById('visits-counter-simple')) {
        // Create the visits counter container - fixed at top center
        var counterContainer = document.createElement('div');
        counterContainer.id = 'visits-counter-simple';
        counterContainer.style.cssText = [
          'position: fixed',
          'top: 16px',
          'left: 50%',
          'transform: translateX(-50%)',
          'display: flex',
          'flex-direction: column',
          'align-items: center',
          'gap: 4px',
          'z-index: 50',
          'font-family: Inter, sans-serif',
          'pointer-events: none',
        ].join(';');

        // Create the counter number
        var counterNumber = document.createElement('div');
        counterNumber.style.cssText = [
          'font-size: 28px',
          'font-weight: 900',
          'color: #dc2626',
          'letter-spacing: -0.03em',
          'line-height: 1',
        ].join(';');
        counterNumber.textContent = '1K+';

        // Create the counter label
        var counterLabel = document.createElement('div');
        counterLabel.style.cssText = [
          'font-size: 11px',
          'font-weight: 600',
          'color: rgba(107, 114, 128, 0.9)',
          'text-transform: uppercase',
          'letter-spacing: 0.05em',
          'line-height: 1',
        ].join(';');
        counterLabel.textContent = 'Total Visits';

        // Append elements
        counterContainer.appendChild(counterNumber);
        counterContainer.appendChild(counterLabel);

        // Insert at the beginning of the body
        document.body.insertBefore(counterContainer, document.body.firstChild);

        // Stop observing once we've added the counter
        observer.disconnect();
      }
    });

    // Start observing
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addVisitsCounter);
  } else {
    addVisitsCounter();
  }
})();
