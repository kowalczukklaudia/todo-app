import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

it("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const todoAppElem = screen.getByTestId("app-wrapper");
  expect(todoAppElem).toBeInTheDocument();
});