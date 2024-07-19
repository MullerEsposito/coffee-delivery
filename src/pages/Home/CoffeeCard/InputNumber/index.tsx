import { InputHTMLAttributes, useState } from "react";
import { ButtonMinus, ButtonPlus, Input, InputNumberContainer } from "./style";

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function InputNumber({ min, ...props }: InputNumberProps) {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    const hasMin = typeof min != "undefined";
    
    if (hasMin)
      if (value <= Number(min)) 
        return;
    
    setValue(old => old - 1);    
  }

  const handleIncrement = () => {
    setValue(old => old + 1);
  }

  return (
    <InputNumberContainer>
      <ButtonMinus onClick={handleDecrement}>-</ButtonMinus>
      <Input 
        type="number" 
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        defaultValue={value}
        {...props}
      />
      <ButtonPlus onClick={handleIncrement}>+</ButtonPlus>
    </InputNumberContainer>
  )
}