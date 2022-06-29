import { useState } from "react";

const useCount = (stock, initial) => {

    const [amount, setAmount] = useState(1);

    const count = (value) => {

        let result = amount + value; // debemos guardar en una variable lo acumulado en amount
        //sino amount=stock, muere la app

        if (result <= stock) {
            setAmount(amount + value);
        }
        if (result < initial) {
            setAmount(amount);
        }
    }
    return {
        count, amount
    }
}
export default useCount;