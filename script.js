document.addEventListener('DOMContentLoaded', function() {
    const organizationsContainer = document.getElementById('organizations-container');
    const organizations = [
        // 第一个组织的信息
        {
            name: "ICJ主组织",
            founded: "2023-6-7",
            resources: "百万/人",
            description: "mcpe和2c2s霸主",
            achievements: "未统计",
            leaders: "未统计",
            contact: "详情见ICJ联盟宪法"
        },


        {
            name: "LIME无限",
            founded: "2023-6",
            resources: "约10万",
            description: "组织长期招收萌新，为萌新提供最基础游戏教学。",
            achievements: "建造基地",
            leaders: "lml1123",
            contact: "980966086"
        },

        {
            image:"https://pic.imgdb.cn/item/668cc009d9c307b7e962f08f.jpg"
            name: "BTR-天合/BTR-Trina",
            founded: "2023-10-20",
            resources: "约30亿",
            description: "ICJ分组织，人少，有意者联系高层，别找首领",
            achievements: "保密",
            leaders: "ThreeNine27，WXH88688，Wendichu，BTRBitJekv44，duepie23等",
            contact: "保密"
        },

        {
            name: "TRE",
            founded: "0001-1-1",
            resources: "约500亿",
            description: "TRE组织招人了无论你是建筑大佬，红石大佬，还是生存大师，或者还是PVP大佬(^.^)，公会内部氛围很好，成员热情有意者+962549754",
            achievements: "拷打成员",
            leaders: "HorridPark15077",
            contact: "962549754"
        },

        {
            name: "UST",
            founded: "未知",
            resources: "未知",
            description: "暂无",
            achievements: "未知",
            leaders: "未知",
            contact: "未知"
        },
        {
            name: "AEH",
            founded: "未知",
            resources: "未知",
            description: "暂无",
            achievements: "未知",
            leaders: "未知",
            contact: "未知"
        },


        // 第二个组织的信息
        {
            name: "The Alliance",
            founded: "2016-02-15",
            resources: "Emeralds, Redstone, Lapis Lazuli",
            description: "The Alliance is a coalition of smaller factions, working together for mutual benefit.",
            achievements: "Developed advanced redstone contraptions, created a peaceful trading hub.",
            leaders: "Leader X",
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
