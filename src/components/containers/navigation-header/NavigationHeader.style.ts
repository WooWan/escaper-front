import styled from 'styled-components'
import { themedPalette } from '../../../../styles/theme'

export const Navigator = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  color: ${themedPalette.text1};
`

export const Box = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
`

export const ToggleBtn = styled.button`
  color: ${themedPalette.gray1};
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
  svg {
    fill: ${themedPalette.dark_mode_icon};
  }
`
