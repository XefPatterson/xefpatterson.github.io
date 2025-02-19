// Function to convert markdown-style emphasis to spans
function convertEmphasis() {
    const expertiseContent = document.querySelector('.expertise-content');
    if (!expertiseContent) return;

    // Replace *text* with <span> elements while preserving line breaks
    expertiseContent.innerHTML = expertiseContent.innerHTML
        .split('\n\n') // Split into paragraphs
        .map(paragraph => 
            paragraph.replace(/\*(.*?)\*/g, '<span class="expertise-highlight">$1</span>')
        )
        .join('<br><br>'); // Rejoin paragraphs with line breaks
}

// Run conversion when page loads
document.addEventListener('DOMContentLoaded', convertEmphasis);