// تهيئة الرسوم البيانية باستخدام Chart.js

let chartsInstances = {};

// إعدادات الألوان
const colors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#2ecc71',
    warning: '#f39c12',
    danger: '#e74c3c',
    info: '#3498db',
    purple: '#9b59b6',
    teal: '#1abc9c',
    orange: '#e67e22'
};

// دالة لإنشاء تدرج لوني
function createGradient(ctx, color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
}

// رسم بياني: عدد الزيارات حسب الجامعة
function createUniversityVisitsChart() {
    const ctx = document.getElementById('universityVisitsChart');
    if (!ctx) return;
    
    const universities = groupByUniversity();
    const filter = document.getElementById('universityFilter').value;
    
    let filteredData = universities.sort((a, b) => b.visits - a.visits);
    if (filter === 'top10') {
        filteredData = filteredData.slice(0, 10);
    }
    
    const labels = filteredData.map(u => u.name);
    const data = filteredData.map(u => u.visits);
    
    if (chartsInstances.universityVisits) {
        chartsInstances.universityVisits.destroy();
    }
    
    chartsInstances.universityVisits = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'عدد الزيارات',
                data: data,
                backgroundColor: createGradient(ctx.getContext('2d'), colors.primary, colors.secondary),
                borderRadius: 8,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    rtl: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 12 }
                    }
                },
                x: {
                    ticks: {
                        font: { size: 11 },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// رسم بياني: توزيع حالة البرامج
function createProgramStatusChart() {
    const ctx = document.getElementById('programStatusChart');
    if (!ctx) return;
    
    const stats = calculateStats();
    const statusData = [
        stats.completedVisits,
        stats.pendingVisits,
        stats.reviewVisits
    ];
    
    if (chartsInstances.programStatus) {
        chartsInstances.programStatus.destroy();
    }
    
    chartsInstances.programStatus = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['نُفذت الزيارة', 'أُرسلت الدعوات', 'للمراجعة'],
            datasets: [{
                data: statusData,
                backgroundColor: [colors.success, colors.warning, colors.purple],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 13 },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    rtl: true
                }
            }
        }
    });
}

// رسم بياني: توزيع البرامج حسب التخصص
function createSpecialtyDistributionChart() {
    const ctx = document.getElementById('specialtyDistributionChart');
    if (!ctx) return;
    
    const stats = calculateStats();
    const specialtyData = [
        stats.specialties.islamic,
        stats.specialties.education,
        stats.specialties.health,
        stats.specialties.science,
        stats.specialties.engineering
    ];
    
    if (chartsInstances.specialtyDist) {
        chartsInstances.specialtyDist.destroy();
    }
    
    chartsInstances.specialtyDist = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['الإسلامية والعربية', 'الإنسانية والتربوية', 'الصحية', 'العلمية', 'الهندسية'],
            datasets: [{
                label: 'عدد البرامج',
                data: specialtyData,
                backgroundColor: [
                    colors.danger,
                    colors.info,
                    colors.success,
                    colors.warning,
                    colors.purple
                ],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    rtl: true
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 12 }
                    }
                },
                y: {
                    ticks: {
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

// رسم بياني: الزيارات عبر الوقت
function createVisitsTimelineChart() {
    const ctx = document.getElementById('visitsTimelineChart');
    if (!ctx) return;
    
    const filter = document.getElementById('timelineFilter').value;
    let filteredData = [...programsData];
    
    if (filter === 'completed') {
        filteredData = filteredData.filter(p => p.status === "نُفذت الزيارة");
    } else if (filter === 'pending') {
        filteredData = filteredData.filter(p => p.status !== "نُفذت الزيارة");
    }
    
    // تجميع البيانات حسب التاريخ
    const dateGroups = {};
    filteredData.forEach(item => {
        const date = item.date;
        if (!dateGroups[date]) {
            dateGroups[date] = 0;
        }
        dateGroups[date] += item.totalPrograms;
    });
    
    const sortedDates = Object.keys(dateGroups).sort();
    const labels = sortedDates.map(date => {
        const d = new Date(date);
        return d.toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' });
    });
    const data = sortedDates.map(date => dateGroups[date]);
    
    if (chartsInstances.visitsTimeline) {
        chartsInstances.visitsTimeline.destroy();
    }
    
    chartsInstances.visitsTimeline = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'عدد البرامج',
                data: data,
                borderColor: colors.primary,
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: colors.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    rtl: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 12 }
                    }
                },
                x: {
                    ticks: {
                        font: { size: 11 },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// رسم بياني: المستويات الأكاديمية
function createAcademicLevelChart() {
    const ctx = document.getElementById('academicLevelChart');
    if (!ctx) return;
    
    const stats = calculateStats();
    const levelData = [
        stats.levels.bachelor,
        stats.levels.master,
        stats.levels.phd
    ];
    
    if (chartsInstances.academicLevel) {
        chartsInstances.academicLevel.destroy();
    }
    
    chartsInstances.academicLevel = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['بكالوريوس', 'ماجستير', 'دكتوراه'],
            datasets: [{
                data: levelData,
                backgroundColor: [colors.info, colors.success, colors.purple],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 13 },
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    rtl: true
                }
            }
        }
    });
}

// رسم بياني: أداء الجامعات
function createUniversityPerformanceChart() {
    const ctx = document.getElementById('universityPerformanceChart');
    if (!ctx) return;
    
    const universities = groupByUniversity();
    const topUniversities = universities
        .sort((a, b) => b.totalPrograms - a.totalPrograms)
        .slice(0, 10);
    
    const labels = topUniversities.map(u => u.name);
    const data = topUniversities.map(u => u.totalPrograms);
    
    if (chartsInstances.universityPerf) {
        chartsInstances.universityPerf.destroy();
    }
    
    chartsInstances.universityPerf = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'عدد البرامج',
                data: data,
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: colors.primary,
                borderWidth: 2,
                pointBackgroundColor: colors.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    rtl: true
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 11 }
                    },
                    pointLabels: {
                        font: { size: 10 }
                    }
                }
            }
        }
    });
}

// تحديث الملخصات
function updateSummaries() {
    const stats = calculateStats();
    
    document.getElementById('islamicSummary').textContent = stats.specialties.islamic;
    document.getElementById('educationSummary').textContent = stats.specialties.education;
    document.getElementById('healthSummary').textContent = stats.specialties.health;
    document.getElementById('scienceSummary').textContent = stats.specialties.science;
    document.getElementById('engineeringSummary').textContent = stats.specialties.engineering;
}

// تهيئة صفحة لوحة المعلومات
function initDashboard() {
    updateCurrentDate();
    
    const stats = calculateStats();
    document.getElementById('totalUniversities').textContent = stats.totalUniversities;
    document.getElementById('totalPrograms').textContent = stats.totalPrograms;
    document.getElementById('completedVisits').textContent = stats.completedVisits;
    document.getElementById('pendingVisits').textContent = stats.pendingVisits + stats.reviewVisits;
    
    // إنشاء جميع الرسوم البيانية
    createUniversityVisitsChart();
    createProgramStatusChart();
    createSpecialtyDistributionChart();
    createVisitsTimelineChart();
    createAcademicLevelChart();
    createUniversityPerformanceChart();
    updateSummaries();
    
    // إضافة مستمعي الأحداث للفلاتر
    document.getElementById('universityFilter').addEventListener('change', createUniversityVisitsChart);
    document.getElementById('timelineFilter').addEventListener('change', createVisitsTimelineChart);
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('universityVisitsChart')) {
        initDashboard();
    }
});
