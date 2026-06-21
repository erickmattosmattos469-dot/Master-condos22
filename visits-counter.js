(function () {
  'use strict';

  // Add visits counter to the page
  function addVisitsCounter() {
    // Create a MutationObserver to wait for the React app to load
    var observer = new MutationObserver(function () {
      // Look for the main hero section
      var heroSection = document.querySelector('[class*="text-5xl"], h1');
      
      if (heroSection && heroSection.parentElement && !document.getElementById('visits-counter-container')) {
        // Create the visits counter container
        var counterContainer = document.createElement('div');
        counterContainer.id = 'visits-counter-container';
        counterContainer.style.cssText = [
          'display: flex',
          'flex-direction: column',
          'align-items: center',
          'gap: 8px',
          'padding: 24px',
          'border-radius: 12px',
          'border: 1px solid rgba(220, 38, 38, 0.2)',
          'background: rgba(220, 38, 38, 0.05)',
          'margin-top: 32px',
          'margin-bottom: 32px',
        ].join(';');

        // Create the counter number
        var counterNumber = document.createElement('div');
        counterNumber.style.cssText = [
          'font-size: 32px',
          'font-weight: 900',
          'color: #dc2626',
          'letter-spacing: -0.03em',
        ].join(';');
        counterNumber.textContent = '1K+';

        // Create the counter label
        var counterLabel = document.createElement('div');
        counterLabel.style.cssText = [
          'font-size: 12px',
          'font-weight: 600',
          'color: rgba(107, 114, 128, 0.8)',
          'text-transform: uppercase',
          'letter-spacing: 0.05em',
        ].join(';');
        counterLabel.textContent = 'Total Visits';

        // Create the counter bar
        var counterBar = document.createElement('div');
        counterBar.style.cssText = [
          'width: 48px',
          'height: 4px',
          'border-radius: 9999px',
          'background: linear-gradient(90deg, #dc2626 0%, #ef4444 100%)',
          'margin-top: 8px',
        ].join(';');

        // Append elements
        counterContainer.appendChild(counterNumber);
        counterContainer.appendChild(counterLabel);
        counterContainer.appendChild(counterBar);

        // Insert after the hero section
        if (heroSection.parentElement.parentElement) {
          heroSection.parentElement.parentElement.appendChild(counterContainer);
        } else {
          document.body.appendChild(counterContainer);
        }

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
