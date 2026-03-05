import { useId } from "react"

function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency="usd",
    onCurrencychange,
    currencyOptions=[],
    amountDisabled=false,
    currencyDisabled=false

}){
  
    const amountId = useId();
    return(
        <div className="bg-white p-5 rounded-lg text-sm flex">
            <div className="w-1/2 flex items-center">
                <label htmlFor={amountId} className="text-black/40 m-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    type="number"
                    value={amount}
                    placeholder="Amount"
                    disabled={amountDisabled}
                    className="outline-none w-full bg-transparent py-1.5"
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end items-center">
                <p className="text-black/40 m-2">Currency Type: </p>
                <select
                    value={selectCurrency}
                    disabled={currencyDisabled}
                    className="bg-gray-100 rounded-lg cursor-pointer outline-none py-1 px-1"
                    onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
                >
                    {currencyOptions.map((currency,index)=>(
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>

    )
}

export default InputBox;
