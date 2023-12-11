$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

// Функція для анімації збільшення чисел від 0 до певного значення
function animateNumbers(targetElements, duration) {
        targetElements.forEach((element) => {
            const targetNumber = parseInt(element.textContent, 10);
            let currentNumber = 0;
            const increment = targetNumber / (duration / 16); // 16ms is about 1 frame at 60fps
    
            const interval = setInterval(() => {
                currentNumber += increment;
                element.textContent = Math.round(currentNumber);
    
                if (currentNumber >= targetNumber) {
                    element.textContent = targetNumber;
                    clearInterval(interval);
                }
            }, 16);
        });
    }
    
    document.querySelector('.tab-nav').addEventListener('click', function (event) {
        if (event.target.classList.contains('tab-link')) {
          // If a tab link is clicked, close the menu
          this.classList.remove('active');
        } else {
          // If burger menu icon is clicked, toggle the 'active' class
          this.classList.toggle('active');
        }
      });