import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CapitalsWeather from "../CapitalsWeather";

import capitals from "../../utils/idCapitalsBrazil";

// Should be to match snapshot
test("Should be rendered without crash", () => {
    const component = render(<CapitalsWeather capitals={[]} />);

    expect(component.container).toMatchSnapshot();
});

// Should be have two colums
test("Should be have two colums", () => {
    const { getByTestId } = render(<CapitalsWeather capitals={[]} />);
});

// Should be have ten list item
test("Should be have ten list item", () => { });

// Cannot have repeat items
test("Cannot have repeat items", () => { });