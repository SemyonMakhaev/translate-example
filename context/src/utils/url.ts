import { format } from 'url';

export const buildTranslateUrl = (value: string) => format({
    protocol: 'https',
    hostname: 'translate.yandex.net',
    pathname: '/api/v1.5/tr.json/translate',
    query: {
        key: process.env.REACT_APP_TRANSLATE_API_TOKEN,
        text: value,
        lang: 'ru-en',
        format: 'plain',
    }
});
