import React from "react";
import { render } from "@testing-library/react";

import SignUp from "@pages/signup";

describe("sign-up", () => {
  it("have to show text 회원가입", () => {
    const { getByText } = render(<SignUp />);

    expect(getByText("회원가입")).toBeInTheDocument();
  });
});
