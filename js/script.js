const timelineData = [
  {
    year: 2026,
    milestone: false,
    items: [
      { icon: "🏆", text: "Won 2 robotics &amp; physical AI awards" },
      { icon: "🏊", text: "Won 1 swimming award" }
    ]
  },
  {
    year: 2027,
    milestone: false,
    items: [
      { icon: "🌍", text: "Made a contribution to the robotics &amp; physical AI community and open-sourced it" },
      { icon: "🏆", text: "Won 2 robotics &amp; physical AI awards" },
      { icon: "🏊", text: "Won 1 swimming award" }
    ]
  },
  {
    year: 2028,
    milestone: false,
    items: [
      { icon: "🏆", text: "Won 2 robotics &amp; physical AI awards" },
      { icon: "🏊", text: "Won 1 swimming award" }
    ]
  },
  {
    year: 2029,
    milestone: true,
    badge: "Nonprofit Founder",
    items: [
      { icon: "🌱", text: "Founded a nonprofit giving underrepresented girls the opportunity to experience robotics &amp; physical AI" },
      { icon: "🏆", text: "Won 2 robotics &amp; physical AI awards" },
      { icon: "🏊", text: "Won 1 swimming award" }
    ]
  },
  {
    year: 2030,
    milestone: true,
    badge: "Startup Founder",
    items: [
      { icon: "🚀", text: "Founded a for-profit startup focused on robotics &amp; physical AI" },
      { icon: "🌍", text: "Made a contribution to the robotics &amp; physical AI community and open-sourced it" },
      { icon: "🏆", text: "Won 2 robotics &amp; physical AI awards" },
      { icon: "🏊", text: "Won 1 swimming award" }
    ]
  }
];

function renderTimeline() {
  const container = document.getElementById("timelineList");
  if (!container) return;

  const html = timelineData.map(entry => `
    <div class="timeline-item${entry.milestone ? " milestone" : ""}">
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        ${entry.milestone ? `<span class="milestone-badge">${entry.badge}</span>` : ""}
        <div class="timeline-year">${entry.year}</div>
        <ul class="timeline-list">
          ${entry.items.map(item => `<li><span class="icon">${item.icon}</span><span>${item.text}</span></li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  container.innerHTML = html;

  const items = container.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
