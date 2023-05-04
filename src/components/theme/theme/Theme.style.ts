import styled, { css } from 'styled-components'

export const Description = styled.summary<{ isActive: boolean }>`
  text-overflow: ellipsis;
  width: 100%;
  line-height: 1.2rem;
  ${(props) => {
    if (props.isActive) {
      return css`
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `
    } else {
      return css`
        display: block;
      `
    }
  }}
`
export const ToggleButton = styled.button`
  align-self: flex-end;
  background: transparent;
`
