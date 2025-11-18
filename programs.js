// صفحة تفاصيل البرامج

let currentProgramsFilter = {
    specialty: 'all',
    level: 'all',
    status: 'all',
    search: ''
};

let currentView = 'cards'; // cards أو table

// تهيئة صفحة البرامج
function initProgramsPage() {
    updateCurrentDate();
    updateProgramsStats();
    renderPrograms();
    setupProgramsEventListeners();
}

// تحديث إحصائيات البرامج
function updateProgramsStats() {
    const stats = calculateStats();
    
    document.getElementById('totalPrograms').textContent = stats.totalPrograms;
    document.getElementById('bachelorPrograms').textContent = stats.levels.bachelor;
    document.getElementById('masterPrograms').textContent = stats.levels.master;
    document.getElementById('phdPrograms').textContent = stats.levels.phd;
}

// عرض البرامج
function renderPrograms() {
    let filteredPrograms = filterPrograms();
    
    if (currentView === 'cards') {
        renderProgramCards(filteredPrograms);
    } else {
        renderProgramsTable(filteredPrograms);
    }
}

// تصفية البرامج
function filterPrograms() {
    let filtered = [...programsData];
    
    // تطبيق الفلاتر
    if (currentProgramsFilter.specialty !== 'all') {
        filtered = filtered.filter(p => p.specialty === currentProgramsFilter.specialty);
    }
    
    if (currentProgramsFilter.level !== 'all') {
        filtered = filtered.filter(p => p.program.includes(currentProgramsFilter.level));
    }
    
    if (currentProgramsFilter.status !== 'all') {
        filtered = filtered.filter(p => p.status === currentProgramsFilter.status);
    }
    
    if (currentProgramsFilter.search) {
        const searchTerm = currentProgramsFilter.search.toLowerCase();
        filtered = filtered.filter(p => 
            p.program.toLowerCase().includes(searchTerm) ||
            p.university.toLowerCase().includes(searchTerm)
        );
    }
    
    return filtered;
}

// عرض البطاقات
function renderProgramCards(programs) {
    const container = document.getElementById('cardsView');
    if (!container) return;
    
    if (programs.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-search" style="font-size: 4em; color: #bdc3c7; margin-bottom: 20px;"></i>
                <p style="color: #7f8c8d; font-size: 1.2em;">لا توجد برامج تطابق معايير البحث</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    programs.forEach(program => {
        const card = createProgramCard(program);
        container.appendChild(card);
    });
}

// إنشاء بطاقة برنامج
function createProgramCard(program) {
    const card = document.createElement('div');
    card.className = `program-card ${getSpecialtyClass(program.specialty)}`;
    card.onclick = () => showProgramDetails(program);
    
    const level = getProgramLevel(program.program);
    const levelClass = getLevelClass(level);
    const statusClass = getStatusClass(program.status);
    
    card.innerHTML = `
        <div class="program-header">
            <span class="program-level ${levelClass}">${level}</span>
        </div>
        <h3 class="program-title">${program.program}</h3>
        <div class="program-info">
            <div class="program-info-item">
                <i class="fas fa-university"></i>
                <span>${program.university}</span>
            </div>
            <div class="program-info-item">
                <i class="fas fa-layer-group"></i>
                <span>${program.specialty}</span>
            </div>
            <div class="program-info-item">
                <i class="fas fa-calendar"></i>
                <span>${formatDate(program.date)}</span>
            </div>
            <div class="program-info-item">
                <i class="fas fa-info-circle"></i>
                <span class="status-badge ${statusClass}">${program.status}</span>
            </div>
        </div>
    `;
    
    return card;
}

// الحصول على فئة التخصص
function getSpecialtyClass(specialty) {
    const classes = {
        'الإسلامية والعربية': 'islamic',
        'الإنسانية والتربوية': 'education',
        'الصحية': 'health',
        'العلمية': 'science',
        'الهندسية': 'engineering'
    };
    return classes[specialty] || '';
}

// الحصول على مستوى البرنامج
function getProgramLevel(programName) {
    if (programName.includes('دكتوراه')) return 'دكتوراه';
    if (programName.includes('ماجستير') || programName.includes('الماجستير')) return 'ماجستير';
    if (programName.includes('بكالوريوس') || programName.includes('البكالوريوس')) return 'بكالوريوس';
    return 'آخر';
}

// الحصول على فئة المستوى
function getLevelClass(level) {
    if (level === 'بكالوريوس') return 'bachelor';
    if (level === 'ماجستير') return 'master';
    if (level === 'دكتوراه') return 'phd';
    return '';
}

// عرض الجدول
function renderProgramsTable(programs) {
    const tbody = document.getElementById('programsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (programs.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px;">
                    <i class="fas fa-search" style="font-size: 3em; color: #bdc3c7; margin-bottom: 15px;"></i>
                    <p style="color: #7f8c8d; font-size: 1.1em;">لا توجد برامج تطابق معايير البحث</p>
                </td>
            </tr>
        `;
        return;
    }
    
    programs.forEach((program, index) => {
        const row = document.createElement('tr');
        const level = getProgramLevel(program.program);
        const statusClass = getStatusClass(program.status);
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${program.program}</strong></td>
            <td>${program.university}</td>
            <td>${program.specialty}</td>
            <td><span class="program-level ${getLevelClass(level)}">${level}</span></td>
            <td>${formatDate(program.date)}</td>
            <td><span class="status-badge ${statusClass}">${program.status}</span></td>
        `;
        
        row.style.cursor = 'pointer';
        row.onclick = () => showProgramDetails(program);
        
        tbody.appendChild(row);
    });
}

// عرض تفاصيل البرنامج
function showProgramDetails(program) {
    const modal = document.getElementById('programModal');
    const modalContent = document.getElementById('modalContent');
    
    const level = getProgramLevel(program.program);
    const levelClass = getLevelClass(level);
    const statusClass = getStatusClass(program.status);
    const specialtyColor = getSpecialtyColor(program.specialty);
    
    modalContent.innerHTML = `
        <div style="border-right: 5px solid ${specialtyColor}; padding-right: 20px; margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                <h2 style="color: #2c3e50; flex: 1;">${program.program}</h2>
                <span class="program-level ${levelClass}" style="font-size: 1em;">${level}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <i class="fas fa-university" style="font-size: 2em; color: ${specialtyColor}; margin-bottom: 10px;"></i>
                    <p style="color: #7f8c8d; font-size: 0.9em; margin-bottom: 5px;">الجامعة</p>
                    <p style="color: #2c3e50; font-weight: 600; font-size: 1.1em;">${program.university}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <i class="fas fa-layer-group" style="font-size: 2em; color: ${specialtyColor}; margin-bottom: 10px;"></i>
                    <p style="color: #7f8c8d; font-size: 0.9em; margin-bottom: 5px;">التخصص</p>
                    <p style="color: #2c3e50; font-weight: 600; font-size: 1.1em;">${program.specialty}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <i class="fas fa-calendar" style="font-size: 2em; color: ${specialtyColor}; margin-bottom: 10px;"></i>
                    <p style="color: #7f8c8d; font-size: 0.9em; margin-bottom: 5px;">تاريخ الزيارة</p>
                    <p style="color: #2c3e50; font-weight: 600; font-size: 1.1em;">${formatDate(program.date)}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <i class="fas fa-info-circle" style="font-size: 2em; color: ${specialtyColor}; margin-bottom: 10px;"></i>
                    <p style="color: #7f8c8d; font-size: 0.9em; margin-bottom: 5px;">الحالة</p>
                    <span class="status-badge ${statusClass}" style="font-size: 1em;">${program.status}</span>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <i class="fas fa-book" style="font-size: 2em; color: ${specialtyColor}; margin-bottom: 10px;"></i>
                    <p style="color: #7f8c8d; font-size: 0.9em; margin-bottom: 5px;">عدد البرامج</p>
                    <p style="color: #2c3e50; font-weight: 600; font-size: 1.5em;">${program.totalPrograms}</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 12px;">
                    <i class="fas fa-check-double" style="font-size: 2em; color: ${specialtyColor}; margin-bottom: 10px;"></i>
                    <p style="color: #7f8c8d; font-size: 0.9em; margin-bottom: 5px;">عدد الزيارات</p>
                    <p style="color: #2c3e50; font-weight: 600; font-size: 1.5em;">${program.visits}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// التبديل بين طرق العرض
function toggleView(view) {
    currentView = view;
    
    const cardsView = document.getElementById('cardsView');
    const tableView = document.getElementById('tableView');
    const cardsBtn = document.getElementById('cardsViewBtn');
    const tableBtn = document.getElementById('tableViewBtn');
    
    if (view === 'cards') {
        cardsView.style.display = 'grid';
        tableView.style.display = 'none';
        cardsBtn.classList.add('active');
        tableBtn.classList.remove('active');
    } else {
        cardsView.style.display = 'none';
        tableView.style.display = 'block';
        cardsBtn.classList.remove('active');
        tableBtn.classList.add('active');
    }
    
    renderPrograms();
}

// إعداد مستمعي الأحداث
function setupProgramsEventListeners() {
    // البحث
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentProgramsFilter.search = e.target.value;
            renderPrograms();
        });
    }
    
    // فلتر التخصص
    const specialtyFilter = document.getElementById('specialtyFilter');
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', (e) => {
            currentProgramsFilter.specialty = e.target.value;
            renderPrograms();
        });
    }
    
    // فلتر المستوى
    const levelFilter = document.getElementById('levelFilter');
    if (levelFilter) {
        levelFilter.addEventListener('change', (e) => {
            currentProgramsFilter.level = e.target.value;
            renderPrograms();
        });
    }
    
    // فلتر الحالة
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
            currentProgramsFilter.status = e.target.value;
            renderPrograms();
        });
    }
    
    // إغلاق النافذة المنبثقة
    const modal = document.getElementById('programModal');
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
    const programs = filterPrograms();
    
    const headers = ['البرنامج', 'الجامعة', 'التخصص', 'المستوى', 'التاريخ', 'الحالة', 'عدد البرامج', 'عدد الزيارات'];
    const rows = programs.map(p => [
        p.program,
        p.university,
        p.specialty,
        getProgramLevel(p.program),
        p.date,
        p.status,
        p.totalPrograms,
        p.visits
    ]);
    
    const csvArray = [headers, ...rows];
    const csvContent = csvArray.map(row => row.join(',')).join('\n');
    
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'programs_data.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('تم تصدير البيانات بنجاح', 'success');
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cardsView')) {
        initProgramsPage();
    }
});
