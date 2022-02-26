import { createStore } from "redux";
import { shoesData } from "./rawData";

var initialState = {
    shoes: shoesData,
    filters: {
        flipFlops: false,
        sneakers: true,
        laceUpShoes: false,
        shoeAccessories: false,
    },
    maxPrice: 1500,
    filterSizes: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case "TOGGLE_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.filter]: !state.filters[action.filter],
                }
            }

        case "ADD_SIZE_FILTER":
            return {
                ...state,
                filterSizes: [...state.filterSizes, action.size],
            }

        case "REMOVE_SIZE_FILTER":
            return {
                ...state,
                filterSizes: state.filterSizes.filter(size => size !== action.size),
            }

        case "SET_PRICE_RANGE":
            return {
                ...state,
                maxPrice: action.maxPrice,
            }

        default:
            return state
    }
};

export const store = createStore(rootReducer);
