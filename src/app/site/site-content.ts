/* ==========================================================================
   SITE CONTENT
   --------------------------------------------------------------------------
   All the words, people and places shown on the public website live here.
   Edit this file to change page content — templates read from it.

   STARTER CONTENT: provider names, phone numbers, addresses, hours and
   insurance plans below are placeholders. Replace them with real
   Serenity Health information before launch.
   ========================================================================== */


/* ---- Types ---- */

export interface NavLink {
    label: string;
    path: string;
}

export interface NavSection extends NavLink {
    children?: NavLink[];
}

export interface Service {
    slug: string;
    name: string;
    icon: string;
    summary: string;
    description: string;
    offerings: string[];
    conditionSlugs: string[];
}

export interface ConditionCategory {
    slug: string;
    name: string;
    icon: string;
    summary: string;
    conditions: string[];
    serviceSlug: string;
}

export interface Provider {
    slug: string;
    name: string;
    credentials: string;
    title: string;
    serviceSlug: string;
    location: string;
    languages: string[];
    acceptingNewPatients: boolean;
    bio: string;
    education: string[];
}

export interface Location {
    slug: string;
    name: string;
    address: string;
    city: string;
    phone: string;
    hours: string[];
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

export interface Job {
    title: string;
    department: string;
    type: string;
    location: string;
}

export interface Faq {
    question: string;
    answer: string;
}

export interface Article {
    title: string;
    category: string;
    summary: string;
}

export interface PatientForm {
    name: string;
    description: string;
}


/* ---- Contact details ---- */

export const CONTACT = {
    phone: '(555) 010-2000',
    email: 'hello@serenityhealth.example',
    afterHours: '(555) 010-2999',
};


/* ---- Navigation (navbar and footer) ---- */

export const NAVIGATION: NavSection[] = [
    {
        label: 'About',
        path: '/about',
        children: [
            { label: 'Our Mission', path: '/about/mission' },
            { label: 'Our Team', path: '/about/team' },
            { label: 'Careers', path: '/about/careers' },
        ],
    },
    {
        label: 'Services',
        path: '/services',
        children: [
            { label: 'Primary Care', path: '/services/primary-care' },
            { label: 'Women’s Health', path: '/services/womens-health' },
            { label: 'Mental Health', path: '/services/mental-health' },
            { label: 'Chronic Condition Care', path: '/services/chronic-condition-care' },
            { label: 'Wellness & Prevention', path: '/services/wellness-prevention' },
        ],
    },
    {
        label: 'Conditions & Treatments',
        path: '/conditions',
        children: [
            { label: 'All Conditions', path: '/conditions' },
            { label: 'Heart & Vascular', path: '/conditions/heart-vascular' },
            { label: 'Diabetes & Endocrine', path: '/conditions/diabetes-endocrine' },
            { label: 'Respiratory', path: '/conditions/respiratory' },
            { label: 'Digestive Health', path: '/conditions/digestive-health' },
            { label: 'Musculoskeletal', path: '/conditions/musculoskeletal' },
            { label: 'Women’s Health', path: '/conditions/womens-health' },
            { label: 'Men’s Health', path: '/conditions/mens-health' },
            { label: 'Mental Health', path: '/conditions/mental-health' },
        ],
    },
    {
        label: 'Find a Doctor',
        path: '/find-a-doctor',
    },
    {
        label: 'Patient Resources',
        path: '/patient-resources',
        children: [
            { label: 'Health Library', path: '/patient-resources/health-library' },
            { label: 'Patient Forms', path: '/patient-resources/patient-forms' },
            { label: 'Insurance & Billing', path: '/patient-resources/insurance-billing' },
            { label: 'FAQs', path: '/patient-resources/faqs' },
        ],
    },
    {
        label: 'Contact',
        path: '/contact',
        children: [
            { label: 'Contact Us', path: '/contact' },
            { label: 'Locations', path: '/contact/locations' },
        ],
    },
];


/* ---- Services ---- */

export const SERVICES: Service[] = [
    {
        slug: 'primary-care',
        name: 'Primary Care',
        icon: 'fas fa-stethoscope',
        summary: 'Your first stop for check-ups, sick visits and ongoing care for the whole family.',
        description: 'Our primary care providers get to know you over time, so your care is based on your full health history — not a single visit. We handle everyday health needs and coordinate with specialists when you need more.',
        offerings: [
            'Annual physicals and check-ups',
            'Same-day sick visits',
            'Care for children, adults and older adults',
            'Lab work and screenings',
            'Referrals and care coordination',
        ],
        conditionSlugs: ['heart-vascular', 'respiratory', 'digestive-health', 'musculoskeletal'],
    },
    {
        slug: 'womens-health',
        name: 'Women’s Health',
        icon: 'fas fa-venus',
        summary: 'Care for every stage of life, from annual exams to pregnancy and menopause.',
        description: 'Our women’s health team offers personal, respectful care in a comfortable setting. We focus on prevention, early detection and support through life’s changes.',
        offerings: [
            'Well-woman exams and Pap tests',
            'Birth control counseling',
            'Prenatal and postpartum care',
            'Menopause care',
            'Breast health screenings',
        ],
        conditionSlugs: ['womens-health'],
    },
    {
        slug: 'mental-health',
        name: 'Mental Health',
        icon: 'fas fa-brain',
        summary: 'Support for anxiety, depression, stress and more — in person or by video.',
        description: 'Mental health is part of your overall health. Our counselors and psychiatric providers work alongside your primary care team to give you support that fits your life.',
        offerings: [
            'Individual counseling',
            'Medication management',
            'Anxiety and depression care',
            'Stress and sleep support',
            'Video visits',
        ],
        conditionSlugs: ['mental-health'],
    },
    {
        slug: 'chronic-condition-care',
        name: 'Chronic Condition Care',
        icon: 'fas fa-heartbeat',
        summary: 'Ongoing, coordinated care for long-term conditions like diabetes and heart disease.',
        description: 'Living with a long-term condition takes a plan and a team. We help you understand your condition, manage medications and track your progress between visits.',
        offerings: [
            'Personal care plans',
            'Medication management',
            'Regular check-ins and monitoring',
            'Nutrition and lifestyle coaching',
            'Coordination with specialists',
        ],
        conditionSlugs: ['diabetes-endocrine', 'heart-vascular', 'respiratory'],
    },
    {
        slug: 'wellness-prevention',
        name: 'Wellness & Prevention',
        icon: 'fas fa-leaf',
        summary: 'Screenings, vaccines and healthy-habit coaching to help you stay well.',
        description: 'The best care often happens before you get sick. Our wellness programs help you catch problems early and build habits that keep you healthy.',
        offerings: [
            'Vaccines and immunizations',
            'Health screenings',
            'Nutrition counseling',
            'Weight management',
            'Quit-smoking support',
        ],
        conditionSlugs: ['heart-vascular', 'diabetes-endocrine', 'mens-health', 'womens-health'],
    },
];


/* ---- Conditions & treatments ---- */

export const CONDITION_CATEGORIES: ConditionCategory[] = [
    {
        slug: 'heart-vascular',
        name: 'Heart & Vascular',
        icon: 'fas fa-heart',
        summary: 'Prevention, diagnosis and ongoing care for your heart and blood vessels.',
        conditions: ['High blood pressure', 'High cholesterol', 'Heart disease', 'Irregular heartbeat', 'Poor circulation'],
        serviceSlug: 'chronic-condition-care',
    },
    {
        slug: 'diabetes-endocrine',
        name: 'Diabetes & Endocrine',
        icon: 'fas fa-tint',
        summary: 'Care for diabetes, thyroid and other hormone-related conditions.',
        conditions: ['Type 1 diabetes', 'Type 2 diabetes', 'Prediabetes', 'Thyroid disorders', 'Metabolic syndrome'],
        serviceSlug: 'chronic-condition-care',
    },
    {
        slug: 'respiratory',
        name: 'Respiratory',
        icon: 'fas fa-lungs',
        summary: 'Treatment for conditions that affect your lungs and breathing.',
        conditions: ['Asthma', 'COPD', 'Seasonal allergies', 'Bronchitis', 'Sleep apnea'],
        serviceSlug: 'primary-care',
    },
    {
        slug: 'digestive-health',
        name: 'Digestive Health',
        icon: 'fas fa-notes-medical',
        summary: 'Relief and long-term care for stomach and digestive problems.',
        conditions: ['Acid reflux (GERD)', 'Irritable bowel syndrome', 'Food intolerances', 'Constipation', 'Ulcers'],
        serviceSlug: 'primary-care',
    },
    {
        slug: 'musculoskeletal',
        name: 'Musculoskeletal',
        icon: 'fas fa-bone',
        summary: 'Care for joint, muscle and bone pain so you can keep moving.',
        conditions: ['Back and neck pain', 'Arthritis', 'Sports injuries', 'Osteoporosis', 'Tendonitis'],
        serviceSlug: 'primary-care',
    },
    {
        slug: 'womens-health',
        name: 'Women’s Health',
        icon: 'fas fa-venus',
        summary: 'Conditions and care needs specific to women at every age.',
        conditions: ['Menstrual problems', 'PCOS', 'Menopause symptoms', 'Pelvic pain', 'Pregnancy care'],
        serviceSlug: 'womens-health',
    },
    {
        slug: 'mens-health',
        name: 'Men’s Health',
        icon: 'fas fa-mars',
        summary: 'Screenings and treatment for health concerns common in men.',
        conditions: ['Prostate health', 'Low testosterone', 'Erectile dysfunction', 'Heart health screening', 'Colon cancer screening'],
        serviceSlug: 'wellness-prevention',
    },
    {
        slug: 'mental-health',
        name: 'Mental Health',
        icon: 'fas fa-brain',
        summary: 'Support and treatment for emotional and behavioral health.',
        conditions: ['Anxiety', 'Depression', 'Stress', 'Insomnia', 'ADHD'],
        serviceSlug: 'mental-health',
    },
];


/* ---- Providers (Find a Doctor) ---- */

export const PROVIDERS: Provider[] = [
    {
        slug: 'maya-thompson',
        name: 'Maya Thompson',
        credentials: 'MD',
        title: 'Family Medicine Physician',
        serviceSlug: 'primary-care',
        location: 'Downtown Clinic',
        languages: ['English', 'Spanish'],
        acceptingNewPatients: true,
        bio: 'Dr. Thompson cares for patients of all ages and believes the best care starts with listening.',
        education: ['MD, State University School of Medicine', 'Residency, Family Medicine, Riverside Medical Center'],
    },
    {
        slug: 'daniel-okafor',
        name: 'Daniel Okafor',
        credentials: 'DO',
        title: 'Internal Medicine Physician',
        serviceSlug: 'chronic-condition-care',
        location: 'Northside Clinic',
        languages: ['English'],
        acceptingNewPatients: true,
        bio: 'Dr. Okafor helps adults manage long-term conditions like diabetes and high blood pressure.',
        education: ['DO, College of Osteopathic Medicine', 'Residency, Internal Medicine, Lakeview Hospital'],
    },
    {
        slug: 'priya-raman',
        name: 'Priya Raman',
        credentials: 'MD',
        title: 'Obstetrician & Gynecologist',
        serviceSlug: 'womens-health',
        location: 'Downtown Clinic',
        languages: ['English', 'Hindi', 'Tamil'],
        acceptingNewPatients: false,
        bio: 'Dr. Raman provides women’s health care from first exams through pregnancy and menopause.',
        education: ['MD, University Medical School', 'Residency, OB/GYN, Mercy Women’s Hospital'],
    },
    {
        slug: 'james-whitfield',
        name: 'James Whitfield',
        credentials: 'PsyD',
        title: 'Clinical Psychologist',
        serviceSlug: 'mental-health',
        location: 'Westside Clinic',
        languages: ['English'],
        acceptingNewPatients: true,
        bio: 'Dr. Whitfield offers counseling for anxiety, depression and life transitions.',
        education: ['PsyD, Institute of Clinical Psychology', 'Fellowship, Behavioral Health, Community Health Center'],
    },
    {
        slug: 'elena-garcia',
        name: 'Elena Garcia',
        credentials: 'NP',
        title: 'Family Nurse Practitioner',
        serviceSlug: 'wellness-prevention',
        location: 'Northside Clinic',
        languages: ['English', 'Spanish'],
        acceptingNewPatients: true,
        bio: 'Elena focuses on prevention, screenings and building healthy habits that last.',
        education: ['MSN, Family Nurse Practitioner, State University School of Nursing'],
    },
    {
        slug: 'samuel-lee',
        name: 'Samuel Lee',
        credentials: 'MD',
        title: 'Psychiatrist',
        serviceSlug: 'mental-health',
        location: 'Westside Clinic',
        languages: ['English', 'Korean'],
        acceptingNewPatients: true,
        bio: 'Dr. Lee provides medication management and works closely with each patient’s care team.',
        education: ['MD, University Medical School', 'Residency, Psychiatry, University Hospital'],
    },
];


/* ---- Locations ---- */

export const LOCATIONS: Location[] = [
    {
        slug: 'downtown',
        name: 'Downtown Clinic',
        address: '100 Main Street, Suite 200',
        city: 'Springfield, ST 00001',
        phone: '(555) 010-2001',
        hours: ['Mon–Fri: 7:30 am – 7:00 pm', 'Sat: 8:00 am – 2:00 pm', 'Sun: Closed'],
    },
    {
        slug: 'northside',
        name: 'Northside Clinic',
        address: '2450 North Avenue',
        city: 'Springfield, ST 00002',
        phone: '(555) 010-2002',
        hours: ['Mon–Fri: 8:00 am – 6:00 pm', 'Sat–Sun: Closed'],
    },
    {
        slug: 'westside',
        name: 'Westside Clinic',
        address: '875 Lake Road',
        city: 'Springfield, ST 00003',
        phone: '(555) 010-2003',
        hours: ['Mon–Thu: 8:00 am – 8:00 pm', 'Fri: 8:00 am – 5:00 pm', 'Sat–Sun: Closed'],
    },
];


/* ---- About: leadership team ---- */

export const TEAM: TeamMember[] = [
    { name: 'Angela Brooks', role: 'Chief Executive Officer', bio: 'Angela leads Serenity Health’s mission to make quality care easy to reach.' },
    { name: 'Dr. Robert Chen', role: 'Chief Medical Officer', bio: 'Dr. Chen oversees clinical quality and patient safety across every clinic.' },
    { name: 'Lauren Mitchell', role: 'Director of Nursing', bio: 'Lauren supports our nursing teams and champions patient-centered care.' },
    { name: 'Marcus Reed', role: 'Director of Patient Experience', bio: 'Marcus makes sure every visit is simple, welcoming and respectful.' },
];


/* ---- About: open positions ---- */

export const JOBS: Job[] = [
    { title: 'Registered Nurse', department: 'Primary Care', type: 'Full-time', location: 'Downtown Clinic' },
    { title: 'Medical Assistant', department: 'Women’s Health', type: 'Full-time', location: 'Downtown Clinic' },
    { title: 'Licensed Clinical Social Worker', department: 'Mental Health', type: 'Part-time', location: 'Westside Clinic' },
    { title: 'Front Desk Coordinator', department: 'Patient Experience', type: 'Full-time', location: 'Northside Clinic' },
];


/* ---- Patient resources: FAQs ---- */

export const FAQS: Faq[] = [
    {
        question: 'How do I become a new patient?',
        answer: 'Book an appointment online or call us. Bring a photo ID, your insurance card and a list of your current medications to your first visit.',
    },
    {
        question: 'Do you accept my insurance?',
        answer: 'We accept most major insurance plans. See Insurance & Billing for a list, or call us to confirm your coverage before your visit.',
    },
    {
        question: 'Can I get a same-day appointment?',
        answer: 'Yes. We save time each day for sick visits. Call in the morning or check online for same-day openings.',
    },
    {
        question: 'Do you offer video visits?',
        answer: 'Many visits, including mental health and follow-up appointments, can be done by secure video.',
    },
    {
        question: 'How do I get my test results?',
        answer: 'Results are posted to the Patient Portal as soon as your provider reviews them. We’ll call you if anything needs quick follow-up.',
    },
    {
        question: 'How do I request a prescription refill?',
        answer: 'Request refills through the Patient Portal or ask your pharmacy to send us a request. Please allow two business days.',
    },
    {
        question: 'What should I do after hours?',
        answer: `For urgent questions, call our after-hours line at ${CONTACT.afterHours}. For emergencies, call 911 or go to the nearest emergency room.`,
    },
];


/* ---- Patient resources: health library ---- */

export const ARTICLES: Article[] = [
    { title: 'Understanding Your Blood Pressure Numbers', category: 'Heart & Vascular', summary: 'What the top and bottom numbers mean, and when to talk to your doctor.' },
    { title: 'Living Well With Type 2 Diabetes', category: 'Diabetes & Endocrine', summary: 'Everyday tips for food, activity and tracking your blood sugar.' },
    { title: 'Managing Seasonal Allergies', category: 'Respiratory', summary: 'How to reduce symptoms and when allergies need medical care.' },
    { title: 'Simple Ways to Lower Stress', category: 'Mental Health', summary: 'Small, practical habits that can make a real difference.' },
    { title: 'Which Screenings Do You Need?', category: 'Wellness & Prevention', summary: 'A guide to common health screenings by age.' },
    { title: 'Caring for Back Pain at Home', category: 'Musculoskeletal', summary: 'Safe stretches, posture tips and signs it’s time for a visit.' },
];


/* ---- Patient resources: forms ---- */

export const PATIENT_FORMS: PatientForm[] = [
    { name: 'New Patient Registration', description: 'Personal details, contact information and emergency contacts.' },
    { name: 'Health History Questionnaire', description: 'Your medical history, medications and allergies.' },
    { name: 'Release of Medical Records', description: 'Permission to share your records with another provider.' },
    { name: 'Financial Policy Agreement', description: 'How billing, co-pays and payments work.' },
    { name: 'Notice of Privacy Practices', description: 'How we protect and use your health information.' },
];


/* ---- Patient resources: insurance ---- */

export const INSURANCE_PLANS: string[] = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'Humana',
    'Medicare',
    'Medicaid',
    'UnitedHealthcare',
    'Most marketplace plans',
];
