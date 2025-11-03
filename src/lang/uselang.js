import { useContext } from 'react';
import { LangContext } from '../lang/contex';

export function useLang() {
  return useContext(LangContext);
}
