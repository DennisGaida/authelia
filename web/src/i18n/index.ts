// Code generated by go generate. DO NOT EDIT.
//
// To edit the template for this file open:
//		./cmd/authelia-gen/templates/web_i18n_index.ts.tmpl
//
// Then run the following command to generate this file:
// 		go run ./cmd/authelia-gen locales
//

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { LocalStorageLanguageCurrent } from "@constants/LocalStorage";
import LocalStorageCustomDetector from "@i18n/detectors/localStorageCustom";
import { getBasePath } from "@utils/BasePath";

const basePath = getBasePath();

const CustomLanguageDetector = new LanguageDetector();

CustomLanguageDetector.addDetector(LocalStorageCustomDetector);

i18n.use(Backend)
    .use(CustomLanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["querystring", "localStorageCustom", "navigator"],
            lookupQuerystring: "lng",
            lookupLocalStorage: LocalStorageLanguageCurrent,
        },
        backend: {
            loadPath: basePath + "/locales/{{lng}}/{{ns}}.json",
        },
        load: "all",
        ns: ["portal", "settings"],
        defaultNS: "portal",
        fallbackLng: {
            default: ["en"],
            ar: ["en"],
            "ar-SA": ["ar", "en"],
            cs: ["en"],
            "cs-CZ": ["cs", "en"],
            da: ["en"],
            "da-DK": ["da", "en"],
            de: ["en"],
            el: ["en"],
            "el-GR": ["el", "en"],
            es: ["en"],
            fi: ["en"],
            fr: ["en"],
            hu: ["en"],
            it: ["en"],
            ja: ["en"],
            "ja-JP": ["ja", "en"],
            nb: ["en"],
            "nb-NO": ["nb", "en"],
            nl: ["en"],
            no: ["en"],
            pl: ["en"],
            pt: ["en"],
            "pt-BR": ["en"],
            ro: ["en"],
            ru: ["en"],
            sl: ["en"],
            "sl-SI": ["sl", "en"],
            sv: ["en"],
            "sv-SE": ["sv", "en"],
            uk: ["en"],
            "uk-UA": ["uk", "en"],
            zh: ["en"],
            "zh-CN": ["zh", "en"],
            "zh-TW": ["en"],
        },
        supportedLngs: [
            "en",
            "ar",
            "ar-SA",
            "cs",
            "cs-CZ",
            "da",
            "da-DK",
            "de",
            "el",
            "el-GR",
            "es",
            "fi",
            "fr",
            "hu",
            "it",
            "ja",
            "ja-JP",
            "nb",
            "nb-NO",
            "nl",
            "no",
            "pl",
            "pt",
            "pt-BR",
            "ro",
            "ru",
            "sl",
            "sl-SI",
            "sv",
            "sv-SE",
            "uk",
            "uk-UA",
            "zh",
            "zh-CN",
            "zh-TW",
        ],
        lowerCaseLng: false,
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false,
        },
        debug: false,
    });

export default i18n;
