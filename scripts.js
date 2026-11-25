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

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.dataset.theme !== 'light';
        document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
        themeToggle.setAttribute('aria-pressed', String(!isDark));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('.email-link');
    if (!emailLink) return;

    const email = String.fromCharCode(99, 50, 49, 50, 46, 102, 101, 108, 105, 120, 104, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109);
    emailLink.href = `mailto:${email}`;
});