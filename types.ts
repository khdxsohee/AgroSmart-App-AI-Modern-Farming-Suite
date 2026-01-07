
export interface CropData {
  id: string;
  name: string;
  health: 'Healthy' | 'At Risk' | 'Infected';
  lastChecked: string;
  imageUrl: string;
}

export interface MarketPrice {
  crop: string;
  price: number;
  change: number;
  trend: 'up' | 'down';
}

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  wind: string;
  advice: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
