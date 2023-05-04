import styled, { css } from 'styled-components'
import { themedPalette } from '../../../../styles/theme'
import React, { ReactElement, ReactNode } from 'react'

type FontType = 'title' | 'subtitle' | 'content'
type FontStyle = {
  fontType?: FontType
  fontSize?: string
  fontWeight?: number
  color?: string
}
function styleFont(fontType?: FontType) {
  switch (fontType) {
    case 'title':
      return css`
        font-size: 1.25rem;
        font-weight: 700;
      `
    case 'subtitle':
      return css`
        font-size: 1.125rem;
        font-weight: 500;
      `
    case 'content':
      return css`
        font-size: 1rem;
        font-weight: 300;
      `
  }
}

const FontStyled = styled.span<FontStyle>`
  color: ${themedPalette.text1} ${(props) => styleFont(props.fontType)}
    ${({ fontSize, fontWeight, color }) => css`
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      color: ${color};
    `};
`

type FontProps = React.ButtonHTMLAttributes<HTMLSpanElement> &
  FontStyle & {
    children: ReactNode
    className?: string
  }

function Font({ className, children, ...rest }: FontProps): ReactElement {
  return <FontStyled {...rest}>{children}</FontStyled>
}

export default Font
