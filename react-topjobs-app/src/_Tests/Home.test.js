import { screen, render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../UI/Home";
describe("Home Component Test Suite", () => {
  it("checks whether Image is Present", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByAltText("dreamjob")).toBeInTheDocument();
  });
  it("checks whether Image is loaded", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    const ImgElement = screen.getByRole("img", { name: /carouselimg2/i });
    expect(ImgElement).toBeInTheDocument;
    //To check whether a button with Jobs is available or not
    const ButtonElement = screen.getByRole("button", { name: /coming soon/i }); 
    expect(ButtonElement).toBeInTheDocument;
  });
  it("checks whether logo is Loaded", () => {
    const logo = screen.queryByRole("img", { name: /logo/i });
    expect(logo).toBeInTheDocument;
  });
});
