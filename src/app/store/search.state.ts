export interface SearchState {
  words: string;
}

export const initializeSearchState = () => {
  return {
    words: "hello ngrx"
  }
};

// export interface AppState {
//   search:
// }
