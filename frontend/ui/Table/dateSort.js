export const sortASC = (sA, sB) => {
  if(!sA.moment) { return 1 }
  if(!sB.moment) { return -1 }
  if(!sA.moment && !sB.moment) { return 0 }
  return sA.moment.diff(sB.moment)
};

export const sortDESC =  (sA, sB) => {
  if(!sA.moment) { return -1 }
  if(!sB.moment) { return 1 }
  if(!sA.moment && !sB.moment) { return 0 }
  return sB.moment.diff(sA.moment)
};
