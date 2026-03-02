import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, locale: string = 'fr'): string {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export const THEMES = {
  fr: [
    { value: 'dragons', label: '🐉 Dragons & Magie' },
    { value: 'space', label: '🚀 Espace & Planètes' },
    { value: 'forest', label: '🌲 Forêt Enchantée' },
    { value: 'ocean', label: '🌊 Océan & Dauphins' },
    { value: 'princess', label: '👸 Princes & Princesses' },
    { value: 'dinosaurs', label: '🦕 Dinosaures' },
    { value: 'superheroes', label: '🦸 Super-Héros' },
    { value: 'animals', label: '🐾 Animaux Magiques' },
    { value: 'pirates', label: '🏴‍☠️ Pirates & Trésors' },
    { value: 'fairies', label: '🧚 Fées & Elfes' },
  ],
  en: [
    { value: 'dragons', label: '🐉 Dragons & Magic' },
    { value: 'space', label: '🚀 Space & Planets' },
    { value: 'forest', label: '🌲 Enchanted Forest' },
    { value: 'ocean', label: '🌊 Ocean & Dolphins' },
    { value: 'princess', label: '👸 Princes & Princesses' },
    { value: 'dinosaurs', label: '🦕 Dinosaurs' },
    { value: 'superheroes', label: '🦸 Superheroes' },
    { value: 'animals', label: '🐾 Magical Animals' },
    { value: 'pirates', label: '🏴‍☠️ Pirates & Treasure' },
    { value: 'fairies', label: '🧚 Fairies & Elves' },
  ],
  es: [
    { value: 'dragons', label: '🐉 Dragones y Magia' },
    { value: 'space', label: '🚀 Espacio y Planetas' },
    { value: 'forest', label: '🌲 Bosque Encantado' },
    { value: 'ocean', label: '🌊 Océano y Delfines' },
    { value: 'princess', label: '👸 Príncipes y Princesas' },
    { value: 'dinosaurs', label: '🦕 Dinosaurios' },
    { value: 'superheroes', label: '🦸 Superhéroes' },
    { value: 'animals', label: '🐾 Animales Mágicos' },
    { value: 'pirates', label: '🏴‍☠️ Piratas y Tesoros' },
    { value: 'fairies', label: '🧚 Hadas y Elfos' },
  ],
  pt: [
    { value: 'dragons', label: '🐉 Dragões e Magia' },
    { value: 'space', label: '🚀 Espaço e Planetas' },
    { value: 'forest', label: '🌲 Floresta Encantada' },
    { value: 'ocean', label: '🌊 Oceano e Golfinhos' },
    { value: 'princess', label: '👸 Príncipes e Princesas' },
    { value: 'dinosaurs', label: '🦕 Dinossauros' },
    { value: 'superheroes', label: '🦸 Super-Heróis' },
    { value: 'animals', label: '🐾 Animais Mágicos' },
    { value: 'pirates', label: '🏴‍☠️ Piratas e Tesouros' },
    { value: 'fairies', label: '🧚 Fadas e Elfos' },
  ],
  de: [
    { value: 'dragons', label: '🐉 Drachen & Magie' },
    { value: 'space', label: '🚀 Weltraum & Planeten' },
    { value: 'forest', label: '🌲 Zauberwald' },
    { value: 'ocean', label: '🌊 Ozean & Delfine' },
    { value: 'princess', label: '👸 Prinzen & Prinzessinnen' },
    { value: 'dinosaurs', label: '🦕 Dinosaurier' },
    { value: 'superheroes', label: '🦸 Superhelden' },
    { value: 'animals', label: '🐾 Magische Tiere' },
    { value: 'pirates', label: '🏴‍☠️ Piraten & Schätze' },
    { value: 'fairies', label: '🧚 Feen & Elfen' },
  ],
};
