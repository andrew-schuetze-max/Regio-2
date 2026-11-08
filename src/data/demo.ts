import type { Place, Region, Stat } from '../types';

export const regions: Region[] = ['Nord', 'Süd', 'West', 'Ost'];

export const stats: Stat[] = [
  { label: 'Aktiv', value: '128', change: '+12.5%' },
  { label: 'Verfügbar', value: '93%', change: '+4.2%' },
  { label: 'Wartezeit', value: '14 min', change: '-3 min' },
  { label: 'Nutzer', value: '4.8k', change: '+18.2%' },
];

export const places: Place[] = [
  {
    id: 1,
    name: 'Zentrum Rückkehr',
    region: 'Nord',
    description: 'Zentrale Anlaufstelle für lokale Services, Hilfestellungen und Routenplanung.',
    categories: ['Service', 'Mobilität'],
    distance: '1.4 km',
    openingHours: 'Mo–Sa 08:00–18:00',
    status: 'Online',
  },
  {
    id: 2,
    name: 'Waldpark Hub',
    region: 'West',
    description: 'Naturorientierter Treffpunkt mit Aktivitäten, Informationen und Community-Events.',
    categories: ['Erlebnis', 'Nachhaltig'],
    distance: '2.9 km',
    openingHours: 'Täglich 07:00–21:00',
    status: 'Online',
  },
  {
    id: 3,
    name: 'Mitte Mobil',
    region: 'Süd',
    description: 'Mobilitäts- und Transportzentrum mit optimierter Routenplanung und Beratung.',
    categories: ['Mobilität', 'Transport'],
    distance: '800 m',
    openingHours: 'Mo–Fr 09:00–17:00',
    status: 'Maintenance',
  },
  {
    id: 4,
    name: 'Kulturstube',
    region: 'Ost',
    description: 'Regionale Kulturstätte mit Workshops, Ausstellungen und lokalen Produkten.',
    categories: ['Kultur', 'Community'],
    distance: '3.2 km',
    openingHours: 'Mi–So 10:00–20:00',
    status: 'Online',
  },
  {
    id: 5,
    name: 'GrünBau Punkt',
    region: 'Nord',
    description: 'Informations- und Servicepunkt für Wohnraum, Umwelt und lokale Projekte.',
    categories: ['Service', 'Umwelt'],
    distance: '1.8 km',
    openingHours: 'Mo–Fr 08:30–16:30',
    status: 'Online',
  },
  {
    id: 6,
    name: 'Rendezvous Plaza',
    region: 'West',
    description: 'Zentrale Plattform für Veranstaltungen, lokale Beratung und Kooperationen.',
    categories: ['Community', 'Event'],
    distance: '5.1 km',
    openingHours: 'Mo–So 09:00–22:00',
    status: 'Online',
  },
];
