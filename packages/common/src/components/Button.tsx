import { ButtonProps } from "./Button.interfaces";

export default function Button({label, color = 'green', ...rest}: ButtonProps){
  return (
    <button {...rest} style={{color}}>hello {label}</button>
  )
}