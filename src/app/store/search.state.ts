export interface SearchState {
  words: string;
  suggestions: string[];
}

export const initializeSearchState = () => {
  return {
    words: "hello ngrx",
    suggestions: []
  }
};
