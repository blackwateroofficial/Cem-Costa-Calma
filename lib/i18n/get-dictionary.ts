import type { Locale } from "./config";
import es from "@/translations/es.json";
import en from "@/translations/en.json";
import de from "@/translations/de.json";

const dictionaries = { es, en, de };

export type Dictionary = typeof es;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
