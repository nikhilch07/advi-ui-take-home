import { SelectChangeEvent } from "@mui/material/Select";
import { MovieDetails } from "../../store/movieverseStore";

interface Options {
    value: string | number;
    label: string;
}

interface FilterOptions {
    type: string;
    options: Options[];
}

export interface ContainerProps extends SharedProps {
    filterOptions: FilterOptions;
    movies?: MovieDetails[];
}

export interface Props extends SharedProps {
    filterType: string;
    filterOptions: Options[];
    selectedOption: string;
    handleChange: (event: SelectChangeEvent<string>) => void;
}

export interface SharedProps {
    
}
