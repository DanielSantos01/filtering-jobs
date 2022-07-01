export interface JobsListProps {
  filters: string[];
  handleFilters: (filter: string) => () => void;
}