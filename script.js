// Data Store
const services = [
  {
    id: 1,
    name: 'Party DJ Deluxe',
    category: 'DJ',
    price: 10000,
    rating: 4.5,
    location: 'Chennai',
    description: 'High-energy music, lights & sound system.',
    images: [
      'image/dj.jpg',
      'image/dj.jpg'
    ],
    reviews: [
      'Fantastic beat selection!',
      'Great energy on the floor.',
      'Punctual and professional.'
    ],
    availableDates: ['2025-09-01', '2025-09-05', '2025-09-12']
  },
  {
    id: 2,
    name: 'Wedding Photographer',
    category: 'Photographer',
    price: 150000,
    rating: 5,
    location: 'Bangalore',
    description: 'Cinematic wedding shoots & albums.',
    images: [
      'image/photo.jpg',
      'image/photo.jpg'
    ],
    reviews: [
      'Captured our day perfectly.',
      'Artistic and discreet.',
      'Loved the album!'
    ],
    availableDates: ['2025-08-28', '2025-09-10', '2025-10-01']
  },
  {
    id: 3,
    name: 'Caterers',
    category: 'Caterer',
    price: 120000,
    rating: 4,
    location: 'Mumbai',
    description: 'Fine dining experience with custom menus.',
    images: [
      'image/catering.jpg',
      'image/catering.jpg'
    ],
    reviews: [
      'Delicious dishes, great presentation.',
      'Service was top notch.',
      'Highly recommended.'
    ],
    availableDates: ['2025-09-03', '2025-09-15', '2025-09-20']
  },

  {
    id: 4,
    name: ' dancers',
    category: 'Dancing',
    price: 1200,
    rating: 4,
    location: 'Chennai',
    description: 'vibe experience with high class dancers.',
    images: [
      'image/dance.png',
      'image/dance.png'
    ],
    reviews: [
      'best for vibing',
      'Highly recommended.'
    ],
    availableDates: ['2025-09-17', '2025-09-21', '2025-10-2']
  },
  
  {
    id: 5,
    name: 'Live Acoustic Night',
    category: 'Music',
    price: 8000,
    rating: 5,
    location: 'Bangalore',
    description: 'An intimate night with live acoustic performances and cozy vibes.',
    images: [
      'image/music.jpg',
      'image/music.jpg'
    ],
    reviews: [
      'So soothing!',
      'Perfect weekend plan.'
    ],
    availableDates: ['2025-09-25', '2025-10-01', '2025-10-3']
    },
    {
  id: 6,
  name: 'Bollywood Dance Workshop',
  category: 'Dancing',
  price: 1000,
  rating: 4.7,
  location: 'Hyderabad',
  description: 'Learn iconic Bollywood moves with expert choreographers.',
  images: ['image/bolly.jpg', 'image/bolly.jpg'],
  reviews: ['Fun and energetic!', 'Great for beginners.'],
  availableDates: ['2025-09-22', '2025-09-29', '2025-10-05']
},
{
  id: 7,
  name: 'Sunset Yoga Retreat',
  category: 'Wellness',
  price: 900,
  rating: 4.8,
  location: 'Goa',
  description: 'Relax and rejuvenate with yoga by the beach at sunset.',
  images: ['image/yoga.jpg', 'image/yoga.jpg'],
  reviews: ['Truly peaceful.', 'Loved the setting.'],
  availableDates: ['2025-09-26', '2025-10-02', '2025-10-09']
},
{
  id: 8,
  name: 'Luxury Mehndi Artist',
  category: 'Mehndi',
  price: 5000,
  rating: 4.9,
  location: 'Delhi',
  description: 'Traditional and modern henna designs for all occasions.',
  images: ['image/mehndi.jpg', 'image/mehndi.jpg'],
  reviews: ['Stunning work!', 'Very intricate designs.'],
  availableDates: ['2025-08-29', '2025-09-11', '2025-09-18']
},
{
  id: 9,
  name: 'Adventure Trekking Camp',
  category: 'Adventure',
  price: 2200,
  rating: 4.8,
  location: 'Manali',
  description: 'Scenic trekking routes with overnight camping.',
  images: ['image/trekking.jpg', 'image/trekking.jpg'],
  reviews: ['Breathtaking views.', 'Unforgettable experience.'],
  availableDates: ['2025-09-30', '2025-10-04', '2025-10-11']
},
{
  id: 10,
  name: 'Cultural Folk Fest',
  category: 'Culture',
  price: 950,
  rating: 4.6,
  location: 'Udaipur',
  description: 'Traditional music, dance, and crafts from local artists.',
  images: ['image/folk.jpg', 'image/folk.jpg'],
  reviews: ['So authentic!', 'Colorful and fun.'],
  availableDates: ['2025-09-23', '2025-09-29', '2025-10-09']
},
{
  id: 11,
  name: 'LED Drum Show',
  category: 'Entertainment',
  price: 7500,
  rating: 4.5,
  location: 'Pune',
  description: 'Visual and musical performance with LED drummers.',
  images: ['image/drum.jpg', 'image/drum.jpg'],
  reviews: ['Crowd loved it!', 'Very unique.'],
  availableDates: ['2025-09-18', '2025-09-27', '2025-10-06']
},
{
  id: 12,
  name: 'Floral Decor Experts',
  category: 'Decoration',
  price: 25000,
  rating: 4.9,
  location: 'Jaipur',
  description: 'Custom floral setups for weddings and events.',
  images: ['image/decoration.webp', 'image/decoration.webp'],
  reviews: ['Elegant designs.', 'Perfect setup.'],
  availableDates: ['2025-09-05', '2025-09-15', '2025-10-01']
},
{
  id: 13,
  name: 'Themed Birthday Parties',
  category: 'Event Planning',
  price: 18000,
  rating: 4.7,
  location: 'Kolkata',
  description: 'Fully planned birthday events with decoration, games, and hosts.',
  images: ['image/event.webp', 'image/event.webp'],
  reviews: ['Kids had a blast!', 'Very organized.'],
  availableDates: ['2025-09-12', '2025-09-20', '2025-10-02']
},
{
  id: 14,
  name: 'Live Band Performance',
  category: 'Music',
  price: 10000,
  rating: 4.6,
  location: 'Ahmedabad',
  description: 'Energetic live band for weddings, parties, or concerts.',
  images: ['image/band.jpg', 'image/band.jpg'],
  reviews: ['Rocked the stage!', 'Great playlist.'],
  availableDates: ['2025-09-19', '2025-09-28', '2025-10-07']
},
{
  id: 15,
  name: 'Fireworks Show',
  category: 'Special Effects',
  price: 50000,
  rating: 4.9,
  location: 'Hyderabad',
  description: 'Safe and spectacular fireworks display for events.',
  images: ['image/firework.jpg', 'image/firework.jpg'],
  reviews: ['Amazing finale!', 'Well coordinated.'],
  availableDates: ['2025-09-21', '2025-10-01', '2025-10-10']
}


];



// DOM Elements
const grid       = document.getElementById('servicesGrid');
const searchIn   = document.getElementById('searchInput');
const catFilt    = document.getElementById('categoryFilter');
const minP       = document.getElementById('minPrice');
const maxP       = document.getElementById('maxPrice');
const rateFilt   = document.getElementById('ratingFilter');
const locFilt    = document.getElementById('locationFilter');

// Debounce Utility
function debounce(fn, delay=300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(()=>fn(...args), delay);
  };
}

// Render Grid
function renderServices(list) {
  grid.innerHTML = '';
  if (!list.length) {
    grid.innerHTML = '<p>No services match your criteria.</p>';
    return;
  }
  list.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <img src="${s.images[0]}" alt="${s.name}">
      <div class="info">
        <h3>${s.name}</h3>
        <p>Price: ₹${s.price}</p>
        <p>Rating: ${s.rating} ★</p>
        <p>${s.location}</p>
      </div>`;
    card.addEventListener('click', ()=>openDetail(s));
    grid.appendChild(card);
  });
}

// Filtering Logic
function applyFilters() {
  const term = searchIn.value.toLowerCase();
  const category = catFilt.value;
  const minPrice = +minP.value || 0;
  const maxPrice = +maxP.value || Infinity;
  const ratingSelected = +rateFilt.value;
  const loc = locFilt.value.toLowerCase();

  const filtered = services.filter(s => {
    return (
      s.name.toLowerCase().includes(term) &&
      (category === '' || s.category === category) &&
      s.price >= minPrice &&
      s.price <= maxPrice &&
      (ratingSelected === 0 || Math.floor(s.rating) === ratingSelected) &&
      s.location.toLowerCase().includes(loc)
    );
  });

  renderServices(filtered);
}


searchIn.addEventListener('input', debounce(applyFilters));
[catFilt,minP,maxP,rateFilt,locFilt].forEach(el=>el.addEventListener('change',applyFilters));


renderServices(services);

const detailModal = document.getElementById('detailModal');
const dmClose      = document.getElementById('closeDetail');
const dmName       = document.getElementById('detailName');
const dmImg        = document.getElementById('detailImg');
const dmDesc       = document.getElementById('detailDesc');
const dmReviews    = document.getElementById('reviewsSection');
const dmDates      = document.getElementById('availDates');
const prevImgBtn   = document.getElementById('prevImg');
const nextImgBtn   = document.getElementById('nextImg');
const bookNowBtn   = document.getElementById('bookNowBtn');
let currentSvc, imgIndex = 0;

function openDetail(svc) {
  currentSvc = svc; imgIndex = 0;
  dmName.textContent = svc.name;
  dmDesc.textContent = svc.description;
  dmImg.src = svc.images[0];

  
  dmReviews.innerHTML = '<h4>Reviews:</h4>' + svc.reviews.map(r=>`<p>“${r}”</p>`).join('');

  
  dmDates.innerHTML = svc.availableDates.map(d=>`<li>${d}</li>`).join('');

  detailModal.classList.remove('hidden');
}

prevImgBtn.onclick = () => {
  imgIndex = (imgIndex - 1 + currentSvc.images.length) % currentSvc.images.length;
  dmImg.src = currentSvc.images[imgIndex];
};
nextImgBtn.onclick = () => {
  imgIndex = (imgIndex + 1) % currentSvc.images.length;
  dmImg.src = currentSvc.images[imgIndex];
};
dmClose.onclick = () => detailModal.classList.add('hidden');


const bookingModal = document.getElementById('bookingModal');
const bmClose      = document.getElementById('closeBooking');
const bookForm     = document.getElementById('bookingForm');
let bookingData = {};

bookNowBtn.onclick = () => {
  detailModal.classList.add('hidden');
  showStep(1);
  bookingModal.classList.remove('hidden');
};

bmClose.onclick = () => bookingModal.classList.add('hidden');

function showStep(n) {
  document.querySelectorAll('.step').forEach(div=>{
    div.classList.toggle('hidden', +div.dataset.step !== n);
  });
}
document.getElementById('step1Next').onclick = () => {
  const date = document.getElementById('bookDate').value;
  const time = document.getElementById('bookTime').value;
  if (!date || !time) return alert('Select date & time');
  bookingData.date = date; bookingData.time = time;
  showStep(2);
};
document.getElementById('step2Back').onclick = ()=>showStep(1);
document.getElementById('step2Next').onclick = () => {
  const guests = document.getElementById('guestCount').value;
  const name   = document.getElementById('contactName').value;
  const email  = document.getElementById('contactEmail').value;
  if (!guests || !name || !email) return alert('Fill all fields');
  bookingData.guests = guests;
  bookingData.name   = name;
  bookingData.email  = email;
  updateSummary();
  showStep(3);
};
document.getElementById('step3Back').onclick = ()=>showStep(2);

function updateSummary() {
  const sum = document.getElementById('summary');
  sum.innerHTML = `
    <p><strong>Service:</strong> ${currentSvc.name}</p>
    <p><strong>Date:</strong> ${bookingData.date}</p>
    <p><strong>Time:</strong> ${bookingData.time}</p>
    <p><strong>Guests:</strong> ${bookingData.guests}</p>
    <p><strong>Contact:</strong> ${bookingData.name} (${bookingData.email})</p>
    <p><strong>Total:</strong> ₹${currentSvc.price}</p>`;
}

bookForm.onsubmit = (e) => {
  e.preventDefault();
  alert('Booking Confirmed!\n\n' +
        `Service: ${currentSvc.name}\n` +
        `On: ${bookingData.date} at ${bookingData.time}\n` +
        `Guests: ${bookingData.guests}\n` +
        `Contact: ${bookingData.name}`);
  bookingModal.classList.add('hidden');
};