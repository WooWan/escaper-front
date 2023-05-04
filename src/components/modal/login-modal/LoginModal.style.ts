import styled, { css } from 'styled-components'
import { Format } from '../modal/Modal.style'
import { themedPalette } from '../../../../styles/theme'

export const Container = styled.div<{ format: Format }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${themedPalette.bg_color1};
  border: 1px solid ${(props) => props.theme.gray_lighter};
  border-radius: 8px;
  row-gap: 0.75rem;
  z-index: 5;
  ${({ format }) => {
    if (format === 'vertical') {
      return css`
        width: 20rem;
        height: 16rem;
      `
    } else if (format === 'horizontal') {
      return css`
        width: 22rem;
        height: 10rem;
      `
    }
  }}
`

export const CancelButtonWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const LoginButtonList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`

export const KakaoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${themedPalette.kakao};
  width: 32px;
  height: 32px;
  border-radius: 0.4rem;
`
