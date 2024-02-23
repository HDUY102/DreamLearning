import * as React from "react"
import { Input } from "./input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className,...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
    //   <div className="flex">
          <Input 
            type={showPassword ? "text":"password"} 
            suffix={
                showPassword ? (
                    <EyeIcon className="select-none" onClick={()=> setShowPassword(false)}/> ) : (
                    <EyeOffIcon className="select-none" onClick={()=> setShowPassword(true)}/>
                )
            } 
            className={className} {...props} ref={ref}/>
    //   </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }