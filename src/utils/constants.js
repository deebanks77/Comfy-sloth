import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to provide high-quality furniture solutions that enhance the comfort and style of our customers' living and working spaces.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to become the go-to furniture service provider for individuals and businesses seeking bespoke and unique furniture designs that complement their unique style and preferences",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Our company was founded in 2011 by a team of furniture enthusiasts who saw a need for a personalized approach to furniture solutions. Since then, we have worked tirelessly to establish ourselves as a trusted brand in the industry.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
