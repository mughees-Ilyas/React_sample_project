import { darken, lighten } from "polished";

const themeColors = {
  primary: "#AAB20A",
  secondary:"#444444",
  base: "#ffffff",
  danger:'#CB3535',
};

const colorVariations = {
  lighter: 0.2,
  darker: 0.15
};

export const colors = {
  ...makeVariations("primary", themeColors.primary),
  ...makeVariations("secondary", themeColors.secondary),
  ...makeVariations("base", themeColors.base),
  ...makeVariations("danger", themeColors.danger)
};

function makeVariations(name, color) {
  const variations = {};
  variations[name] = color;
  variations[`${name}Lighter`] = lighten(colorVariations.lighter, color);
  variations[`${name}Darker`] = darken(colorVariations.darker, color);
  return variations;
}
