export type Region = 'Nord' | 'Süd' | 'West' | 'Ost';

export type PlaceStatus = 'Online' | 'Maintenance';

export type Place = {
  id: number;
  name: string;
  region: Region;
  description: string;
  categories: string[];
  distance: string;
  openingHours: string;
  status: PlaceStatus;
};

export type Stat = {
  label: string;
  value: string;
  change: string;
};
