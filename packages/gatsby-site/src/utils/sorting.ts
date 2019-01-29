export const sortMomentASC = (mA: any, mB: any) => {
  if(!mA) { return 1 }
  if(!mB) { return -1 }
  if(!mA && !mB) { return 0 }
  return mA - mB
};

export const sortMomentDESC =  (mA: any, mB: any) => {
  return sortMomentASC(mB, mA)
};

export const sortObjMomentASC = (key: string) => {
  return (a: any, b: any) => {
    return sortMomentASC(a[key], b[key]);
  }
}

export const sortObjMomentDESC = (key: any) => {
  return (a: any, b: any) => sortMomentDESC(a[key], b[key]);
}
