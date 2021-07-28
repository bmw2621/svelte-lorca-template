/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/svelte";

import Comp from "./App.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Comp, { name: "World" });

  expect(getByText("Hello World!")).toBeInTheDocument();
});
