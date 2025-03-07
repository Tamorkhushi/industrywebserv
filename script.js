// Function to toggle case study visibility
function toggleCaseStudy(caseId) {
    const caseStudy = document.getElementById(caseId);
    if (caseStudy.style.display === 'block') {
      caseStudy.style.display = 'none';
    } else {
      caseStudy.style.display = 'block';
    }
  }
  
