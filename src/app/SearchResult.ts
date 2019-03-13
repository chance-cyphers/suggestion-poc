import {BankAccount} from './BankAccount';

export class SearchResult {
  took: number
  hits: Hits
}

class Hits {
  hits: Hit[]
}

class Hit {
  _source: BankAccount
}
