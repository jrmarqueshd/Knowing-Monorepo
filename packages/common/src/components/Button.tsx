interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color?: string
}

export default function Button({label, color = 'green', ...rest}: ButtonProps){
  return (
    <button {...rest} style={{color}}>hello {label}</button>
  )
}