import { BatteryCharging, Fan, LampCeiling, ShieldCheck, Sparkles, ThermometerSun } from 'lucide-react';

export const images = {
  hero: 'https://images.pexels.com/photos/18825426/pexels-photo-18825426.jpeg?auto=compress&cs=tinysrgb&w=1800',
  home: 'https://images.pexels.com/photos/16427010/pexels-photo-16427010.jpeg?auto=compress&cs=tinysrgb&w=1400',
  technician: 'https://images.pexels.com/photos/19895880/pexels-photo-19895880.jpeg?auto=compress&cs=tinysrgb&w=1400',
  solar: 'https://images.pexels.com/photos/11455626/pexels-photo-11455626.jpeg?auto=compress&cs=tinysrgb&w=1400',
  interior: 'https://images.pexels.com/photos/7836571/pexels-photo-7836571.jpeg?auto=compress&cs=tinysrgb&w=1200',
  installation: 'https://images.pexels.com/photos/14614266/pexels-photo-14614266.jpeg?auto=compress&cs=tinysrgb&w=1200',
  sunset: 'https://images.pexels.com/photos/17240063/pexels-photo-17240063.jpeg?auto=compress&cs=tinysrgb&w=1800',
  office: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200',
  team: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200',
  blueprint: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tools: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1200',
  energy: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200'
};

export type Service = {
  label: string;
  title: string;
  description: string;
  icon: typeof LampCeiling;
  image: string;
  points: string[];
};

export const services: Service[] = [
  { label: '01 / LIGHTING', title: 'Bring every room to life.', description: 'Upgrade to energy-saving LED solutions for better lighting performance and improved energy efficiency.', icon: LampCeiling, image: images.interior, points: ['Efficient LED lighting', 'Lower electricity consumption', 'Improved lighting quality'] },
  { label: '02 / HEATING', title: 'Comfort, engineered better.', description: 'Improve heating efficiency and create a more comfortable home environment with modern energy solutions.', icon: ThermometerSun, image: images.home, points: ['Smarter temperature control', 'Comfort in every season', 'Energy-focused planning'] },
  { label: '03 / COOLING', title: 'A cooler way forward.', description: 'Improve cooling efficiency while reducing unnecessary energy consumption across your home or business.', icon: Fan, image: images.technician, points: ['Efficient cooling systems', 'More consistent comfort', 'Clear upgrade guidance'] },
  { label: '04 / ENERGY AUDITS', title: 'See the energy story.', description: 'Detailed energy assessments designed to identify opportunities to improve your property’s energy performance.', icon: Sparkles, image: images.solar, points: ['Assessment and analysis', 'Clear recommendations', 'A considered upgrade path'] },
  { label: '05 / INSTALLATION', title: 'Made right from day one.', description: 'Professional installation of energy-efficient systems aligned with VEU program requirements.', icon: ShieldCheck, image: images.installation, points: ['Professional installation', 'Thoughtful coordination', 'Customer-first support'] },
  { label: '06 / ENERGY SYSTEMS', title: 'Make power work smarter.', description: 'Modern energy systems designed to improve efficiency and support smarter energy use.', icon: BatteryCharging, image: images.solar, points: ['Modern energy solutions', 'Smarter energy use', 'Long-term thinking'] },
];

export const faqs = [
  ['What is VEU?', 'Victorian Energy Upgrades is a program designed to help Victorian households and businesses improve energy efficiency. We can help you understand the process and explore suitable upgrade options.'],
  ['Who can participate?', 'Eligibility can depend on your property, location and the upgrade you are considering. Contact our team for guidance specific to your situation.'],
  ['How do I apply?', 'Start by speaking with our team. We will ask a few simple questions about your property and the outcome you are looking for, then explain the next steps.'],
  ['What services does Skyenergy Groups offer?', 'Our focus includes lighting, heating, cooling, energy audits, professional installation and modern energy systems.'],
  ['Can homeowners and small businesses participate?', 'We work with Australian homes and small businesses, particularly across Victoria. Get in touch to discuss your property.'],
  ['What areas do you service?', 'Skyenergy Groups is focused on Victoria. Our team can confirm service availability for your location when you contact us.'],
];

export const navItems = [['Services', 'services'], ['How it works', 'process'], ['About', 'about'], ['Projects', 'projects'], ['FAQ', 'faq'], ['Contact', 'contact']];
