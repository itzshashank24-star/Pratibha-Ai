const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const KEY="pratibhaAI_v3";
const DEMO_ID="pratibha", DEMO_PASS="Pratibha@123";

const streams={
"Engineering & Technology":["Software Engineering","AI / Machine Learning","Data Science","Cybersecurity","Cloud & DevOps","Web & Mobile Development","Robotics","IoT","Electronics","Electrical","Mechanical","Civil","Chemical","Aerospace","VLSI / Semiconductor","Biomedical Engineering"],
"Pure Science":["Physics","Chemistry","Biology","Mathematics","Statistics","Astronomy","Astrophysics","Geology","Materials Science","Research Science"],
"Medical & Healthcare":["Medicine","Nursing","Pharmacy","Physiotherapy","Occupational Therapy","Medical Laboratory","Radiology","Public Health","Clinical Research","Nutrition","Biomedical Science","Healthcare Data"],
"Agriculture & Food":["Agricultural Science","Agronomy","Horticulture","Food Technology","Dairy Technology","Plant Biotechnology","Agricultural Data Science","Food Safety","Fisheries Science","Veterinary Science"],
"Environment & Sustainability":["Environmental Science","Climate Science","Renewable Energy","Sustainability","ESG","Water Resources","Conservation","Energy Analytics","Environmental Engineering"],
"Finance, Economics & FinTech":["Financial Analysis","FinTech","Economics","Actuarial Science","Risk Analytics","Quantitative Finance","Accounting","Investment Analysis","Banking"],
"Management & Business":["Business Analysis","Product Management","Project Management","Operations","HR Analytics","Marketing Analytics","Strategy","Entrepreneurship","Supply Chain"],
"Law, Policy & Governance":["Cyber Law","IP / Patent","Technology Policy","Data Privacy","Legal Tech","Public Policy","Compliance","Civil Services","State PSC"],
"Design & Creative Technology":["UI / UX","Product Design","Interaction Design","Game Design","3D Design","Animation Technology","Creative Technology","Architecture","Design Research"],
"Education & Research":["STEM Education","Lectureship / Professor","Research Scientist","Research Assistant","EdTech","Academic Counselling","Science Education","Curriculum Design"],
"Defence, Space & Public Sector":["Defence Technology","Space Science","Defence Research","PSU Careers","UPSC Civil Services","GIS","Geospatial Science"],
"Science Communication & Media":["Science Communication","Technical Writing","Science Journalism","Medical Writing","Technical Content","Data Storytelling","Digital Media Analytics"],
"Skilled Technical & Vocational":["Laboratory Technician","Medical Technician","Electronics Technician","Solar Technician","CAD Technician","CNC Technician","Network Technician","Quality Technician","Pharmacy Technician"]
};

const careerMap={
"AI / Machine Learning":["AI/ML Engineer","Machine Learning Scientist","AI Product Specialist"],
"Data Science":["Data Scientist","Data Analyst","Healthcare Data Analyst"],
"Cybersecurity":["Cybersecurity Analyst","Security Engineer","Privacy Analyst"],
"Software Engineering":["Software Engineer","Full Stack Developer","Backend Developer"],
"Physics":["Physicist","Research Scientist","Space Scientist"],
"Chemistry":["Chemist","Materials Scientist","Quality Scientist"],
"Biology":["Biologist","Research Scientist","Biomedical Scientist"],
"Mathematics":["Mathematician","Quantitative Analyst","Statistician"],
"Statistics":["Statistician","Data Scientist","Risk Analyst"],
"Medicine":["Doctor / Physician","Clinical Researcher","Public Health Professional"],
"Nursing":["Nurse","Clinical Coordinator","Public Health Professional"],
"Pharmacy":["Pharmacist","Clinical Researcher","Medical Writer"],
"Biotechnology":["Biotechnologist","Clinical Researcher","Research Scientist"],
"Environmental Science":["Environmental Scientist","Sustainability Consultant","Climate Analyst"],
"Agricultural Science":["Agricultural Scientist","Agronomist","Agricultural Data Scientist"],
"Food Technology":["Food Technologist","Food Safety Specialist","Quality Scientist"],
"FinTech":["FinTech Analyst","Risk Analyst","Product Analyst"],
"Economics":["Economist","Policy Analyst","Data Analyst"],
"Actuarial Science":["Actuary","Risk Analyst","Quantitative Analyst"],
"UI / UX":["UI/UX Designer","Product Designer","Design Researcher"],
"STEM Education":["STEM Educator","Curriculum Designer","EdTech Specialist"],
"Space Science":["Space Scientist","Astrophysicist","GIS Specialist"],
"Science Communication":["Science Communicator","Science Journalist","Technical Writer"]
};

const mentors=[
["Dr. Aisha Khan","AI/ML & Data Science","AI Researcher","AI / Machine Learning",4.9],
["Dr. Meera Iyer","Biotechnology & Research","Biotech Scientist","Biotechnology",4.8],
["Dr. Riya Sen","Physics & Space","Space Scientist","Physics",4.9],
["Ananya Sharma","Cybersecurity","Security Engineer","Cybersecurity",4.7],
["Priya Nair","Healthcare & Public Health","Public Health Professional","Public Health",4.8],
["Kavya Rao","Medicine & Clinical Research","Clinical Researcher","Medicine",4.9],
["Neha Verma","Pure Mathematics & Data","Statistician","Mathematics",4.8],
["Simran Kaur","Agriculture & Food Tech","Food Technologist","Food Technology",4.7],
["Ishita Das","Climate & Sustainability","Climate Scientist","Environmental Science",4.8],
["Pooja Patel","FinTech & Economics","FinTech Product Lead","FinTech",4.9],
["Sneha Joshi","Product & Business","Product Manager","Business Analysis",4.7],
["Nandini Rao","UI/UX & Creative Tech","Product Designer","UI / UX",4.8],
["Shreya Menon","STEM Education","STEM Educator","STEM Education",4.9],
["Tanya Kapoor","Law, Privacy & Policy","Technology Policy Expert","Data Privacy",4.7],
["Ira Gupta","Space & GIS","Geospatial Scientist","Geospatial Science",4.8],
["Radhika Bose","Science Communication","Science Communicator","Science Communication",4.8]
];

const salary={
"AI/ML Engineer":[7,22],"Data Scientist":[6,20],"Software Engineer":[5,18],"Cybersecurity Analyst":[5,17],"Physicist":[4,14],"Research Scientist":[4,16],"Doctor / Physician":[8,30],"Clinical Researcher":[4,15],"Pharmacist":[3,10],"Biotechnologist":[3.5,14],"Environmental Scientist":[4,13],"Agricultural Scientist":[4,14],"Food Technologist":[3.5,12],"FinTech Analyst":[5,18],"Economist":[5,16],"Actuary":[6,20],"UI/UX Designer":[4,16],"STEM Educator":[3.5,12],"Space Scientist":[6,20],"Technical Writer":[3,12]
};

const lang={
en:{dashboard:"Dashboard",resume:"Resume Analyzer",careers:"Career Explorer",mentors:"Find Mentors",roadmap:"Career Roadmap",interview:"Mock Interview",community:"Safe Community",salary:"Salary Explorer",profile:"My Profile",logout:"Logout",hello:"Welcome back",explore:"Explore your personalized career plan.",resumeTitle:"Resume Analyzer",careerTitle:"Career Explorer",mentorTitle:"Find a Mentor",roadmapTitle:"Your Career Roadmap",interviewTitle:"Mock Interview",communityTitle:"Safe Community",salaryTitle:"Salary Explorer",profileTitle:"My Profile"},
hi:{dashboard:"डैशबोर्ड",resume:"रिज़्यूमे विश्लेषक",careers:"करियर एक्सप्लोरर",mentors:"मेंटर्स खोजें",roadmap:"करियर रोडमैप",interview:"मॉक इंटरव्यू",community:"सुरक्षित कम्युनिटी",salary:"सैलरी एक्सप्लोरर",profile:"मेरी प्रोफाइल",logout:"लॉगआउट",hello:"वापसी पर स्वागत है",explore:"आपकी रुचि के अनुसार व्यक्तिगत करियर योजना।",resumeTitle:"रिज़्यूमे विश्लेषक",careerTitle:"करियर एक्सप्लोरर",mentorTitle:"मेंटोर खोजें",roadmapTitle:"आपका करियर रोडमैप",interviewTitle:"मॉक इंटरव्यू",communityTitle:"सुरक्षित कम्युनिटी",salaryTitle:"सैलरी एक्सप्लोरर",profileTitle:"मेरी प्रोफाइल"},
hinglish:{dashboard:"Dashboard",resume:"Resume Analyzer",careers:"Career Explorer",mentors:"Mentor Khoje",roadmap:"Career Roadmap",interview:"Mock Interview",community:"Safe Community",salary:"Salary Explorer",profile:"Meri Profile",logout:"Logout",hello:"Welcome back",explore:"Aapki interest ke according personalized career plan.",resumeTitle:"Resume Analyzer",careerTitle:"Career Explorer",mentorTitle:"Mentor Khoje",roadmapTitle:"Aapka Career Roadmap",interviewTitle:"Mock Interview",communityTitle:"Safe Community",salaryTitle:"Salary Explorer",profileTitle:"Meri Profile"},
bn:{dashboard:"ড্যাশবোর্ড",resume:"রেজিউমে বিশ্লেষণ",careers:"ক্যারিয়ার এক্সপ্লোরার",mentors:"মেন্টর খুঁজুন",roadmap:"ক্যারিয়ার রোডম্যাপ",interview:"মক ইন্টারভিউ",community:"সেফ কমিউনিটি",salary:"বেতন এক্সপ্লোরার",profile:"আমার প্রোফাইল",logout:"লগআউট",hello:"আবার স্বাগতম",explore:"আপনার আগ্রহ অনুযায়ী ব্যক্তিগত ক্যারিয়ার পরিকল্পনা।",resumeTitle:"রেজিউমে বিশ্লেষণ",careerTitle:"ক্যারিয়ার এক্সপ্লোরার",mentorTitle:"মেন্টর খুঁজুন",roadmapTitle:"আপনার ক্যারিয়ার রোডম্যাপ",interviewTitle:"মক ইন্টারভিউ",communityTitle:"সেফ কমিউনিটি",salaryTitle:"বেতন এক্সপ্লোরার",profileTitle:"আমার প্রোফাইল"},
mr:{dashboard:"डॅशबोर्ड",resume:"रेझ्युमे विश्लेषक",careers:"करिअर एक्सप्लोरर",mentors:"मेंटॉर शोधा",roadmap:"करिअर रोडमॅप",interview:"मॉक इंटरव्ह्यू",community:"सुरक्षित कम्युनिटी",salary:"पगार एक्सप्लोरर",profile:"माझी प्रोफाइल",logout:"लॉगआउट",hello:"पुन्हा स्वागत आहे",explore:"तुमच्या आवडीनुसार वैयक्तिक करिअर योजना.",resumeTitle:"रेझ्युमे विश्लेषक",careerTitle:"करिअर एक्सप्लोरर",mentorTitle:"मेंटॉर शोधा",roadmapTitle:"तुमचा करिअर रोडमॅप",interviewTitle:"मॉक इंटरव्ह्यू",communityTitle:"सुरक्षित कम्युनिटी",salaryTitle:"पगार एक्सप्लोरर",profileTitle:"माझी प्रोफाइल"},
te:{dashboard:"డ్యాష్‌బోర్డ్",resume:"రెజ్యూమ్ విశ్లేషణ",careers:"కెరీర్ ఎక్స్‌ప్లోరర్",mentors:"మెంటర్‌ను కనుగొనండి",roadmap:"కెరీర్ రోడ్‌మ్యాప్",interview:"మాక్ ఇంటర్వ్యూ",community:"సేఫ్ కమ్యూనిటీ",salary:"జీతం ఎక్స్‌ప్లోరర్",profile:"నా ప్రొఫైల్",logout:"లాగ్ అవుట్",hello:"మళ్లీ స్వాగతం",explore:"మీ ఆసక్తికి అనుగుణంగా వ్యక్తిగత కెరీర్ ప్లాన్.",resumeTitle:"రెజ్యూమ్ విశ్లేషణ",careerTitle:"కెరీర్ ఎక్స్‌ప్లోరర్",mentorTitle:"మెంటర్‌ను కనుగొనండి",roadmapTitle:"మీ కెరీర్ రోడ్‌మ్యాప్",interviewTitle:"మాక్ ఇంటర్వ్యూ",communityTitle:"సేఫ్ కమ్యూనిటీ",salaryTitle:"జీతం ఎక్స్‌ప్లోరర్",profileTitle:"నా ప్రొఫైల్"},
ta:{dashboard:"டாஷ்போர்டு",resume:"ரெஸ்யூம் பகுப்பாய்வு",careers:"கேரியர் எக்ஸ்ப்ளோரர்",mentors:"மென்டரைத் தேடுங்கள்",roadmap:"கேரியர் ரோட்மேப்",interview:"மொக் இன்டர்வியூ",community:"பாதுகாப்பான சமூககம்",salary:"சம்பள எக்ஸ்ப்ளோரர்",profile:"என் சுயவிவரம்",logout:"வெளியேறு",hello:"மீண்டும் வரவேற்கிறோம்",explore:"உங்கள் ஆர்வத்திற்கு ஏற்ப தனிப்பட்ட கேரியர் திட்டம்.",resumeTitle:"ரெஸ்யூம் பகுப்பாய்வு",careerTitle:"கேரியர் எக்ஸ்ப்ளோரர்",mentorTitle:"மென்டரைத் தேடுங்கள்",roadmapTitle:"உங்கள் கேரியர் ரோட்மேப்",interviewTitle:"மொக் இன்டர்வியூ",communityTitle:"பாதுகாப்பான சமூககம்",salaryTitle:"சம்பள எக்ஸ்ப்ளோரர்",profileTitle:"என் சுயவிவரம்"},
gu:{dashboard:"ડેશબોર્ડ",resume:"રિઝ્યુમે વિશ્લેષણ",careers:"કારકિર્દી એક્સપ્લોરર",mentors:"મેન્ટર શોધો",roadmap:"કારકિર્દી રોડમેપ",interview:"મોક ઇન્ટરવ્યૂ",community:"સુરક્ષિત કમ્યુનિટી",salary:"પગાર એક્સપ્લોરર",profile:"મારી પ્રોફાઇલ",logout:"લૉગઆઉટ",hello:"ફરી સ્વાગત છે",explore:"તમારી રુચિ મુજબ વ્યક્તિગત કારકિર્દી યોજના.",resumeTitle:"રિઝ્યુમે વિશ્લેષણ",careerTitle:"કારકિર્દી એક્સપ્લોરર",mentorTitle:"મેન્ટર શોધો",roadmapTitle:"તમારો કારકિર્દી રોડમેપ",interviewTitle:"મોક ઇન્ટરવ્યૂ",communityTitle:"સુરક્ષિત કમ્યુનિટી",salaryTitle:"પગાર એક્સપ્લોરર",profileTitle:"મારી પ્રોફાઇલ"},
kn:{dashboard:"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",resume:"ರೆಸ್ಯೂಮ್ ವಿಶ್ಲೇಷಣೆ",careers:"ಕೆರಿಯರ್ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",mentors:"ಮೆಂಟರ್ ಹುಡುಕಿ",roadmap:"ಕೆರಿಯರ್ ರೋಡ್‌ಮ್ಯಾಪ್",interview:"ಮಾಕ್ ಸಂದರ್ಶನ",community:"ಸುರಕ್ಷಿತ ಸಮುದಾಯ",salary:"ಸಂಬಳ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",profile:"ನನ್ನ ಪ್ರೊಫೈಲ್",logout:"ಲಾಗ್ ಔಟ್",hello:"ಮತ್ತೆ ಸ್ವಾಗತ",explore:"ನಿಮ್ಮ ಆಸಕ್ತಿಗೆ ಅನುಗುಣವಾದ ವೈಯಕ್ತಿಕ ಕೆರಿಯರ್ ಯೋಜನೆ.",resumeTitle:"ರೆಸ್ಯೂಮ್ ವಿಶ್ಲೇಷಣೆ",careerTitle:"ಕೆರಿಯರ್ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",mentorTitle:"ಮೆಂಟರ್ ಹುಡುಕಿ",roadmapTitle:"ನಿಮ್ಮ ಕೆರಿಯರ್ ರೋಡ್‌ಮ್ಯಾಪ್",interviewTitle:"ಮಾಕ್ ಸಂದರ್ಶನ",communityTitle:"ಸುರಕ್ಷಿತ ಸಮುದಾಯ",salaryTitle:"ಸಂಬಳ ಎಕ್ಸ್‌ಪ್ಲೋರರ್",profileTitle:"ನನ್ನ ಪ್ರೊಫೈಲ್"},
ml:{dashboard:"ഡാഷ്ബോർഡ്",resume:"റെസ്യൂം വിശകലനം",careers:"കരിയർ എക്സ്പ്ലോറർ",mentors:"മെന്ററെ കണ്ടെത്തുക",roadmap:"കരിയർ റോഡ്മാപ്പ്",interview:"മോക്ക് ഇന്റർവ്യൂ",community:"സേഫ് കമ്മ്യൂണിറ്റി",salary:"ശമ്പള എക്സ്പ്ലോറർ",profile:"എന്റെ പ്രൊഫൈൽ",logout:"ലോഗൗട്ട്",hello:"വീണ്ടും സ്വാഗതം",explore:"നിങ്ങളുടെ താൽപര്യത്തിന് അനുയോജ്യമായ വ്യക്തിഗത കരിയർ പ്ലാൻ.",resumeTitle:"റെസ്യൂം വിശകലനം",careerTitle:"കരിയർ എക്സ്പ്ലോറർ",mentorTitle:"മെന്ററെ കണ്ടെത്തുക",roadmapTitle:"നിങ്ങളുടെ കരിയർ റോഡ്മാപ്പ്",interviewTitle:"മോക്ക് ഇന്റർവ്യൂ",communityTitle:"സേഫ് കമ്മ്യൂണിറ്റി",salaryTitle:"ശമ്പള എക്സ്പ്ലോറർ",profileTitle:"എന്റെ പ്രൊഫൈൽ"},
pa:{dashboard:"ਡੈਸ਼ਬੋਰਡ",resume:"ਰਿਜ਼ਿਊਮੇ ਵਿਸ਼ਲੇਸ਼ਣ",careers:"ਕੈਰੀਅਰ ਐਕਸਪਲੋਰਰ",mentors:"ਮੈਂਟਰ ਲੱਭੋ",roadmap:"ਕੈਰੀਅਰ ਰੋਡਮੈਪ",interview:"ਮੌਕ ਇੰਟਰਵਿਊ",community:"ਸੇਫ ਕਮਿਊਨਿਟੀ",salary:"ਤਨਖਾਹ ਐਕਸਪਲੋਰਰ",profile:"ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ",logout:"ਲੌਗਆਉਟ",hello:"ਵਾਪਸ ਸਵਾਗਤ ਹੈ",explore:"ਤੁਹਾਡੀ ਦਿਲਚਸਪੀ ਅਨੁਸਾਰ ਨਿੱਜੀ ਕੈਰੀਅਰ ਯੋਜਨਾ।",resumeTitle:"ਰਿਜ਼ਿਊਮੇ ਵਿਸ਼ਲੇਸ਼ਣ",careerTitle:"ਕੈਰੀਅਰ ਐਕਸਪਲੋਰਰ",mentorTitle:"ਮੈਂਟਰ ਲੱਭੋ",roadmapTitle:"ਤੁਹਾਡਾ ਕੈਰੀਅਰ ਰੋਡਮੈਪ",interviewTitle:"ਮੌਕ ਇੰਟਰਵਿਊ",communityTitle:"ਸੇਫ ਕਮਿਊਨਿਟੀ",salaryTitle:"ਤਨਖਾਹ ਐਕਸਪਲੋਰਰ",profileTitle:"ਮੇਰੀ ਪ੍ਰੋਫਾਈਲ"},
or:{dashboard:"ଡ୍ୟାସବୋର୍ଡ",resume:"ରେଜ୍ୟୁମେ ବିଶ୍ଳେଷଣ",careers:"କ୍ୟାରିୟର ଏକ୍ସପ୍ଲୋରର",mentors:"ମେଣ୍ଟର ଖୋଜନ୍ତୁ",roadmap:"କ୍ୟାରିୟର ରୋଡମ୍ୟାପ",interview:"ମକ୍ ଇଣ୍ଟରଭ୍ୟୁ",community:"ସୁରକ୍ଷିତ କମ୍ୟୁନିଟି",salary:"ଦରମା ଏକ୍ସପ୍ଲୋରର",profile:"ମୋ ପ୍ରୋଫାଇଲ",logout:"ଲଗଆଉଟ୍",hello:"ପୁଣି ସ୍ୱାଗତ",explore:"ଆପଣଙ୍କ ଆଗ୍ରହ ଅନୁସାରେ ବ୍ୟକ୍ତିଗତ କ୍ୟାରିୟର ଯୋଜନା।",resumeTitle:"ରେଜ୍ୟୁମେ ବିଶ୍ଳେଷଣ",careerTitle:"କ୍ୟାରିୟର ଏକ୍ସପ୍ଲୋରର",mentorTitle:"ମେଣ୍ଟର ଖୋଜନ୍ତୁ",roadmapTitle:"ଆପଣଙ୍କ କ୍ୟାରିୟର ରୋଡମ୍ୟାପ",interviewTitle:"ମକ୍ ଇଣ୍ଟରଭ୍ୟୁ",communityTitle:"ସୁରକ୍ଷିତ କମ୍ୟୁନିଟି",salaryTitle:"ଦରମା ଏକ୍ସପ୍ଲୋରର",profileTitle:"ମୋ ପ୍ରୋଫାଇଲ"},
as:{dashboard:"ড্যাশব’ৰ্ড",resume:"ৰিজিউমে বিশ্লেষণ",careers:"কেৰিয়াৰ এক্সপ্লোৰাৰ",mentors:"মেন্টৰ বিচাৰক",roadmap:"কেৰিয়াৰ ৰোডমেপ",interview:"মক ইণ্টাৰভিউ",community:"সুৰক্ষিত কমিউনিটি",salary:"দৰমহা এক্সপ্লোৰাৰ",profile:"মোৰ প্ৰফাইল",logout:"লগআউট",hello:"পুনৰ স্বাগতম",explore:"আপোনাৰ আগ্ৰহ অনুসৰি ব্যক্তিগত কেৰিয়াৰ পৰিকল্পনা।",resumeTitle:"ৰিজিউমে বিশ্লেষণ",careerTitle:"কেৰিয়াৰ এক্সপ্লোৰাৰ",mentorTitle:"মেন্টৰ বিচাৰক",roadmapTitle:"আপোনাৰ কেৰিয়াৰ ৰোডমেপ",interviewTitle:"মক ইণ্টাৰভিউ",communityTitle:"সুৰক্ষিত কমিউনিটি",salaryTitle:"দৰমহা এক্সপ্লোৰাৰ",profileTitle:"মোৰ প্ৰফাইল"}
};

let state=JSON.parse(localStorage.getItem(KEY)||"{}");
state.lang=state.lang||"en"; state.posts=state.posts||[]; state.chat=state.chat||[]; state.resume=state.resume||null;
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const t=k=>(lang[state.lang]||lang.en)[k]||lang.en[k]||k;
const initials=n=>(n||"AI").split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase();
function toast(m){const x=$("#toast");x.textContent=m;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2500)}
function fillStreams(select,blank=false){select.innerHTML=(blank?'<option value="">Select field</option>':"")+Object.keys(streams).map(x=>`<option>${esc(x)}</option>`).join("")}
function updateSubfields(){const a=streams[$("#pStream").value]||[];$("#pSubfield").innerHTML='<option value="">Select specialization</option>'+a.map(x=>`<option>${esc(x)}</option>`).join("")}
function currentSub(){return state.profile?.subfield||state.profile?.stream||"STEM";}
function openModal(id){$("#"+id).classList.remove("hidden")}
function closeModal(id){$("#"+id).classList.add("hidden")}

function showSection(name){
  $$(".section").forEach(x=>x.classList.toggle("active",x.id===name));
  $$(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.section===name));
  const titles={dashboard:"Dashboard",resume:t("resumeTitle"),careers:t("careerTitle"),mentors:t("mentorTitle"),roadmap:t("roadmapTitle"),interview:t("interviewTitle"),community:t("communityTitle"),salary:t("salaryTitle"),profile:t("profileTitle")};
  $("#pageTitle").textContent=titles[name]||name;
  if(innerWidth<801)$("#sidebar").classList.remove("open");
  render(name);
}

function render(name){
  if(name==="dashboard")renderDashboard();
  if(name==="resume")renderResume();
  if(name==="careers")renderCareers();
  if(name==="mentors")renderMentors();
  if(name==="roadmap")renderRoadmap();
  if(name==="interview")renderInterview();
  if(name==="community")renderCommunity();
  if(name==="salary")renderSalary();
  if(name==="profile")renderProfile();
}

function renderDashboard(){
 const p=state.profile||{};
 const sub=currentSub(), roles=careerMap[sub]||["Research Scientist","Data Analyst","STEM Professional"];
 const gaps=state.resume?.gaps||["Advanced domain skills","Project portfolio","Interview preparation"];
 $("#dashboard").innerHTML=`
 <div class="hero"><div><span class="pill">PratibhaAI</span><h1>${t("hello")}, ${esc(p.name||"Candidate")} 👋</h1><p>${t("explore")}</p><div style="margin-top:16px"><button class="btn" style="background:#fff;color:#5b4df5" onclick="showSection('careers')">Explore Careers →</button></div></div><div class="hero-art">🚀</div></div>
 <div class="grid stats"><div class="card stat"><span>Career Match</span><b>${p.stream?Math.min(95,72+(p.skills?.split(",").filter(Boolean).length||0)*3):0}%</b></div><div class="card stat"><span>Resume Score</span><b>${state.resume?.score||"—"}</b></div><div class="card stat"><span>Skill Gaps</span><b>${gaps.length}</b></div><div class="card stat"><span>Mentor Matches</span><b>${mentors.filter(m=>m[3]===sub||m[1].toLowerCase().includes((p.subfield||"").split(" ")[0].toLowerCase())).length||3}</b></div></div>
 <div class="grid two"><div class="card"><div class="section-title"><h3>Recommended roles</h3><span class="pill">${esc(sub)}</span></div><div class="list">${roles.map((r,i)=>`<div class="list-row"><span><b>${esc(r)}</b><small class="muted"> ${i===0?"Best match":"Strong option"}</small></span><button class="btn secondary" onclick="showSection('roadmap')">Plan</button></div>`).join("")}</div></div>
 <div class="card"><div class="section-title"><h3>Current skill gaps</h3><button class="btn ghost" onclick="showSection('resume')">Analyze Resume</button></div>${gaps.slice(0,5).map((g,i)=>`<div style="margin:13px 0"><div class="list-row" style="border:0;padding:0 0 7px"><span>${esc(g)}</span><b>${35+i*7}%</b></div><div class="progress"><i style="width:${35+i*7}%"></i></div></div>`).join("")}</div></div>`;
}

function renderResume(){
 $("#resume").innerHTML=`<div class="card"><div class="section-title"><div><h3>${t("resumeTitle")}</h3><p class="muted">Upload PDF/DOCX and get score, skills, skill gaps and role recommendations.</p></div></div>
 <div class="dropzone"><p style="font-size:30px">📄</p><h3>Upload your resume</h3><p class="muted">PDF or DOCX • Text is analyzed locally in your browser.</p><label for="resumeFile">Choose Resume</label><input id="resumeFile" type="file" accept=".pdf,.docx,.doc"></div>
 ${state.resume?resumeResult():"<div class='empty'>No resume analyzed yet.</div>"}</div>`;
 $("#resumeFile")?.addEventListener("change",handleResume);
}
function resumeResult(){let r=state.resume;return `<div class="analysis-grid"><div class="card"><span class="muted">Resume Score</span><div class="score">${r.score}/100</div><div class="progress"><i style="width:${r.score}%"></i></div><p>${esc(r.summary)}</p></div><div class="card"><h3>Detected Skills</h3><div class="skill-list">${r.skills.map(x=>`<span class="skill">${esc(x)}</span>`).join("")||"<span class='muted'>No strong skills detected</span>"}</div></div><div class="card"><h3>Skill Gap</h3><div class="skill-list">${r.gaps.map(x=>`<span class="skill gap">${esc(x)}</span>`).join("")}</div><p class="muted">Focus on these skills to improve your target-role match.</p></div><div class="card"><h3>Recommended Roles</h3><div class="list">${r.roles.map(x=>`<div class="list-row"><b>${esc(x)}</b><span class="pill">Recommended</span></div>`).join("")}</div></div><div class="card" style="grid-column:1/-1"><h3>Improvement Tips</h3><ol>${r.tips.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div></div>`}
async function extractFile(file){
 if(file.name.toLowerCase().endsWith(".pdf")){
   if(!window.pdfjsLib) return file.name;
   const buf=await file.arrayBuffer();const pdf=await pdfjsLib.getDocument({data:buf}).promise;let text="";
   for(let i=1;i<=pdf.numPages;i++){const pg=await pdf.getPage(i);const c=await pg.getTextContent();text+=c.items.map(x=>x.str).join(" ")+" ";}
   return text;
 }
 if(file.name.toLowerCase().endsWith(".docx")&&window.mammoth){const a=await file.arrayBuffer();const r=await mammoth.extractRawText({arrayBuffer:a});return r.value}
 return file.name;
}
async function handleResume(e){
 const file=e.target.files[0];if(!file)return;toast("Analyzing resume...");
 try{
   const text=(await extractFile(file)).toLowerCase();
   const allSkills=["python","java","javascript","react","sql","excel","power bi","machine learning","deep learning","data science","statistics","html","css","aws","azure","docker","kubernetes","cybersecurity","biology","biotechnology","chemistry","physics","mathematics","research","clinical","pharmacy","nursing","public health","agriculture","food technology","gis","autocad","communication","leadership"];
   const skills=allSkills.filter(x=>text.includes(x));
   const p=state.profile||{};const pref=(p.subfield||"").toLowerCase();let gaps=[];
   const expected={
    "ai / machine learning":["python","machine learning","deep learning","statistics","sql"],
    "data science":["python","sql","statistics","data science","power bi"],
    "cybersecurity":["network","cybersecurity","linux","python"],
    "medicine":["clinical","research","communication"],
    "biotechnology":["biology","biotechnology","research","statistics"],
    "physics":["physics","mathematics","research","python"],
    "chemistry":["chemistry","research","statistics"],
    "environmental science":["research","statistics","gis"],
    "fintech":["python","sql","statistics","excel"],
    "ui / ux":["figma","research","communication"]
   };
   const target=Object.entries(expected).find(([k])=>pref.includes(k))?.[1]||["communication","project portfolio","domain skills"];
   gaps=target.filter(x=>!text.includes(x));
   if(!gaps.length)gaps=["Advanced project depth","Industry certification"];
   const roles=careerMap[p.subfield]||careerMap[p.stream]||["STEM Professional","Research Scientist","Data Analyst"];
   const score=Math.max(45,Math.min(96,50+skills.length*5-gaps.length*2+(text.length>900?12:0)));
   state.resume={name:file.name,score,skills,gaps,roles:roles.slice(0,4),summary:`Your resume shows ${skills.length} relevant skill${skills.length===1?"":"s"} for ${p.subfield||p.stream||"your STEM path"}. The biggest improvement opportunity is closing the skill gap and adding measurable projects.`,tips:["Add 2–3 projects directly related to your target role.","Quantify impact using numbers, percentages or outcomes.","Add missing technical/domain skills shown in the Skill Gap section.","Keep your resume focused and use role-specific keywords."]};
   save();renderResume();renderDashboard();toast("Resume analysis completed");
 }catch(err){console.error(err);toast("Could not read this file. Try a text-based PDF/DOCX.")}
}

function renderCareers(){
 const selected=state.profile?.stream||Object.keys(streams)[0];
 $("#careers").innerHTML=`<div class="card"><div class="section-title"><div><h3>${t("careerTitle")}</h3><p class="muted">Explore STEM careers across science, healthcare, technology, agriculture, finance, environment and more.</p></div></div><div class="toolbar"><select id="careerStream">${Object.keys(streams).map(x=>`<option ${x===selected?"selected":""}>${esc(x)}</option>`).join("")}</select><input id="careerSearch" placeholder="Search career or specialization..."></div><div id="careerGrid" class="career-grid"></div></div>`;
 const draw=()=>{const s=$("#careerStream").value,q=$("#careerSearch").value.toLowerCase();const arr=streams[s].filter(x=>x.toLowerCase().includes(q));$("#careerGrid").innerHTML=arr.map(x=>{const roles=careerMap[x]||[x+" Professional","Researcher","Analyst"];return `<div class="card career-card"><span class="pill">${esc(s)}</span><h4>${esc(x)}</h4><p>Build a career in ${esc(x)} with personalized learning and mentor support.</p><div class="list">${roles.map(r=>`<div class="list-row"><span>${esc(r)}</span><button class="btn secondary" onclick="selectCareer('${esc(x)}','${esc(r)}')">Choose</button></div>`).join("")}</div></div>`}).join("")||"<div class='empty'>No matching career found.</div>"};
 $("#careerStream").onchange=draw;$("#careerSearch").oninput=draw;draw();
}
function selectCareer(sub,role){state.profile={...state.profile,subfield:sub,goal:role};save();toast("Career preference updated");renderDashboard();showSection("roadmap")}

function renderMentors(){
 const selected=state.profile?.subfield||"";
 $("#mentors").innerHTML=`<div class="card"><div class="section-title"><div><h3>${t("mentorTitle")}</h3><p class="muted">Find women mentors across the full STEM ecosystem.</p></div></div><div class="toolbar"><select id="mentorCategory"><option value="">All STEM categories</option>${Object.keys(streams).map(x=>`<option>${esc(x)}</option>`).join("")}</select><input id="mentorSearch" placeholder="Search mentor, expertise or field..."></div><div id="mentorGrid" class="mentor-grid"></div></div>`;
 const draw=()=>{const cat=$("#mentorCategory").value,q=$("#mentorSearch").value.toLowerCase();let a=mentors.filter(m=>(!cat||streams[cat]?.some(s=>m[1].toLowerCase().includes(s.toLowerCase().split(" ")[0]))||m[3]===cat||m[1].toLowerCase().includes(cat.split(" ")[0].toLowerCase()))&&(!q||m.join(" ").toLowerCase().includes(q)));if(!a.length&&selected)a=mentors.filter(m=>m[1].toLowerCase().includes(selected.split(" ")[0].toLowerCase())||m[3].toLowerCase().includes(selected.split(" ")[0].toLowerCase()));$("#mentorGrid").innerHTML=a.map(m=>`<div class="card mentor-card"><div class="mentor-top"><div class="mentor-avatar">${initials(m[0])}</div><div><h4>${esc(m[0])}</h4><div class="rating">★ ${m[4]}</div></div></div><p><b>${esc(m[2])}</b><br>${esc(m[1])}</p><span class="pill">${esc(m[3])}</span><div style="margin-top:14px"><button class="btn primary" onclick="bookMentor('${esc(m[0])}','${esc(m[1])}')">Book Mentor</button></div></div>`).join("")||"<div class='empty'>No mentor matches this filter.</div>"};
 $("#mentorCategory").onchange=draw;$("#mentorSearch").oninput=draw;draw();
}
function bookMentor(name,expertise){$("#bookingContent").innerHTML=`<h2>Book ${esc(name)}</h2><p class="muted">${esc(expertise)}</p><label>Preferred date<input id="bookDate" type="date"></label><label>Preferred time<select id="bookTime"><option>10:00 AM</option><option>1:00 PM</option><option>4:00 PM</option><option>7:00 PM</option></select></label><label>Your message<textarea id="bookMsg" rows="3" placeholder="What would you like guidance on?"></textarea></label><button class="btn primary full" onclick="confirmBooking('${esc(name)}')">Request Mentorship</button>`;openModal("bookingModal")}
function confirmBooking(name){closeModal("bookingModal");toast(`Mentorship request sent to ${name}`)}

function renderRoadmap(){
 const p=state.profile||{}, target=p.goal||careerMap[p.subfield]?.[0]||"Your target STEM role";
 const steps=["Clarify target role and required skills","Build a strong foundation through courses and practice","Create 2–3 portfolio projects or research outputs","Connect with mentors and join relevant communities","Apply for internships, jobs, fellowships or research opportunities","Prepare for interviews and continuously improve"];
 $("#roadmap").innerHTML=`<div class="card"><div class="section-title"><div><h3>${t("roadmapTitle")}</h3><p class="muted">Personalized path for <b>${esc(target)}</b> • ${esc(p.subfield||p.stream||"STEM")}</p></div><button class="btn secondary" onclick="showSection('mentors')">Find Mentor</button></div><div class="roadmap">${steps.map((x,i)=>`<div class="step"><div class="step-num">${i+1}</div><div><h3>${esc(x)}</h3><p class="muted">${["Define a realistic goal and shortlist role-specific competencies.","Learn core concepts and tools relevant to your chosen field.","Show evidence of skills through projects, research, internships or case studies.","Get feedback from professionals and build a useful network.","Use your profile and resume to target opportunities.","Practice role-specific questions and track progress monthly."][i]}</p></div></div>`).join("")}</div></div>`;
}

const questions={AI:["Explain overfitting and how you would reduce it.","What is the difference between supervised and unsupervised learning?","How would you evaluate a classification model?"],"Data":["What is the difference between mean and median?","How do you handle missing data?","Explain a data project you have completed."],"Medical":["How do you communicate complex information to a patient?","What is evidence-based practice?","Describe a challenging situation and how you handled it."],"Science":["How would you design a scientific experiment?","How do you validate a research result?","Tell us about a project or research topic you studied."]};
function renderInterview(){
 const sub=(state.profile?.subfield||"").toLowerCase();const key=sub.includes("ai")||sub.includes("machine")?"AI":sub.includes("data")||sub.includes("statistics")?"Data":sub.includes("medicine")||sub.includes("health")||sub.includes("pharmacy")?"Medical":"Science";const qs=questions[key];
 $("#interview").innerHTML=`<div class="card"><h3>${t("interviewTitle")}</h3><p class="muted">Practice questions tailored to ${esc(state.profile?.subfield||"your STEM field")}.</p><div class="list">${qs.map((q,i)=>`<div class="list-row"><span><b>Q${i+1}.</b> ${esc(q)}</span><button class="btn secondary" onclick="startAnswer('${esc(q)}')">Answer</button></div>`).join("")}</div><div id="answerBox" style="margin-top:16px"></div></div>`;
}
function startAnswer(q){$("#answerBox").innerHTML=`<div class="card" style="background:var(--bg)"><h4>${esc(q)}</h4><textarea id="answerText" rows="5" placeholder="Write your answer here..."></textarea><div style="margin-top:10px"><button class="btn primary" onclick="evaluateAnswer()">Get AI-style feedback</button><button class="btn ghost" style="margin-left:7px" onclick="speakText('${esc(q)}')">🔊 Listen</button></div></div>`}
function evaluateAnswer(){const x=$("#answerText").value.trim();if(!x)return toast("Write an answer first");toast(x.length>120?"Good detail. Add one measurable example to make it stronger.":"Add more structure: situation, action, result and what you learned.");}

function renderCommunity(){
 if(!state.posts.length)state.posts=[{name:"PratibhaAI Community",text:"Welcome! Share STEM learning goals, project ideas and career questions. Keep the space respectful and supportive."}];
 $("#community").innerHTML=`<div class="grid two"><div class="card"><h3>${t("communityTitle")}</h3><p class="muted">A supportive space for learning and professional growth.</p><textarea id="postText" rows="4" placeholder="Share a question, win, resource or career experience..."></textarea><button class="btn primary" style="margin-top:10px" onclick="addPost()">Post</button><div class="list" style="margin-top:18px">${state.posts.slice().reverse().map(p=>`<div class="post"><b>${esc(p.name)}</b><span class="muted">${esc(p.text)}</span></div>`).join("")}</div></div><div class="card"><h3>Community guidelines</h3><div class="list"><div class="list-row">Respect every learner</div><div class="list-row">No harassment or discrimination</div><div class="list-row">Protect personal information</div><div class="list-row">Share useful and honest resources</div></div></div></div>`;
}
function addPost(){const x=$("#postText").value.trim();if(!x)return;state.posts.push({name:state.profile?.name||"Candidate",text:x});save();renderCommunity();toast("Post published")}

function renderSalary(){
 const roles=Object.keys(salary);const selected=state.profile?.goal&&salary[state.profile.goal]?state.profile.goal:roles[0];
 $("#salary").innerHTML=`<div class="card"><h3>${t("salaryTitle")}</h3><p class="muted">Indicative annual salary ranges in India (₹ lakh). Actual pay varies by location, company, skills and experience.</p><div class="toolbar"><select id="salaryRole">${roles.map(x=>`<option ${x===selected?"selected":""}>${esc(x)}</option>`).join("")}</select></div><div id="salaryBox"></div></div>`;
 const draw=()=>{const r=$("#salaryRole").value,[a,b]=salary[r];$("#salaryBox").innerHTML=`<div class="grid two"><div class="card"><span class="muted">Typical range</span><h1>₹${a}L – ₹${b}L / year</h1><div class="progress"><i style="width:70%"></i></div><p class="muted">Use this as a planning reference, not a guaranteed salary.</p></div><div class="card"><h3>What improves earning potential?</h3><div class="list"><div class="list-row">Strong technical/domain skills</div><div class="list-row">Real projects and measurable outcomes</div><div class="list-row">Internships / research experience</div><div class="list-row">Communication and interview skills</div></div></div></div>`};$("#salaryRole").onchange=draw;draw();
}

function renderProfile(){
 const p=state.profile||{};const fields=[["Name",p.name],["Email",p.email],["Mobile",p.mobile],["Location",p.location],["Education",p.education],["Degree / Course",p.degree],["STEM Field",p.stream],["Specialization",p.subfield],["Career Goal",p.goal],["Experience",p.experience],["Skills",p.skills],["Work Preference",p.preference]];
 $("#profile").innerHTML=`<div class="card"><div class="section-title"><div><h3>${t("profileTitle")}</h3><p class="muted">Your complete personalized candidate profile.</p></div><button class="btn primary" onclick="openProfile(true)">Edit Profile</button></div><div class="profile-grid">${fields.map(f=>`<div class="profile-field"><small>${esc(f[0])}</small><b>${esc(f[1]||"—")}</b></div>`).join("")}</div></div>`;
}
function openProfile(edit=true){
 const p=state.profile||{};["name","email","mobile","location","education","degree","goal","skills","experience","preference"].forEach(k=>{const id="p"+k[0].toUpperCase()+k.slice(1);if($("#"+id))$("#"+id).value=p[k]||""});
 fillStreams($("#pStream"));$("#pStream").value=p.stream||Object.keys(streams)[0];updateSubfields();$("#pSubfield").value=p.subfield||"";openModal("profileModal");
}

function chatReply(q){
 const p=state.profile||{}, s=(p.subfield||p.stream||"STEM"), r=careerMap[p.subfield]?.[0]||careerMap[p.stream]?.[0]||"a suitable STEM role", l=q.toLowerCase();
 if(l.includes("resume")||l.includes("cv"))return state.resume?`Your current resume score is ${state.resume.score}/100. Skill gaps: ${state.resume.gaps.join(", ")}. I recommend adding role-specific projects and measurable achievements.`:`Upload your resume in Resume Analyzer and I will show your score, detected skills, skill gaps and recommended roles.`;
 if(l.includes("mentor"))return `For ${s}, I can help you find mentors in the Find Mentors section. Your best starting role is ${r}.`;
 if(l.includes("skill")||l.includes("learn"))return `For ${s}, focus first on fundamentals, then 2–3 practical projects, and finally interview preparation. Your current profile skills are ${p.skills||"not added yet"}.`;
 if(l.includes("job")||l.includes("career"))return `Based on your profile, ${r} is a strong match. Open Career Explorer to compare alternatives and Roadmap for a step-by-step plan.`;
 if(l.includes("salary"))return `Salary depends on role, experience and location. Open Salary Explorer and select ${salary[r]?r:Object.keys(salary)[0]} for an indicative India range.`;
 return `I’m here to help with your ${s} journey. You can ask me about resume gaps, skills, mentors, career roles, roadmap, interviews or salary.`;
}
function addChat(text,who="bot"){state.chat.push({text,who});save();renderChat()}
function renderChat(){const box=$("#chatMessages");box.innerHTML=state.chat.slice(-30).map(m=>`<div class="msg ${m.who}">${esc(m.text)}</div>`).join("");box.scrollTop=box.scrollHeight}
function sendChat(){const x=$("#chatInput").value.trim();if(!x)return;$("#chatInput").value="";addChat(x,"user");setTimeout(()=>{const r=chatReply(x);addChat(r,"bot")},250)}
function setupChat(){if(!state.chat.length)addChat(`Hi ${state.profile?.name||"there"}! I’m your PratibhaAI career assistant. What would you like to work on?`);renderChat();$("#quickPrompts").innerHTML=["Analyze my resume","What skills should I learn?","Find a mentor","Career roadmap"].map(x=>`<button onclick="askQuick('${x}')">${x}</button>`).join("")}
function askQuick(x){$("#chatInput").value=x;sendChat()}

const speechLang={en:"en-IN",hi:"hi-IN",hinglish:"hi-IN",bn:"bn-IN",mr:"mr-IN",te:"te-IN",ta:"ta-IN",gu:"gu-IN",kn:"kn-IN",ml:"ml-IN",pa:"pa-IN",or:"or-IN",as:"as-IN"};
function speakText(text){if(!("speechSynthesis"in window))return toast("Speech output is not supported in this browser");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=speechLang[state.lang]||"en-IN";speechSynthesis.speak(u)}
function startVoice(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return toast("Voice input is not supported. Try Chrome.");const r=new SR();r.lang=speechLang[state.lang]||"en-IN";r.interimResults=false;r.onresult=e=>{$("#chatInput").value=e.results[0][0].transcript;sendChat()};r.onerror=()=>toast("Microphone input could not be started");r.start();toast("Listening...")}

function applyLanguage(){
 $$("[data-i18n]").forEach(x=>x.textContent=t(x.dataset.i18n));
 $("#topGreeting").textContent=t("hello");
 const active=$(".nav-item.active")?.dataset.section||"dashboard";showSection(active);
 renderChat();
}
function saveProfile(e){
 e.preventDefault();
 state.profile={name:$("#pName").value.trim(),email:$("#pEmail").value.trim(),mobile:$("#pMobile").value.trim(),location:$("#pLocation").value.trim(),education:$("#pEducation").value.trim(),degree:$("#pDegree").value.trim(),stream:$("#pStream").value,subfield:$("#pSubfield").value,goal:$("#pGoal").value.trim(),experience:$("#pExperience").value,skills:$("#pSkills").value.trim(),preference:$("#pPreference").value};
 state.logged=true;save();closeModal("profileModal");renderAll();toast("Profile saved and personalized");
}
function renderAll(){applyLanguage();renderDashboard();renderResume();renderCareers();renderMentors();renderRoadmap();renderInterview();renderCommunity();renderSalary();renderProfile();setupChat();$("#profileTop").textContent=initials(state.profile?.name||"A")}

function login(e){e.preventDefault();if($("#loginId").value.trim()===DEMO_ID&&$("#loginPassword").value===DEMO_PASS){state.logged=true;save();$("#loginScreen").classList.add("hidden");$("#app").classList.remove("hidden");if(!state.profile)openProfile(false);else renderAll()}else toast("Invalid User ID or Password")}
function logout(){state.logged=false;save();$("#app").classList.add("hidden");$("#loginScreen").classList.remove("hidden");$("#loginForm").reset()}
function init(){
 $("#loginForm").addEventListener("submit",login);$("#logoutBtn").onclick=logout;$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("open");$("#themeBtn").onclick=()=>{document.body.classList.toggle("dark");state.dark=document.body.classList.contains("dark");save()};if(state.dark)document.body.classList.add("dark");
 $("#profileTop").onclick=()=>openProfile(true);$("#profileForm").addEventListener("submit",saveProfile);$("#pStream").onchange=updateSubfields;
 $$(".nav-item").forEach(x=>x.onclick=()=>showSection(x.dataset.section));$$("[data-close]").forEach(x=>x.onclick=()=>closeModal(x.dataset.close));
 $("#sendChat").onclick=sendChat;$("#chatInput").addEventListener("keydown",e=>{if(e.key==="Enter")sendChat()});$("#micBtn").onclick=startVoice;$("#chatVoiceOut").onclick=()=>{const last=[...state.chat].reverse().find(x=>x.who==="bot");if(last)speakText(last.text)};$("#chatHide").onclick=()=>{$("#chatbot").classList.add("hidden");$("#chatOpen").classList.remove("hidden")};$("#chatOpen").onclick=()=>{$("#chatbot").classList.remove("hidden");$("#chatOpen").classList.add("hidden")};
 $("#languageSelect").value=state.lang;$("#languageSelect").onchange=e=>{state.lang=e.target.value;save();applyLanguage();toast("Language changed")};
 if(state.logged){$("#loginScreen").classList.add("hidden");$("#app").classList.remove("hidden");if(!state.profile)openProfile(false);else renderAll()}
}
init();
