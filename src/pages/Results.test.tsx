import React from "react";
import { renderWithProviders } from "../utils/test-utils";
import Results from "./Results";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form page", function () {
  it("should all elements to be on the page", function () {
    renderWithProviders(<Results />);

    expect(screen.getByText("Feedback Results")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /go back/i })).toBeInTheDocument();
  });

  it("should redirect to the rmain page when click on go back button", async () => {
    renderWithProviders(<Results />);

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: /go back/i }));

    expect(window.location.href).toMatch("/");
  });
});
