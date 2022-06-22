const doc = document;

// LOCAL STORAGE BASE
type StrType = string | number | boolean | object;

const setLocalItem = (key: string) => (str: StrType) => localStorage.setItem(key, JSON.stringify(str));
const delLocalItem = (key: string) => localStorage.removeItem(key);
const getLocalItem = (key: string) => localStorage.getItem(key);

export const storageMethods = { setLocalItem, delLocalItem, getLocalItem };


// LOCAL THEME BASE
export function setLocalTheme(themeMode?: string): void {

  const setDocumentClass = (cls: string) => doc.body.classList.add(cls);
  const delDocumentClass = () => doc.body.className = '';

  const currentTheme = themeMode ?? getLocalItem('theme'); 

  if(!currentTheme){
    setDocumentClass('light');
    setLocalItem('theme')('light');

    return;
  }
  // clean clases body tag
  delDocumentClass();
  setDocumentClass(currentTheme);

  themeMode && setLocalItem('theme')(currentTheme); //set new theme 
}
