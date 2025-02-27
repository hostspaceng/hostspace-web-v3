export function extractFirstParagraph(html: string): string {
  if (typeof window !== "undefined") {
    // Create a temporary DOM element
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = html;

    // Find the first paragraph
    const firstParagraph = temporaryElement.querySelector("p");
    return firstParagraph ? firstParagraph.textContent || "" : "";
  }
  return "";
}
