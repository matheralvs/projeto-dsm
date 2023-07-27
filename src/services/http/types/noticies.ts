export interface Url {
  value: string
  matchLevel: string
  matchedWords: string[]
  fullyHighlighted?: boolean
}

export interface Author {
  value: string
  matchLevel: string
  matchedWords: unknown[]
}

export interface Exhaustive {
  nbHits: boolean
  typo: boolean
}

export interface AfterFetch {
  total: number
}

export interface Request {
  roundTrip: number
}

export interface Fetch {
  scanning: number
  total: number
}

export interface ProcessingTimingsMs {
  afterFetch: AfterFetch
  fetch: Fetch
  request: Request
  total: number
}

export interface Title {
  value: string
  matchLevel: string
  fullyHighlighted: boolean
  matchedWords: string[]
}

export interface HighlightResult {
  title: Title
  url: Url
  author: Author
}

export interface Hits {
  created_at: string
  title: string
  url: string
  author: string
  points: number
  story_text: unknown
  comment_text: unknown
  num_comments: number
  story_id: unknown
  story_title: unknown
  story_url: unknown
  parent_id: unknown
  created_at_i: number
  relevancy_score?: number
  _tags: string[]
  objectID: string
  _highlightResult: HighlightResult
}

export interface Noticies {
  hits: Hits[]
  nbHits: number
  page: number
  nbPages: number
  hitsPerPage: number
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  exhaustive: Exhaustive
  query: string
  params: string
  processingTimeMS: number
  processingTimingsMS: ProcessingTimingsMs
  serverTimeMS: number
}
