document.addEventListener('DOMContentLoaded', function() {
    const organizationsContainer = document.getElementById('organizations-container');
    const organizations = [
        // 第一个组织的信息
        {
            名称: "LIME无限",
            建立日期: "2023-6",
            资源数量: "约10万",
            组织描述: "组织长期招收萌新，为萌新提供最基础游戏教学。",
            过往成就: "建造基地",
            核心成员: "lml1123",
            联系QQ群: "980966086"
        },

        {
            组织名称: "BTR-天合/BTR-Trina",
            建立日期: "2023-10-20",
            资源数量: "约30亿",
            组织描述: "ICJ分组织，人少，有意者联系高层，别找首领",
            过往成就: "保密",
            核心成员: "ThreeNine27，WXH88688，Wendichu，BTRBitJekv44，duepie23等",
            联系方式: "保密"
        },

        {
            组织名称: "TRE",
            建立日期: "未知",
            资源数量: "约500亿",
            组织描述: "TRE组织是《我的世界》2B2Tmcpe.org和tk服务器中一个实力强大的玩家团体，以高效收集资源和建造壮观基地著称。他们不仅在游戏内拥有强大的物资储备和战略要地，还通过紧密的社区合作和积极的社区贡献，巩固了其在2B2Tmcpe服务器玩家中的传奇地位。",
            过往成就: "拷打成员",
            核心成员: "HorridPark15077",
            联系QQ群: "962549754"
        },

        {
            组织名称: "UST",
            建立日期: "未知",
            资源数量: "未知",
            组织描述: "暂无",
            过往成就: "未知",
            核心成员: "未知",
            联系方式: "未知"
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
