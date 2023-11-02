import { PlacesType, VariantType } from "react-tooltip";

export const mapToPlacesType = (position: string | undefined) : PlacesType => {

    switch(position) {
        case "top": 
            return 'top';
        case "top_start": 
            return 'top-start';
        case "top_end": 
            return 'top-end';
        case "right": 
            return 'right';
        case "right_start": 
            return 'right-start';
        case "right_end": 
            return 'right-end';
        case "bottom": 
            return 'bottom';
        case "bottom_start": 
            return 'bottom-start';
        case "bottom_end": 
            return 'bottom-end';
        case "left": 
            return 'left';
        case "left_start": 
            return 'left-start';
        case "left_end": 
            return 'left-end';
        default: return 'top';
    }
}

export const mapToVariantType = (position: string | undefined) : VariantType => {

    switch(position) {
        case "dark": 
            return 'dark';
        case "light": 
            return 'light';
        case "success": 
            return 'success';
        case "warning": 
            return 'warning';
        case "error": 
            return 'error';
        case "info": 
            return 'info';
        default: return 'dark';
    }
}