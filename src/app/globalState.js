import { createStore } from "redux";
import { shoesData, shoeSizes } from "./rawData";

var initialState = {
    shoes: shoesData,
    filters: {
        flipFlops: false,
        sneakers: true,
        laceUpShoes: false,
        shoeAccessories: false,
    },
    priceRange: {
        min: 0,
        max: 1000,
    },
    sizes: shoeSizes,
    maxPrice: 990,
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

        case "SET_SIZE_FILTER":
            return {
                ...state,
                sizes: state.sizes.map(size => {
                    if (size.size === action.size) {
                        return {
                            ...size,
                            active: !size.active,
                        }
                    }
                    return size
                })
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
