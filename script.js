// تحديث التاريخ الحالي
function updateCurrentDate() {
    const dateElements = document.querySelectorAll('.date, #currentDate');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('ar-SA', options);
    
    dateElements.forEach(element => {
        element.textContent = formattedDate;
    });
}

// تحديث الإحصائيات في الصفحة الرئيسية
function updateHomeStats() {
    const stats = calculateStats();
    
    // تحديث الإحصائيات الرئيسية
    const totalUniversitiesEl = document.getElementById('totalUniversities');
    const totalProgramsEl = document.getElementById('totalPrograms');
    const completedVisitsEl = document.getElementById('completedVisits');
    const pendingVisitsEl = document.getElementById('pendingVisits');
    
    if (totalUniversitiesEl) animateCounter(totalUniversitiesEl, stats.totalUniversities);
    if (totalProgramsEl) animateCounter(totalProgramsEl, stats.totalPrograms);
    if (completedVisitsEl) animateCounter(completedVisitsEl, stats.completedVisits);
    if (pendingVisitsEl) animateCounter(pendingVisitsEl, stats.pendingVisits + stats.reviewVisits);
    
    // تحديث عدد البرامج حسب التخصص
    const islamicCountEl = document.getElementById('islamicCount');
    const educationCountEl = document.getElementById('educationCount');
    const healthCountEl = document.getElementById('healthCount');
    const scienceCountEl = document.getElementById('scienceCount');
    const engineeringCountEl = document.getElementById('engineeringCount');
    
    if (islamicCountEl) islamicCountEl.textContent = `${stats.specialties.islamic} برنامج`;
    if (educationCountEl) educationCountEl.textContent = `${stats.specialties.education} برنامج`;
    if (healthCountEl) healthCountEl.textContent = `${stats.specialties.health} برنامج`;
    if (scienceCountEl) scienceCountEl.textContent = `${stats.specialties.science} برنامج`;
    if (engineeringCountEl) engineeringCountEl.textContent = `${stats.specialties.engineering} برنامج`;
}

// دالة لتحريك العدادات
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// تهيئة الصفحة الرئيسية
function initHomePage() {
    updateCurrentDate();
    updateHomeStats();
    
    // إضافة تأثيرات تفاعلية للبطاقات
    const statCards = document.querySelectorAll('.stat-card, .specialty-card, .info-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// التحكم في القائمة الجانبية للأجهزة المحمولة
function initMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // إنشاء زر القائمة للأجهزة المحمولة
    if (window.innerWidth <= 1024) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 1.5em;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            display: none;
        `;
        
        if (window.innerWidth <= 1024) {
            menuBtn.style.display = 'block';
        }
        
        document.body.appendChild(menuBtn);
        
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (sidebar.classList.contains('active')) {
                menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // إغلاق القائمة عند النقر خارجها
        mainContent.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
}

// إضافة تأثيرات الانتقال السلس
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// تهيئة البحث
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // يمكن إضافة منطق البحث هنا حسب الصفحة
            console.log('البحث عن:', searchTerm);
        });
    }
}

// إضافة تأثير التحميل
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = `
        <div style="text-align: center;">
            <i class="fas fa-spinner fa-spin" style="font-size: 3em; color: #667eea;"></i>
            <p style="margin-top: 20px; color: #7f8c8d;">جاري التحميل...</p>
        </div>
    `;
    return loading;
}

// دالة لعرض الرسائل التوضيحية
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideDown 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// إضافة الأنماط للرسوم المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
    }
    
    @media (max-width: 1024px) {
        .sidebar {
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        
        .sidebar.active {
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
    initMobileMenu();
    addSmoothScrolling();
    initSearch();
    
    // إضافة تأثير الظهور التدريجي للعناصر
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.stat-card, .specialty-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
});

// تحديث حجم النافذة
window.addEventListener('resize', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        if (window.innerWidth <= 1024) {
            menuBtn.style.display = 'block';
        } else {
            menuBtn.style.display = 'none';
            document.querySelector('.sidebar').classList.remove('active');
        }
    }
});
