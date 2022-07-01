export interface HeaderProps {
  filters: string[];
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

export interface FilterProps {
  isVisible: boolean;
}
