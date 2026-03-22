import type { Config } from 'tailwindcss'

const pxToRem = (px:number, base = 16) => {
  return px / base
}

const generateBorderRadius = () => {
  const max = 24

  const borderRadius:{
    [key:string]: string,
  } = {}

  let radius = 0
  while (radius <= max) {
    borderRadius[radius] = pxToRem(radius) + "rem"
    radius += 2
  }
  borderRadius["full"] = "9999px"

  return borderRadius
}

export default {
  theme: {
    borderRadius: generateBorderRadius(),
  },
} satisfies Config