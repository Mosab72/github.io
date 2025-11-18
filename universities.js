// صفحة إحصائيات الجامعات

let currentFilter = {
    status: 'all',
    sortBy: 'name',
    search: ''
};

// تهيئة صفحة الجامعات
function initUniversitiesPage() {
    updateCurrentDate();
    updateUniversitiesStats();
    renderUniversitiesTable();
    setupEventListeners();
}

// تحديث إحصائيات الجامعات
function updateUniversitiesStats() {
    const universities = groupByUniversity();
    
    const completedUniversities = universities.filter(u => 
        u.programs.some(p => p.status === "نُفذت الزيارة")
    ).length;
    
    const pendingUniversities = universities.filter(u => 
        u.programs.some(p => p.status !== "نُفذت الزيارة")
    ).length;
    
    const totalPrograms = universities.reduce((sum, u) => sum + u.totalPrograms, 0);
    const avgPrograms = (totalPrograms / universities.length).toFixed(1);
    
    document.getElementById('totalUniversities').textContent = universities.length;
    document.getElementById('completedUniversities').textContent = completedUniversities;
    document.getElementById('pendingUniversities').textContent = pendingUniversities;
    document.getElementById('avgPrograms').textContent = avgPrograms;
}

// عرض جدول الجامعات
function renderUniversitiesTable() {
    const tbody = document.getElementById('universitiesTableBody');
    if (!tbody) return;
    
    let universities = groupByUniversity();
    
    // تطبيق الفلاتر
    if (currentFilter.status !== 'all') {
        universities = universities.filter(u => 
            u.statuses.includes(currentFilter.status)
        );
    }
    
    if (currentFilter.search) {
        universities = universities.filter(u => 
            u.name.toLowerCase().includes(currentFilter.search.toLowerCase())
        );
    }
    
    // الترتيب
    universities.sort((a, b) => {
        switch (currentFilter.sortBy) {
            case 'name':
                return a.name.localeCompare(b.name, 'ar');
            case 'visits':
                return b.visits - a.visits;
            case 'programs':
                return b.totalPrograms - a.totalPrograms;
            default:
                return 0;
        }
    });
    
    // مسح الجدول
    tbody.innerHTML = '';
    
    // ملء الجدول
    universities.forEach((university, index) => {
        const row = document.createElement('tr');
        
        // الحالة الرئيسية
        const mainStatus = university.statuses[0];
        const statusClass = getStatusClass(mainStatus);
        
        // التاريخ الأول
        const firstDate = formatDate(university.dates[0]);
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${university.name}</strong></td>
            <td>${firstDate}</td>
            <td><strong>${university.totalPrograms}</strong></td>
            <td><span class="status-badge ${statusClass}">${mainStatus}</span></td>
            <td><strong>${university.visits}</strong></td>
            <td>
                <button class="action-btn" onclick="showUniversityDetails('${university.name}')">
                    <i class="fas fa-eye"></i> التفاصيل
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    // إذا لم توجد نتائج
    if (universities.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px;">
                    <i class="fas fa-search" style="font-size: 3em; color: #bdc3c7; margin-bottom: 15px;"></i>
                    <p style="color: #7f8c8d; font-size: 1.1em;">لا توجد نتائج</p>
                </td>
            </tr>
        `;
    }
}

// تحديد فئة الحالة
function getStatusClass(status) {
    if (status === "نُفذت الزيارة") return 'completed';
    if (status === "أُرسلت الدعوات") return 'pending';
    return 'review';
}

// عرض تفاصيل الجامعة
function showUniversityDetails(universityName) {
    const universities = groupByUniversity();
    const university = universities.find(u => u.name === universityName);
    
    if (!university) return;
    
    const modal = document.getElementById('universityModal');
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalUniversityName');
    
    modalTitle.textContent = university.name;
    
    // تجميع البرامج حسب التخصص
    const programsBySpecialty = {};
    university.programs.forEach(program => {
        if (!programsBySpecialty[program.specialty]) {
            programsBySpecialty[program.specialty] = [];
        }
        programsBySpecialty[program.specialty].push(program);
    });
    
    let content = `
        <div style="margin-bottom: 30px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; text-align: center;">
                    <i class="fas fa-book" style="font-size: 2em; margin-bottom: 10px;"></i>
                    <p style="font-size: 0.9em; opacity: 0.9; margin-bottom: 5px;">عدد البرامج</p>
                    <p style="font-size: 2em; font-weight: bold;">${university.totalPrograms}</p>
                </div>
                <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 20px; border-radius: 12px; text-align: center;">
                    <i class="fas fa-check-circle" style="font-size: 2em; margin-bottom: 10px;"></i>
                    <p style="font-size: 0.9em; opacity: 0.9; margin-bottom: 5px;">الزيارات</p>
                    <p style="font-size: 2em; font-weight: bold;">${university.visits}</p>
                </div>
            </div>
        </div>
    `;
    
    // عرض البرامج حسب التخصص
    Object.entries(programsBySpecialty).forEach(([specialty, programs]) => {
        content += `
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2c3e50; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e1e8ed;">
                    <i class="fas fa-layer-group"></i> ${specialty}
                </h3>
                <div style="display: grid; gap: 15px;">
        `;
        
        programs.forEach(program => {
            const statusClass = getStatusClass(program.status);
            content += `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; border-right: 4px solid ${getSpecialtyColor(specialty)};">
                    <h4 style="color: #34495e; margin-bottom: 10px;">${program.program}</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 15px; font-size: 0.9em; color: #7f8c8d;">
                        <span><i class="fas fa-calendar"></i> ${formatDate(program.date)}</span>
                        <span><i class="fas fa-book"></i> ${program.totalPrograms} برامج</span>
                        <span><i class="fas fa-check-double"></i> ${program.visits} زيارات</span>
                    </div>
                    <div style="margin-top: 10px;">
                        <span class="status-badge ${statusClass}">${program.status}</span>
                    </div>
                </div>
            `;
        });
        
        content += `
                </div>
            </div>
        `;
    });
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// الحصول على لون التخصص
function getSpecialtyColor(specialty) {
    const colors = {
        'الإسلامية والعربية': '#e74c3c',
        'الإنسانية والتربوية': '#3498db',
        'الصحية': '#2ecc71',
        'العلمية': '#f39c12',
        'الهندسية': '#9b59b6'
    };
    return colors[specialty] || '#95a5a6';
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // البحث
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilter.search = e.target.value;
            renderUniversitiesTable();
        });
    }
    
    // فلتر الحالة
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
            currentFilter.status = e.target.value;
            renderUniversitiesTable();
        });
    }
    
    // الترتيب
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', (e) => {
            currentFilter.sortBy = e.target.value;
            renderUniversitiesTable();
        });
    }
    
    // إغلاق النافذة المنبثقة
    const modal = document.getElementById('universityModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// تصدير البيانات
function exportTableToCSV() {
    const universities = groupByUniversity();
    
    const headers = ['الجامعة', 'عدد البرامج', 'عدد الزيارات', 'التواريخ', 'الحالات'];
    const rows = universities.map(u => [
        u.name,
        u.totalPrograms,
        u.visits,
        u.dates.join('; '),
        u.statuses[0]
    ]);
    
    const csvArray = [headers, ...rows];
    const csvContent = csvArray.map(row => row.join(',')).join('\n');
    
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'universities_data.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('تم تصدير البيانات بنجاح', 'success');
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('universitiesTable')) {
        initUniversitiesPage();
    }
});
