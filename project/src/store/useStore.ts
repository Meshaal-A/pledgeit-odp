import { create } from 'zustand';
import type { User, Event, VolunteerPackage } from '../types';

interface Store {
  user: User | null;
  events: Event[];
  packages: VolunteerPackage[];
  setUser: (user: User | null) => void;
  addEvent: (event: Event) => void;
  registerForEvent: (eventId: string) => void;
}

// Mock events data
const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Beach Cleanup in Galle',
    description: 'Join us for a community beach cleanup to protect our beautiful coastline.',
    location: 'Galle',
    date: '2024-03-25',
    requiredSkills: ['Environmental Awareness', 'Teamwork'],
    organization: 'Clean Ocean Initiative',
    spots: 30,
    registeredVolunteers: 12,
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Teaching English in Kandy',
    description: 'Help local students improve their English language skills.',
    location: 'Kandy',
    date: '2024-03-28',
    requiredSkills: ['Teaching', 'English Proficiency'],
    organization: 'Education for All',
    spots: 10,
    registeredVolunteers: 4,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Community Garden Project',
    description: 'Help establish a sustainable community garden in Colombo.',
    location: 'Colombo',
    date: '2024-04-01',
    requiredSkills: ['Gardening', 'Community Building'],
    organization: 'Green Sri Lanka',
    spots: 20,
    registeredVolunteers: 8,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80',
  },
];

export const useStore = create<Store>((set) => ({
  user: null,
  events: mockEvents,
  packages: [
    {
      id: '1',
      name: 'Ayubowan Novice',
      description: 'Begin your volunteering journey with basic opportunities',
      level: 1,
      benefits: ['Access to basic events', 'Community forum access', 'Digital badge'],
      requiredPoints: 0,
    },
    {
      id: '2',
      name: 'Lanka Lion',
      description: 'Intermediate volunteer with proven dedication',
      level: 2,
      benefits: ['Priority event registration', 'Mentorship opportunities', 'Special recognition'],
      requiredPoints: 100,
    },
    {
      id: '3',
      name: 'Serendib Sage',
      description: 'Expert volunteer and community leader',
      level: 3,
      benefits: ['Event leadership roles', 'Training workshops access', 'Premium badge'],
      requiredPoints: 300,
    },
  ],
  setUser: (user) => set({ user }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  registerForEvent: (eventId) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId
          ? { ...event, registeredVolunteers: event.registeredVolunteers + 1 }
          : event
      ),
    })),
}));