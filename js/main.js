import { updateCacheIfStale } from "./dataHandling.js"
import renderNewQuote from "./renderNewQuote.js"
import tweetQuote from "./tweetQuote.js"
import { twitterBtn, newQuoteBtn, progressBar } from "./DOMElements.js"

await updateCacheIfStale()
await renderNewQuote()

newQuoteBtn.addEventListener("click", renderNewQuote)
twitterBtn.addEventListener("click", tweetQuote)

progressBar.addEventListener("animationend", () => {
  renderNewQuote()
})