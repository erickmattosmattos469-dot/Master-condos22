(function () {
  'use strict';

  // List of Portuguese names
  const names = [
    'João Silva', 'Maria Santos', 'Carlos Oliveira', 'Ana Costa', 'Pedro Martins',
    'Sofia Ferreira', 'Miguel Alves', 'Laura Gomes', 'Ricardo Dias', 'Inês Rocha',
    'Bruno Costa', 'Marta Pereira', 'André Sousa', 'Joana Martins', 'Nuno Ferreira',
    'Raquel Santos', 'Tiago Oliveira', 'Filipa Gomes', 'Gonçalo Dias', 'Catarina Rocha',
    'Vitor Alves', 'Cláudia Pereira', 'Rui Sousa', 'Daniela Martins', 'Paulo Ferreira',
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Como funciona o sistema de verificação?',
      answer: 'O sistema verifica automaticamente sua conta Roblox e gera um token único para acesso aos condos. É rápido e seguro!'
    },
    {
      question: 'Os links dos jogos são seguros?',
      answer: 'Sim! Todos os links são verificados e diretos para os servidores privados oficiais. Sem riscos de malware.'
    },
    {
      question: 'Quanto tempo leva para verificar?',
      answer: 'A verificação é instantânea! Basta clicar em "Play Now" e seu token será gerado em segundos.'
    },
    {
      question: 'Preciso de algum software especial?',
      answer: 'Não! Tudo funciona direto no navegador. Sem downloads ou instalações necessárias.'
    },
    {
      question: 'Posso usar em múltiplas contas?',
      answer: 'Sim! Cada verificação gera um token único. Você pode verificar quantas contas quiser.'
    },
  ];

  // Generate random name
  function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }

  // Generate time ago string
  function getTimeAgo() {
    const times = ['há 1 minuto', 'há 2 minutos', 'há 3 minutos', 'há 4 minutos', 'há 5 minutos'];
    return times[Math.floor(Math.random() * times.length)];
  }

  function createOnlineSection() {
    var section = document.createElement('section');
    section.id = 'online-section';
    section.style.cssText = [
      'margin-top: 40px',
      'margin-bottom: 60px',
      'padding: 40px 24px',
      'background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
      'border-top: 1px solid rgba(239, 68, 68, 0.1)',
      'border-bottom: 1px solid rgba(239, 68, 68, 0.1)',
    ].join(';');

    // Container
    var container = document.createElement('div');
    container.style.cssText = [
      'max-width: 1200px',
      'margin: 0 auto',
      'text-align: center',
    ].join(';');

    // Online title
    var onlineTitle = document.createElement('h3');
    onlineTitle.style.cssText = [
      'font-size: 14px',
      'font-weight: 600',
      'color: rgba(156, 163, 175, 0.8)',
      'text-transform: uppercase',
      'letter-spacing: 0.05em',
      'margin-bottom: 16px',
    ].join(';');
    onlineTitle.textContent = 'Pessoas Online Agora';

    // Online count
    var onlineCount = document.createElement('div');
    onlineCount.style.cssText = [
      'font-size: 48px',
      'font-weight: 900',
      'color: #ef4444',
      'margin-bottom: 8px',
      'letter-spacing: -0.03em',
    ].join(';');
    onlineCount.textContent = '250+';

    // Online subtitle
    var onlineSubtitle = document.createElement('p');
    onlineSubtitle.style.cssText = [
      'font-size: 13px',
      'color: rgba(156, 163, 175, 0.7)',
    ].join(';');
    onlineSubtitle.textContent = 'utilizadores activos neste momento';

    container.appendChild(onlineTitle);
    container.appendChild(onlineCount);
    container.appendChild(onlineSubtitle);
    section.appendChild(container);

    return section;
  }

  function createFAQSection() {
    var section = document.createElement('section');
    section.id = 'faq-section';
    section.style.cssText = [
      'margin-top: 80px',
      'margin-bottom: 80px',
      'padding: 60px 24px',
      'max-width: 800px',
      'margin-left: auto',
      'margin-right: auto',
    ].join(';');

    // Title
    var title = document.createElement('h2');
    title.style.cssText = [
      'font-size: 32px',
      'font-weight: 900',
      'color: #f5f5f5',
      'margin-bottom: 48px',
      'text-align: center',
      'letter-spacing: -0.03em',
    ].join(';');
    title.textContent = 'Perguntas Frequentes';

    section.appendChild(title);

    // FAQ items
    faqs.forEach(function (faq, index) {
      var item = document.createElement('div');
      item.style.cssText = [
        'margin-bottom: 24px',
        'padding: 20px',
        'background: rgba(20, 5, 10, 0.4)',
        'border: 1px solid rgba(239, 68, 68, 0.2)',
        'border-radius: 8px',
        'cursor: pointer',
        'transition: all 0.3s ease',
      ].join(';');

      // Question
      var question = document.createElement('h3');
      question.style.cssText = [
        'font-size: 15px',
        'font-weight: 700',
        'color: #ef4444',
        'margin-bottom: 12px',
        'display: flex',
        'align-items: center',
        'gap: 12px',
      ].join(';');
      question.innerHTML = '<span style="font-size: 18px;">❓</span> ' + faq.question;

      // Answer
      var answer = document.createElement('p');
      answer.style.cssText = [
        'font-size: 14px',
        'color: #d1d5db',
        'line-height: 1.6',
        'margin: 0',
      ].join(';');
      answer.textContent = faq.answer;

      item.appendChild(question);
      item.appendChild(answer);

      // Hover effect
      item.addEventListener('mouseenter', function () {
        this.style.background = 'rgba(20, 5, 10, 0.6)';
        this.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      });

      item.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(20, 5, 10, 0.4)';
        this.style.borderColor = 'rgba(239, 68, 68, 0.2)';
      });

      section.appendChild(item);
    });

    return section;
  }

  function createRecentVerificationsSection() {
    var section = document.createElement('section');
    section.id = 'recent-verifications-section';
    section.style.cssText = [
      'margin-top: 80px',
      'margin-bottom: 80px',
      'padding: 60px 24px',
    ].join(';');

    // Container
    var container = document.createElement('div');
    container.style.cssText = [
      'max-width: 800px',
      'margin: 0 auto',
    ].join(';');

    // Title
    var recentTitle = document.createElement('h3');
    recentTitle.style.cssText = [
      'font-size: 14px',
      'font-weight: 600',
      'color: rgba(156, 163, 175, 0.8)',
      'text-transform: uppercase',
      'letter-spacing: 0.05em',
      'margin-bottom: 24px',
      'text-align: center',
    ].join(';');
    recentTitle.textContent = 'Últimas Verificações';

    container.appendChild(recentTitle);

    // Create verification items container
    var itemsContainer = document.createElement('div');
    itemsContainer.id = 'verifications-items';
    itemsContainer.style.cssText = [
      'display: flex',
      'flex-direction: column',
      'gap: 12px',
    ].join(';');

    container.appendChild(itemsContainer);
    section.appendChild(container);

    // Function to update verifications
    function updateVerifications() {
      var itemsContainer = document.getElementById('verifications-items');
      if (!itemsContainer) return;

      itemsContainer.innerHTML = '';

      // Create 5 random verifications
      for (var i = 0; i < 5; i++) {
        var item = document.createElement('div');
        item.style.cssText = [
          'display: flex',
          'align-items: center',
          'gap: 12px',
          'padding: 12px',
          'background: rgba(20, 5, 10, 0.3)',
          'border-radius: 6px',
          'border-left: 3px solid #ef4444',
        ].join(';');

        var icon = document.createElement('span');
        icon.style.cssText = [
          'font-size: 16px',
        ].join(';');
        icon.textContent = '✅';

        var info = document.createElement('div');
        info.style.cssText = [
          'flex: 1',
        ].join(';');

        var name = document.createElement('p');
        name.style.cssText = [
          'font-size: 13px',
          'font-weight: 600',
          'color: #e5e7eb',
          'margin: 0',
        ].join(';');
        name.textContent = getRandomName();

        var time = document.createElement('p');
        time.style.cssText = [
          'font-size: 12px',
          'color: rgba(156, 163, 175, 0.7)',
          'margin: 0',
        ].join(';');
        time.textContent = 'verificou ' + getTimeAgo();

        info.appendChild(name);
        info.appendChild(time);
        item.appendChild(icon);
        item.appendChild(info);
        itemsContainer.appendChild(item);
      }
    }

    // Initial update
    updateVerifications();

    // Update every 1 minute (60000 ms)
    setInterval(updateVerifications, 60000);

    return section;
  }

  function injectSections() {
    var mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.appendChild(createOnlineSection());
      mainElement.appendChild(createFAQSection());
      mainElement.appendChild(createRecentVerificationsSection());
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(injectSections, 500);
    });
  } else {
    setTimeout(injectSections, 500);
  }
})();
