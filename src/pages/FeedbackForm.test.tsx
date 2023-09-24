import React from "react";
import { renderWithProviders } from "../utils/test-utils";
import FeedbackForm from "./FeedbackForm";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form page", function () {
  it("should all elements to be on the page", function () {
    renderWithProviders(<FeedbackForm />);

    expect(screen.getByText("Feedback Form")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /first name/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole("spinbutton", { name: /rating/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /comment/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("should redirect to the result page when all data in the form is correct", async () => {
    renderWithProviders(<FeedbackForm />);

    const user = userEvent.setup();

    await user.type(screen.getByRole("textbox", { name: /first name/i }), "Anna");
    await user.type(screen.getByRole("textbox", { name: /email/i }), "anna@gmail.com");
    await user.type(screen.getByRole("spinbutton", { name: /rating/i }), "4");
    await user.type(screen.getByRole("textbox", { name: /comment/i }), "it is a very good product");

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(window.location.href).toMatch("results");
  });

  it("should not redirect to the result page when the data in the form is incorrect", async () => {
    renderWithProviders(<FeedbackForm />);

    const user = userEvent.setup();

    await user.type(screen.getByRole("textbox", { name: /first name/i }), "mmm");
    await user.type(screen.getByRole("textbox", { name: /email/i }), "..");
    await user.type(screen.getByRole("spinbutton", { name: /rating/i }), "6");
    await user.type(screen.getByRole("textbox", { name: /comment/i }), "nothing");

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(window.location.href).toMatch("/");
  });
});
