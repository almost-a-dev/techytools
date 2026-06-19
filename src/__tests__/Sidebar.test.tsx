import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

describe('Sidebar Component', () => {
  it('renders all tool links', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    expect(screen.getByText('SQL Formatter')).toBeDefined();
    expect(screen.getByText('JSON Formatter')).toBeDefined();
    expect(screen.getByText('XML Formatter')).toBeDefined();
    expect(screen.getByText('XML to JSON')).toBeDefined();
  });

  it('filters tools based on search input', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search tools...');
    fireEvent.change(searchInput, { target: { value: 'sql' } });

    expect(screen.getByText('SQL Formatter')).toBeDefined();
    expect(screen.queryByText('JSON Formatter')).toBeNull();
  });

  it('shows empty message when no tools match search', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search tools...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    expect(screen.getByText('No tools found')).toBeDefined();
  });
});
