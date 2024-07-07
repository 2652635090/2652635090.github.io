document.addEventListener('DOMContentLoaded', function() {
    const organizationsContainer = document.getElementById('organizations-container');
    const organizations = [
        // 第一个组织的信息
        {
            name: "The Empire",
            founded: "2015-06-01",
            resources: "Diamonds, Gold, Iron",
            description: "The Empire is a powerful organization that controls vast lands on the server.",
            achievements: "Conquered multiple regions, established trade routes.",
            leaders: "Emperor Alex, General Luna",
            contact: "discord.gg/theempire"
        },
        // 第二个组织的信息
        {
            name: "The Alliance",
            founded: "2016-02-15",
            resources: "Emeralds, Redstone, Lapis Lazuli",
            description: "The Alliance is a coalition of smaller factions, working together for mutual benefit.",
            achievements: "Developed advanced redstone contraptions, created a peaceful trading hub.",
            leaders: "Leader X, Leader Y",
            contact: "discord.gg/thealliance"
        }
        // 可以继续添加更多组织的信息...
    ];

    organizations.forEach(org => {
        const orgDiv = document.createElement('div');
        orgDiv.className = 'organization';
        orgDiv.innerHTML = `
            <h2>${org.name}</h2>
            <div class="info">
                <strong>Founded:</strong> ${org.founded}<br>
                <strong>Resources:</strong> ${org.resources}
            </div>
            <p>${org.description}</p>
            <div class="info">
                <strong>Achievements:</strong> ${org.achievements}
            </div>
            <div class="info">
                <strong>Leaders:</strong> ${org.leaders}
            </div>
            <div class="contact">
                <strong>Contact:</strong> <a href="https://${org.contact}">${org.contact}</a>
            </div>
        `;
        organizationsContainer.appendChild(orgDiv);
    });
});
