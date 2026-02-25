import {
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

const backgroundFront = "#ffffff";
const backgroundBack = "#f7f7f7";
const backgroundScreenOverlay = "rgba(0, 0, 0, 0.12)";
const hpeBorder = '1px solid rgb(177, 185, 190)';
const hpeBorderStrong = '1px solid #3e4550';
const hpeBorderDefault = '1px solid #b1b9be';
const hpeBorderWeak = '1px solid #d4d8db';
const hpeColorBackgroundPrimaryStrong = '#068667';
const hpeColorBackgroundNeutralXStrong = '#292d3a';
const hpeColorBackgroundInfo = '#e3f1ff';

// These magic numbers are REM values
// I think typically baseFontSize would be 16px on web
const baseFontSize = 10;
/*
 * These fonts were too big
const h1FontSize = baseFontSize * 2;
const h1LineHeight = baseFontSize * 2.5;
const h2FontSize = baseFontSize * 1.5;
const h2LineHeight = baseFontSize * 2;
*/
const h3FontSize = baseFontSize * 1.375;
const h3LineHeight = baseFontSize * 1.75;
const h4FontSize = baseFontSize * 1.125;
const h4LineHeight = baseFontSize * 1.5;

Font.register({ family: 'HPE Graphik', fonts: [
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2",
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Regular-Web.woff2",
    fontWeight: 400,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Bold-Web.woff2",
    fontWeight: 700,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Semibold-Web.woff2",
    fontWeight: 600,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Medium-Web.woff2",
    fontWeight: 500,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphik-Extralight-Web.woff2",
    fontWeight: 100,
  },
]});

Font.register({ family: 'GraphikXXCondensed', fonts: [
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2",
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Regular-Web.woff2",
    fontWeight: 400,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Bold-Web.woff2",
    fontWeight: 700,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Semibold-Web.woff2",
    fontWeight: 600,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Medium-Web.woff2",
    fontWeight: 500,
  },
  {
    src: "https://www.hpe.com/content/dam/hpe/fonts/graphik/HPEGraphikXXCondensed-Extralight-Web.woff2",
    fontWeight: 100,
  },
]});

const universalStyles = StyleSheet.create({
  h3: {
    fontSize: `${h3FontSize}px`,
    fontWeight: 900,
    color: 'rgba(0, 0, 0, 0.24)',
    lineHeight: `${h3LineHeight}px`,
  },
  h4: {
    fontSize: `${h4FontSize}px`,
    fontWeight: 600,
    color: '#292d3a',
    lineHeight: `${h4LineHeight}px`,
  },
  text: {
    fontSize: '10px',
    fontWeight: 400,
    color: '#3e4550',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletPoint: {
    paddingRight: 3,
    fontSize: 12,
  },
  subBulletPoint: {
    paddingRight: 3,
    paddingLeft: 8,
    fontSize: 12,
  },
});

export {
  backgroundFront,
  backgroundBack,
  backgroundScreenOverlay,
  hpeColorBackgroundPrimaryStrong,
  hpeColorBackgroundNeutralXStrong,
  hpeColorBackgroundInfo,
  hpeBorder,
  hpeBorderStrong,
  hpeBorderDefault,
  hpeBorderWeak,
  universalStyles,
}