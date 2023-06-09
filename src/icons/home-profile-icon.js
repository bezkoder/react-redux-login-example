import React from 'react'

const HomeProfileIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="70"
      height="70"
      fill="none"
      viewBox="0 0 70 70"
    >
      <path fill="url(#pattern0)" d="M0 0H70V70H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01429)" xlinkHref="#image0_374_949"></use>
        </pattern>
        <image
          id="image0_374_949"
          width="70"
          height="70"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>

  )
}

export default HomeProfileIcon;