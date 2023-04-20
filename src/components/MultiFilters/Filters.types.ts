import { Theme } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material/Select";
import { Genres } from "../../store/movieverseStore";


interface MenuProps {
  PaperProps: {
    style: {
      maxHeight: number;
      width: number;
    };
  };
  multiple: boolean;
  autoWidth: boolean;
  renderValue: (selected: any) => string;
  value: any[];
}

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  genres: Genres[];
  genresNames: string[];
  changeSelection: (event: SelectChangeEvent<string[]>) => void;
  theme: Theme;
  MenuProps: { PaperProps: { style: { maxHeight: number; width: number } } };
}

interface SharedProps {}
