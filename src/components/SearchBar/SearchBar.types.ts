export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  searchText: string;
  handleChange: (query: string) => void;
  handleSearch: () => void;
  onCancelSearchRequest: () => void;
}

export interface SharedProps {}
