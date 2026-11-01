import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/V2/App";

// Mock react-chartjs-2
jest.mock("react-chartjs-2", () => ({
  Bar: () => <div data-testid="chart" />,
}));

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");

  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
    observe: jest.fn((node) => {
      callback([{ isIntersecting: true, target: node }]);
    }),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

test("renders hero with payment platforms and resume link", () => {
  render(<App />);

  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading.textContent.toLowerCase()).toContain("payment platforms");

  const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
  expect(resumeLinks.length).toBeGreaterThan(0);
  expect(resumeLinks[0]).toHaveAttribute(
    "href",
    expect.stringContaining("Avinash_Tingre_Resume.pdf")
  );
});

test("renders Mastercard sub-role titles by default", () => {
  render(<App />);

  expect(screen.getByText(/Card Management Service/i)).toBeInTheDocument();
  expect(screen.getByText(/Authentication Orchestration/i)).toBeInTheDocument();
});

test("clicking theme toggle adds dark class and writes theme=dark to localStorage", () => {
  render(<App />);

  const toggleButtons = screen.getAllByRole("button", {
    name: /switch to dark mode/i,
  });
  expect(toggleButtons.length).toBeGreaterThan(0);

  fireEvent.click(toggleButtons[0]);

  expect(document.documentElement.classList.contains("dark")).toBe(true);
  expect(localStorage.getItem("theme")).toBe("dark");
});
