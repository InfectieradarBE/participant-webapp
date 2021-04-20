import { FooterConfig } from "case-web-app-core/build/types/footerConfig";

export const footerConfig: FooterConfig = {
  columns: [
    {
      columnKey: 'services',
      items: [
        {
          type: "internal",
          itemKey: "contact",
          value: "/contact"
        },
        {
          type: "external",
          itemKey: "twitter",
          value: "https://twitter.com/InfectieradarBe",
          iconClass: "fab fa-twitter"
        }
      ]
    },
    {
      columnKey: 'about',
      items: [
        {
          type: "internal",
          itemKey: "privacy",
          value: "/privacy"
        },
        {
          type: "internal",
          itemKey: "disclaimer",
          value: "/disclaimer"
        },
        {
          type: "internal",
          itemKey: "accessibility",
          value: "/accessibility"
        },
      ]
    },
    {
      columnKey: "languages",
      items: [
        {
          type: "language",
          itemKey: "nl-be",
          value: "nl-be"
        },
        {
          type: "language",
          itemKey: "en",
          value: "en"
        },
        {
          type: "language",
          itemKey: "fr-be",
          value: "fr-be"
        },
        {
          type: "language",
          itemKey: "de-be",
          value: "de-be"
        }
      ]
    }
  ]
}
