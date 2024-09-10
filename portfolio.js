
const projects = [
    {
        title: "HUMAN IDENTIFICATION USING IRIS",
        description: ""
    },
    {
        title: "SMART RESUME SCANNER",
        description: ""
    },
    {
        title: "HOME AUTOMATION",
        description: ""
    },
    {
        title: "WATER MONITORING SYSTEM",
        description: ""
    }
];

function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalTitle.textContent = projects[projectId].title;
    modalDescription.textContent = projects[projectId].description;

    modal.style.display = "block";

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function createPortfolioItems() {
    const portfolioContainer = document.querySelector('.portfolio-container');

    portfolioContainer.innerHTML = '';

    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('portfolio-item');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="button" onclick="openModal(${index})">View Project</div>
        `;
        portfolioContainer.appendChild(projectItem);
    });
}

document.addEventListener('DOMContentLoaded', createPortfolioItems);

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.elements['name'].value;
    alert(`Thank you, ${name}! Your message has been sent.`);

    this.reset();
});