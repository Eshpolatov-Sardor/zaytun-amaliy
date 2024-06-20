$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 5,
      loop: true,
    });
  });
  
  function performSearch() {
    const input = document.getElementById('searchInput').value;
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';

    if (input) {
      const suggestions = [
        'samsung a32',
        'samsung s21',
        'samsung active 2',
        'samsung galaxy s21 ultra',
        'samsung 49FM9L 4K Smart TV',
        'samsung galaxy s21'
      ].filter(item => item.includes(input.toLowerCase()));
      
      suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
        li.style.position
      });
    }
  }

  document.getElementById('searchInput').addEventListener('input', performSearch);
  suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion;
    li.classList.add('suggestion-item'); // class qo'shish
    suggestionsList.appendChild(li);
  });
  var splide = new Splide( '.splide', {
    perPage : 3,
    cover   : true,
    height  : '10rem',
    lazyLoad: 'nearby',
    breakpoints: {
      height: '6rem',
    },
  } );
  
  splide.mount();
  