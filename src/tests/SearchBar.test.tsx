import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  it("обновляет значение при вводе текста", () => {
    const searchQuery = "";

    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search posts...") as HTMLInputElement;

    // Проверяем начальное значение
    expect(input.value).toBe(searchQuery);

    // Симулируем ввод текста
    fireEvent.change(input, { target: { value: "Next.js" } });
  });
});
