// Lấy các elements cần thiết
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');

    const searchInput = document.querySelector('.search-input');
    const categoryPills = document.querySelectorAll('.category-pill');
    const sortOptions = document.querySelectorAll('.sort-option');
    const mainCoursesGrid = document.querySelector('.main-courses .courses-grid');
    const childrenCoursesGrid = document.querySelector('.children-section .courses-grid');
    const mainCourseCards = document.querySelectorAll('.main-courses .course-card');
    const childrenCourseCards = document.querySelectorAll('.children-section .course-card');
    const paginationContainer = document.querySelector('.pagination-container');

    console.log('Elements found:', {
        searchInput,
        categoryPills: categoryPills.length,
        sortOptions: sortOptions.length,
        mainCoursesGrid,
        childrenCoursesGrid,
        mainCourseCards: mainCourseCards.length,
        childrenCourseCards: childrenCourseCards.length,
        paginationContainer
    });

    // Khởi tạo state
    let currentCategory = 'all';
    let currentSort = 'latest';
    let searchQuery = '';
    let currentPage = 1;
    const itemsPerPage = 3;

    // Hàm lọc và hiển thị khóa học
    function filterAndDisplayCourses() {
        console.log('Filtering courses with:', {
            category: currentCategory,
            sort: currentSort,
            search: searchQuery,
            page: currentPage
        });

        // Xử lý khóa học chính
        const mainCourses = Array.from(mainCourseCards);
        let filteredMainCourses = filterCourses(mainCourses);
        
        // Xử lý khóa học trẻ em
        const childrenCourses = Array.from(childrenCourseCards);
        let filteredChildrenCourses = filterCourses(childrenCourses);

        // Sắp xếp các khóa học
        sortCourses(filteredMainCourses);
        sortCourses(filteredChildrenCourses);

        // Ẩn tất cả khóa học
        mainCourses.forEach(course => {
            course.style.display = 'none';
            course.style.animation = '';
        });
        childrenCourses.forEach(course => {
            course.style.display = 'none';
            course.style.animation = '';
        });

        // Hiển thị khóa học chính theo trang
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        
        console.log('Displaying courses from index', start, 'to', end);
        console.log('Total filtered courses:', filteredMainCourses.length);
        
        filteredMainCourses.slice(start, end).forEach((course, index) => {
            course.style.display = 'flex';
            course.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
            console.log('Displaying course:', course.querySelector('.course-title').textContent);
        });

        // Hiển thị tất cả khóa học trẻ em đã lọc
        if (currentCategory === 'all' || currentCategory === 'children') {
            filteredChildrenCourses.forEach((course, index) => {
                course.style.display = 'flex';
                course.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
            });
        }

        // Cập nhật phân trang dựa trên số lượng khóa học chính
        const totalPages = Math.ceil(filteredMainCourses.length / itemsPerPage);
        console.log('Total pages:', totalPages, 'Current page:', currentPage);
        updatePagination(totalPages);

        // Đảm bảo grid layout được cập nhật
        mainCoursesGrid.style.display = 'grid';
        mainCoursesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
    }

    // Hàm lọc khóa học
    function filterCourses(courses) {
        return courses.filter(course => {
            let shouldShow = true;
            
            // Lọc theo search query
            if (searchQuery) {
                const title = course.querySelector('.course-title')?.textContent.toLowerCase() || '';
                const desc = course.querySelector('.course-desc')?.textContent.toLowerCase() || '';
                const tag = course.querySelector('.card-tag')?.textContent.toLowerCase() || '';
                
                shouldShow = title.includes(searchQuery.toLowerCase()) || 
                            desc.includes(searchQuery.toLowerCase()) ||
                            tag.includes(searchQuery.toLowerCase());
            }
            
            // Lọc theo category
            if (currentCategory !== 'all') {
                const courseCategory = Array.from(course.classList)
                    .find(cls => cls !== 'course-card');
                shouldShow = shouldShow && courseCategory === currentCategory;
            }
            
            return shouldShow;
        });
    }

    // Hàm sắp xếp khóa học
    function sortCourses(courses) {
        courses.sort((a, b) => {
            if (currentSort === 'latest') {
                const dateA = new Date(a.dataset.date || '');
                const dateB = new Date(b.dataset.date || '');
                return dateB - dateA;
            } else if (currentSort === 'popular') {
                const ratingA = parseFloat(a.dataset.rating || '0');
                const ratingB = parseFloat(b.dataset.rating || '0');
                return ratingB - ratingA;
            }
            return 0;
        });
    }

    // Hàm cập nhật phân trang
    function updatePagination(totalPages) {
        const paginationButtons = document.querySelectorAll('.pagination-button');
        
        paginationButtons.forEach(button => {
            const page = button.textContent;
            if (page && !isNaN(page)) {
                button.classList.toggle('active', parseInt(page) === currentPage);
            }
            
            if (button.querySelector('.fa-chevron-left')) {
                button.disabled = currentPage === 1;
                button.classList.toggle('disabled', currentPage === 1);
            }
            
            if (button.querySelector('.fa-chevron-right')) {
                button.disabled = currentPage === totalPages;
                button.classList.toggle('disabled', currentPage === totalPages);
            }
        });
    }

    // Hàm xử lý chuyển trang
    window.changePage = function(page) {
        const filteredMainCourses = filterCourses(Array.from(mainCourseCards));
        const totalPages = Math.ceil(filteredMainCourses.length / itemsPerPage);
        
        // Lưu vị trí scroll hiện tại của phần tử pagination
        const paginationElement = document.querySelector('.pagination-container');
        const paginationRect = paginationElement.getBoundingClientRect();
        const offsetFromBottom = window.innerHeight - paginationRect.bottom;
        
        if (page === 'prev' && currentPage > 1) {
            currentPage--;
        } else if (page === 'next' && currentPage < totalPages) {
            currentPage++;
        } else if (typeof page === 'number' && page <= totalPages) {
            currentPage = page;
        }
        
        filterAndDisplayCourses();
        
        // Đặt lại vị trí scroll để giữ pagination ở cùng vị trí tương đối so với viewport
        requestAnimationFrame(() => {
            const newPaginationRect = paginationElement.getBoundingClientRect();
            const newScrollPosition = window.pageYOffset + (newPaginationRect.bottom - (window.innerHeight - offsetFromBottom));
            window.scrollTo({
                top: newScrollPosition,
                behavior: 'instant'
            });
        });
    };

    // Xử lý search input với debounce
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchQuery = e.target.value;
                currentPage = 1;
                filterAndDisplayCourses();
            }, 300);
        });
    }

    // Xử lý category pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.category || 'all';
            currentPage = 1;

            // Reset search khi chọn category "Tất cả"
            if (currentCategory === 'all') {
                searchInput.value = '';
                searchQuery = '';
            } else {
                // Giữ nguyên giá trị search cho các category khác
                searchQuery = searchInput.value;
            }
            
            filterAndDisplayCourses();
        });
    });

    // Xử lý sort options
    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            sortOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            currentSort = option.dataset.sort;
            filterAndDisplayCourses();
        });
    });

    // Thêm animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { 
                opacity: 0;
                transform: translateY(20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Khởi tạo ban đầu
    filterAndDisplayCourses();
}); 