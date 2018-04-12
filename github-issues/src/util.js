import { uniq } from 'lodash';

export const makeAuthorList = (data) => {
  if (!data) {
    return [];
  }

  // Get the author names
  try {
    const authNames =  data.map((val) => val.user.login);

    // Remove duplicates
    return uniq(authNames);
  } catch(e) {
    return [];
  }
}

export const makeLabelList = (data) => {
  if (!data) {
    return [];
  }
  let labelNames = []
  try {
    data.map((val) => {
      for (const label of val.labels) {
        labelNames.push(label.name);
      }
    })
  
    // Remove duplicates
    return uniq(labelNames);
  } catch(e) {
    return labelNames;
  }
  
}

const getMonth = (month) => {
  switch(month) {
    case '01': return 'Jan';
    case '02': return 'Feb';
    case '03': return 'Mar';
    case '04': return 'Apr';
    case '05': return 'May';
    case '06': return 'Jun';
    case '07': return 'Jul';
    case '08': return 'Aug';
    case '09': return 'Sep';
    case '10': return 'Oct';
    case '11': return 'Nov';
    case '12': return 'Dec';
    default: return '';
  }
}

export const getDate = (date) => {
  if (!date) {
    return '';
  }
  try {
    const dataParts = date.split('-');
    let textDate = getMonth(dataParts[1]) + ' ';
    textDate += dataParts[2].substring(0, 2) + ', ';
    textDate += dataParts[0];
    return textDate;
  } catch(e) {
    return '';
  }
}

export const getOpen = (data) => {
  let count = 0;
  try {
    if (data) {
      data.map((val) => {
        if (val.state === 'open') {
          count += 1;
        }
      })
    }
  } catch(e) { /* error handling */}
  return count;
}

export const getClosed = (data) => {
  let count = 0;
  try {
    if (data) {
      data.map((val) => {
        if (val.state === 'close') {
          count += 1;
        }
      })
    }
  } catch(e) { /* error handling */}
  return count;
}