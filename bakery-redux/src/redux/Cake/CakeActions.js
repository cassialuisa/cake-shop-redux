import { BUY_CAKE } from "./CakeTypes"

export const buyCake = (cakesToBuy = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakesToBuy
    }
}