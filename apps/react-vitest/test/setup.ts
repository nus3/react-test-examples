import "@testing-library/jest-dom";
import { vi } from "vitest";
import "whatwg-fetch"; // To run in jest environment

vi.mock("../src/api/example");
