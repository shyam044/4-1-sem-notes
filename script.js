// Generic toggle function for sections

function toggleSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  if (button && section) {
    section.classList.add("d-none"); // Start hidden
    button.addEventListener("click", () => {
      section.classList.toggle("d-none");
    });
  }
}

// ========== Main Sections ==========
toggleSection('clicktopics', 'topics');        // Show full topics area
toggleSection('clickalgo', 'algorithmtopics'); 
toggleSection('clickwns', 'wnstopics'); // Algorithms section
toggleSection('clickds', 'DStopics');          // Data Structures section
toggleSection('clickprobability', 'probabilitytopics');  // Probability section toggle
toggleSection('clicklinear','lineartopics');
