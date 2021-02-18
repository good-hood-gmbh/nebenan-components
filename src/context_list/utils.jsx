const DATA_TRACK_REGEX = /^data-track[^\s]*/;

export const parseDataTrack = (options) => Object.keys(options).reduce((acc, elem) => {
  if (DATA_TRACK_REGEX.test(elem)) {
    acc[elem] = options[elem];
  }
  return acc;
}, {});
