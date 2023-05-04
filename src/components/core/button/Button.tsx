import styled, { css } from 'styled-components'
import { themedPalette } from '../../../../styles/theme'
import React, { ReactElement, ReactNode } from 'react'

type ButtonType = 'primary' | 'secondary' | 'destructive' | 'basic'

type ButtonStyle = {
  buttonType?: ButtonType
  width?: string
  height?: string
  fontSize?: string
  fontWeight?: string
  borderRadius?: string
  color?: string
  hasBorder?: boolean
  isTextWhite?: boolean
}

function styleFont(fontType?: ButtonType) {
  switch (fontType) {
    case 'primary':
      return css`
        ${themedPalette.primary}
      `
    case 'secondary':
      return css`
        ${themedPalette.secondary}
      `
    case 'destructive':
      return css`
        ${themedPalette.destructive}
      `
    case 'basic':
      return css`
        ${themedPalette.white}
      `
    default:
      return css`
        ${themedPalette.primary}
      `
  }
}

const ButtonStyle = styled.button<ButtonStyle>`
  background-color: ${(props) => styleFont(props.buttonType)};
  color: ${themedPalette.text1};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({
    width = '4rem',
    height = '2rem',
    fontSize = '0.875rem',
    fontWeight = '500',
    borderRadius = '12.5px',
    hasBorder = false,
    isTextWhite = true,
  }) => css`
    width: ${width};
    height: ${height};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    border-radius: ${borderRadius};
    border: ${hasBorder ? `1px solid ${themedPalette.border1}` : 'none'};
    color: ${isTextWhite ? themedPalette.white : themedPalette.text1};
  `}
`

type FontProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyle & {
    children: ReactNode
    className?: string
  }

function Button({ className, children, ...rest }: FontProps): ReactElement {
  return (
    <ButtonStyle className={className} {...rest}>
      {children}
    </ButtonStyle>
  )
}

export default Button
