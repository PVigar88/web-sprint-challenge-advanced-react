import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const formHeader = screen.getByText("Checkout Form");
  expect(formHeader).toBeDefined();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  //test input data
  const firstName = "John";
  const lastName = "Smith";
  const address = "123 sesame street";
  const city = "NoWhere";
  const state = "WI";
  const zip = "45678";
  //selecting inputs
  const firstNameInput = screen.getByLabelText(/First Name/i);

  const lastNameInput = screen.getByLabelText(/Last Name/i);

  const addressInput = screen.getByLabelText(/Address/i);

  const cityInput = screen.getByLabelText(/City/i);

  const stateInput = screen.getByLabelText(/State/i);

  const zipInput = screen.getByLabelText(/Zip/i);

  const checkOutButton = screen.getByRole("button");
  //inputing data via userEvent
  userEvent.type(firstNameInput, firstName);

  userEvent.type(lastNameInput, lastName);

  userEvent.type(addressInput, address);

  userEvent.type(cityInput, city);

  userEvent.type(stateInput, state);

  userEvent.type(zipInput, zip);

  userEvent.click(checkOutButton);
  //validation
  const successDisplay = screen.getByTestId("successMessage");

  expect(successDisplay).toHaveTextContent(firstName);

  expect(successDisplay).toHaveTextContent(lastName);

  expect(successDisplay).toHaveTextContent(address);

  expect(successDisplay).toHaveTextContent(city);

  expect(successDisplay).toHaveTextContent(state);

  expect(successDisplay).toHaveTextContent(zip);
});
