export const sortMomentASC = (mA, mB) => {
  console.log(mA && mA.toString(), mB && mB.toString())
  if(!mA) { return 1 }
  if(!mB) { return -1 }
  if(!mA && !mB) { return 0 }
  return mA - mB
};

export const sortMomentDESC =  (mA, mB) => {
  return sortMomentASC(mB, mA)
};

export const sortObjMomentASC = (key) => {
  return (a, b) => sortMomentASC(a[key], b[key]);
}

export const sortObjMomentDESC = (key) => {
  return (a, b) => sortMomentDESC(a[key], b[key]);
}
