import type { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  return (
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        background: variant === 'primary' ? '#0070f3' : '#eaeaea',
        color: variant === 'primary' ? '#fff' : '#000',
      }}
      {...props}
    >
      {children}
    </button>
  )
}
