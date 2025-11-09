// Browser-friendly version of script.js (no bundler imports)

// asset paths (relative to index.html)
const check = 'assets/check.svg';
const star = 'assets/star.svg';
const sushi12 = 'assets/sushi-12.png';
const sushi11 = 'assets/sushi-11.png';
const sushi10 = 'assets/sushi-10.png';

// init AOS (AOS included via CDN in index.html)
if (window.AOS) {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
}

// Sample data originally in script.js
const trendingSushis = [
  'Make Sushi',
  'Nigiri Sushi',
  'Oshizushi',
  'Temaki Sushi',
  'Uramaki Sushi',
  'Inari Sushi'
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

// Add any DOM initialization here if needed for Live Server environment
document.addEventListener('DOMContentLoaded', () => {
  // Example: refresh AOS after DOM is ready
  if (window.AOS && typeof AOS.refresh === 'function') AOS.refresh();
});
