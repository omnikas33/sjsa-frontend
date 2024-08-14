import {
  faUser,
  faGraduationCap,
  faChartLine,
  faBriefcase,
  faHandsHelping,
  faWheelchair,
  faPeopleArrows,
  faGavel,
  faAward,
  faBalanceScale
 } from '@fortawesome/free-solid-svg-icons';
 import CFSWIcon from './components/AlliedOffices/AlliedOfficeIcon/CFSW.png'
 import BARTIIcon from './components/AlliedOffices/AlliedOfficeIcon/BARTI.png'
 import BCCIcon from './components/AlliedOffices/AlliedOfficeIcon/BCC.png'
 import CSCSTIcon from './components/AlliedOffices/AlliedOfficeIcon/CSCST.png'
 import IPS from './components/AlliedOffices/AlliedOfficeIcon/IPS/IPS.jpeg'
 import AboutUsIcon from './components/AlliedOffices/AlliedOfficeIcon/Sidebar/About.png'
 import CommissionerIcon from './components/AlliedOffices/AlliedOfficeIcon/Sidebar/Commissioner.png'
 import ContactUsIcon from './components/AlliedOffices/AlliedOfficeIcon/Sidebar/Contact.png'
 import SchemesIcon from './components/AlliedOffices/AlliedOfficeIcon/Sidebar/Schemes.png'
 import SamyojnaListIcon from './components/AlliedOffices/AlliedOfficeIcon/Sidebar/SamayojanList.png'
 import impLettersIcon from './components/AlliedOffices/AlliedOfficeIcon/Sidebar/ImpLetters.png'


 

const offices = [
  {
    id: 1,
    icon: CFSWIcon,


    name: 'Commissioner for Social Welfare Pune',
    subTopics: [
        {
          id: 21,
          name: 'About Us',
          icon: AboutUsIcon ,
          aboutus: {
            funding: 'Government Fund',
            objective: 'To promote education',
            beneficiary: 'Students',
            eligibility: ['Age below 111', 'Resident of the state'],
            benefits: 'Scholarship',
            application: 'Online application form',
            category: 'Education',
            contact: 'educationdepartment@example.com',
            applicationForm: 'Link to application form',
            applicationAcceptancePeriod: '1st January - 31st March'
          }
        },
{
        id: 22,
        name: 'Commissioner',
        icon: CommissionerIcon ,
        Commissionerdetails: {
          name: 'Mr.Omprakash Bokaria',
          designation: 'Commissioner for Social Welfare Pune',
          office: 'Social Welfare Department, Pune',
          image: IPS,
          bio:
            ' '
        }
      },
      {
        id: 23,
        name: 'Schemes',
        icon: SchemesIcon ,

        subSchemes: [
          {
            id: 241,
            name: 'Rajarshi Shahu Maharaj Scholarship',
            details: {
              funding: 'State',
              objective: 'Scheduled Caste students must get the essential knowledge and skill, as well as they can face the competition, it is essential for Scheduled Caste students to provide free higher education in the prominent institutions in the India. Taking into consideration the fact State Government has introduced the new scheme 100 Scheduled Caste students studying in the countrywide higher educational institutions.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Student should be Scheduled Caste and Resident of Maharashtra.',
                'Maximum income limit of his parents is Rs. 4.50 lakhs.',
                'This scholarship is applicable for countrywide study such as IIT. Indian Institute of Management Institute of Technology where admissions are given through the entrance examinations.',
              ],
              benefits: 'Awardee students will get full fee prescribed by the institutions as well as Hostel and Mess Charges prescribed by the institutions. Besides this Rs. 10000 per year will be given for Books, Note Books, and other educational instruments.',
              application: 'Manual form should be filled by student then submitted it to Social Welfare Commissionerate office.',
              category: 'Education',
              contact: 'Social Welfare Commissionerate Office, Maharashtra State, Pune',
            }
          },
          {
            id: 242,
            name: 'Scholarship to the Scheduled Caste Students for Abroad Studies',
            details: {
              funding: 'State',
              objective: 'Due to weak economic and financial condition Scheduled Caste students cannot afford the higher education in prominent universities in the foreign countries. To overcome this difficulty Government of Maharashtra has introduced this scheme as per G.R. No. EBC-2003/C No. 115/BC-2, dated 11th June 2003.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'For this scholarship parents income limit is Rs. 6.00 lakhs per year.',
                'Students have to make a contract with the Government that after successful completion of foreign education he will pay minimum 10 per cent of the total expenditure to the Social Justice Fund, but it is optional.',
              ],
              benefits: 'Selected students will get full Tuition fee and fixed by the foreign university maintenance allowance 14000 USD or 9000 GBP. The Tuition fee will be paid directly to the university. If students do not complete the course/education it is compulsory for him to refund all the expenses incurred by the Government for his Course.',
              application: 'Manual form should be filled by student then submitted it to Social Welfare Commissionerate office.',
              category: 'Education',
              contact: 'Social Welfare Commissionerate Office, Maharashtra State, Pune',
            }
          },
          {
            id: 243,
            name: 'Rajarshi Shahu Maharaj Merit Scholarship',
            details: {
              funding: 'State',
              objective: 'To develop and enhance in the merit as well as to encourage the Scheduled Caste students this new scheme is introduced by the government vide G.R. EBC 2003/C No. 115/BCW-2 dated 11th June 2003.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Students should belong to Scheduled Caste.',
                'There is no income limit for the scholarship.',
                'This scholarship will be given in addition to Government of India Scholarship and other Scholarship.',
              ],
              benefits: 'Under this scheme, the Scheduled Caste Students who secured 75 percent or more than 75 percent marks in the S.S.C. Examination and takes admission in the 11th Std. will get scholarship @ Rs. 300 per month for 10 months for two years i.e. in the 11th Std. and 12th Std.',
              application: 'Student should fill the application form on this website http://mahaeschool.maharashtra.gov.in',
              category: 'Education',
              contact: 'Related District, Assistant Commissioner, Social Welfare and Principle of the College',
            }
          },
          {
            id: 244,
            name: 'Rajarshi Chatrapati Shahu Maharaj Merit Awards',
            details: {
              funding: 'State',
              objective: '10th and 12th of the special examination of the Scheduled Castes Students are provided for backward pronounced success getting Boys and girls Rajarshi Chatrapati Shahu Maharaj Quality Award',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Scheduled Caste student stands first in Maharashtra from the General Merit list: Rs. 2.50 Lakh',
                'Scheduled Caste student stands first in the Divisional Board: Rs. 1.00 Lakh.',
                'Scheduled Caste student stands in General Merit list in the Divisional Board: Rs. 0.50 Lakh',
                'Scheduled Caste student stands first in the District: Rs. 0.25 Lakh',
                'Scheduled Caste student stands first in the respective Taluka: Rs. 0.10 Lakh',
                'Scheduled Caste student stands first in the school: Rs. 0.05 Lakh',
              ],
              benefits: 'Above Cash payment, memento and the Certificate will be given to student as per his/her Achievement',
              application: 'Manual form should be filled by student then submitted it to Social Welfare Commissionerate office.',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social Welfare',
            }
          },
          {
            id: 245,
            name: 'Savitribai Phule Scholarship Award',
            details: {
              funding: 'State',
              objective: 'The scheme named as Savitribai Phule Scholarship for Scheduled Caste Girls is introduced.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'No income limit.',
                'No need to submit the application.',
              ],
              benefits: 'The girls studying in 8th to 10th class will get Rs.100 per month for 10 months in a year admissible as per the said scheme.',
              application: 'Related School Head Master Should make the list of Students and send it to related District Social Welfare Officer, Zillah Parishad.',
              category: 'Education',
              contact: 'Related District Social Welfare Officer, Zillah Parishad',
            }
          },
          {
            id: 246,
            name: 'Pre-matric Scholarships to Children of those who are engaged in unclean occupation.',
            details: {
              funding: 'State and Central',
              objective: 'The Scheme is under Centrally Sponsored Scheme. The children of those parents who are engaged in unclean occupation in sweeping, scavenging, Tanning and Flaying are given scholarship from Std. I to Std. X',
              beneficiary: 'All Category',
              eligibility: [
                'The Scheme is under Centrally Sponsored Scheme. The children of those parents who are engaged in unclean occupation',
                'No income limit',
                'This Scheme is applicable for all category students',
                'parents who are engaged in unclean occupation required a certificate of Gram Sevak and Sarpanch, Head of Municipal Corporation, Commissioner of Corporation/Dy. Commissioner /ward Officer',
                'Caste Certificate is Mandatory.',
              ],
              benefits: [
                'Hostellers- The Hostellers have been paid scholarship as per revised rate as under :-',
                        'Std. III to X Rs. 700 p.m. (for 10 months).',
                        'The adhoc grant of Rs. 1000 per student per annum should be given in addition to regular scholarship.',
                        'Previously the scheme was being implemented for Hostellers only but as per revised rates it is also applied for day scholars. The rates of Scholarships for scheme are as follows from 1st November 1991 :-',
                        'Std. I to x Rs. 110 p.m. (for 10 months).',
                        'The ad hoc grant of Rs. 750 per student per annum should be given in additions to regular scholarship. The scholarship is admissible to one children of one family. This scheme is implemented by District Social Welfare Officer, Zillah Parishad.',
            ],          
              application: 'Student should fill the application form on this website http//mahaeschool.maharashtra.gov.in',
              category: 'Education',
              contact: 'Related District Social Welfare Officer Zillah Parishad and Related School Head Master',
            }
          },
          {
            id: 247,
            name: 'Maintenance Allowance to B.C. Students Studying in Sainik School.',
            details: {
              funding: 'State',
              objective: 'OBC students should have access to national protection Prabodhini, military forces to be recruited them students, students in the discipline, confidence, courage, leadership, patriotism has been launched to cultivate these qualities, etc.',
              beneficiary: 'Scheduled Category',
              eligibility: [
                'Parents income is not more than Rs. 2 Lakhs per year. Since 1996-1997 onwards the students who are studying in GIA voluntary schools are paid 15000 per year for their educational fees.',
              ],
              benefits: 'Students Studying in Sainik Schools, Samara, Nashik and Pune, the entire expenditure on Tuition Fees, Exam Fees, Lodging, Boarding, Cloth, Uniforms, Horse-riding, Pocket Money etc., incurred by these schools for B.C. students is reimbursed to these schools by social Welfare Department',
              application: 'Student should fill the application form on this website http//mahaeschool.maharashtra.gov.in',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social welfare and Head Master of Sainik School',
            }
          },
          {
            id: 248,
            name: 'Government of India Post-Matric Scholarship Scheme',
            details: {
              funding: 'Central',
              objective: 'In order to encourage the Backward Class Students to undergo Post-Matric Courses, the Government of India has introduced a scheme known as the Government of India Post-Matric Scholarship to Scheduled Castes students.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'The parents/Guardian annual income up to Rs. 200000 limit for full scholarship.',
                'Student category should be Scheduled caste or Navbouddha',
                'Student should be resident of Maharashtra',
                'Student studying above 10th std.',
              ],
              benefits: 'Under this scheme the eligible Scheduled Castes including Nav-Buddha students are paid maintenances allowance ranging from Rs. 230 p.m. to Rs.450 PM for boys and girls (day scholar) and Rs. 1200 p.m. for boys and girls (Hostellers). In addition to maintenance allowance all fees which are compulsorily payable by the students to the institutions are also covered under the scheme.',
              application: 'Student should fill the application form on this website http//mahaeschool.maharashtra.gov.in',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social welfare',
            }
          },
          {
            id: 249,
            name: 'Award of Scholarship to Backward Class Students In High Schools.',
            details: {
              funding: 'State',
              objective: 'The students of Scheduled Caste of Std 5th and 7th as well as 8th and 10th first two students are eligible for this scheme.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'These scholarships are awarded to first two Backward Class students in order of merit in each standard in the school who secure more than 50 percent marks in their last annual examination. The first preference is given to X Std. and if funds permit it is extended to student in other standards from IX to10th',
              ],
              benefits: 'For 5th to 7th students Rs.50 per month (Rs. 500 for 10 months) and for 8th to 10th students Rs. 100 per month (Rs. 1000 for 10 months)',
              application: 'Related School Head Master Should make the list of Students and send it to related District Social Welfare Officer, Zillah Parishad',
              category: 'Education',
              contact: 'Related District Social Welfare Officer, Zillah Parishad',
            }
          },
          {
            id: 250,
            name: 'Tuition fees and examination fees to Backward Class Students.',
            details: {
              funding: 'State',
              objective: 'In order to encourage the Backward Class Students to undergo Post-Matric Courses, the Government of India has introduced a scheme known as the Government of India Post-Matric Scholarship to Scheduled Castes students.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'No income limit',
                'Student category should be Scheduled caste or Navbouddha',
                'Student should be resident of Maharashtra',
                'Student studying above 10th std.',
              ],
              benefits: 'All fees which are compulsorily payable by the students to the institutions are also covered under the scheme.',
              application: 'Student should fill the application form on this website http//mahaeschool.maharashtra.gov.in',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social welfare and College Principle',
            }
          },
          {
            id: 251,
            name: 'Professional training allowance and subsistence stipend attached to the hostel students',
            details: {
              funding: 'State',
              objective: 'The students of Medical, engineering, agriculture, etc. are given an allowance and subsistence to scheduled caste students who are attached to the commercial college and hostel',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Student should be admitted to professional course',
                'Student should be eligible for Govt. of India scholarship scheme.',
                'Income limit should be same as per Govt. of India scholarship scheme.',
              ],
              benefits: 'Professional training scholarship will Maintenance allowance, books, stationery, accommodation, meals, etc. Item comes catered cost. Professional attached college hostel, government hostel, hostel and other students comes to live under the subsistence allowance in addition to the Government of India scholarship.',
              application: 'Student should fill the application form on this website http//mahaeschool.maharashtra.gov.in',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social welfare',
            }
          },
          {
            id: 252,
            name: 'Professional Technical training to Scheduled Caste Students through ITI (Professional training on Demand)',
            details: {
              funding: 'State',
              objective: 'Through this scheme Government has decided to provide short term technical courses training to less educated Scheduled Caste students through ITI. and other training institutes. Due to this training student will get a benefit of self-employment.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Student should be Scheduled Caste.',
                'Student should pass minimum 4th Standard',
              ],
              benefits:[
                'Student gets the tool kit and Rs. 100 per month scholarship.',
                'training period should be 1 week to 2 months.',
                'The Expenditure of Every Student as per G.R. is near about 2500.',
                'Student will get the free training in ITI.',
              ],        
              application: 'Related Principle of Industrial training Institute.',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social welfare',
            }
          },
          {
            id: 253,
            name: 'Stipends to trainees in Industrial training Institute',
            details: {
              funding: 'State',
              objective: 'From this scheme the Technical training is given to Scheduled Caste students in ITI. for their job opportunities',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Student should be Scheduled Caste.',
                'It is mandatory for the Student should take training in recognized institute.',
                'Father income limit should be Rs. 65290/-',
              ],
              benefits:[
                'Students residing in the hostel of the organization Department of Technical Education gives him Rs. 60/- per month and Social welfare department gives him Rs. 40/- per month and the organization Department of Technical Education does not give anything to student for those student social welfare department gives him Rs.100 /- per month',
              ],        
              application: 'Related principle, Industrial training Institute',
              category: 'Education',
              contact: 'Related District Social Welfare Officer, Zillah Parishad',
            }
          },
          {
            id: 254,
            name: 'Book Bank for Scheduled Caste Students',
            details: {
              funding: 'Central',
              objective: 'The existing Centrally Sponsored Scheme of Book Banks for SC Students stand merged with the Centrally Sponsored Scheme of Post-Matric Scholarship for SC students.',
              beneficiary: 'Scheduled Caste',
              eligibility: [
                'Student should be eligible for Govt. of India scholarship scheme',
                'Student should be Scheduled Caste.',
                'Student should take admission for Medical, Engineering, Agriculture, Law and Veterinary courses.',
              ],
              benefits:[
                'For Medical and Engineering Students 1 set for 2 students',
                'and Rs. 7500/-',
                'For Agriculture Students 1 set for 2 students and Rs. 4500/-',
                'For Veterinary Students 1 set for 2 students and Rs.5000/-',
                'For Postâ€“Graduate Courses in Medical, Engineering, Agricultural and Veterinary Courses 1 set for 1 student and Rs. 5000/-',
              ],        
              application: '-----------------------------------',
              category: 'Education',
              contact: 'Related Assistant Commissioner (District), Social welfare',
            }
          },
          {
            id: 255,
            name: 'social work college (Grants for social welfare institution)',
            details: {
              funding: 'State Government',
              objective: 'The scheme is started since 1966 for the purpose of promote social work education, also develop trained human resource, & increase their Quality. Etc.',
              beneficiary: 'All category students',
              eligibility: [
                'UG pass student',
              ],
              benefits:[
                'Teaching / Non -Teaching Staff salary 100% grants &',
                '75% Building Rent which is certified by public works Department',
              ],        
              application: 'The selection of the courses for student on the basis of exam text',
              category: 'Educational, only student',
              contact: 'Concern Dist. Assistant commissioner social welfare and principal concern social work college',
            }
          },
          {
            id: 256,
            name: '(Grants in aid) Aided hostel for Backward students run by NGO',
            details: {
              funding: 'State Government',
              objective: 'Provide living, boarding facility for backward students',
              beneficiary: 'SC/ST/VJ/NT/OBC/PWD',
              eligibility: [
                'Admitted only backward students especially Mang, Walmiki, Katkari Madiya Gondh, orphan, PWD (as per Govt. GR norms)',
              ],
              benefits:[
                'Employee Honorarium per month',
                'Students - 900x10 per month=9000/-',
                'Building rent -75% as per certified by public works dept.,',
              ],        
              application: 'Admitted through the basis of merit in June July month',
              category: 'Education',
              contact: 'Dist. social welfare officer Z P and warden of the hostel aided hostel',
            }
          },
          {
            id: 257,
            name: 'Grant for SC ashram school',
            details: {
              funding: 'State Government',
              objective: 'The scheme is started since 1996-97 on the VJNT ashram school basis, specifically low literacy rate District, to promote education rate SC community',
              beneficiary: 'Backward students specifically Scheduled caste students',
              eligibility: [
                'Admitted only backward students especially Mang, Walmiki, Katkari Madiya Gondh, orphan ,PWD( as per Govt. Gr norms)',
              ],
              benefits:[
                'Employee Honorarium per month',
                'Students - 900x10 per month=9000/-',
                'Building rent -75% as per certified by public works dept.,',
              ],        
              application: 'Concern SC ashram school Head master & District Social welfare officer',
              category: 'Education',
              contact: 'District Social welfare office & office of the concern Ashram school',
            }
          },
          {
            id: 258,
            name: 'Providing Mini tractor and its sub parts to the Self Help Group of Scheduled Castes',
            details: {
              funding: 'State',
              objective: 'In order to improve the financial condition of the scheduled castes and Nav-Buddhists Self Help Group.',
              beneficiary: 'SC',
              eligibility: [
                'There are 1 to 13 terms and conditions. Major terms and conditions are-',
                '1. Applicant should be The scheduled castes and Nav-Buddhists and domicile of Maharashtra state.',
                '2. The Self-help Group must consist of 80% of scheduled castes and Nav-Buddhists members.',
                '3. The cost of Mini tractor and its sub parts is estimated of Rs. 3.50 lakhs. Self-help Group must collect 10 % of this amount of Rs. 35,000/- and government will provide remaining 90% subsidy of Rs. 3,10,000/-.',
              ],
              benefits:[
                'Government provide mini tractor along with its sub parts like trolley, rotator etc.',
                'The cost of one mini tractor along with its sub parts is Rs. 3,50,000/-',
                'The 10 % of this amount is collected by the self-help group and remaining',
                'Rs. 3,15,000/- is the subsidy given by the govt.',
              ],        
              application: 'Application has to be submitted to Assistant Commissioner, District Social welfare office.',
              category: 'Economic Upliftment',
              contact: 'Assistant Commissioner, Social Welfare District Officel',
            }
          },
          {
            id: 259,
            name: 'Providing Tin stalls to Gatai Kamgar',
            details: {
              funding: 'State',
              objective: 'This scheme is meant for the social and economic upliftment of SC Persons who are involved in the Leather footwear work and preparing of leather goods and to protect them from heat, rain and wind.',
              beneficiary: 'SC',
              eligibility: [
                'Applicant should be the scheduled castes and domicile of Maharashtra state.',
                'Total house hold income must be â€“',
                'In rural area below Rs. 40,000/-',
                'In urban area below Rs. 50,000/-',
                'Age limit - minimum 18 years.',
                'The place where the applicant asking for the stall must be provided on rent/ lease/purchased/official free hand by Gram panchayat, Municipality, Cantonment Board or Municipal corporation or must be of own property of the applicant.',
              ],
              benefits:[
                'Govt. provides tin stalls on 100 percent Government grant and Rs.500 as financial assistance.',
              ],        
              application: 'Application has to be submitted to Assistant Commissioner, District Social welfare office.',
              category: 'Economic Upliftment',
              contact: 'Assistant Commissioner, Social Welfare District Office',
            }
          },
          {
            id: 260,
            name: 'Long Term-Loan to SC Co-op Spinning Mills under Special Component Plan',
            details: {
              funding: 'State',
              objective: 'To promote the spinning mills of scheduled caste members',
              beneficiary: 'SC',
              eligibility: [
                'There are 1 to 24 terms and conditions. Main conditions are-',
                'The concern spinning mill has to collect Rs. 80.00 lacks or minimum 5 per cent cost of project to be collected as member shares.',
                'The Director of textile and Handloom Maharashtra State, Nagpur sanctions 9 times amount of the member share of the spinning mill as Government share capital and Department of Social Welfare sanction 1:1 (50 per cent of the project cost) financial assistance as long term basis loan to such spinning mills',
                'The project submitted by the pinning mill should be enumerated by the financial institutions/ banks that provide loan to the spinning mill. In addition to this the project report can be checked / enumerated by following institutions and submit to government. The enumeration fee is fixed for Rs. 2.50 lakhs. The project enumeration cost should be bared by the spinning mill.',
                'Maharashtra Industrial & Technical consultancy Organization Lmt. (MITCON), Pune.',
                'Agriculture financial Corporation, Mumbai',
                'Dattajirao Technical Institute, Ichalkarangi.',
              ],
              benefits:[
                '50 per cent of Project cost is provided as a loan by social welfare department.',
              ],        
              application: 'Application has to be submitted to Textile department, Govt. of Maharashtra. After approval and sanction of share capital. Then application should be submitted to Assistant Commissioner, Social Welfare District Office. Social welfare department sanction 50 % loan to these spinning mills.',
              category: 'Economic Upliftment',
              contact: 'Assistant Commissioner, Social Welfare District Office',
            }
          },
          {
            id: 261,
            name: 'Financial Assistance scheme to the Co-operative Industrial societies of Scheduled Castes',
            details: {
              funding: 'State',
              objective: 'In order to minimize the ratio of unemployment and to promote industrialization among the scheduled caste people',
              beneficiary: 'SC',
              eligibility: [
                'There are 1 to 32 and 5 supplementary terms and conditions. Major conditions are-',
                'Only registered Schedule caste co-operative societies are eligible to apply.',
                'After the project get started, There should be 70 per cent of Schedule castes employees in Co-operative societies',
                '5% cost of project to be collected as member shares then the co-operative society is liable to sanctions share capital /loan from government.',
                'Applicant society should raise the member fund of 5% of project cost; government will sanction 35 % of share capital and 35 % of loan. Society should get 25% of loan from financial institution/bank',
              ],
              benefits:[
                '35 % of share capital and 35 % of loan is provided by social welfare department. The maximum project cost is 7.00 crore.',
              ],        
              application: 'Application has to be submitted to Assistant Commissioner, District Social welfare office.',
              category: 'Economic Upliftment',
              contact: 'Assistant Commissioner, Social Welfare District Office',
            }
          },
          {
            id: 262,
            name: 'Karma veer Dadasaheb Gaikwad Sabalikaran & Swabhiman Yojana',
            details: {
              funding: 'State',
              objective: 'To improve the financial condition of the scheduled castes and Nav-Buddhists who are landless workers and under the below poverty line.',
              beneficiary: 'SC',
              eligibility: [
                'There are 1 to 13 terms and conditions. Major conditions are-',
                'The applicant should be scheduled castes and Nav-Buddhists who are landless workers and below poverty line.',
                'Age minimum 18 and maximum 60 years',
                'Landless workers, divorcee and widows ladies are given preference.',
              ],
              benefits:[
                '2 acre irrigated or 4 acre non-irrigated land is provided on 50 % of subsidy and 50% is loan.',
              ],        
              application: 'Application has to be submitted to Assistant Commissioner, District Social welfare office.',
              category: 'Economic Upliftment',
              contact: 'Assistant Commissioner, Social Welfare District Office',
            }
          },
          {
            id: 263,
            name: 'Karmaveer Padmashri Dadasaheb Gaikwad birth centenary and prize distribution.',
            details: {
              funding: 'State',
              objective: 'The award is given to the use against tradition and untouchable against individuals and organizations that work for workers and social movement and landless farm Worker.',
              beneficiary: 'Category for all',
              eligibility: [
                'Valuable works should be done by person in Social welfare sector & Institute should be registered.',
                'Social service of the persons & Institute must be a period of 15 years & above.',
                'A Male and female persons ages limit should not below 50 years & 40 years respectively.',
                'S.P. / Police Commissioner Character verification report.',
              ],
              benefits:[
                'Award Winning per Person & Institute will get Rs.51000/-',
                'Memorabilia, shawl, coconut,',
              ],        
              application: 'As per the advertisement given by Assistant Commissioner, Social Welfare Concern in the local New Paper. The Institute & Persons can submit their application to Assistant Commissioner, Social Welfare Concern.',
              category: 'Social Reform',
              contact: 'Assistant Commissioner, Social Welfare of concern district.',
            }
          },
          {
            "id": 264,
            "name": "Shahu, Phule, Ambedkar Rewards Scheme",
            "details": {
              "government_resolution": "Gr.No.BCH-2009/pra.kra.23/Bandhkame, date 31/8/2012",
              "funding": "State",
              "objective": "To recognize and reward Maharashtra sector organizations working in various fields of social justice at state, national, and international levels as social reformists.",
              "beneficiaries_category": "Social Justice sector institutions of the State of Maharashtra",
              "eligibility_criteria": [
                "The organization must have original work in the field of social welfare and be registered.",
                "Must have been engaged in social service for a period of at least 15 years.",
                "Character Certificate in favor of President and Secretary of the organization issued by Superintendent of Police/Commissioner of Police."
              ],
              "benefits": {
                "Provided Benefits": {
                  "prize_amount": "₹ 15 lakhs per institute",
                  "total_awards": "7 awards for 7 regions",
                  "additional_rewards": "Memento, silver Krol citation"
                }
              },
              "application_process": "As per the advertisement given by Assistant Commissioner, Social Welfare Concern in the local newspaper. Institutes and individuals can submit their application to Assistant Commissioner, Social Welfare Concern.",
              "category": "Social Reform",
              "contact": "Assistant Commissioner, Social Welfare of concern district."
            }
          },          
          {
            "id": 265,
            "name": "NGOs Assistant Grants (Dr. Babasaheb Ambedkar Samaj Bhushan, Sahityaratna Lokshahir Anna Bhau Sathe Award, and Sant Ravidas Award)",
            "details": {
              "government_resolution": [
                "समाज कल्याण सांस्कृतिक व क्रिडा विभाग शासन निर्णय क्रमांक एससी डब्लू-1085/18986(211)/बीसीडब्लू-4, दि. 19/12/1985",
                "शासन निर्णय क्र.दमिपू-2000/प्र.क्र.213/मावक-4,दि.10/4/2000",
                "शासन निर्णय क्र.असापू-2000/प्रृक्रृ230/मावक-4,दि.25/7/2003",
                "शासन निर्णय क्र.सरंपू-2004/प्र.क्र.184/मावक-4 दि.26/7/2004"
              ],
              "funding": "State",
              "objective": "To inspire social workers and organizations to continue their social activities in Maharashtra, especially for SC/ST, Backward class, and weaker sections of society. Awards are given in the names of Dr. Babasaheb Ambedkar Samaj Bhushan, Sahityaratna Lokshahir Anna Bhau Sathe, and Sant Ravidas.",
              "beneficiaries_category": {
                "Dr. Babasaheb Ambedkar Samaj Bhushan Award": "All social welfare organizations",
                "Sahityaratna Lokshahir Anna Bhau Sathe Award": "Artists, Literary Authors, Social Organizations from Matang Community",
                "Sant Ravidas Award": "Artists, Literary Authors, Social Organizations from Charka Community"
              },
              "eligibility_criteria": [
                {
                  "award_name": "Ambedkar Samaj Bhushan Award",
                  "criteria": [
                    "Outstanding social work in the field of SC/ST/NT/VJ and other social welfare for at least 15 years.",
                    "Must be registered as an institute.",
                    "Male social workers should be at least 50 years old, and female social workers should be at least 40 years old.",
                    "Character Certificate in favor of the Person/President and Secretary of the organization issued by Superintendent of Police/Commissioner of Police."
                  ]
                },
                {
                  "award_name": "Sahityaratna Lokshahir Anna Bhau Sathe Award",
                  "criteria": [
                    "Outstanding social work for the progress of social, educational, and economic in Matang Community for at least 15 years.",
                    "Must be registered as an institute.",
                    "Male social workers should be at least 50 years old, and female social workers should be at least 40 years old.",
                    "Character Certificate in favor of the Person/President and Secretary of the organization issued by Superintendent of Police/Commissioner of Police."
                  ]
                },
                {
                  "award_name": "Sant Ravidas Award",
                  "criteria": [
                    "Outstanding social work in the field of cobbler and Scheduled Caste community for at least 15 years.",
                    "Must be registered as an institute.",
                    "Male social workers should be at least 50 years old, and female social workers should be at least 40 years old.",
                    "Character Certificate in favor of the Person/President and Secretary of the organization issued by Superintendent of Police/Commissioner of Police."
                  ]
                }
              ],
              "benefits_provided": {
                "Ambedkar Samaj Bhushan Award": {
                  "person_amount": "₹ 15,000/-",
                  "institute_amount": "₹ 25,001/- as a cash prize",
                  "additional_benefits": [
                    "Traveling expenses from residence.",
                    "Government rest house/official accommodation at a discounted rate.",
                    "Treated as state guest with spouse for three days.",
                    "Memorabilia, shawl, coconut."
                  ]
                },
                "Sahityaratna Lokshahir Anna Bhau Sathe Award": {
                  "person_amount": "₹ 25,000/-",
                  "institute_amount": "₹ 50,000/- as a cash prize",
                  "additional_benefits": [
                    "Traveling expenses from residence.",
                    "Government rest house/official accommodation at a discounted rate.",
                    "Treated as state guest with spouse for three days.",
                    "Memorabilia, shawl, coconut."
                  ]
                },
                "Sant Ravidas Award": {
                  "person_amount": "₹ 21,000/-",
                  "institute_amount": "₹ 30,000/- as a cash prize",
                  "additional_benefits": [
                    "Treated as state guest with spouse for three days.",
                    "Memorabilia, shawl, coconut."
                  ]
                }
              },
              "application_process": "As per the advertisement given by Assistant Commissioner, Social Welfare Concern in the local newspaper. Institutes and individuals can submit their applications to Assistant Commissioner, Social Welfare Concern.",
              "category_of_scheme": "Social Reform",
              "contact_office": "Assistant Commissioner, Social Welfare of concern district."
            }
          },           
          {
            "id": 266,
            "name": "Shahu, Phule, Ambedkar Dalit Vasti Improvement & Development Derivation",
            "details": {
                "funding": "State",
                "objective": "Raising the standard of living of schedule Caste people to maintain cleanliness in Dalit Vasti & their participation in abolishing social inequality. Involves the inhabitants of the slums in sanitation and social inequality efforts, and works in rural areas to combat the problems of Dalits enthusiastically, such as giving awards to the panchayats.",
                "beneficiary": "All Grampanchayats working for Backward Class.",
                "eligibility": [
                    "To destroy social inequality, SC, ST, SC VJNT, OBC should combat the problem, and Grampanchayats should work for their development."
                ],
                "benefits": [
                    "1) On merit, 3 Grampanchayats will be awarded on Panchayat Samiti level. Committee awards are as follows:",
                    "First prize ₹ 25,000/-",
                    "Second prize ₹ 15,000/-",
                    "Third prize ₹ 10,000/-",
                    "2) On merit, 3 Grampanchayats will be awarded on District level. Committee awards are as follows:",
                    "First prize ₹ 5,00,000/-",
                    "Second prize ₹ 3,00,000/-",
                    "Third prize ₹ 2,00,000/-",
                    "3) On merit, 1 Grampanchayat will be awarded on Revenue Divisional level. Committee awards are as follows:",
                    "First prize ₹ 10,00,000/-",
                    "4) On merit, 1 Grampanchayat will be awarded on State level. Committee awards are as follows:",
                    "First prize ₹ 25,00,000/-",
                    "Second prize ₹ 15,00,000/-",
                    "Third prize ₹ 12,50,000/-"
                ],
                "application": "Concerned District Social Welfare Officer Z.P.",
                "category": "Social Reform",
                "contact": "District Social Welfare Officer concerned Z.P."
            }
        },
        {
          'id': 267,
          'name': 'Ramai Awas (Gharkul) Scheme for SC & Nav-Buddha (urban and rural)',
          'details': {
            'funding': 'State',
            'objective': 'To raise the standard of living of SC and Nav-Buddha people in rural & urban areas. Their problem of dwelling may be solved, therefore on their own place, or raw houses up on build erection hard feet 269 square houses.',
            'beneficiary': 'SC and Nav-Buddha',
            'eligibility': [
              'Beneficiaries must have lived 15 years in the state of Maharashtra.',
              'Rural Area: ₹1000000 (Beneficiaries share Nil)',
              'Municipal Area: ₹150000 (Beneficiaries share 7.5%)',
              'Municipal Corporation: ₹200000 (Beneficiaries share 10%)',
              'Only one person of the family will get the benefit.',
              'Applicants should have their own land.',
              'Applicants should not have availed advantage of other govt. housing schemes.',
              'Priority will be given to BPL.'
            ],
            'benefits': [
              'Rural Area: ₹1000000 (Beneficiaries share Nil)',
              'Municipal Area: ₹150000 (Beneficiaries share 7.5%)',
              'Municipal Corporation: ₹200000 (Beneficiaries share 10%)'
            ],
            'application': 'Assistant Commissioner, Social Welfare / Project Director, District Rural Development Agency',
            'category': 'Special Assistance',
            'contact': 'Assistant Commissioner, Social Welfare / Office / Project Director, District Rural Development Agency, the District Council / Municipal Commissioner concerned',
            'govt_resolution': [
              'Gr. No. BCH-2008/Pra.Kra.36/Mavak-2, date 15/01/2008',
              'Gr. No. BCH-2009/Pra.Kra.159/Mavak-2, date 9/03/2010',
              'Gr. No. BCH-2009/Pra.Kra.159/Mavak-2, date 6/08/2010',
              'Gr. No. BCH-2009/Pra.Kra.159/Mavak-2, date 2/12/2010',
              'Gr. No. BCH-2011/Pra.Kra.35/Mavak-2, date 14/03/2011',
              'Gr. No. BCH-2009/Pra.Kra.159/Mavak-2, date 29/09/2011',
              'Gr. No. raayo-2011/Pra.Kra.10/Bandhkame, date 18/07/2014'
            ]
          }
        },
        {
          'id': 268,
          'name': 'Development of SC and Nav-Buddha Vasti (Rural)',
          'details': {
            'funding': 'State',
            'objective': 'And in the slums of factors are anucita Nav-Buddha payabhuta water feature is to make available through the scheme, water supply, Jodaraste, and the construction of roads under the SC and to the development of the neighborhood community house etc. and Nav-Buddha factors.',
            'beneficiary': 'SC and Nav-Buddha',
            'eligibility': [
              'State District Parishad determined by the provisions nirnayatila government survey parameters Nav-Buddha settlements and SC through the system and their declared under the Scheduled Castes and Scheduled Nav-Buddha factors settlements in rural areas.'
            ],
            'benefits': [
              'SC and decided to grant the following amounts Nav-Buddha components of the population of each country.',
              'Population 10 to 25: ₹2.00 Lakhs',
              'Population 26 to 50: ₹5.00 Lakhs',
              'Population 51 to 100: ₹8.00 Lakhs',
              'Population 101 to 150: ₹12.00 Lakhs',
              'Population 151 to 300: ₹15.00 Lakhs',
              'Population 301 above: ₹20.00 Lakhs'
            ],
            'application': 'As per Master plan section by Z.P. Gram panchayat will submit work proposals to District Social Welfare Z.P. with recommendation of concern Block Development Officer.',
            'category': 'Economic development / special assistance',
            'contact': 'District Social Welfare Officer, Z.P. concerned',
            'govt_resolution': [
              'GR No.davasu-2008/prakra524 / VIGHYO, dated 14/11/2008',
              'GR No. davasu 2011/prakra442/ajaka, dated 5/12/2011',
              'Govt. sudhdipatrak No. davasu-2011/prakra442/ajaka, dated 31/12/2011',
              'GR No. davasu 2013/prakra 85/ajaka 1, date 1/08/2013',
              'GR No. davasu 2015/prakra 59/ajaka 1, date 27/05/2015'
            ]
          }
        },        
        {
          'id': 269,
          'name': 'Pre Recruitment Solder & Police Training for SC & Nav-Buddha Candidate',
          'details': {
            'funding': 'State',
            'objective': 'To train Scheduled Castes and Nav-Buddha Candidates for Solder & police recruitment.',
            'beneficiary': 'SC and Nav-Buddha',
            'eligibility': [
              'Candidate should belong to SC & Nav-Buddha of the State of Maharashtra.',
              'Candidate should be 18 to 25 years age group.',
              'Candidates Height - 165 cm for Men and 155 cm for Women.',
              'Chest for men - 79 cm (The whole chest 84 cm)',
              'Academic qualifications - std. 12th pass',
              'Caste certificate, resident proof / Certificate, Employment Exchange registration certificate, copy of identity.',
              'Candidate should be healthy and able.'
            ],
            'benefits': [
              'Selected students are provided free lodging & boarding facility during training period.',
              'It also comes with free uniforms required for training.'
            ],
            'application': 'The applicant should submit his application in plain paper to the Assistant Commissioner, Social Welfare of the concerned district along with necessary documents.',
            'category': 'Employment / economic development',
            'contact': 'Assistant Commissioner of the district social welfare related',
            'govt_resolution': [
              'GR No. EBC-2005/prakra78/mavaka 2, dated 8/02/2006',
              'Govt. shudhipatrak No. EBC-2012/prakra 43/Education 1, dated 9/03/2012'
            ]
          }
        },
        {
          'id': 270,
          'name': 'Grant in Aid to Old age home',
          'details': {
            'funding': 'State',
            'objective': 'Old men and women who have completed 55 years of age through 60 years, the destitute, the disabled victims food, accommodation, resort, etc. facilities providing grants to NGOs for Old age Home.',
            'beneficiary': 'General',
            'eligibility': [
              'Beneficiaries should be resident in the State of Maharashtra.',
              'Old men age should be less than 60 years and women’s age 55 years of age.'
            ],
            'benefits': [
              'Free lodging & Boarding & Medical Assistance.'
            ],
            'application': 'Related Old age home and subsidized organization, as well as relevant districts District Social Welfare Officer, Z.P. & Assistant Commissioner Social Welfare of the concerned district.',
            'category': 'Special Assistance',
            'contact': 'District Social Welfare Officer, ZP / Assistant Commissioner, Social Welfare of the concerned District',
            'govt_resolution': [
              'Social Welfare Gr. No.1062-44945/N, dated 20/02/1961'
            ]
          }
        },        
        {
          'id': 271,
          'name': 'Machinery for Implementation of Protection of Civil Rights Act',
          'details': {
            'funding': 'State & Central (50:50)',
            'objective': 'Abolition of untouchability and to the awakening of society',
            'beneficiary': 'SC/ST/OBC/VJNT/Physically Disabled/Persons working in Unclean Occupation',
            'eligibility': [],
            'benefits': [
              'Divisional workshops / Equality Council: Eradication of untouchability in each department working activists, for each department to work with the schools office at ₹50,000 costs',
              'Taluka level Camp: Eradication of untouchability in each Taluka Gramsevak Talathi, Panchayat Samiti members etc. to ₹12,000 a year for three courses held as subsidy are given Panchayat Samiti.',
              'Village prize: To be given to each district in the heart of untouchability eradication classic work Village Prize. First prize amount of ₹3,000 and Second Prize amount of ₹2,000.',
              'Essay writing contest: In each school, colleges an essay writing contest arranged by Assistant Commissioner, Social Welfare on eradication of untouchability award is as under. First Prize- ₹1,000, Second Prize ₹750, Third Prize ₹500.',
              'Speech Competition: In each school, colleges an essay writing contest arranged by Assistant Commissioner, Social Welfare on eradication of untouchability award is as under. First Prize- ₹1,000, Second Prize ₹750, Third Prize ₹500.'
            ],
            'application': 'District Social Welfare Officer, Assistant Commissioner related',
            'category': 'Social Remedies',
            'contact': 'District Social Welfare Officer, Assistant Commissioner related',
            'govt_resolution': [
              'Social Welfare, Cultural affairs, Sports & Tourism Department GR.No.UTA-1074/48348-V, dated 27/12/1974'
            ]
          }
        },        
        {
          "id": 272,
          "name": "Incentive given to Encourage Inter caste Marriages",
          "details": {
            "funding": "State & Central (50:50)",
            "objective": "As a part of the eradication of untouchability, to promote & encouragement to Inter Caste marriages between Savarna, Hindu, and SC/ST/VJ/NT/SBC.",
            "beneficiary": "The upper permanent resident of Maharashtra, Hindu, Jain lingayat, Sikh and Scheduled Castes and Scheduled tribes, nomadic castes, nomadic tribes and to special backward category.",
            "eligibility": [
              "The person/couple should be the permanent resident of Maharashtra.",
              "Beneficiaries / married couple, one should belong to SC ST, VJNT and SBC. (Caste certificates need to)",
              "Beneficiary / married couple should submit marriage registration certificate.",
              "The married couple, Male age should not be less than 21 years and female should not be below 18 years. (On / Brides of school leaving certificate)",
              "Two Honorable persons recommendation letters.",
              "Joint photo of the Couple.",
              "In this regard, the definition of inter Caste Marriage is Marriages between SC/ST/VJ/NT/SBC persons and the other person should belong to Savarna, Hindu Lingayat, Jain, Sikh Community."
            ],
            "benefits": [
              "Inter-ethnic marriage Rs 50000 / - spouse's name combined draft."
            ],
            "application": "The applicant / Married Couple should submit his/her application personally in prescribed form to Concern District social welfare officer, z.p./ (for Mumbai City & Mumbai Upnagar Social Welfare officer, Bruhmumbai, Chembur) along with necessary documentary evidences.",
            "category": "Social Reform",
            "contact": "Assistant Commissioner, Social Welfare, Mumbai City & Urban",
            "govt_resolution": [
              "Social Welfare, Cultural Affairs, & Sports Department GR.No.UTA-1099/Pra.Kra.45/Mavak-2, date 30/01/1999",
              "Social Welfare, Cultural Affairs, & Sports Department GR.No.CBC-1098/Pra.Kra.151/Mavak-5, date 7/5/1999",
              "Social Justice, Cultural Affairs, Sports & Special Assistance Department GR.No.Ajavi 2003/pra.Kra.501/Mavak-2, date 6/8/2004",
              "Social Justice & Special Assistance Department GR.No.Ajavi 2007/pra.Kra.191/Mavak-2, date 1/02/2010"
            ]
          }
        },        
        {
          "id": 273,
          "name": "Financial Assistance to victimize family/person of Scheduled Castes and Scheduled tribes",
          "details": {
            "funding": "State & Central (50:50)",
            "objective": "To rehabilitate the victimized SC/ ST family members by providing financial assistance to them.",
            "beneficiary": "SC and ST",
            "eligibility": [
              "Affected person/family should belong to SC/ ST.",
              "The FIR should be registered under Protection Civil Right Act, 1955 and Atrocity Act, 1989 revise rule 1995."
            ],
            "benefits": [
              {
                "Particular": "Death per each person killed in family",
                "Amount": "₹500,000"
              },
              {
                "Particular": "Permanent incapacitation per each member in family",
                "Amount": "₹500,000"
              },
              {
                "Particular": "Temporary incapacitation",
                "Amount": "₹80,000"
              },
              {
                "Particular": "Grievous hurt short of incapacitation",
                "Amount": "₹60,000"
              },
              {
                "Particular": "Rape",
                "Amount": "₹120,000"
              },
              {
                "Particular": "Loss of home",
                "Amount": "Build the home by brick & stone"
              },
              {
                "Particular": "Loss of immovable property",
                "Amount": "₹60,000"
              },
              {
                "Particular": "Loss of earning assets like a vehicle, a boat or cutter, etc.",
                "Amount": "₹60,000"
              }
            ],
            "application": "After receiving FIR under Protection of Civil Rights Act of 1955, and Atrocity Act, 1989, the Assistant Commissioner Social welfare sanctions the amount to victimized SC/ST persons of the family with the help of vigilance committee of the concern district.",
            "category": "Social reform",
            "contact": "Assistant Commissioner of Social Welfare related district",
            "govt_resolution": [
              "Social justice & Special Assistance Department GR. No. UTA- 2012/pra.Kra.259/samasu, dated 21/08/2013"
            ]
          }
        },        
        {
          "id": 274,
          "name": "Assistance to newly married couples under the Kanyadan Yojana",
          "details": {
            "funding": "State",
            "objective": "Backward class family (SC/VJ/NT/SBC) may attract Collective wedding event & Various NGOs come forward to arrange Collective wedding Ceremony.",
            "beneficiary": "SC/NB/VJ/NT/SBC",
            "eligibility": [
              "Bride groom and required residents of the state of Maharashtra on.",
              "Bride groom should not be less than 18 years of age and 21 years",
              "Caste certificate in their favour should be issued by Competent Authority.",
              "This grant will be permissible for the bride and groom's first marriage.",
              "Bride / groom or both should belong to SC/VJ/NT/SBC category.",
              "The couple / their family should submit an Affidavit regarding violation of any Section under Dowry Prevention Act and Prevention of Child Marriage Act.",
              "NGO should be registered; NGO should arrange collective wedding ceremony consisting at list 20 couples."
            ],
            "benefits": [
              "Collective marriages or couples who participants married in the ceremony the couple will get Rs 10,000 / - as financial assistance.",
              "Collective ceremony organized agency / organizations will be given Rs 2000/-grant for each couple.",
              "Financial assistance is permissible only for the first marriage, however, the widow of another woman the benefit of the scheme."
            ],
            "application": "NGO should collect participating couple along with all require document submit their e proposal (Consisting at list 20 couples) to concerned Assistant Commissioner, Social Welfare.",
            "category": "Social Reform",
            "contact": "Assistant Commissioner, Social Welfare relevant district",
            "govt_resolution": []
          }
        },        
        {
          "id": 275,
          "name": "To Start Government Hostels for Backward Class boys and girls",
          "details": {
            "type": "State Level",
            "purpose": "To provide education and higher education in the weaker section of backward class students in the society. For these purposes, these government hostels are started.",
            "description": "This scheme started from the year 1922. Currently, there are 271 old and 103 new boys and girls hostels operating in Maharashtra at the District & Taluka level. Out of them, there are 208 boys' hostels and 159 girls' hostels, serving 32,988 students.",
            "applicable_to": "SC / Vimukta / Nomadic tribes / Other magapravarga / category Special Backward / disability / sweeper",
            "terms": [
              "Students are given admission in the hostels based on merit.",
              "Student should be resident of Maharashtra State.",
              "Annual income of the parents of the student should not exceed Rs. 2,00,000.",
              "Students studying in 8th Std and above should apply for the hostel.",
              "School students should apply online before 15th May and college students before 30th June.",
              "From the year 2015-16, 10% of the total vacant seats are filled from special quota according to terms and conditions."
            ],
            "benefits": [
              "Free accommodation, food, clothes, library & other facilities are provided.",
              "Per year 2 uniforms are provided to school students.",
              "Educational textbooks and stationary are provided.",
              "Medical and Engineering students are provided free educational kits according to their course like stethoscope, drawing board, apron, boiler suits and for arts students color, drawing board, brush and canvas etc.",
              "Monthly allowances: Regional level - ₹800, District level - ₹600, Taluka level - ₹500."
            ],
            "application": "Online application at https://mahaeschol.maharashtra.gov.in",
            "classification": "Education",
            "contact": "Concerned Regional Deputy Commissioner, Social Welfare and Assistant Commissioner, Social Welfare and Warden, backward class boys and girls hostel."
          }
        },        
        {
          "id": 276,
          "name": "Division level 1000 capacity Backward class boys and girls hostel",
          "details": {
            "type": "State / Central Level",
            "purpose": "To increase access to higher education for Scheduled Caste and Navbouddha students by providing adequate hostel facilities at the divisional level. Seven division level hostels were started in 2007, each accommodating 1000 students, with one unit designated for girls.",
            "description": "These hostels aim to ensure that backward class students can secure admissions in higher educational institutes by providing sufficient hostel infrastructure. There are 4 units of 250 students capacity each per division, including one unit specifically for girls, totaling 5250 boys' and 1750 girls' hostel seats.",
            "applicable_to": "SC / ST / Nomadic tribes / Other Backward class / special backward class / disabled",
            "terms": [
              "Students are admitted based on merit.",
              "Students must be residents of Maharashtra State.",
              "Annual income of the parents should not exceed ₹2,00,000.",
              "Students studying in 8th Std and above can apply.",
              "School students should apply before 15th May, and college students before 30th June.",
              "From 2015-16, 10% of vacant seats are filled through a special quota."
            ],
            "benefits": [
              "Free accommodation, food, clothes, library, and other facilities provided.",
              "2 uniforms per year provided to students.",
              "Educational books and stationary provided.",
              "Medical and Engineering students receive free educational kits tailored to their courses (e.g., stethoscope, drawing board, apron, boiler suits; art students receive colors, drawing board, brush, canvas, etc.).",
              "Monthly allowances: Regional level - ₹800, District level - ₹600, Taluka level - ₹500."
            ],
            "application": "Online application at https://mahaeschol.maharashtra.gov.in",
            "classification": "Educational",
            "contact": "Concerned Regional Deputy Commissioner, Social Welfare and Assistant Commissioner, Social Welfare and Warden, backward class boys and girls hostel."
          }
        },        
        {
          "id": 277,
          "name": "To start 100 residential school on Taluka level for scheduled caste and Navbouddha",
          "details": {
            "type": "State",
            "purpose": "To provide primary and secondary education to scheduled caste and Navbouddha boys and girls who face financial challenges. The government aims to establish one residential school per taluka to facilitate education for these students. Initially sanctioned 100 residential schools out of 353 talukas, with 79 currently operational.",
            "description": "These residential schools admit students from Std. VI to X. Starting from June 2011, Std. V to Std. VII classes were introduced, followed by Std. VIII in the academic year 2012-13, and subsequently, Std. IX and Std. X classes based on natural growth.",
            "applicable_to": "SC / ST / Nomadic Tribes / Other Backward class / special backward class / disabled",
            "terms": [
              "Students are admitted based on merit.",
              "Students must belong to scheduled caste.",
              "Students must be residents of Maharashtra State.",
              "Annual income of the parents should not exceed ₹2,00,000."
            ],
            "benefits": [
              "Free residence, food, library, and other educational facilities provided in the residential schools."
            ],
            "application": "Online application at mahaeschol.maharashtra.gov.in",
            "classification": "Educational",
            "contact": "Concerned Regional Deputy Commissioner, Social Welfare and Assistant Commissioner, Social Welfare and Block Development Officer, Panchayat Samiti and Education Officer (secondary) Zilla Parishad."
          }
        },        
        {
          "id": 278,
          "name": "To start Division Level ITI for boys and girls of scheduled caste and Navbouddha",
          "details": {
            "type": "State",
            "purpose": "To provide technical and vocational courses to scheduled caste and Navbouddha students through government ITI institutes. Due to high demand and limited capacity in existing ITIs, the government has decided to establish division-level ITI institutes.",
            "applicable_to": "SC / ST / Nomadic tribes / Other Backward class / special backward class / disabled",
            "terms": [
              "Students are given admission based on merit.",
              "Students must belong to scheduled caste.",
              "Students must be residents of Maharashtra State.",
              "Annual income of the parents should not exceed ₹2,00,000."
            ],
            "benefits": [
              "Free residence, food, and training in technical and vocational courses.",
              "Offering of 12 technical and vocational courses accredited by the National Professional Training Council, New Delhi.",
              "Controlled and managed by the Director of Professional and Technical Education, Maharashtra State, Mumbai."
            ],
            "application": "Applications should be submitted to the concerned Principal of Government ITI.",
            "classification": "Technical and Professional Education",
            "contact": "Concerned Principal of Government ITI"
          }
        },        
        {
          "id": 279,
          "name": "Special Education and Vocational Training through Government institutions",
          "details": {
            "funding": "State Government",
            "objective": "To provide special education to disabled children aged 6 to 18 years in government special schools and vocational training to those above 18 years.",
            "beneficiaries_category": "Visually Impaired, Hearing Impaired, Orthopedically Handicapped",
            "eligibility_criteria": [
              "Application in prescribed format submitted to the concerned Government Institution.",
              "Applicant should have a minimum 40% disability.",
              "Applicant should be domiciled in Maharashtra."
            ],
            "benefits": [
              "Free education in an appropriate environment for children with disabilities up to the age of eighteen years.",
              "Vocational training provided to special children above 18 years.",
              "Free facilities include food, shelter, clothing, and education in these institutions."
            ],
            "application_process": "Application in prescribed form with necessary documents to be submitted to the Concerned Government Institution.",
            "category": "Education and Vocational Training",
            "contact": "Government Institution, District Social Welfare Office Zillah Parishad, Assistant Commissioner Social Welfare Office Mumbai Urban / Mumbai Suburban"
          }
        },        
      {
          "id": 280,
          "name": "Non-Governmental Aided Organization (Special Schools and Vocational Training Centre) for Disabled",
          "details": {
              "funding": "State",
              "objective": "To support non-governmental organizations that run special schools and vocational training centers for disabled individuals.",
              "beneficiary": "Non-governmental organizations serving disabled individuals",
              "eligibility": [
                  "Organizations must be registered and serving disabled individuals.",
                  "They must be based in Maharashtra."
              ],
              "benefits": [
                  "Financial assistance to run special schools and vocational training centers."
              ],
              "application": "Application process is through the concerned District Social Welfare Office.",
              "category": "Education",
              "contact": "Concerned District Social Welfare Office"
          }
      },
      {
        "id": 281,
        "name": "Homes for Intellectually Impaired Persons",
        "details": {
          "funding": "State Government",
          "objective": "Mentally Deficient Children Home functioning under the provisions of Maharashtra Juvenile Justice (Care & Protection of children) Act 2000 and amendment Act 2006. There are 19 Mentally Deficient Children Homes in total, out of which 14 are granted and 5 are non-granted.",
          "beneficiaries_category": "Mentally retarded children who are in need of care and protection.",
          "eligibility_criteria": [
            "Admission through child welfare committee of the district under Juvenile Justice (Care & Protection of children) Act 2000.",
            "Applicant should have minimum 40% disability and should be orphan or in need of care and protection.",
            "Applicant should be domiciled in Maharashtra."
          ],
          "benefits": [
            "Free facilities include food, shelter, and care & protection provided in these homes."
          ],
          "application_process": "Application in prescribed format attached with necessary documents to be submitted to the Concern Child Welfare Committee.",
          "category": "Care and protection, education training.",
          "contact": "Concern Child Welfare Committee of District."
        }
      },          
      {
        "id": 282,
        "name": "State Post-metric Scholarship for Disabled",
        "details": {
          "funding": "State Government",
          "objective": "To encourage higher education of disabled students.",
          "beneficiaries_category": "Blind, Low Vision, Hearing Impairment, Orthopedically Handicapped, Mentally Retarded, Mentally Illness & Leprosy cured",
          "eligibility_criteria": [
            "Student should be studying after 10th std. to H.S.C., Degree, Professional, Technical, Medical, and Engineering etc.",
            "Should not have failed in the last standard.",
            "Should have minimum 40% disability.",
            "Should be domiciled in Maharashtra.",
            "No income limit."
          ],
          "benefits": {
            "maintenance_allowance": {
              "hosteller": {
                "Group A - Degree course in Medical, Engineering, Agricultural, Veterinary and post graduate degree course": "Rs. 1200/- per month",
                "Group B - Diploma course in Medical, Engineering, Agricultural, Veterinary": "Rs. 820/- per month",
                "Group C - Post Graduate course in Arts, Science, Commerce and Diploma in professional education": "Rs. 820/- per month",
                "Group D - From 2nd year degree course": "Rs. 570/- per month",
                "Group E - 11th, 10th and 1st year of Degree Course": "Rs. 380/- per month"
              },
              "day_scholar": {
                "Group A - Degree course in Medical, Engineering, Agricultural, Veterinary and post graduate degree course": "Rs. 550/- per month",
                "Group B - Diploma course in Medical, Engineering, Agricultural, Veterinary": "Rs. 530/- per month",
                "Group C - Post Graduate course in Arts, Science, Commerce and Diploma in professional education": "Rs. 530/- per month",
                "Group D - From 2nd year degree course": "Rs. 300/- per month",
                "Group E - 11th, 10th and 1st year of Degree Course": "Rs. 230/- per month"
              }
            },
            "reader_allowance": {
              "Group A, B, C": "Rs. 100/- per month",
              "Group D": "Rs. 75/- per month",
              "Group E": "Rs. 50/- per month"
            },
            "tuition_fees": "As per approved by competent authority.",
            "study_tour_expenditure": "Up to Rs. 500/- per annum.",
            "project_typing_expenditure": "Up to Rs. 600/- per annum."
          },
          "application_process": "Apply in the prescribed format attached with necessary documents through the college.",
          "category": "Education",
          "contact": "District Social Welfare Office Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban"
        }
      },      
      {
        "id": 283,
        "name": "State Pre-metric Scholarship for Disabled",
        "details": {
          "funding": "State Government",
          "objective": "To encourage education of disabled children.",
          "beneficiaries_category": "Blind, Low Vision, Hearing Impairment, Orthopedically Handicapped, Mentally Retarded, Mentally Illness & Leprosy cured",
          "eligibility_criteria": [
            "Disabled students should be studying in 1st std. to 10th std.",
            "Should not have failed in the last year.",
            "Should have minimum 40% disability.",
            "Should be domiciled in Maharashtra.",
            "No income limit."
          ],
          "benefits": {
            "1st to 4th std. (only for Pre-primary education for hearing impaired)": "Rs. 100/- per month per student",
            "5th to 7th std.": "Rs. 150/- per month per student",
            "8th to 10th std.": "Rs. 200/- per month per student",
            "Mentally Retarded and Mentally ill up to the age of 18 years": "Rs. 150/- per month per student",
            "For disabled trainees in workshop.": "Rs. 300/- per month per student"
          },
          "application_process": "Apply in prescribed format attached with necessary documents through the concerned schools.",
          "category": "Education",
          "contact": "District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban"
        }
      },      
      {
        "id": 284,
        "name": "Merit Awards",
        "details": {
          "funding": "State Government",
          "objective": "Awards are given to disabled students who rank 1st, 2nd, and 3rd among disabled students in the S.S.C. and H.S.C. board examinations.",
          "beneficiaries_category": "Visually handicapped, hearing impaired, and orthopedically handicapped",
          "eligibility_criteria": [
            "Beneficiaries who top in the S.S.C. and H.S.C. exam in their respective divisional board of education."
          ],
          "benefits": {
            "Quantum of award": "Rs. 1000/- cash amount, certificate.",
            "Travel expenses": "Provided to attend the place of award, felicitation up to Rs. 100/- per student."
          },
          "application_process": "Application in prescribed form attached with necessary documents.",
          "category": "Education",
          "contact": "Concern Regional Deputy Commissioner, Social Welfare Department"
        }
      },      
      {
        "id": 285,
        "name": "Financial Assistance to disabled for self employment",
        "details": {
          "funding": "State Government",
          "objective": "To facilitate self-employment opportunities for unemployed disabled persons through financial assistance for small-scale businesses and agro-based projects.",
          "beneficiaries_category": "Visually handicapped, Low vision, hearing impaired, orthopedically handicapped, and mentally retarded.",
          "eligibility_criteria": [
            "Application in prescribed format submitted to concern District Social Welfare Officer, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban.",
            "Applicant should have minimum 40% disability.",
            "Applicant should be domicile in Maharashtra.",
            "Applicant age criteria between 18 to 50 years.",
            "Applicant annual income should be below Rs. 100,000/-."
          ],
          "benefits": {
            "Financial assistance": "Up to Rs. 1,50,000/- provided, with 80% loan amount from Nationalized Bank and 20% or up to Rs. 30,000/- subsidy from Social Welfare Department for self-employment."
          },
          "application_process": "Application in prescribed format with necessary documents.",
          "category": "Self employment",
          "contact": "District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban"
        }
      },      
      {
        "id": 286,
        "name": "Financial Assistance to Self-Employment for Trained Disabled Persons",
        "details": {
          "funding": "State Government",
          "objective": "To provide financial assistance for the purchase of equipment to disabled persons who have completed vocational training from government or recognized institutions, enabling them to start their own businesses.",
          "beneficiaries_category": "Visually handicapped, Low vision, hearing impaired, and orthopedically handicapped.",
          "eligibility_criteria": [
            "Application in prescribed format submitted to concern District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban.",
            "Applicant must have completed vocational training in Government or Government recognized institution.",
            "Applicant should have minimum 40% disability.",
            "Applicant should be domicile in Maharashtra.",
            "Applicant should submit their proposal with proposed project cost."
          ],
          "benefits": {
            "Financial assistance": "Rs. 1000/- provided by the State Government for the purchase of total kits/equipment to start their own business."
          },
          "application_process": "Application in prescribed format attached with necessary documents.",
          "category": "Self Employment",
          "contact": "District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban"
        }
      },      
      {
        "id": 287,
        "name": "Financial Assistance for Aids and Appliances for Disabled Persons",
        "details": {
          "funding": "State Government",
          "objective": "To provide financial assistance for the purchase of aids and appliances tailored to the needs of disabled persons based on their age group and disability.",
          "beneficiaries_category": "Visually handicapped, Low vision, hearing impaired, and orthopedically handicapped.",
          "eligibility_criteria": [
            "Application in given format submitted to concern District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban.",
            "The monthly income of the applicant should be:",
            "- less than Rs 1500/-: 100% of the cost of the aids and appliances.",
            "- Rs 1500/- to Rs 2000/-: 50% of the cost of the aids and appliances.",
            "Applicant should have minimum 40% disability.",
            "Applicant should be domicile in Maharashtra."
          ],
          "benefits": {
            "Provided Aids and Appliances": [
              "Hearing aids for hearing handicapped.",
              "Crutches, Tricycle, Calipers, Wheelchair for orthopedically handicapped.",
              "Tape recorders and blank cassettes for visually handicapped for educational purposes up to a cost of Rs 3000/-."
            ]
          },
          "application_process": "Application in prescribed form attached with necessary documents.",
          "category": "Special Assistance",
          "contact": "District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban"
        }
      },      
      {
        "id": 288,
        "name": "The Scheme of State Award for Disabled",
        "details": {
          "funding": "State Government",
          "objective": "To felicitate awards annually to the Best Disabled Employees, Employers, and Placement Agencies for outstanding contributions in various fields.",
          "beneficiaries_category": "Visually handicapped, Low vision, hearing impaired, orthopedically handicapped, and mentally retarded.",
          "eligibility_criteria": [
            "Apply in prescribed form submitted to concern District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Department, Mumbai Urban & Mumbai Suburban.",
            "Applicant should have minimum 40% disability.",
            "Applicant should be domicile in Maharashtra."
          ],
          "benefits": {
            "Provided Awards": [
              {
                "category": "Best Employees (Visually handicapped, Hearing handicapped, Orthopedically Handicapped, Mentally Retarded)",
                "number_of_awards": 12,
                "composition_of_award": "Rs. 10,000/- in cash, a citation, and a certificate."
              },
              {
                "category": "Best Employer (Govt. / Public / Private Sector)",
                "number_of_awards": 2,
                "composition_of_award": "Rs. 25,000/- in cash, Memento, citation, and a certificate."
              }
            ]
          },
          "application_process": "Application in prescribed form attached with necessary documents/bio data/outstanding work in the disability sector.",
          "category": "Social incentive",
          "contact": "District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Office, Mumbai Urban & Mumbai Suburban"
        }
      },      
      {
        "id": 289,
        "name": "Matrimonial Incentives",
        "details": {
          "funding": "State Government",
          "objective": "To provide marriage incentives to disabled individuals (with at least 40% disability) marrying non-disabled individuals.",
          "beneficiaries_category": "Visually handicapped, Low vision, hearing impaired, and orthopedically handicapped.",
          "eligibility_criteria": [
            "Apply in prescribed form to concern District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Department, Mumbai Urban & Mumbai Suburban.",
            "Either wife or husband of the couple should be disabled.",
            "Should have minimum 40% disability.",
            "Should be domicile in Maharashtra."
          ],
          "benefits": {
            "Provided Benefits": {
              "financial_assistance": {
                "saving_certificate": "Rs. 25,000/-",
                "cash": "Rs. 20,000/-",
                "household_utility": "Rs. 4,500/-",
                "attendance_programme": "Rs. 500/- to attend marriage incentive Programme."
              }
            }
          },
          "application_process": "Application in prescribed form attached with necessary documents.",
          "category": "Social incentive",
          "contact": "District Social Welfare Office, Zillah Parishad & Assistant Commissioner Social Welfare Department, Mumbai Urban & Mumbai Suburban"
        }
      }        
        ]
      },
             {
        id: 24,
        name: 'Contact Us',
        icon: ContactUsIcon ,
        contacts: [
          { srNo: 1, name: "Om Prakash Bakoria", designation: "I.A.S., Commissioner, Social Welfare Maharashtra State", number: "26122652", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 2, name: "Shri Dinesh Dhoke", designation: "Addl Commissioner", number: "26121588", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 3, name: "Shri. Bharat Kendre", designation: "Jt. Commissioner( Edu )", number: "26137186", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 4, name: "Shri. Prashant Chavan", designation: "Jt. Commissioner( SCSP )", number: "26125604", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 5, name: "Smt. Shital Sontakke", designation: "Statistical Officer", number: "26127569", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 6, name: "Shri Vijay Gaikwad", designation: "Asst. Commissioner(Edu)", number: "26129252", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 7, name: "Smt. Bandgar", designation: "Dy Director (Edu)", number: "26120119", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 8, name: "Smt. Rankhambe", designation: "Dy Commissioner (Planning)", number: "26126307", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 9, name: "Shri. Kadam patil", designation: "Dy Commissioner ( Statistics )", number: "26125604", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 10, name: "Shri. Khetmali", designation: "Dy Commissioner ( Audit)", number: "26126562", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 11, name: "Shri Challawa", designation: "Asst. Commissioner ( Est )", number: "26122752", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 12, name: "Smt. Manisha Phule", designation: "Research Officer ( PCR )", number: "26120560", email: "comm.socwelfare@maharashtra.gov.in" },
          { srNo: 13, name: "Shri Dongre", designation: "Asst. Commissioner (Co-operation)", number: "26120560", email: "comm.socwelfare@maharashtra.gov.in" },
              ]
      },
      { id: 25, 
        name: 'Samayojan List' ,
        icon:SamyojnaListIcon,

      },
      { id: 26, 
        name: 'Important Letters',
      icon:impLettersIcon, }
    ]
  },
  {
    id: 3,
    icon:BARTIIcon,
    name: 'Dr. Babasaheb Ambedkar Research & Training Institute, Pune',
    subTopics: [
      { id: 25, name: 'Samayojan List' },
      { id: 26, name: 'Important Letters' }

    ]
  },
  {
    id: 4,
    icon:BCCIcon,
    name: 'Maharashtra State Backward Class Commission - Pune',
    subTopics: []
  },
  {
    id: 5,
    icon:CSCSTIcon,
    name: 'Maharashtra State Commission for SC & ST',
    subTopics: []
  }
]; 

// CORPORATIONS DATA
const corpschemes = [
  {
    id: 1,
    name: 'Mahatma Phule Backward Class Development Corporation LTD',
    icon: faUser,
    details: 'Details of SR. Citizen',
    subSchemes: [
        {
  "id": 1,
  "name": "Special Central Assistance Scheme ",
  "details": {
    "name": "Special Central Assistance",
    "funding": "Funds received from Central Government to Maharashtra State Government. Through Social Justice Department of Mantralaya, it is distributed to MPBCDC.",
    "objective": "People belonging to Scheduled Caste categories are eligible for loan facilities. The scheme aims at promoting self-employment, upliftment, and crossing the poverty line.",
    "beneficiary": "Scheduled Caste category (e.g., Nav Bauddha, Mahar, etc.)",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (annual income of Rs. 1.00 lakh)",
      "Age above 18 years",
      "2 photographs, ration card, Aadhaar card, election card, PAN card, quotation"
    ],
    "nature": "Maximum loan limit of Rs. 50,000/-, with Rs. 10,000/- subsidy and the remaining from bank share. Loan repayment period is 36 months with interest as per bank rules.",
    "benefits": "Maximum subsidy of Rs. 10,000/- provided to beneficiaries for various businesses under this scheme.",
    "application": "Loan applications available at the District Office of MPBCDC. Applicants need to visit personally with required documents, fill up the form, and submit it.",
    "category": "Approximately 25% of beneficiaries annually move above the poverty line and experience upliftment in their lives.",
    "contact": "Residence place of applicant or the concerned District Office of MPBCDC",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
},
{
  "id": 2,
  "name": "Margin Money Scheme ",
  "details": {
    "name": "Margin Money Scheme",
    "funding": "This scheme is implemented from share capital received from Social Justice Department, Government of Maharashtra.",
    "objective": "People belonging to Scheduled Caste category are eligible for loan facilities. The scheme aims at promoting self-employment, upliftment, and crossing the poverty line.",
    "beneficiary": "Scheduled Caste category (e.g., Nav Bauddha, Mahar, etc.)",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (annual income of Rs. 1.00 lakh)",
      "Age above 18 years",
      "2 photographs, ration card, Aadhaar card, election card, PAN card. For vehicle business: driving license, permit, batch."
    ],
    "nature": "Scheme limit ranges from Rs. 50,000/- to Rs. 5,00,000/-. MPBCDC's share is 20%, including Rs. 10,000/- subsidy and remaining margin money amount chargeable at 4% p.a. Bank's share is 75% of the total cost with interest charged as per their rules. Applicant contributes 5%.",
    "benefits": "Low-interest rates charged to the beneficiary.",
    "application": "Loan applications available at the District Office of MPBCDC. Applicants need to visit personally with required documents, fill up the form, and submit it.",
    "category": "More than 25% of beneficiaries annually move above the poverty line and experience upliftment in their lives.",
    "contact": "Residence place of applicant or the concerned District Office of MPBCDC",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 1476,
      "expenditureRsInLacs": 722.95
    },
    {
      "year": "2013-14",
      "beneficiaries": 1806,
      "expenditureRsInLacs": 936.04
    },
    {
      "year": "2014-15",
      "beneficiaries": 2225,
      "expenditureRsInLacs": 1291.49
    },
    {
      "year": "2015-16",
      "beneficiaries": 2325,
      "expenditureRsInLacs": 1479.53
    },
    {
      "year": "2016-17",
      "beneficiaries": 1775,
      "expenditureRsInLacs": 1168.77
    }
  ]
},
{
  "id": 3,
  "name": "General Training Scheme ",
  "details": {
    "name": "General Training Scheme",
    "funding": "10% amount of total funds received under Special Central Assistance is utilized yearly for course fees and stipend to the trainee.",
    "objective": "People belonging to Scheduled Caste category are eligible for the General Training Scheme. The main purpose is self-employment and job orientation.",
    "beneficiary": "Scheduled Caste category (e.g., Nav Bauddha, Mahar, etc.)",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (annual income of Rs. 1.00 lakh)",
      "Age above 18 years",
      "2 photographs, ration card, Aadhaar card, PAN card",
      "School leaving certificate",
      "Qualification certificate"
    ],
    "nature": "Training period is 3 to 6 months. Total expenditure per trainee is Rs. 15,000/-, including a stipend of Rs. 1,000/- per month. Types of training include Computer, Beauty Parlor, Driving, Mobile Repairing, Welding, etc.",
    "benefits": "Free of charge training plus stipend of Rs. 1,000/- per month to the trainee.",
    "application": "Training applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents. Alternatively, applicants can approach after publication in the newspaper about the General Training Scheme.",
    "category": "80% of trainees are trained annually.",
    "contact": "Residence place of applicant or the concerned District Office of MPBCDC",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2013-14",
      "beneficiaries": 1118,
      "expenditureRsInLacs": 73.08
    },
    {
      "year": "2014-15",
      "beneficiaries": 600,
      "expenditureRsInLacs": 63.72
    },
    {
      "year": "2015-16",
      "beneficiaries": 1298,
      "expenditureRsInLacs": 145.65
    },
    {
      "year": "2016-17",
      "beneficiaries": 2322,
      "expenditureRsInLacs": 92.36
    }
  ]
},
{
  "id": 4,
  "name": "NSFDC Term Loan Scheme ",
  "details": {
    "name": "NSFDC Term Loan",
    "funding": "National Scheduled Caste Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance to Scheduled Caste persons.",
    "beneficiary": "Scheduled Caste category (e.g., Bauddha, Mahar, Nav Bauddha, etc.)",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, driving license, customs license, permit, batch number, etc.)"
    ],
    "nature": "Project limit ranges from Rs. 50,000/- to Rs. 30,00,000/-. NSFDC contributes 75%, MPBCDC contributes 20%, and beneficiary contributes 5% to 8%. Repayment period is five years.",
    "benefits": "Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.",
    "application": "Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.",
    "category": "Employment Generation, upliftment, and Economic Growth",
    "contact": "Respective head office of the corporation, regional office, and the concerned district office of the applicant",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 28,
      "expenditureRsInLacs": 59.24
    },
    {
      "year": "2013-14",
      "beneficiaries": 8,
      "expenditureRsInLacs": 19.50
    },
    {
      "year": "2014-15",
      "beneficiaries": 2,
      "expenditureRsInLacs": 5.00
    }
  ]
},
{
  "id": 5,
  "name": "NSFDC Micro Credit Finance Scheme ",
  "details": {
    "name": "NSFDC Micro Credit Finance",
    "funding": "National Scheduled Caste Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance to Scheduled Caste persons.",
    "beneficiary": "Scheduled Caste category (e.g., Bauddha, Mahar, Nav Bauddha, etc.)",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, etc.)"
    ],
    "nature": "Project limit ranges up to Rs. 50,000/-. NSFDC contributes 90%, MPBCDC contributes 10%, and beneficiary contributes 5%. Repayment period is three years.",
    "benefits": "Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.",
    "application": "Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.",
    "category": "Employment Generation, upliftment, and Economic Growth",
    "contact": "Respective head office of the corporation, regional office, and the concerned district office of the applicant",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2013-14",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2014-15",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2015-16",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 6,
  "name": "NSFDC Mahila Samruddhi Yojana ",
  "details": {
    "name": "NSFDC Mahila Samruddhi Yojana",
    "funding": "National Scheduled Caste Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance to Scheduled Caste women.",
    "beneficiary": "Female beneficiaries belonging to Scheduled Caste (e.g., Bauddha, Mahar, Nav Bauddha, etc.)",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, etc.)"
    ],
    "nature": "Project limit ranges up to Rs. 50,000/-. NSFDC contributes 90%, MPBCDC contributes 10%, and beneficiary contributes 4%. Repayment period is three years.",
    "benefits": "Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.",
    "application": "Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.",
    "category": "Employment Generation, upliftment, and Economic Growth",
    "contact": "Respective head office of the corporation, regional office, and the concerned district office of the applicant",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 2390,
      "expenditureRsInLacs": 717.00
    },
    {
      "year": "2013-14",
      "beneficiaries": 1535,
      "expenditureRsInLacs": 460.50
    },
    {
      "year": "2014-15",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2015-16",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 7,
  "name": "NSFDC Education Scheme ",
  "details": {
    "name": "NSFDC Education Scheme",
    "funding": "National Scheduled Caste Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance for the education of Scheduled Caste students.",
    "beneficiary": "Beneficiaries should belong to Scheduled Caste, Budud & Khatik communities.",
    "eligibility": [
      "Caste certificate from competent authority",
      "Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to education (bonafide certificate, etc.)"
    ],
    "nature": "Project limit ranges from Rs. 10,00,000/- to Rs. 20,00,000/-. NSFDC contributes 90% for loans up to Rs. 10,00,000/- (male beneficiaries 4%, female beneficiaries 3.5%), and for loans up to Rs. 20,00,000/- (male beneficiaries 4%, female beneficiaries 3.5%). Repayment period is five years.",
    "benefits": "Low rate of interest.",
    "application": "Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.",
    "category": "Job Orientation",
    "contact": "Respective head office of the corporation, regional office, and the concerned district office of the applicant",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 54,
      "expenditureRsInLacs": 35.46
    },
    {
      "year": "2013-14",
      "beneficiaries": 2,
      "expenditureRsInLacs": 1.85
    },
    {
      "year": "2014-15",
      "beneficiaries": 14,
      "expenditureRsInLacs": 11.56
    },
    {
      "year": "2015-16",
      "beneficiaries": null,
      "expenditureRsInLacs": 3.11
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 8,
  "name": "NSKFDC Term Loan Scheme ",
  "details": {
    "name": "NSKFDC Term Loan",
    "funding": "National Safai Karmachari Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance for the welfare of Safai Karmacharis & their dependents.",
    "beneficiary": "The beneficiary should be Scavengers/Safai Karmacharis or their dependents.",
    "eligibility": [
      "Applicant must have a Safai Kamgar",
      "No income limit restrictions for Safai Karmacharis",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, driving license, customs license, permit, batch number, etc.)"
    ],
    "nature": "Project limit ranges from Rs. 50,000/- to Rs. 30,00,000/-. NSKFDC contributes 90% for loans up to Rs. 5,00,000/- and for sanitation-based equipment loans up to Rs. 15 lakhs (above Rs. 10 lakhs), with beneficiaries contributing 10%. Repayment period is five years.",
    "benefits": "Low rate of interest.",
    "application": "Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.",
    "category": "Employment Generation, upliftment and Economic Growth",
    "contact": "Respective head office of the corporation, regional office, and the concerned district office of the applicant",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 535,
      "expenditureRsInLacs": 1528.84
    },
    {
      "year": "2013-14",
      "beneficiaries": 531,
      "expenditureRsInLacs": 2483.58
    },
    {
      "year": "2014-15",
      "beneficiaries": 467,
      "expenditureRsInLacs": 2175.71
    },
    {
      "year": "2015-16",
      "beneficiaries": 81,
      "expenditureRsInLacs": 385.11
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 9,
  "name": "NSKFDC Micro Credit Finance Scheme ",
  "details": {
    "name": "NSKFDC Micro Credit Finance (Scavengers)",
    "funding": "National Safai Karmachari Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance for the welfare of Safai Karmacharis & their dependents.",
    "beneficiary": "The beneficiary should be Scavengers/Safai Karmacharis or their dependents.",
    "eligibility": [
      "Applicant must have a Safai Kamgar",
      "No income limit restrictions for Safai Karmacharis",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor of goods, proof of business place, Shop & Establishment license, etc.)"
    ],
    "nature": "Project limit of Rs. 50,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is three years.",
    "benefits": "Low rate of interest.",
    "application": "Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.",
    "category": "Employment Generation, upliftment and Economic Growth",
    "contact": "Respective head office of the corporation, regional office, and the concerned district office of the applicant.",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 82,
      "expenditureRsInLacs": 23.34
    },
    {
      "year": "2013-14",
      "beneficiaries": 1686,
      "expenditureRsInLacs": 755.82
    },
    {
      "year": "2014-15",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2015-16",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 10,
  "name": "NSKFDC Mahila Samruddhi Yojana ",
  "details": {
    "name": "NSKFDC Mahila Samruddhi Yojana (Safai Karmacharis)",
    "funding": "National Safai Karmachari Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance for the welfare of Safai Karmacharis & their dependents.",
    "beneficiary": "The beneficiary should be Scavengers/Safai Karmacharis or their dependent Ladies.",
    "eligibility": [
      "Applicant must have a Safai Kamgar",
      "No income limit restrictions for Safai Karmacharis",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor of goods, proof of business place, Shop & Establishment license, etc.)"
    ],
    "nature": "Project limit of Rs. 50,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is three years.",
    "benefits": "Low rate of Interest.",
    "application": "Filling the demand form in the prescribed format, all the necessary documents should be submitted in the district office near his residence.",
    "category": "Employment Generation and Economic Growth",
    "contact": "Respective head office of the corporation, regional office and the concerned district office of the applicant.",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 3,
      "expenditureRsInLacs": 0.90
    },
    {
      "year": "2013-14",
      "beneficiaries": 758,
      "expenditureRsInLacs": 341.10
    },
    {
      "year": "2014-15",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2015-16",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 11,
  "name": "NSKFDC Mahila Adhikarita Yojana ",
  "details": {
    "name": "NSKFDC Mahila Adhikarita Yojana",
    "funding": "National Safai Karmachari Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance for the welfare of Safai Karmacharis & their dependents.",
    "beneficiary": "The beneficiary should be Scavengers/Safai Karmacharis or their dependent Ladies.",
    "eligibility": [
      "Applicant must have a Safai Kamgar",
      "No income limit restrictions for Safai Karmacharis",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to business (quotation from authorized vendor of goods, proof of business place, Shop & Establishment license, etc.)"
    ],
    "nature": "Project limit of Rs. 75,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is three years.",
    "benefits": "Low rate of Interest.",
    "application": "Loan Applications are available in the District Office of MPBCDC, so the Applicant should approach personally along with his concern documents and fill up the form and submit along with documents.",
    "category": "Employment Generation, upliftment and Economic Growth",
    "contact": "Respective head office of the corporation, regional office and the concerned district office of the applicant.",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2013-14",
      "beneficiaries": 295,
      "expenditureRsInLacs": 199.12
    },
    {
      "year": "2014-15",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2015-16",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
},
{
  "id": 12,
  "name": "NSKFDC Education Scheme ",
  "details": {
    "name": "NSKFDC Education Scheme (Safai Karmachari)",
    "funding": "National Safai Karmachari Finance & Development Corporation, New Delhi",
    "objective": "To provide financial assistance for the education of Safai Karmacharis Students.",
    "beneficiary": "The beneficiary should be Scavengers/Safai Karmacharis or their dependent.",
    "eligibility": [
      "Applicant must have a Safai Kamgar",
      "No income limit restrictions for Safai Karmacharis",
      "Applicant should be a resident of Maharashtra State",
      "Applicant must be 18 years old",
      "Two passport size photos",
      "Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)",
      "Required documents related to education (bonafide certificate, etc.)"
    ],
    "nature": "Project limit of Rs. 10,00,000/- to Rs. 20,00,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is five years.",
    "benefits": "Low rate of interest.",
    "application": "Loan Applications are available in the District Office of MPBCDC, so the Applicant should approach personally along with his concern documents and fill up the form and submit along with documents.",
    "category": "Job Orientation.",
    "contact": "Respective head office of the corporation, regional office and the concerned district office of the applicant.",
    "applicationFormUrl": "www.mahatmaphulecorporation.com/applications",
    "applicationAcceptancePeriod": "1st April to 31st March"
  },
  "statisticalInformation": [
    {
      "year": "2012-13",
      "beneficiaries": 1,
      "expenditureRsInLacs": 3.71
    },
    {
      "year": "2013-14",
      "beneficiaries": 7,
      "expenditureRsInLacs": 28.65
    },
    {
      "year": "2014-15",
      "beneficiaries": 1,
      "expenditureRsInLacs": 15.91
    },
    {
      "year": "2015-16",
      "beneficiaries": 1,
      "expenditureRsInLacs": 3.24
    },
    {
      "year": "2016-17",
      "beneficiaries": null,
      "expenditureRsInLacs": null
    }
  ]
}  ]},


{
  id: 3,
  name: 'Sant Rohidas Leather Industries & Charmakar Devlopment Corporations LTD.',
  icon: faBriefcase,
  subSchemes: [
    {
"id": 1,
"name": "50% Subsidy Scheme",
"funding": "State Government Schemes",
"objective": "The main object of the Corporation is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society. Also production of various types of Footwear & Leather Articles & supply to Government Departments & sale in Open Market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "The scheme is specifically for SC Charmakar Community. Beneficiaries should be below the poverty line with a maximum annual income not exceeding Rs. 1,00,000/- in rural areas and urban areas. The maximum loan amount is Rs. 50,000/-. 50% of the amount is given as subsidy, subject to a maximum limit of Rs. 10,000/-. The bank's interest rate ranges from 9.50% to 12.50%.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Employment",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 62.28,
    "beneficiaries": 624
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 47.24,
    "beneficiaries": 475
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 35.25,
    "beneficiaries": 353
  }
]
},   
{
"id": 2,
"name": "Margin Money Loan Scheme",
"funding": "State Government Schemes",
"objective": "The main object of the Corporation is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society. Also production of various types of Footwear & Leather Articles & supply to Government Departments & sale in Open Market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "The income limit of the beneficiary is same as per 50% subsidy scheme. Loan limit is from Rs. 50,001 to Rs. 5,00,000/-. There are two parts of this scheme based on loan amount: For loans between Rs. 50,001/- to Rs. 1,00,000/-, 25% loan will be given by Corporation @ 4% interest p.a., with a maximum subsidy of Rs. 10,000/-. 75% loan will be given by Bank @ 9.50% to 12.50% interest p.a. For loans between Rs. 1,00,001/- to Rs. 2,00,000/-, 20% of project cost as Seed Capital will be paid by Corporation @ 4% interest p.a., with a maximum subsidy of Rs. 10,000/-. The beneficiary contributes 5% of the project cost, and the remaining 75% of project cost is funded by the Bank. The loan amount must be repaid within 36 to 60 monthly installments.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Employment",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 107.07,
    "beneficiaries": 207
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 94.39,
    "beneficiaries": 169
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 93.84,
    "beneficiaries": 162
  }
]
},
{
"id": 3,
"name": "Training Scheme",
"funding": "State Government Schemes",
"objective": "The main object of the Corporation is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society. Also production of various types of Footwear & Leather Articles & supply to Government Departments & sale in Open Market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "The Training Scheme aims to enable students to start their own business, trade, or obtain a job. Training is provided in various trades such as Motor Driving, T.V./Video/Radio Repairing, Tailoring, Welding etc. for a period up to six months. Stipend and tuition fees are also paid by the Corporation to the training institute.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Education",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 17.54,
    "beneficiaries": 410
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 17.05,
    "beneficiaries": 207
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 10.13,
    "beneficiaries": 726
  }
]
},
 {
"id": 4,
"name": "Gattai Stall",
"funding": "State Government Schemes",
"objective": "The main object of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "The scheme provides Gattai Tin Stalls for Roadside Cobblers, costing Rs. 16,367/- per stall along with Rs. 500/- for incidental charges, under a 100% subsidy scheme to eligible applicants from Gram Panchayats.",
"application_process": "Application form is available at District Social Welfare Office. Applicant must fill out the form and submit it to the District Social Welfare Office.",
"category": "Economic Upliftment",
"contact_office": "Assistant Commissioner, District Social Welfare Office",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 1655.29,
    "beneficiaries": 3636
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 0,
    "beneficiaries": 0
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 0,
    "beneficiaries": 0
  }
]
},
{
"id": 5,
"name": "Term Loan Scheme",
"funding": "Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)",
"objective": "The main object of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "The Term Loan Scheme of NSFDC provides loans ranging from Rs. 1,00,000/- to Rs. 2,50,000/- for various business purposes to beneficiaries of the Charmakar Community. NSFDC sanctions 75% of the Project Cost as Term Loan, Corporation provides 20% Seed Loan, Rs. 10,000/- as subsidy, and the remaining 5% is contributed by the beneficiary. Interest rates are charged at 7% p.a. by NSFDC and 4% p.a. by Corporation for loans up to Rs. 5,00,000/-. For loans above Rs. 5,00,000/-, NSFDC charges 8% p.a. interest.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Employment",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 1233.88,
    "beneficiaries": 700
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 648.04,
    "beneficiaries": 425
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 813.69,
    "beneficiaries": 470
  }
]
},
{
"id": 6,
"name": "Micro Credit Finance",
"funding": "Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)",
"objective": "The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "Under this scheme, financial assistance ranging from Rs. 25,000/- to Rs. 50,000/- is provided to beneficiaries of the Charmakar Community. The rate of interest is 5% p.a. Rs. 10,000/- is given as subsidy and the remaining amount is provided as a loan.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Employment",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 415.75,
    "beneficiaries": 1663
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 258.25,
    "beneficiaries": 1033
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 75.25,
    "beneficiaries": 309
  }
]
},
{
"id": 7,
"name": "Mahila Samridhi Yojana",
"funding": "Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)",
"objective": "The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "Under this scheme, Widows, Divorcees (such women are given priority), and all female beneficiaries of the Charmkar Community are provided loans ranging from Rs. 25,000/- to Rs. 50,000/-. The rate of interest is 4% p.a.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Employment",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 41.75,
    "beneficiaries": 167
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 81.50,
    "beneficiaries": 326
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 142.75,
    "beneficiaries": 571
  }
]
},
{
"id": 8,
"name": "Mahila Kisan Yojana",
"funding": "Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)",
"objective": "The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for the loan."
],
"benefits_provided": "Under this scheme, female beneficiaries of the Charmakar Community are provided with a loan of Rs. 50,000/-. Rs. 10,000/- is given as subsidy and the remaining Rs. 40,000/- is provided as a loan at the rate of 5% p.a. The loan is sanctioned for agricultural projects where the applicant's name is in the 7/12 extract of land or in joint name with husband on 7/12 extract of land, or where the husband's name is on the 7/12 extract and he provides an affidavit to sanction the loan.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Employment",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 43.50,
    "beneficiaries": 87
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 27.20,
    "beneficiaries": 55
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 18.40,
    "beneficiaries": 38
  }
]
},
{
"id": 9,
"name": "Education Loan Scheme",
"funding": "Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)",
"objective": "The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.",
"beneficiary_category": "SC - Charmakar",
"eligibility_criteria": [
  "Applicant must be of Charmakar Community only.",
  "Age Limit should be in between 18 to 50 years.",
  "For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.",
  "Applicants must be permanent residents of Maharashtra State.",
  "He must produce the Income and Caste Certificate of Authorised Govt. Officer.",
  "Applicant must have knowledge of the business for which he has applied for loan."
],
"benefits_provided": "Under this scheme, NSFDC, New Delhi has implemented an Education Loan scheme since 2009. Postgraduate students in India can avail loans up to Rs. 10,00,000/- and up to Rs. 20,00,000/- for studies abroad. The rate of interest is 4% p.a. for male beneficiaries and 3.5% p.a. for female beneficiaries.",
"application_process": "Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.",
"category": "Education",
"contact_office": "List Enclosed.",
"statistical_summary": [
  {
    "year": "2012-13",
    "expenditure_in_lakhs_INR": 7.62,
    "beneficiaries": 16
  },
  {
    "year": "2013-14",
    "expenditure_in_lakhs_INR": 50.66,
    "beneficiaries": 49
  },
  {
    "year": "2014-15",
    "expenditure_in_lakhs_INR": 50.97,
    "beneficiaries": "--"
  }
]
}
]
},
{
id: 4,
name: 'Maharashtra State backward Class Communication',
icon: faGraduationCap,
subSchemes: [
  {
"id": 1,
"name": "Sahityaratna Lokshahir Anna Bhau Sathe Development Corporation (Ltd), Mumbai",
"details": {
  "name": "Central / State Corporation scheme",
  "funding": "Central State",
  "objective": "With the main objective of raising the standard of living of member of the Matang Community & its 12 sub caste living below poverty line in Maharashtra State securing to them a place of respect in the main stream of society & assisting them in their educational ,economic & social redevelopment as well as to provide financial assistance that will necessary & useful for their upliftment.",
  "beneficiary": "In Scheduled caste Matang community there are 12 Sub caste are as follows: Mang, Madari, Matang, Radhemang, Mini, Madig, Mang, Garudi, Mading, Dankhani, Mang, Madgi, Mang, Mahashi, Madiga",
  "eligibility": [
    "The applicant should be Domiciled resident of Maharashtra State.",
    "The applicant should have completed 18 years of age.",
    "The applicant should be a member of one of the 12 Sub-caste of the Matang Community.",
    "The applicant must have Knowledge & experience of the Occupation / Business selected by him.",
    "The limit of annual income of the applicants family in urban & rural areas should be Rs.1,00,000/-",
    "The applicant should not have availed of financial benefit from this corporation or from any other Govt. undertaking.",
    "Terms & conditions laid down by the corporation from time to time shall be binding on the applicant."
  ],
  "benefits": "Personal Loan Scheme",
  "application": "Form Of application & the documents to be annexed there. Applicant’s caste certificate (Obtained from a competent Authority). Certificate of income of the applicant’s family (Obtained from the tahasildar). Two copies of passport size photos taken recently should be affixed to the application. In the case if an applicant wishing to avail of the scheme of the National Scheduled caste, financial Development Corporation, there copies of a recently taken passport Size photo should be affixed. Educational certificate of the applicant. Xerox copies of Ration Card. Evidence / proof of avail abilities of the promises where the business is to be carried on. Rent receipt, agreement or ownership proof in respect of the premise where the business to be carried on. Driving license & permit etc.from the R.T.O. for purchasing vehicles under the N.S.F.D.C.Scheme. Chart / list of rates of authorized Dealer / Company in respect of prices / booking for the purpose is to be carried on. Technical certificate of experience pertaining to the business. Project report of the goods / Quotations in respect of the goods and material to be purchased. Affidavit (on a stamp paper).",
  "category": "Education / Employment / Economic Upliftment / Social Remedies",
  "contact": "District Office of Corporation",
}
}
]
},
{
id: 5,
name: 'Lokshahir Annabhau Sathe DEV.CO.LTD.',
icon: faGraduationCap,
subSchemes: [
  {
"id": 1,
"name": "Sahityaratna Lokshahir Anna Bhau Sathe Development Corporation (Ltd), Mumbai",
"details": {
  "name": "Central / State Corporation scheme",
  "funding": "Central State",
  "objective": "With the main objective of raising the standard of living of member of the Matang Community & its 12 sub caste living below poverty line in Maharashtra State securing to them a place of respect in the main stream of society & assisting them in their educational ,economic & social redevelopment as well as to provide financial assistance that will necessary & useful for their upliftment.",
  "beneficiary": "In Scheduled caste Matang community there are 12 Sub caste are as follows: Mang, Madari, Matang, Radhemang, Mini, Madig, Mang, Garudi, Mading, Dankhani, Mang, Madgi, Mang, Mahashi, Madiga",
  "eligibility": [
    "The applicant should be Domiciled resident of Maharashtra State.",
    "The applicant should have completed 18 years of age.",
    "The applicant should be a member of one of the 12 Sub-caste of the Matang Community.",
    "The applicant must have Knowledge & experience of the Occupation / Business selected by him.",
    "The limit of annual income of the applicants family in urban & rural areas should be Rs.1,00,000/-",
    "The applicant should not have availed of financial benefit from this corporation or from any other Govt. undertaking.",
    "Terms & conditions laid down by the corporation from time to time shall be binding on the applicant."
  ],
  "benefits": "Personal Loan Scheme",
  "application": "Form Of application & the documents to be annexed there. Applicant’s caste certificate (Obtained from a competent Authority). Certificate of income of the applicant’s family (Obtained from the tahasildar). Two copies of passport size photos taken recently should be affixed to the application. In the case if an applicant wishing to avail of the scheme of the National Scheduled caste, financial Development Corporation, there copies of a recently taken passport Size photo should be affixed. Educational certificate of the applicant. Xerox copies of Ration Card. Evidence / proof of avail abilities of the promises where the business is to be carried on. Rent receipt, agreement or ownership proof in respect of the premise where the business to be carried on. Driving license & permit etc.from the R.T.O. for purchasing vehicles under the N.S.F.D.C.Scheme. Chart / list of rates of authorized Dealer / Company in respect of prices / booking for the purpose is to be carried on. Technical certificate of experience pertaining to the business. Project report of the goods / Quotations in respect of the goods and material to be purchased. Affidavit (on a stamp paper).",
  "category": "Education / Employment / Economic Upliftment / Social Remedies",
  "contact": "District Office of Corporation",
}
}
]
},


];


// SCHEMES DATA

const schemes = [
  {
    id: 1,
    name: 'SR. Citizen',
    icon: faUser,
  },
    {
   id: 2,
       name: 'Education And Training',
       icon: faGraduationCap,
       subSchemes: [
      {
        id: 21,
        name: 'SubScheme 1',
        summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असता',
        details: {
          name: 'SubScheme 1',
          pdfUrl: '/pdfs/sub-scheme-1-1.pdf' , // Add this field
          summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असताना केंद्र शासनाने स्टँड अप इंडिया योजना घोषित केली. त्यामध्ये अनुसूचित जाती / जमातीचे उद्योजक व महिला उद्योजिका आगामी 3 वर्षात निर्माण करण्याचे केंद्र शासनाने ठरविलेले आहे.  त्या-अनुषंगाने सरकारी बँकांच्या माध्यमातून 1.25 लाख शाखांमधून ह्या घटकांना उद्योजिका बनविण्याची जबाबदारी सोपविण्यात आलेली आहे.  याकरिता केंद्र शासनाने सबसिडी अंतर्गत राष्ट्रीयकृत बँकांकडे 10 हजार कोटींची तरतुद वर्ग केलेली आहे. यामध्ये सबसिडीचे हमी कवच तयार करण्यात आलेले आहे. त्या माध्यमातून अनुसूचित जाती व नवबौध्द घटकातील उद्योजक  यांना प्रत्यक्ष मार्जिन मनी 25%  पैकी 15 % अनुदान स्वरूपात उपलब्ध करून देणे.',
          funding: 'राज्य शासन',
          objective: 'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असताना केंद्र शासनाने स्टँड अप इंडिया योजना घोषित केली. त्यामध्ये अनुसूचित जाती / जमातीचे उद्योजक व महिला उद्योजिका आगामी 3 वर्षात निर्माण करण्याचे केंद्र शासनाने ठरविलेले आहे.  त्या-अनुषंगाने सरकारी बँकांच्या माध्यमातून 1.25 लाख शाखांमधून ह्या घटकांना उद्योजिका बनविण्याची जबाबदारी सोपविण्यात आलेली आहे.  याकरिता केंद्र शासनाने सबसिडी अंतर्गत राष्ट्रीयकृत बँकांकडे 10 हजार कोटींची तरतुद वर्ग केलेली आहे. यामध्ये सबसिडीचे हमी कवच तयार करण्यात आलेले आहे. त्या माध्यमातून अनुसूचित जाती व नवबौध्द घटकातील उद्योजक  यांना प्रत्यक्ष मार्जिन मनी 25%  पैकी 15 % अनुदान स्वरूपात उपलब्ध करून देणे.',
          beneficiary: 'अनुसूचित जाती व नवबौध्द घटक',
          eligibility: [
            'केंद्र शासनाने स्टँड इंडिया योजनेअंतर्गत राष्ट्रीयकृत बँकांनी',
            'मंजूर केलेल्या प्रकरणांमध्ये अनुसूचित जाती व नव नवबौध्द समाजाच्या घटकांतील पात्र नवउद्योजक लाभार्थींना लाभ देण्यात येतो.',
            'राष्ट्रीयकृत बँकेचे कर्ज मंजुरी पत्र.',
            'अर्जदाराचे जातीचे प्रमाणपत्र व जात वैधता प्रमाणपत्र',
            'अर्जदाराने सादर केलेल्या प्रकल्पासोबतची सहपत्रे इत्यादी सत्यतेबाबत रुपये 500/- च्या स्टॅम्प पेपरवर हमी पत्र.',
            'राष्ट्रीयकृत बँकेचा रद्द केलेला धनादेश',
            'पॅनकार्ड, आधारकार्ड इत्यादीची छायाप्रत.',
            'निवासी पत्त्याची पडताळणी होणेकरिता बँकपासबुकच्या पहिल्या पानाची प्रत',
          ],
          benefits: 'केंद्र शासनाचे स्टँड अप इंडिया योजनेंतर्गत लाभार्थ्याने त्याचा स्व:हिस्सा म्हणून एकूण प्रकल्प किंमतीच्या 25%  रक्कम भरणा करावयाची. तर सामाजिक न्याय विभागाचे  या योजनेंतर्गत  अनुसूचित जाती व नव नवबौध्द समाजाच्या घटकांतील पात्र नवउद्योजक लाभार्थींना त्यांच्या स्व:हिस्सा 25% पैकी जास्तीत जास्त 15% मार्जिन मनी संबंधितास वितरीत करावयाची आहे.',
          application: 'संबंधित सहायक आयुक्त, समाज कल्याण, यांच्या कडे अर्ज दाखल झाल्यानंतर प्रदेशिक उपायुक्त, समाज कल्याण, यांच्या मार्फत आयुक्तालयास प्राप्त होतात.',
          category: 'आर्थिक विकास',
          contact: 'संबंधित सहायक आयुक्त समाज कल्याण (सर्व)',
          applicationForm: 'Please attach PDF Copy or Online Link to Application',
          applicationFormUrl:'/docs/righs-of-pwd-act-2016.pdf',
        applicationAcceptancePeriod: 'माहे मार्च अखेर'
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Economic Upliftment',
    icon: faBriefcase,

    subSchemes: [
      {
        id: 31,
        name: ' स्टँड अप इंडिया',
        summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असता',
        details: {
          name: 'केंद्र शासनाच्या स्टँड अप इंडिया योजनेत अनुसूचित जाती व नवबौध्द समाजाच्या घटकांकरिता मार्जिन मनी उपलब्ध करुन देणेची योजना',
          funding: 'राज्य शासन',
          objective: 'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असताना केंद्र शासनाने स्टँड अप इंडिया योजना घोषित केली. त्यामध्ये अनुसूचित जाती / जमातीचे उद्योजक व महिला उद्योजिका आगामी 3 वर्षात निर्माण करण्याचे केंद्र शासनाने ठरविलेले आहे.  त्या-अनुषंगाने सरकारी बँकांच्या माध्यमातून 1.25 लाख शाखांमधून ह्या घटकांना उद्योजिका बनविण्याची जबाबदारी सोपविण्यात आलेली आहे.  याकरिता केंद्र शासनाने सबसिडी अंतर्गत राष्ट्रीयकृत बँकांकडे 10 हजार कोटींची तरतुद वर्ग केलेली आहे. यामध्ये सबसिडीचे हमी कवच तयार करण्यात आलेले आहे. त्या माध्यमातून अनुसूचित जाती व नवबौध्द घटकातील उद्योजक  यांना प्रत्यक्ष मार्जिन मनी 25%  पैकी 15 % अनुदान स्वरूपात उपलब्ध करून देणे.',
          beneficiary: 'अनुसूचित जाती व नवबौध्द घटक',
          eligibility: [
            'केंद्र शासनाने स्टँड इंडिया योजनेअंतर्गत राष्ट्रीयकृत बँकांनी',
            'मंजूर केलेल्या प्रकरणांमध्ये अनुसूचित जाती व नव नवबौध्द समाजाच्या घटकांतील पात्र नवउद्योजक लाभार्थींना लाभ देण्यात येतो.',
            'राष्ट्रीयकृत बँकेचे कर्ज मंजुरी पत्र.',
            'अर्जदाराचे जातीचे प्रमाणपत्र व जात वैधता प्रमाणपत्र',
            'अर्जदाराने सादर केलेल्या प्रकल्पासोबतची सहपत्रे इत्यादी सत्यतेबाबत रुपये 500/- च्या स्टॅम्प पेपरवर हमी पत्र.',
            'राष्ट्रीयकृत बँकेचा रद्द केलेला धनादेश',
            'पॅनकार्ड, आधारकार्ड इत्यादीची छायाप्रत.',
            'निवासी पत्त्याची पडताळणी होणेकरिता बँकपासबुकच्या पहिल्या पानाची प्रत',
          ],
          benefits: 'केंद्र शासनाचे स्टँड अप इंडिया योजनेंतर्गत लाभार्थ्याने त्याचा स्व:हिस्सा म्हणून एकूण प्रकल्प किंमतीच्या 25%  रक्कम भरणा करावयाची. तर सामाजिक न्याय विभागाचे  या योजनेंतर्गत  अनुसूचित जाती व नव नवबौध्द समाजाच्या घटकांतील पात्र नवउद्योजक लाभार्थींना त्यांच्या स्व:हिस्सा 25% पैकी जास्तीत जास्त 15% मार्जिन मनी संबंधितास वितरीत करावयाची आहे.',
          application: 'संबंधित सहायक आयुक्त, समाज कल्याण, यांच्या कडे अर्ज दाखल झाल्यानंतर प्रदेशिक उपायुक्त, समाज कल्याण, यांच्या मार्फत आयुक्तालयास प्राप्त होतात.',
          category: 'आर्थिक विकास',
          contact: 'संबंधित सहायक आयुक्त समाज कल्याण (सर्व)',
          applicationForm: 'Please attach PDF Copy or Online Link to Application',
          applicationFormUrl:'/docs/Corporation/1) Stand up Form.pdf',
          applicationAcceptancePeriod: 'माहे मार्च अखेर'
        }
      },   
     {
        id: 32,
        name: 'मिनी ट्रॅक्टर',
        summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असता',

        details: {
          name: 'अनुसूचित जाती व नवबौध्द घटकांच्या स्वयंसहाय्यता बचत गटांना मिनी ट्रॅक्टर व त्याची उपसाधने यांचा पुरवठा करणेबाबत',
          funding: 'राज्य शासन',
          objective: '',
          beneficiary: 'अनुसूचित जाती व नवबौध्द घटक',
          eligibility: [
            'केंद्र शासनाने स्टँड इंडिया योजनेअंतर्गत राष्ट्रीयकृत बँकांनी',
            'मंजूर केलेल्या प्रकरणांमध्ये अनुसूचित जाती व नव नवबौध्द समाजाच्या घटकांतील पात्र नवउद्योजक लाभार्थींना लाभ देण्यात येतो.',
            'राष्ट्रीयकृत बँकेचे कर्ज मंजुरी पत्र.',
            'अर्जदाराचे जातीचे प्रमाणपत्र व जात वैधता प्रमाणपत्र',
            'अर्जदाराने सादर केलेल्या प्रकल्पासोबतची सहपत्रे इत्यादी सत्यतेबाबत रुपये 500/- च्या स्टॅम्प पेपरवर हमी पत्र.',
            'राष्ट्रीयकृत बँकेचा रद्द केलेला धनादेश',
            'पॅनकार्ड, आधारकार्ड इत्यादीची छायाप्रत.',
            'निवासी पत्त्याची पडताळणी होणेकरिता बँकपासबुकच्या पहिल्या पानाची प्रत',
          ],
          benefits: 'केंद्र शासनाचे स्टँड अप इंडिया योजनेंतर्गत लाभार्थ्याने त्याचा स्व:हिस्सा म्हणून एकूण प्रकल्प किंमतीच्या 25%  रक्कम भरणा करावयाची. तर सामाजिक न्याय विभागाचे  या योजनेंतर्गत  अनुसूचित जाती व नव नवबौध्द समाजाच्या घटकांतील पात्र नवउद्योजक लाभार्थींना त्यांच्या स्व:हिस्सा 25% पैकी जास्तीत जास्त 15% मार्जिन मनी संबंधितास वितरीत करावयाची आहे.',
          application: 'संबंधित सहायक आयुक्त, समाज कल्याण, यांच्या कडे अर्ज दाखल झाल्यानंतर प्रदेशिक उपायुक्त, समाज कल्याण, यांच्या मार्फत आयुक्तालयास प्राप्त होतात.',
          category: 'आर्थिक विकास',
          contact: 'संबंधित सहायक आयुक्त समाज कल्याण (सर्व)',
          applicationForm: 'Please attach PDF Copy or Online Link to Application',
          applicationFormUrl:'/docs/Corporation/2) Mini Tractor Form (1).pdf',
          applicationAcceptancePeriod: 'माहे मार्च अखेर'
        }
      },
      {
        id: 33,
        name: 'कर्मवीर दादासाहेब गायकवाड सबळीकरण व स्वाभिमान योजना',
        summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असता',

        details: {
            name: 'कर्मवीर दादासाहेब गायकवाड सबळीकरण व स्वाभिमान योजना',
            funding: 'राज्य शासन',
            objective: 'अनुसूचित जाती व नवबौध्द घटकातील दारिद्रय रेषेखालील भुमिहीन शेतमजूर कुटुंबाना स्वत:चे उत्पन्नाचे स्त्रोत उपलब्ध व्हावे व त्यांच्या राहणीमानात बदल व्हावा म्हणून त्यांना कसण्यासाठी जमिन उपलब्ध करुन देण्याबाबतची ही योजना आहे. सदर योजना ही शासन निर्णय, क्रमांक विघयो-2004/ प्र.क्र.125/विघयो-2, दिनांक 2 जून, 2004 नुसार सन 2004 पासून राबविण्यांत येत आहे.',
            beneficiary: 'अनुसूचित जाती व नवबौध्द घटक',
            eligibility: [
                'सदर योजनेंतर्गत लाभार्थी अनुसूचित जाती व नवबौध्द घटकातील दारिद्रय रेषेखालील भुमिहीन शेतमजूर असावा',
                'त्याची वयोमर्यादा 18 ते 60 वर्षापर्यंत असावी.',
                'जमिन उपलब्ध झालेल्या गावांच्या परीसरात राहणा-या सर्व दारिद्ररेषेखालील भूमिहीन अनुसूचित जाती तथा नवबौध्द लाभार्थ्यांच्या नावाच्या चिठठया टाकून जिल्हाधिका-याच्या नियत्रंणाखालील समितीने लाभार्थ्यांची निवड करावी.',
                'प्राधान्यक्रम दयावयाच्या प्रवर्गासाठी वेगळया चिठठया टाकून निवडीची प्रक्रिया अत्यंत पारदर्शक असणे आवश्यक आहे. अशी तरतूद आहे.'
            ],
            benefits: 'या योजनेंतर्गत प्रति लाभार्थ्यांस 4 एकर कोरडवाहू किंवा 2 एकर बागायती शेत जमीन शासनातर्फे वाटप करण्यांत येते. सुधारित शासन निर्णय दि. 14.08.2018 अन्वये ही योजना 100 % अनुदान तत्वावर सुरु करण्यात आलेली आहे.',
            application: 'संबंधित सहायक आयुक्त, समाज कल्याण',
            category: 'आर्थिक विकास',
            contact: 'संबंधित सहायक आयुक्त समाज कल्याण (सर्व)',
            applicationForm: 'Please attach PDF Copy or Online Link to Application',
            applicationFormUrl:'/docs/Corporation/3) Karmaveer Dadasaheb Gaikwad Yogana Form - 2 (1).pdf',
              applicationAcceptancePeriod: 'माहे मार्च अखेर'
        }
    },
    {
      id: 34,
      name: 'अनुसूचित जातीच्या औद्योगिक सहकारी संस्थांना अर्थसहाय्य करण्यांची योजना',
      summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असता',

      details: {
          name: 'अनुसूचित जातीच्या औद्योगिक सहकारी संस्थांना अर्थसहाय्य करण्यांची योजना',
          funding: 'राज्य शासन',
          objective: 'सहकाराच्या माध्यमातून अनुसूचित जातीच्या घटकांना विकासाच्या मुख्य प्रवाहात आणणे काळाची गरज आहे.  दुर्बल घटकांना सहकार क्षेत्रात वाव मिळवून देवून त्यांना विकासाच्या संधी मिळवून देणे आवश्यक आहे. अनुसूचित जातीमध्ये बेरोजगारांची संख्या फार मोठी असून ती वरचेवर वाढत आहे. त्यामुळे बेरोजगारांना उपजिविकेचे साधन उपलब्ध करुन देण्यासाठी अनुसूचित जातीच्या सहकारी संस्थांना अर्थसहाय्य देण्याची योजना सुरु करण्यांत आलेली आहे. यामध्ये अनुसूचित जातीच्या यंत्रमाग सोसायट्या, निटींग गारमेंटस् सुत प्रोसेसिंग युनिटस्, शेतीमाल प्रक्रिया, सहकारी साखर कारखाने, खांडसरी कारखाना रुपांतरीत करणे इत्यादी.',
          beneficiary: 'अनुसूचित जाती व नवबौध्द घटक',
          eligibility: [
              '	या योजनेंतर्गत केवळ अनुसूचित जातीच्या नोंदणीकृत सहकारी संस्था अर्ज करण्यांस पात्र ठरतील.',
              'विशेष घटक योजनेच्या तत्वानुसार संस्थेचे भागधारक 70% अनुसूचित जातीचे असावेत. सहकारी संस्थांचे प्रकल्प उभारल्यानंतर  व ते व्यवस्थितरित्या सुरु झाल्यानंतर त्यामधील कर्मचारीवर्ग  व कामगारवर्गही 70% अनुसूचित जातीचा असावा.',
              'विशेष घटक योजनेच्या मार्गदर्शक तत्वानुसार अर्जदार संस्था हया अनुसूचित जातीच्या असाव्यात व त्यांना कर्ज आणि भागभांडवल विशेष घटक योजनेमधून सामाजिक न्याय विभागाकडून देण्यांत येईल.',
              'अर्जदार सहकारी संस्थांना शासनास सादर केलेल्या प्रकल्प मुल्याच्या किमान 5% भागभांडवल जमा केल्यानंतर त्यांना शासकीय भागभांडवल / दीर्घ मुदतीचे कर्ज मिळण्यास पात्र समजण्यांत यावे.',
              'अर्जदार संस्थेने एकूण प्रकल्प मुल्याच्या 5% एवढया निधीची उभारणी स्वत: केल्यानंतर 35% भागभांडवल व 35% दीर्घ मुदतीचे कर्ज विशेष घटक योजनेंतर्गत  सामाजिक न्याय विभागाकडून देण्यांत येईल. सहकारी संस्थांनी प्रकल्प खर्चाच्या 25% अर्थसहाय्य  कर्ज वित्तीय संस्थांकडूनघटक उपलब्ध करुन घ्यावे. ',
              '',
          ],
          benefits: 'सुतगिरणीने जमा केलेले 5 टक्के स्वभागभांडवल  जमा केल्यानंतर  शासनाच्या सहकार व वस्त्रोद्योग विभागाने 1:9 या प्रमाणे त्यांचे शासकीय भागभांडवल वितरीत करावे. शासकीय भागभांडवल वितरीत झालेल्या गिरण्यांना  1 : 1   प्रमाणात सामाजिक न्याय विभागाकडून (50%) कर्ज मंजूर करण्यात येते.',
          application: "संबंधित सहायक आयुक्त, समाज कल्याण, यांच्या कडे अर्ज दाखल झाल्यानंतर प्रदेशिक उपायुक्त, समाज कल्याण, यांच्या मार्फत आयुक्तालयास प्राप्त होतात.",
          category: "आर्थिक विकास",
          contact: "संबंधित सहायक आयुक्त समाज कल्याण (सर्व)",
          applicationForm: "Please attach PDF Copy or Online Link to Application",
          applicationFormUrl:'/docs/righs-of-pwd-act-2016.pdf',

          applicationAcceptancePeriod: "माहे मार्च अखेर"      }
  },
  {
    id: 35,
    name: '5) विशेष घटक योजनेतून मागासवर्गीय (अ.जा.) सुतगिरण्यांना दिर्घ मुदतीचे कर्ज मंजूर करण्याबाबत',
    summary:'डॉ.बाबासाहेब आंबेडकर यांचे 125 वे जयंती वर्ष भारत सरकार व महाराष्ट्र शासन मोठया प्रमाणात साजरे करत असता',

    details: {
      name: '5) विशेष घटक योजनेतून मागासवर्गीय (अ.जा.) सुतगिरण्यांना दिर्घ मुदतीचे कर्ज मंजूर करण्याबाबत',
      funding: 'राज्य शासन',
      objective: ' अनुसूचित जाती प्रवर्गातील सभादांसाठी सहकारी तत्वावर सूतगिरणीची उभारणी करण्यासाठी महाराष्ट्र राज्यात 8 व्या पंचवार्षिक योजनेच्या काळात स्थापन केलेल्या व शासनाच्या सहकार व वस्त्रोद्योग विभागाने पुरस्कृत केलेल्या सहकारी क्षेत्रातील मागासवर्गीयांच्या सुतगिरण्यांना तदर्थ पध्दतीने सन 1997-98 पासून दीर्घ मुदतीचे कर्ज मंजूर करण्यात येत आहे.',
      beneficiary: 'अनुसूचित जाती व नवबौध्द घटक',
      eligibility: [
        '•	मागासवर्गीयांच्या (अ.जा.) प्रस्तावित सहकारी सूतगिरण्यांनी प्रकल्प किंमतीच्या 5% आणि कमित कमी रुपये-80.00 लाखापर्यंत सभासद भागभांडवल गोळा केल्यास सदर गिरण्या कर्जाकरीता पात्र समजण्यांत येतील.',
        '•	सुतगिरणीने जमा केलेले 5 टक्के स्वभागभांडवल जमा केल्यानंतर शासनाच्या सहकार व वस्त्रोद्योग विभागाने 1:9 या प्रमाणे त्यांचे शासकीय भागभांडवल वितरीत करावे. शासकीय भागभांडवल वितरीत झालेल्या गिरण्यांना  1 : 1   प्रमाणात सामाजिक न्याय विभागाकडून (50%) कर्ज मिळणेस पात्र राहतील.',
        '•	सहकारी सूतगिरण्यांनी सादर केलेला प्रकल्प अहवाल मुल्यांकित करण्याकरीता मुदत कर्ज देणा-या वित्तीय संस्था / बँका यांचे व्यतिरिक्त खालील शासन पुरस्कृत संस्थांपैकी एका संस्थेकडून तपासून / मुल्यांकित करुन घेऊन शासन मान्यतेसाठी सादर करावे. मुल्यांकन कामाचे शुल्क रु. 2.50 लाख इतके निश्चित करण्यांत येत आहे. तसेच प्रकल्प मुल्यांकनाचा जो खर्च दर्शविला आहे तो संबंधित गिरणीने सोसणे आवश्यक आहे.',
        'अर्जदाराचे जातीचे प्रमाणपत्र व जात वैधता प्रमाणपत्र',
        'अर्जदाराने सादर केलेल्या प्रकल्पासोबतची सहपत्रे इत्यादी सत्यतेबाबत रुपये 500/- च्या स्टॅम्प पेपरवर हमी पत्र.',
        'राष्ट्रीयकृत बँकेचा रद्द केलेला धनादेश',
        'पॅनकार्ड, आधारकार्ड इत्यादीची छायाप्रत.',
        'निवासी पत्त्याची पडताळणी होणेकरिता बँकपासबुकच्या पहिल्या पानाची प्रत',
      ],
      benefits: 'सुतगिरणीने जमा केलेले 5 टक्के स्वभागभांडवल  जमा केल्यानंतर  शासनाच्या सहकार व वस्त्रोद्योग विभागाने 1:9 या प्रमाणे त्यांचे शासकीय भागभांडवल वितरीत करावे. शासकीय भागभांडवल वितरीत झालेल्या गिरण्यांना  1 : 1   प्रमाणात सामाजिक न्याय विभागाकडून (50%) कर्ज मंजूर करण्यात येते.',
      application: "संबंधित सहायक आयुक्त, समाज कल्याण, यांच्या कडे अर्ज दाखल झाल्यानंतर प्रदेशिक उपायुक्त, समाज कल्याण, यांच्या मार्फत आयुक्तालयास प्राप्त होतात.",
      category: "आर्थिक विकास",
      contact: "संबंधित सहायक आयुक्त समाज कल्याण (सर्व)",
      applicationForm: "Please attach PDF Copy or Online Link to Application",
      applicationAcceptancePeriod: "माहे मार्च अखेर" 
    }
  },   

  


    ]

  },
  {
  id: 4,
  name: 'Training Scheme',
  icon: faGraduationCap,
},
{
  id: 5,
  name: 'Employment Scheme',
  icon: faChartLine,

},
{
  id: 6,
  name: 'Person With Disability',
  icon: faWheelchair, // Replace with appropriate icon

},
{
  id: 7,
  name: 'AWARDS',
  icon: faHandsHelping, // Replace with appropriate icon

},
{
  id: 8,
  name: 'Social Integration',
  funding: 'State Government Schemes',
  icon: faHandsHelping, // Replace with appropriate icon

},
{
  id: 9,
  name: 'Social Remedies',
  icon: faBalanceScale, // Replace with appropriate icon

}
];

// SchemesData in Home Scheme Section




export {offices ,corpschemes, schemes} ;





