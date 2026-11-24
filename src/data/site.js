import lc200 from '../assets/lc200-convoy.jpg';
import lc250 from '../assets/lc250.jpg';
import pradoBlack from '../assets/prado-black.jpg';
import hilux from '../assets/hilux.jpg';

// ---------------------------------------------------------------
// Edit this file to change the contact details and page content.
// ---------------------------------------------------------------

export const SITE = {
  name: 'White Star',
  legalName: 'White Star Security and Protocol Services Ltd',
  tagline: 'Security and Protocol Services',
  phoneDisplay: '0816 424 8800',
  phoneTel: '+2348164248800',
  whatsapp: '2348164248800', // country code + number, no plus sign
  email: 'Whitestarinform@gmail.com',
  instagram: 'whitestarsp',
  addressLines: ['No. 40 Gbagada Road', 'Gbagada Phase 2, Lagos'],
};

export const waLink = (message = "Hello White Star, I'd like to book a vehicle.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const PROMISES = [
  'Safe and reliable',
  'Comfort guaranteed',
  'Premium experience',
  'Always on time',
  'Armored SUVs',
  'Lagos, Nigeria',
];

export const VEHICLES = [
  {
    id: 'lc-v8',
    name: 'Toyota Land Cruiser V8',
    blurb: 'Full-size luxury SUV for executive and group travel.',
    img: lc200,
    alt: 'Black Toyota Land Cruiser V8 with two more Land Cruisers beside it',
    position: '75% 50%',
  },
  {
    id: 'lc-250',
    name: 'Toyota Land Cruiser 250',
    blurb: 'Latest-generation Land Cruiser for city and long-distance trips.',
    img: lc250,
    alt: 'Bronze Toyota Land Cruiser 250 seen from the rear three-quarter',
    position: '50% 50%',
  },
  {
    id: 'prado',
    name: 'Toyota Land Cruiser Prado',
    blurb: 'Comfortable SUV for business, family and airport trips.',
    img: pradoBlack,
    alt: 'Black Toyota Land Cruiser Prado with chrome front detailing',
    position: '50% 50%',
  },
  {
    id: 'hilux',
    name: 'Toyota Hilux',
    blurb: 'Double-cab pickup for rough roads, escorts and site visits.',
    img: hilux,
    alt: 'Dark green Toyota Hilux double cab parked in front of snow-capped hills',
    position: '50% 62%',
  },
];

export const SERVICES = [
  {
    title: 'Luxury car rental',
    text: 'Clean, well-kept SUVs and trucks for business trips, events and travel across Lagos.',
  },
  {
    title: 'Armored SUVs',
    text: 'Armored vehicles for clients who want extra protection on the road. Ask which models are free on your dates.',
  },
  {
    title: 'Security and protocol support',
    text: 'Support for executives, guests and events. Tell us what you need and we will quote it.',
  },
];

// SAMPLE FIGURES. Replace with White Star's real numbers before launch.
export const STATS = [
  { value: 5, label: 'Years in service' },
  { value: 20, label: 'Vehicles in the fleet' },
  { value: 1000, label: 'Trips completed' },
  { value: 300, label: 'Clients served' },
];

export const STEPS = [
  { title: 'Choose your vehicle', text: 'Pick from the fleet above, or ask which armored SUVs are free.' },
  { title: 'Send your dates', text: 'Message us on WhatsApp or call 0816 424 8800 with dates and pickup point.' },
  { title: 'Confirm the details', text: 'We confirm availability, rate and driver or self-drive terms.' },
  { title: 'Ride in comfort', text: 'Your vehicle arrives clean and on time.' },
];

// PLACEHOLDERS. Replace each with a real client review (with their permission).
export const FEATURED_TESTIMONIAL = {
  quote: '[Paste your best client review here. Two or three sentences work best.]',
  name: '[Client name]',
  detail: '[Area or occasion, for example Lagos wedding]',
};

export const TESTIMONIALS = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: n,
  quote: '[Paste a real client review here.]',
  name: '[Client name]',
  detail: '[Area or occasion]',
}));
