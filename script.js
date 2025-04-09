document.addEventListener('DOMContentLoaded', function() {
  // Tipos de flores disponibles
  const flowers = ['🌹', '🌻', '🌷', '🌸', '🌼', '💐', '🌺'];
  const colors = [
    'hsl(340, 80%, 60%)', // Rosa
    'hsl(50, 100%, 50%)', // Amarillo girasol
    'hsl(330, 100%, 70%)', // Tulipán
    'hsl(300, 100%, 80%)', // Cerezo
    'hsl(60, 100%, 70%)',  // Margarita
    'hsl(0, 100%, 70%)',   // Rojo
    'hsl(270, 100%, 70%)'  // Lila
  ];

  // Crear ramo de flores fijo
  const bouquet = document.createElement('div');
  bouquet.className = 'flower-bouquet';
  bouquet.innerHTML = '💐';
  bouquet.style.fontSize = '80px';
  bouquet.style.position = 'fixed';
  bouquet.style.bottom = '20px';
  bouquet.style.right = '20px';
  bouquet.style.zIndex = '1';
  bouquet.style.animation = 'float 6s ease-in-out infinite';
  document.body.appendChild(bouquet);

  // Crear flores flotantes
  function createFloatingFlowers() {
    const flower = document.createElement('div');
    const randomType = Math.floor(Math.random() * flowers.length);
    flower.innerHTML = flowers[randomType];
    flower.style.position = 'fixed';
    flower.style.fontSize = (Math.random() * 30 + 20) + 'px';
    flower.style.color = colors[randomType];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = '-50px';
    flower.style.opacity = '0.8';
    flower.style.zIndex = '0';
    flower.style.animation = `float ${Math.random() * 8 + 6}s linear infinite`;
    flower.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 15000);
  }

  // Añadir animación flotante
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-100px) rotate(180deg); }
      100% { transform: translateY(calc(100vh + 50px)) rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // Crear flores periódicamente
  setInterval(createFloatingFlowers, 500);

  // Efecto de aparición suave
  const elements = document.querySelectorAll('section, header, footer');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s, transform 0.8s';
  });

  setTimeout(() => {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }, 500);
});
