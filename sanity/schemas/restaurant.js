import { string } from "prop-types";

export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurante name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the restaurant",
    },
    {
      name: "lon",
      type: "number",
      title: "Longitude of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restarant address",
    },
    {
      name: "rating",
      type: "string",
      title: "Rating of the Restaurant",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
