import React, {useMemo, useReducer, useCallback} from 'react'
import {StarIcon} from "./star-icon";

const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0

function calculateCurrentPosition(totalIcons: number, positionX: number, width: number) {
  const iconWidth = width / totalIcons
  let currentValue = totalIcons

  for (let i = 0; i < totalIcons; i += 1) {
    // if position less then quarter icon
    if (positionX <= iconWidth * i + iconWidth / 4) {
      // if there is no value return 0
      if (i === 0 && positionX < iconWidth / 2) currentValue = 0;
      else currentValue = i;
      break;
    }
  }

  return currentValue
}

type State = {
  defaultValue: number | null
  hoverValue: number | null
}

type Action =
  | { type: 'PointerMove'; payload: number | null }
  | { type: 'PointerLeave' }
  | { type: 'MouseClick'; payload: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PointerMove':
      return {
        ...state,
        hoverValue: action.payload
      }
    case 'PointerLeave':
      return {
        defaultValue: state.defaultValue,
        hoverValue: null
      }
    case 'MouseClick':
      return {
        ...state,
        defaultValue: action.payload
      }
    default:
      return state
  }
}

export interface Props {
  onClick?: (value: number) => void
  initialValue?: number
  ratingValue: number
  iconsCount?: number
  size?: number
  readonly?: boolean
  fillColor?: string
  emptyColor?: string
  allowHalfIcon?: boolean
  allowHover?: boolean
  transition?: boolean
  className?: string
  style?: React.CSSProperties
  fullStyle?: React.CSSProperties
  emptyStyle?: React.CSSProperties
  fullClassName?: string
  emptyClassName?: string
  showTooltip?: boolean
  tooltipDefaultText?: string
  tooltipArray?: string[]
  tooltipClassName?: string
  tooltipStyle?: React.CSSProperties
}

export function Rating({
                         onClick,
                         ratingValue = 0,
                         iconsCount = 5,
                         size = 40,
                         readonly = false,
                         fillColor = '#ffbc0b',
                         emptyColor = '#cccccc',
                         allowHalfIcon = false,
                         allowHover = true,
                         transition = false,
                         style,
                         showTooltip = false,
                         tooltipDefaultText = 'Your Rate',
                         tooltipArray = []
                       }: Props) {
  const [{defaultValue, hoverValue}, dispatch] = useReducer(reducer, {
    defaultValue: ratingValue,
    hoverValue: null
  })

  const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const {clientX, currentTarget} = event
    // get main span element position and width
    const {left, width} = currentTarget.children[0].getBoundingClientRect()

    const positionX = clientX - left

    // Get current pointer position while moves over the icons
    const currentValue = calculateCurrentPosition(totalIcons, positionX, width)
    // set the value to state
    if (currentValue > 0 && hoverValue !== currentValue) {
      dispatch({type: 'PointerMove', payload: currentValue * 100 / totalIcons})
    }
  }

  const onPointerEnter = (event: React.PointerEvent<HTMLSpanElement>) => {
    // enable only on touch devices
    if (!isTouchDevice()) return

    // call to get the value
    onPointerMove(event)
  }

  const onHandleRating = () => {
    if (hoverValue) {
      dispatch({type: 'MouseClick', payload: hoverValue})
      // update value on click
      if (onClick) onClick(renderValue(hoverValue))
    }
  }

  const onPointerLeave = () => {
    if (isTouchDevice()) onHandleRating()

    dispatch({type: 'PointerLeave'})
  }

  const valuePercentage = useMemo(
    () => (allowHover && hoverValue) || (defaultValue),
    [allowHover, hoverValue, defaultValue]
  )

  // handle total icons
  const totalIcons = useMemo(() => (allowHalfIcon ? iconsCount * 2 : iconsCount), [allowHalfIcon, iconsCount])

  // convert value to index
  const valueIndex = useCallback(
    (value: number) => {
      let index = 1
      if (value) {
        index = Math.round(value / 100 * totalIcons) + 1
      }
      return Math.round(index - 1)
    },
    [totalIcons]
  )

  // convert value to render value
  const renderValue = useCallback(
    (value: number) => {
      const rvalue = valueIndex(value)

      return allowHalfIcon ? rvalue / 2 : rvalue
    },
    [allowHalfIcon, valueIndex]
  )

  // handle tooltip values
  const handleTooltip = (value: number) =>
    tooltipArray.length > 0 ? tooltipArray[valueIndex(value)] : renderValue(value) || 0

  return (
    <div style={{touchAction: 'none'}}>
      {showTooltip && (
        <div
          style={{
            padding: '5px 15px',
            color: '#333',
            textAlign: "center",
            verticalAlign: 'middle',
            borderRadius: 5,
          }}>
          {(hoverValue && handleTooltip(hoverValue)) ||
            (defaultValue && handleTooltip(defaultValue)) ||
            tooltipDefaultText}
        </div>
      )}
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
          verticalAlign: 'middle',
          userSelect: 'none',
          ...style
        }}
        onPointerMove={readonly ? undefined : onPointerMove}
        onPointerEnter={readonly ? undefined : onPointerEnter}
        onPointerLeave={readonly ? undefined : onPointerLeave}
        onClick={readonly ? undefined : onHandleRating}
        aria-hidden='true'
      >

        <span
          style={{
            display: 'inline-block',
            color: emptyColor,
          }}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <StarIcon key={index} size={size}/>
          ))}
        </span>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            color: fillColor,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            transition: transition ? 'width .2s ease, color .2s ease' : '',
            width: `${valuePercentage}%`,
          }}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <StarIcon key={index} size={size}/>
          ))}
        </div>
      </span>
    </div>
  );
}
