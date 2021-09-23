export const getFromLS = (name: string) => {
  let tabLS = [];
  if(localStorage.getItem(name) === null) {
    tabLS = [];
  } else {
    return JSON.parse(localStorage.getItem(name) as string);
  }
}

export const saveToLS = (name: string, datas: any) => {
  let tabLS = [];
  if(localStorage.getItem(name) === null) {
    tabLS = [];
  }
  
  tabLS.push(datas);
  localStorage.setItem(name, JSON.stringify(tabLS));
}
