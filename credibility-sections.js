(function () {
  'use strict';

  // Fictional feedback data
  const feedbacks = [
    { name: 'Carlos Silva', rating: 5, text: 'Excelente serviço! Muito rápido e confiável. Recomendo!' },
    { name: 'Ana Santos', rating: 5, text: 'Perfeito! Funcionou na primeira tentativa. Muito bom!' },
    { name: 'João Oliveira', rating: 5, text: 'Melhor site para condos que já usei. 10/10!' },
    { name: 'Maria Costa', rating: 5, text: 'Serviço impecável, atendimento rápido. Voltarei com certeza!' },
    { name: 'Pedro Martins', rating: 5, text: 'Muito profissional e seguro. Recomendo para todos!' },
    { name: 'Sofia Ferreira', rating: 5, text: 'Fantástico! Sem problemas, tudo funcionou perfeitamente.' },
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

  // Fictional recent verifications
  const recentVerifications = [
    { name: 'João Silva', time: 'há 2 minutos' },
    { name: 'Maria Santos', time: 'há 5 minutos' },
    { name: 'Carlos Oliveira', time: 'há 8 minutos' },
    { name: 'Ana Costa', time: 'há 12 minutos' },
    { name: 'Pedro Martins', time: 'há 15 minutos' },
  ];

  function createFeedbacksSection() {
    var section = document.createElement('section');
    section.id = 'feedbacks-section';
    section.style.cssText = [
      'margin-top: 80px',
      'margin-bottom: 80px',
      'padding: 60px 24px',
      'background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
      'border-top: 1px solid rgba(239, 68, 68, 0.1)',
      'border-bottom: 1px solid rgba(239, 68, 68, 0.1)',
    ].join(';');

    // Title
    var title = document.createElement('h2');
    title.style.cssText = [
      'text-align: center',
      'font-size: 32px',
      'font-weight: 900',
      'color: #f5f5f5',
      'margin-bottom: 12px',
      'letter-spacing: -0.03em',
    ].join(';');
    title.textContent = 'O que Dizem os Utilizadores';

    // Subtitle
    var subtitle = document.createElement('p');
    subtitle.style.cssText = [
      'text-align: center',
      'font-size: 14px',
      'color: rgba(156, 163, 175, 0.8)',
      'margin-bottom: 48px',
      'max-width: 600px',
      'margin-left: auto',
      'margin-right: auto',
    ].join(';');
    subtitle.textContent = 'Milhares de utilizadores confiam em nós. Veja o que eles dizem:';

    section.appendChild(title);
    section.appendChild(subtitle);

    // Feedbacks grid
    var grid = document.createElement('div');
    grid.style.cssText = [
      'display: grid',
      'grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))',
      'gap: 24px',
      'max-width: 1200px',
      'margin: 0 auto',
    ].join(';');

    feedbacks.forEach(function (feedback) {
      var card = document.createElement('div');
      card.style.cssText = [
        'background: rgba(20, 5, 10, 0.4)',
        'border: 1px solid rgba(239, 68, 68, 0.2)',
        'border-radius: 12px',
        'padding: 24px',
        'transition: all 0.3s ease',
      ].join(';');

      // Stars
      var stars = document.createElement('div');
      stars.style.cssText = [
        'font-size: 16px',
        'margin-bottom: 12px',
        'color: #fbbf24',
      ].join(';');
      stars.textContent = '⭐'.repeat(feedback.rating);

      // Text
      var text = document.createElement('p');
      text.style.cssText = [
        'font-size: 14px',
        'color: #e5e7eb',
        'margin-bottom: 16px',
        'line-height: 1.6',
      ].join(';');
      text.textContent = '"' + feedback.text + '"';

      // Name
      var name = document.createElement('p');
      name.style.cssText = [
        'font-size: 13px',
        'font-weight: 600',
        'color: #ef4444',
      ].join(';');
      name.textContent = '— ' + feedback.name;

      card.appendChild(stars);
      card.appendChild(text);
      card.appendChild(name);
      grid.appendChild(card);
    });

    section.appendChild(grid);
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
      'background: linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%)',
      'border-top: 1px solid rgba(239, 68, 68, 0.1)',
      'border-bottom: 1px solid rgba(239, 68, 68, 0.1)',
    ].join(';');

    // Container
    var container = document.createElement('div');
    container.style.cssText = [
      'max-width: 1200px',
      'margin: 0 auto',
      'display: grid',
      'grid-template-columns: 1fr 1fr',
      'gap: 60px',
      'align-items: center',
    ].join(';');

    // Left side - Online counter
    var leftSide = document.createElement('div');
    leftSide.style.cssText = [
      'text-align: center',
    ].join(';');

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

    var onlineCount = document.createElement('div');
    onlineCount.style.cssText = [
      'font-size: 48px',
      'font-weight: 900',
      'color: #ef4444',
      'margin-bottom: 8px',
      'letter-spacing: -0.03em',
    ].join(';');
    onlineCount.textContent = '250+';

    var onlineSubtitle = document.createElement('p');
    onlineSubtitle.style.cssText = [
      'font-size: 13px',
      'color: rgba(156, 163, 175, 0.7)',
    ].join(';');
    onlineSubtitle.textContent = 'utilizadores activos neste momento';

    leftSide.appendChild(onlineTitle);
    leftSide.appendChild(onlineCount);
    leftSide.appendChild(onlineSubtitle);

    // Right side - Recent verifications
    var rightSide = document.createElement('div');
    rightSide.style.cssText = [
      'display: flex',
      'flex-direction: column',
      'gap: 16px',
    ].join(';');

    var recentTitle = document.createElement('h3');
    recentTitle.style.cssText = [
      'font-size: 14px',
      'font-weight: 600',
      'color: rgba(156, 163, 175, 0.8)',
      'text-transform: uppercase',
      'letter-spacing: 0.05em',
      'margin-bottom: 8px',
    ].join(';');
    recentTitle.textContent = 'Últimas Verificações';

    rightSide.appendChild(recentTitle);

    recentVerifications.forEach(function (verification) {
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
      name.textContent = verification.name;

      var time = document.createElement('p');
      time.style.cssText = [
        'font-size: 12px',
        'color: rgba(156, 163, 175, 0.7)',
        'margin: 0',
      ].join(';');
      time.textContent = 'verificou ' + verification.time;

      info.appendChild(name);
      info.appendChild(time);
      item.appendChild(icon);
      item.appendChild(info);
      rightSide.appendChild(item);
    });

    container.appendChild(leftSide);
    container.appendChild(rightSide);
    section.appendChild(container);

    return section;
  }

  function injectSections() {
    var mainElement = document.querySelector('main');
    if (mainElement) {
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
