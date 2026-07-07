// Job data generator - deterministically generates 100,000 jobs for South Africa
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Mining Engineer", "Geologist", "Metallurgist", "Chemical Engineer",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Game Ranger", "Tour Guide", "Wildlife Biologist", "Conservationist"
];

// 75+ South Africa based companies + global companies with SA presence
const companies = [
  // South Africa based
  "Naspers", "MTN Group", "Vodacom", "Telkom SA", "Cell C",
  "Standard Bank", "FirstRand", "Absa Group", "Nedbank", "Capitec Bank",
  "Sasol", "Anglo American", "De Beers", "Gold Fields", "Sibanye-Stillwater",
  "Impala Platinum", "Harmony Gold", "Exxaro Resources", "PetroSA", "Eskom",
  "Transnet", "South African Airways", "Comair", "Airlink", "FlySafair",
  "Bidvest Group", "Shoprite Holdings", "Pick n Pay", "Woolworths SA", "Massmart",
  "Checkers", "Dis-Chem", "Clicks Group", "Mr Price", "Foschini Group",
  "Sun International", "Tsogo Sun", "Kruger National Park", "SANParks",
  "Nampak", "Mondi", "Sappi", "Pioneer Foods", "Tiger Brands",
  "AECI", "Omnia Holdings", "Afrimat", "PPC Cement", "AfriSam",
  "Kumba Iron Ore", "Petra Diamonds", "DiamondFields", "Royal Bafokeng Platinum",
  "AVI Limited", "RCL Foods", "Astral Foods", "Seventy Seven Energy",
  
  // Global with SA presence
  "Google", "Amazon", "Microsoft", "Apple", "Meta", "Tesla", "Netflix",
  "IBM", "Oracle", "Cisco", "Dell", "HP", "SAP", "Salesforce",
  "Accenture", "Deloitte", "PwC", "KPMG", "EY", "McKinsey", "Boston Consulting Group",
  "HSBC", "Standard Chartered", "Citi", "JPMorgan Chase", "Goldman Sachs",
  "Unilever", "P&G", "Nestle", "Coca-Cola", "PepsiCo",
  "Shell", "BP", "TotalEnergies", "ExxonMobil", "Chevron",
  "Siemens", "GE", "Schneider Electric", "ABB", "Honeywell",
  "Boeing", "Airbus", "Rolls-Royce", "Lockheed Martin",
  "Pfizer", "Novartis", "Roche", "GSK", "Johnson & Johnson",
  "Samsung", "LG", "Sony", "Panasonic", "Toshiba",
  "Toyota", "Honda", "Nissan", "BMW", "Mercedes-Benz",
  "LVMH", "Kering", "Chanel", "Gucci", "Rolex"
];

const southAfricaLocations = [
  // Gauteng
  "Johannesburg, Gauteng", "Sandton, Gauteng", "Midrand, Gauteng", "Centurion, Gauteng",
  "Pretoria, Gauteng", "Roodepoort, Gauteng", "Boksburg, Gauteng", "Benoni, Gauteng",
  "Krugersdorp, Gauteng", "Randburg, Gauteng", "Bryanston, Gauteng", "Fourways, Gauteng",
  "Rosebank, Gauteng", "Parktown, Gauteng", "Braamfontein, Gauteng", "Marshalltown, Gauteng",
  
  // Western Cape
  "Cape Town, Western Cape", "Stellenbosch, Western Cape", "Paarl, Western Cape",
  "Bellville, Western Cape", "Durbanville, Western Cape", "Somerset West, Western Cape",
  "George, Western Cape", "Knysna, Western Cape", "Hermanus, Western Cape",
  "V&A Waterfront, Western Cape", "Century City, Western Cape", "Claremont, Western Cape",
  
  // KwaZulu-Natal
  "Durban, KwaZulu-Natal", "Umhlanga, KwaZulu-Natal", "Westville, KwaZulu-Natal",
  "Pietermaritzburg, KwaZulu-Natal", "Ballito, KwaZulu-Natal", "Richards Bay, KwaZulu-Natal",
  "Newcastle, KwaZulu-Natal", "Ladysmith, KwaZulu-Natal",
  
  // Eastern Cape
  "Gqeberha, Eastern Cape", "East London, Eastern Cape", "Mthatha, Eastern Cape",
  "Port Elizabeth, Eastern Cape", "Jeffreys Bay, Eastern Cape",
  
  // Free State
  "Bloemfontein, Free State", "Welkom, Free State", "Bethlehem, Free State",
  
  // Mpumalanga
  "Nelspruit, Mpumalanga", "Mbombela, Mpumalanga", "White River, Mpumalanga",
  "Witbank, Mpumalanga", "Secunda, Mpumalanga",
  
  // Limpopo
  "Polokwane, Limpopo", "Tzaneen, Limpopo", "Phalaborwa, Limpopo",
  "Bela-Bela, Limpopo", "Musina, Limpopo",
  
  // North West
  "Rustenburg, North West", "Klerksdorp, North West", "Brits, North West",
  "Potchefstroom, North West", "Mahikeng, North West",
  
  // Northern Cape
  "Kimberley, Northern Cape", "Upington, Northern Cape", "Kuruman, Northern Cape",
  
  // Remote
  "Remote — South Africa", "Remote — Cape Town, SA", "Remote — Johannesburg, SA"
];

const salaryRanges = [
  { display: "ZAR 10,000 – 15,000/month", min: 10000, max: 15000 },
  { display: "ZAR 15,000 – 22,000/month", min: 15000, max: 22000 },
  { display: "ZAR 22,000 – 30,000/month", min: 22000, max: 30000 },
  { display: "ZAR 30,000 – 40,000/month", min: 30000, max: 40000 },
  { display: "ZAR 40,000 – 55,000/month", min: 40000, max: 55000 },
  { display: "ZAR 55,000 – 75,000/month", min: 55000, max: 75000 },
  { display: "ZAR 75,000 – 100,000/month", min: 75000, max: 100000 },
  { display: "ZAR 100,000 – 150,000/month", min: 100000, max: 150000 },
  { display: "ZAR 150,000+/month", min: 150000, max: 200000 },
  { display: "ZAR 8,000 – 12,000/month", min: 8000, max: 12000 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Mining & Resources",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Media & Entertainment",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Agriculture", "Wildlife & Conservation", "Tourism"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in South Africa. ${isRemote ? "This is a fully remote role open to qualified candidates across South Africa." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in South Africa and the African continent.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in ZAR
• Health insurance for you and family
• 30 days annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Pension fund contribution`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in South Africa looking for experienced professionals to scale our impact across the country and beyond.

${isRemote ? "This remote-first position allows you to work from anywhere in South Africa with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in South Africa
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive ZAR salary • Health insurance • Annual leave (30 days) • Pension fund • Performance bonus`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of South Africa's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in South Africa" : `📍 ${location}`}

We're building the future of business in Africa and need exceptional talent like you. This is a rare opportunity to work with a world-class brand while living in South Africa.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the continent.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving global business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | Health insurance | Pension fund | Annual bonus | 30 days leave | Learning budget | Gym membership`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * southAfricaLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — South Africa" : southAfricaLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, southAfricaLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-ZA-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "South Africa" : job.location.split(',')[0],
        "addressCountry": "ZA"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "South Africa"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "ZAR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, southAfricaLocations, industries };