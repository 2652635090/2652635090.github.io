document.addEventListener('DOMContentLoaded', function() {
    const organizationsContainer = document.getElementById('organizations-container');
    const organizations = [
        {
            name: "LIME无限",
            founded: "2023/6/？？",
            resources: "约1万",
            description: "组织长期收萌新，组织不给萌新提供任何长期帮助，但会提供游戏教程和非利益性帮助。",
            achievements: "无",
            leaders: "lml1123",
            contact: "QQ群：980966086"
        },
        // Add more organizations here...
    ];

    organizations.forEach(org => {
        const orgDiv = document.createElement('div');
        orgDiv.className = 'organization';
        orgDiv.innerHTML = `
            <h2>${org.name}</h2>
            <p><strong>Founded:</strong> ${org.founded}</p>
            <p><strong>Resources:</strong> ${org.resources}</p>
            <p>${org.description}</p>
            <p><strong>Achievements:</strong> ${org.achievements}</p>
            <p><strong>Leaders:</strong> ${org.leaders}</p>
            <p><strong>Contact:</strong> <a href="https://${org.contact}">${org.contact}</a></p>
        `;
        organizationsContainer.appendChild(orgDiv);
    });
});

