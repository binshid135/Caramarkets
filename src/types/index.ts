export interface Platform {
  title: string;
  description: string;
  features: string[];
}

export interface StatItem {
  number: string;
  label: string;
}

export interface ConfettiPiece {
  element: HTMLDivElement;
  animation: Animation;
}