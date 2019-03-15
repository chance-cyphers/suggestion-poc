export interface SearchState {
  words: string;
  suggestions: string[];
  selectionIndex: number
}

export const initializeSearchState = () => {
  return {
    words: "hello ngrx",
    suggestions: [],
    selectionIndex: -1
  }
};
