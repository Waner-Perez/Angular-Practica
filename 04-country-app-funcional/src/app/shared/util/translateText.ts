type DisplayNameType = 'region' | 'language' | 'currency' | 'script';

const translatedNameCache = new Map<string, Intl.DisplayNames>();

export const getTranslatedName = (
    text: string,
    language: string,
    type: DisplayNameType
): string => {
    const cacheKey = `${language}-${type}`;

    if (!translatedNameCache.has(cacheKey)) translatedNameCache.set(cacheKey, new Intl.DisplayNames([language], { type }));
    
    return translatedNameCache.get(cacheKey)!.of(text) ?? text;
};