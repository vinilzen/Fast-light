import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  // googleFonts: [
  //   {
  //     name: "Montserrat",
  //     styles: ["400", "400i", "700", "700i", "900", "900i"],
  //   },
    // {
    //   name: "Merriweather",
    //   styles: ["400", "400i", "700", "700i", "900", "900i"],
    // },
  // ],
  // headerFontFamily: [
    // "Merriweather",
    // "Georgia", "serif"
  // ],
  // bodyFontFamily: [
  //   // "Merriweather",
  //   "Georgia", "serif"
  // ],
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

Wordpress2016.bodyFontFamily = ["Montserrat", "Georgia", "serif"]
Wordpress2016.headerFontFamily = ["Montserrat", "Georgia", "serif"]
Wordpress2016.googleFonts = [
  {
    name: "Montserrat",
    styles: ["400", "400i", "700", "700i"],
  },
]
Wordpress2016.headerWeight = 700

// delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles()
// }

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
