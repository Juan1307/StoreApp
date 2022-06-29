const doc = document;

// LOCAL STORAGE BASE
type StrType = string | number | boolean | object;

const setLocalItem = (key: string) => (str: StrType) => localStorage.setItem(key, JSON.stringify(str));
const delLocalItem = (key: string) => localStorage.removeItem(key);
const getLocalItem = (key: string) => {
  const currentValue = localStorage.getItem(key);
  return (!currentValue) ? currentValue : JSON.parse(currentValue);
};

export const storageMethods = { setLocalItem, delLocalItem, getLocalItem };

// LOCAL THEME BASE
export function setLocalTheme(themeMode?: string): void {

  const setDocumentClass = (cls: string) => doc.body.setAttribute('data-theme', cls);
  const currentTheme = themeMode ?? getLocalItem('theme'); 

  if(!currentTheme){
    setDocumentClass('light');
    setLocalItem('theme')('light');

    return;
  }

  setDocumentClass(currentTheme);
  themeMode && setLocalItem('theme')(currentTheme); //set new theme 
}