import { FETCH_PRODUCTS } from "../types"

export const fethchProducts = () => async(dispatch) => {

     const res = await fetch("/api/proudcts")
     dispatch({
          type: FETCH_PRODUCTS,
          payload:res.data
     })
}

