export interface SearchState {
  words: string;
  suggestions: string[];
  selectionIndex: number,
  filters: string[]
}

export const initializeSearchState = () => {
  return {
    words: "hello ngrx",
    suggestions: [],
    selectionIndex: -1,
    filters: []
  }
};
