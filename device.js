const size = {
mobileS: "320px",
mobileM: "375px",
mobileL: "450px",
tablet: "768px",
laptop: "1024px",
laptopM: "1366px",
laptopL: "1440",
};

export const device  = {
mobileS: `(max-width: ${size.mobileS})`,
mobileM: `(max-width: ${size.mobileM})`,
mobileL: `(max-width: ${size.mobileL})`,
tablet: `(max-width: ${size.tablet})`,
laptop: `(max-width: ${size.laptop})`,
laptopM: `(max-width: ${size.laptopM})`,
laptopL: `(max-width: ${size.laptopL})`,
};

export default device;