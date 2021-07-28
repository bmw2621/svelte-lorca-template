/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import AppComponent from "./App.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(AppComponent, { props: { name: "World" } });

  expect(getByText("Hello World!")).toBeInTheDocument();
});
