import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "../../container/user/login";

test("testing login component", async() => {
    render(
        <Login  />
    )

    expect(screen.getByTestId('login-email-input')).toBeInTheDocument()
    expect(screen.getByTestId('login-email-error')).toBeInTheDocument()
    expect(screen.getByTestId('login-password-input')).toBeInTheDocument()
    expect(screen.getByTestId('login-password-error')).toBeInTheDocument()
    expect(screen.getByTestId('login-h3-tag')).toBeInTheDocument()
})