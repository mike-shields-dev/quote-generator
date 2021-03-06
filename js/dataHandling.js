async function fetchQuotes() {
  const apiUrl = "https://type.fit/api/quotes"
  try {
    const response = await fetch(apiUrl)
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}

function getCachedQuotes() {
  return JSON.parse(localStorage.getItem("quotes"))
}

function setCachedQuotes(quotes) {
  localStorage.setItem(
    "quotes",
    JSON.stringify({
      payload: quotes,
      dateCreated: Date.now(),
    })
  )
}

function selectRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

async function updateCacheIfStale() {
  const cachedQuotes = getCachedQuotes()
  const expiryTime = 1000 * 60 * 60 * 24

  if (!cachedQuotes || cachedQuotes.dateCreated + expiryTime < Date.now()) {
    const fetchedQuotes = await fetchQuotes()
    setCachedQuotes(fetchedQuotes)
  }
}

export { fetchQuotes, getCachedQuotes, updateCacheIfStale, selectRandomQuote }