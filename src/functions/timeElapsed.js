export const timeElapsed = (postTimeEpoch) => {
  let postDate = new Date(0);
  postDate.setUTCSeconds(postTimeEpoch);
  let currentDate = new Date();
  let timeElapsed = Math.ceil((currentDate - postDate)/(1000*60*60));

  if (timeElapsed < 24) {
    return `${timeElapsed} hours ago`;
  } else if (timeElapsed >= 24 && timeElapsed < 48) {
    return '1 day ago';
  } else {
    timeElapsed = Math.floor(timeElapsed/24);
    return `${timeElapsed} days ago`; 
  }
};  