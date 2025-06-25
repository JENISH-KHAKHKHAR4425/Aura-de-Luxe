// Initialize AOS (Animate On Scroll)
AOS.init();

// Handle category tab switching
const tabs = document.querySelectorAll('.tab-link');
const grids = document.querySelectorAll('.product-grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show relevant category and hide others
    grids.forEach(grid => {
      if (grid.id === tab.dataset.category) {
        grid.classList.remove('hidden');
      } else {
        grid.classList.add('hidden');
      }
    });
  });
});

// Toggle view-all for extra products
function toggleExtraProducts(button) {
  const extraProducts = button.previousElementSibling;
  const isHidden = extraProducts.classList.contains("hidden");
  const category = button.getAttribute("data-category") || "";

  if (isHidden) {
    extraProducts.classList.remove("hidden");
    button.textContent = `− View Less ${category} Perfumes`;
  } else {
    extraProducts.classList.add("hidden");
    button.textContent = `+ View All ${category} Perfumes`;
  }
}
