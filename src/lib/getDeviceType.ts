export enum DEVICES {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop"
}

 const getDeviceType = (userAgent: string): DEVICES => {
  if (/Mobi|Android/i.test(userAgent)) {
    return DEVICES.MOBILE;
  } else if (/Tablet|iPad/i.test(userAgent)) {
    return DEVICES.TABLET;
  } else {
    return DEVICES.DESKTOP;
  }
};


export const getDeviceTypeFromHeaders = (headersList: Headers): DEVICES => {
  const userAgent = headersList.get('user-agent') || '';
  return getDeviceType(userAgent);
};