import '@testing-library/jest-dom';
import 'whatwg-fetch'; // To run in jest environment
import { vi } from 'vitest';

vi.mock('../src/api/example');
