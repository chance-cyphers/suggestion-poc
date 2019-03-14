import {BankAccount} from './BankAccount';

export class SearchResult {
  hits: Hits
  suggest: Suggest
}

class Hits {
  hits: Hit[]
}

class Hit {
  _source: BankAccount
}

class Suggest {
  peepsSuggest: SuggestOptions[]
}

class SuggestOptions {
  options: SuggestionOption[]
}

class SuggestionOption {
  text: string
}
