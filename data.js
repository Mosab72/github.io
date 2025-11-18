// بيانات البرامج الأكاديمية والزيارات الجامعية
const programsData = [
    {
        program: "ماجستير الكتاب والسنة",
        university: "جامعة الملك فيصل",
        date: "2025-10-05",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس اللغة العربية",
        university: "جامعة نجران",
        date: "2025-10-05",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس القانون",
        university: "كليات الاصالة",
        date: "2025-10-05",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير تقنيات التعليم + ماجستير المناهج وطرق التدريس",
        university: "جامعة حائل",
        date: "2025-10-12",
        specialty: "الإنسانية والتربوية",
        status: "نُفذت الزيارة",
        visits: 2,
        totalPrograms: 2
    },
    {
        program: "ماجستير العقيدة والمذاهب المعاصرة",
        university: "جامعة الملك فيصل",
        date: "2025-10-13",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس الحقوق",
        university: "جامعة طيبة",
        date: "2025-10-13",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس القانون - (الغاط)",
        university: "جامعة المجمعة",
        date: "2025-10-13",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير التربية الخاصة",
        university: "جامعة الطائف",
        date: "2025-10-19",
        specialty: "الإنسانية والتربوية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير الفقه وأصوله + دكتوراه الفقه",
        university: "جامعة الملك فيصل",
        date: "2025-10-19",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 2,
        totalPrograms: 2
    },
    {
        program: "بكالوريوس اللغة العربية",
        university: "جامعة المجمعة",
        date: "2025-10-19",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس دراسات إسلامية",
        university: "جامعة طيبة",
        date: "2025-10-19",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس أصول الدين",
        university: "جامعة الملك فيصل",
        date: "2025-10-26",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير الدراسات الإسلامية (عقيدة)",
        university: "جامعة الملك سعود",
        date: "2025-10-26",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس الأنظمة",
        university: "جامعة نجران",
        date: "2025-11-09",
        specialty: "الإسلامية والعربية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس تعليم الطفولة المبكرة",
        university: "جامعة الجوف",
        date: "2025-11-16",
        specialty: "الإنسانية والتربوية",
        status: "نُفذت الزيارة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس الشريعة",
        university: "جامعة القصيم",
        date: "2025-11-30",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير أصول التربية الإسلامية",
        university: "الجامعة الإسلامية",
        date: "2025-11-30",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس الرسم والفنون، بكالوريوس تصميم الأزياء",
        university: "جامعة جدة",
        date: "2025-11-30",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "البكالوريوس في إدارة الأعمال، المحاسبة، الإدارة المالية",
        university: "جامعة حفر الباطن",
        date: "2025-11-30",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 3
    },
    {
        program: "بكالوريوس علم المعلومات الجغرافية",
        university: "جامعة بيشة",
        date: "2025-11-30",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "[حضوري] بكالوريوس الطب والجراحة",
        university: "جامعة الملك سعود",
        date: "2025-12-01",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "[حضوري] بكالوريوس الطب والجراحة",
        university: "جامعة جدة",
        date: "2025-12-01",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "الماجستير التنفيذي في التشريعات الصيدلية",
        university: "جامعة الملك سعود",
        date: "2025-12-01",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "دكتوراه التفسير وعلوم القرآن",
        university: "جامعة الملك فيصل",
        date: "2025-12-07",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "دكتوراه أصول الفقه",
        university: "جامعة القصيم",
        date: "2025-12-07",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير الفقه",
        university: "جامعة تبوك",
        date: "2025-12-07",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "البكالوريوس في نظم المعلومات الصحية، تقنية التخدير",
        university: "جامعة المعرفة",
        date: "2025-12-07",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 2
    },
    {
        program: "البكالوريوس في الأحياء، الكيمياء",
        university: "جامعة طيبة",
        date: "2025-12-07",
        specialty: "العلمية",
        status: "أُرسلت الدعوات",
        visits: 1,
        totalPrograms: 2
    },
    {
        program: "البكالوريوس في الفيزياء، الرياضيات",
        university: "جامعة حفر الباطن",
        date: "2025-12-07",
        specialty: "العلمية",
        status: "أُرسلت الدعوات",
        visits: 1,
        totalPrograms: 2
    },
    {
        program: "البكالوريوس في العلاج الطبيعي، علوم الأشعة",
        university: "جامعة نجران",
        date: "2025-12-07",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "ماجستير العلوم الصيدلانية",
        university: "جامعة الملك فيصل",
        date: "2025-12-07",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير القيادة التربوية",
        university: "جامعة حائل",
        date: "2025-12-07",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير التوجيه والإرشاد التربوي بالرسالة",
        university: "جامعة الملك عبدالعزيز",
        date: "2025-12-07",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير اللغويات التطبيقية",
        university: "جامعة المجمعة",
        date: "2025-12-07",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "البكالوريوس في نظم المعلومات الإدارية، التسويق والتجارة الالكترونية، المحاسبة",
        university: "جامعة جازان",
        date: "2025-12-07",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 5,
        totalPrograms: 3
    },
    {
        program: "بكالوريوس التمويل",
        university: "جامعة الملك عبدالعزيز",
        date: "2025-12-07",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 3,
        totalPrograms: 1
    },
    {
        program: "البكالوريوس في الإدارة الرياضية، التدريب الرياضي",
        university: "جامعة جدة",
        date: "2025-12-07",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 2
    },
    {
        program: "بكالوريوس طب الأسنان",
        university: "جامعة الملك عبدالعزيز",
        date: "2025-12-09",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 1
    },
    {
        program: "البكالوريوس في علوم المختبرات الطبية، الأشعة التشخيصية، التغذية الإكلينيكية",
        university: "جامعة طيبة",
        date: "2025-12-09",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 3
    },
    {
        program: "البكالوريوس في الجيولوجيا، الفيزياء",
        university: "جامعة طيبة",
        date: "2025-12-09",
        specialty: "العلمية",
        status: "أُرسلت الدعوات",
        visits: 3,
        totalPrograms: 2
    },
    {
        program: "بكالوريوس العلاج التنفسي",
        university: "جامعة جازان",
        date: "2025-12-09",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس الصحة العامة",
        university: "جامعة القصيم",
        date: "2025-12-09",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 3,
        totalPrograms: 1
    },
    {
        program: "ماجستير التوجيه والإرشاد النفسي",
        university: "جامعة الملك فيصل",
        date: "2025-12-14",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس رياض الأطفال",
        university: "جامعة الإمام عبدالرحمن بن فيصل",
        date: "2025-12-14",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير الإدارة الهندسية",
        university: "جامعة تبوك",
        date: "2025-12-14",
        specialty: "الهندسية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير إدارة الأعمال",
        university: "جامعة الفيصل",
        date: "2025-12-14",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 1
    },
    {
        program: "الماجستير في إدارة الأعمال، إدارة الموارد البشرية",
        university: "جامعة المجمعة",
        date: "2025-12-14",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 1,
        totalPrograms: 2
    },
    {
        program: "ماجستير الخدمة الاجتماعية، دكتوراه الخدمة الاجتماعية",
        university: "جامعة الملك سعود",
        date: "2025-12-14",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "ماجستير الأدب والنقد والبلاغة، ماجستير اللغويات",
        university: "جامعة الملك فيصل",
        date: "2025-12-15",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "دكتوراه العقيدة والمذاهب المعاصرة",
        university: "جامعة القصيم",
        date: "2025-12-15",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير الفقه",
        university: "جامعة حائل",
        date: "2025-12-15",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس التصميم الداخلي، بكالوريوس العمارة",
        university: "كليات الأصالة",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "بكالوريوس العلوم في علوم الحاسب الآلي - تجديد اعتماد",
        university: "جامعة عفت",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير العلوم في هندسة الطاقة المتجددة",
        university: "جامعة المجمعة",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس نظم المعلومات",
        university: "جامعة طيبة",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس علوم الحاسب الآلي",
        university: "جامعة طيبة",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس هندسة البرمجيات",
        university: "جامعة الجوف",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس التصميم الداخلي",
        university: "كلية جدة العالمية",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "ماجستير العلوم في الأمن السيبراني",
        university: "جامعة الجوف",
        date: "2025-12-21",
        specialty: "الهندسية",
        status: "للمراجعة من الإدارة المختصة واعادة العرض على اللجنة",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "بكالوريوس الفنون",
        university: "جامعة الطائف",
        date: "2025-12-21",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 1,
        totalPrograms: 1
    },
    {
        program: "الماجستير في الإدارة التربوية، تقنيات التعليم",
        university: "جامعة الملك فيصل",
        date: "2025-12-21",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "البكالوريوس في الموارد البشرية، الإدارة المالية",
        university: "كليات الأصالة",
        date: "2025-12-21",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 2,
        totalPrograms: 2
    },
    {
        program: "الماجستير في المحاسبة، اقتصادات الطاقة التطبيقية",
        university: "جامعة الملك فيصل",
        date: "2025-12-21",
        specialty: "الإنسانية والتربوية",
        status: "أُرسلت الدعوات",
        visits: 1,
        totalPrograms: 2
    },
    {
        program: "ماجستير فقه النظام التجاري",
        university: "جامعة حائل",
        date: "2026-01-25",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير القانون العام (الغاط) + ماجستير القانون الخاص (الغاط)",
        university: "جامعة المجمعة",
        date: "2026-01-25",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 2
    },
    {
        program: "دكتوراه الفلسفة في اللغة العربية وآدابها",
        university: "جامعة جازان",
        date: "2026-01-25",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير الأنظمة",
        university: "جامعة القصيم",
        date: "2026-01-25",
        specialty: "الإسلامية والعربية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير الرياضيات",
        university: "جامعة الجوف",
        date: "2026-01-25",
        specialty: "العلمية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير مكافحة العدوى",
        university: "جامعة الجوف",
        date: "2026-01-25",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    },
    {
        program: "ماجستير الاستعاضة السنية",
        university: "جامعة الجوف",
        date: "2026-01-25",
        specialty: "الصحية",
        status: "أُرسلت الدعوات",
        visits: 0,
        totalPrograms: 1
    }
];

// دالة لحساب الإحصائيات
function calculateStats() {
    const stats = {
        totalUniversities: new Set(programsData.map(p => p.university)).size,
        totalPrograms: programsData.reduce((sum, p) => sum + p.totalPrograms, 0),
        completedVisits: programsData.filter(p => p.status === "نُفذت الزيارة").length,
        pendingVisits: programsData.filter(p => p.status === "أُرسلت الدعوات").length,
        reviewVisits: programsData.filter(p => p.status.includes("للمراجعة")).length
    };

    // حساب عدد البرامج حسب التخصص
    stats.specialties = {
        islamic: programsData.filter(p => p.specialty === "الإسلامية والعربية").reduce((sum, p) => sum + p.totalPrograms, 0),
        education: programsData.filter(p => p.specialty === "الإنسانية والتربوية").reduce((sum, p) => sum + p.totalPrograms, 0),
        health: programsData.filter(p => p.specialty === "الصحية").reduce((sum, p) => sum + p.totalPrograms, 0),
        science: programsData.filter(p => p.specialty === "العلمية").reduce((sum, p) => sum + p.totalPrograms, 0),
        engineering: programsData.filter(p => p.specialty === "الهندسية").reduce((sum, p) => sum + p.totalPrograms, 0)
    };

    // حساب البرامج حسب المستوى
    stats.levels = {
        bachelor: programsData.filter(p => p.program.includes("بكالوريوس")).reduce((sum, p) => sum + p.totalPrograms, 0),
        master: programsData.filter(p => p.program.includes("ماجستير") || p.program.includes("الماجستير")).reduce((sum, p) => sum + p.totalPrograms, 0),
        phd: programsData.filter(p => p.program.includes("دكتوراه")).reduce((sum, p) => sum + p.totalPrograms, 0)
    };

    return stats;
}

// دالة لتجميع البيانات حسب الجامعة
function groupByUniversity() {
    const universities = {};
    
    programsData.forEach(item => {
        if (!universities[item.university]) {
            universities[item.university] = {
                name: item.university,
                programs: [],
                totalPrograms: 0,
                visits: 0,
                dates: [],
                statuses: []
            };
        }
        
        universities[item.university].programs.push(item);
        universities[item.university].totalPrograms += item.totalPrograms;
        universities[item.university].visits += item.visits;
        universities[item.university].dates.push(item.date);
        universities[item.university].statuses.push(item.status);
    });
    
    return Object.values(universities);
}

// دالة لتنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-SA', options);
}

// دالة لتصدير البيانات إلى CSV
function exportTableToCSV() {
    const csvContent = convertToCSV(programsData);
    downloadCSV(csvContent, 'programs_data.csv');
}

function convertToCSV(data) {
    const headers = ['البرنامج', 'الجامعة', 'التاريخ', 'التخصص', 'الحالة', 'عدد الزيارات', 'عدد البرامج'];
    const rows = data.map(item => [
        item.program,
        item.university,
        item.date,
        item.specialty,
        item.status,
        item.visits,
        item.totalPrograms
    ]);
    
    const csvArray = [headers, ...rows];
    return csvArray.map(row => row.join(',')).join('\n');
}

function downloadCSV(content, filename) {
    const blob = new Blob(['\ufeff' + content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
