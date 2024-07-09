document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const organizationItems = document.querySelectorAll('.organization-item');

    // 搜索功能
    searchBox.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        organizationItems.forEach(function(item) {
            const title = item.querySelector('h2').textContent.toLowerCase();
            const isVisible = title.includes(searchValue);
            item.style.display = isVisible ? '' : 'none';
        });
    });

    // 点击组织名称切换详情
    organizationItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const description = this.querySelector('.description');
            if (description.style.display === 'none') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});
