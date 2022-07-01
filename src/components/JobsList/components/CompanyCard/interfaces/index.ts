export interface CompanyCardInterface {
  data: CompanyDataModel;
}

export interface CompanyDataModel {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface CardProps {
  isNew: boolean;
  isFeatured: boolean;
  evaluating: 'new' | 'featured';
}
