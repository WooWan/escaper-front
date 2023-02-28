import React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-main500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },

  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & React.HTMLAttributes<HTMLButtonElement>

const Button = ({ size, intent, children, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyles({ intent, size })} {...props}>
      {children}
    </button>
  )
}

export default Button
