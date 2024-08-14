import {
    faUser,
    faGraduationCap,
    faBriefcase,
    faHandsHelping,
    faWheelchair,
    faPeopleArrows,
    faGavel,
    faAward,
    faBalanceScale
   } from '@fortawesome/free-solid-svg-icons';
   
   import ic from './components/icons/ecitizen.png'

const schemes = [
    {
      id: 1,
      name: 'Mahatma Phule Backward Class Development Corporation LTD',
        // icon: faGraduationCap,

      details: 'Details of SR. Citizen',
      subSchemes: [
          {
    id: 1,
    name: 'Special Central Assistance Scheme' ,
    summary:'People belonging to Scheduled Caste categories are eligible for loan facilities. The scheme aims at promoting self-employment, upliftment, and crossing the poverty line.',
    details: {
      name: 'Special Central Assistance',
      funding: 'Funds received from Central Government to Maharashtra State Government. Through Social Justice Department of Mantralaya, it is distributed to MPBCDC.',
      objective: 'People belonging to Scheduled Caste categories are eligible for loan facilities. The scheme aims at promoting self-employment, upliftment, and crossing the poverty line.',
      beneficiary: 'Scheduled Caste category (e.g., Nav Bauddha, Mahar, etc.)',
      eligibility: [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (annual income of Rs. 1.00 lakh)',
        'Age above 18 years',
        '2 photographs, ration card, Aadhaar card, election card, PAN card, quotation'
      ],
      nature: 'Maximum loan limit of Rs. 50,000/-, with Rs. 10,000/- subsidy and the remaining from bank share. Loan repayment period is 36 months with interest as per bank rules.',
      benefits: 'Maximum subsidy of Rs. 10,000/- provided to beneficiaries for various businesses under this scheme.',
      application: 'Loan applications available at the District Office of MPBCDC. Applicants need to visit personally with required documents, fill up the form, and submit it.',
      category: 'Approximately 25% of beneficiaries annually move above the poverty line and experience upliftment in their lives.',
      contact: 'Residence place of applicant or the concerned District Office of MPBCDC',
      applicationFormUrl: 'www.mahatmaphulecorporation.com/applications',
      applicationAcceptancePeriod: '1st April to 31st March'
    },
  },
  {
    'id': 2,
    'name': 'Margin Money Scheme ',
    'details': {
      'name': 'Margin Money Scheme',
      'funding': 'This scheme is implemented from share capital received from Social Justice Department, Government of Maharashtra.',
      'objective': 'People belonging to Scheduled Caste category are eligible for loan facilities. The scheme aims at promoting self-employment, upliftment, and crossing the poverty line.',
      'beneficiary': 'Scheduled Caste category (e.g., Nav Bauddha, Mahar, etc.)',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (annual income of Rs. 1.00 lakh)',
        'Age above 18 years',
        '2 photographs, ration card, Aadhaar card, election card, PAN card. For vehicle business: driving license, permit, batch.'
      ],
      nature: 'Scheme limit ranges from Rs. 50,000/- to Rs. 5,00,000/-. MPBCDCs share is 20%, including Rs. 10,000/- subsidy and remaining margin money amount chargeable at 4% p.a. Banks share is 75% of the total cost with interest charged as per their rules. Applicant contributes 5%.',
      benefits: 'Low-interest rates charged to the beneficiary.',
      application: 'Loan applications available at the District Office of MPBCDC. Applicants need to visit personally with required documents, fill up the form, and submit it.',
      category: 'More than 25% of beneficiaries annually move above the poverty line and experience upliftment in their lives.',
      contact: 'Residence place of applicant or the concerned District Office of MPBCDC',
      applicationFormUrl: 'www.mahatmaphulecorporation.com/applications',
      applicationAcceptancePeriod: '1st April to 31st March'
    },
  },
  {
    'id': 3,
    'name': 'General Training Scheme ',
    'details': {
      'name': 'General Training Scheme',
      'funding': '10% amount of total funds received under Special Central Assistance is utilized yearly for course fees and stipend to the trainee.',
      'objective': 'People belonging to Scheduled Caste category are eligible for the General Training Scheme. The main purpose is self-employment and job orientation.',
      'beneficiary': 'Scheduled Caste category (e.g., Nav Bauddha, Mahar, etc.)',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (annual income of Rs. 1.00 lakh)',
        'Age above 18 years',
        '2 photographs, ration card, Aadhaar card, PAN card',
        'School leaving certificate',
        'Qualification certificate'
      ],
      'nature': 'Training period is 3 to 6 months. Total expenditure per trainee is Rs. 15,000/-, including a stipend of Rs. 1,000/- per month. Types of training include Computer, Beauty Parlor, Driving, Mobile Repairing, Welding, etc.',
      'benefits': 'Free of charge training plus stipend of Rs. 1,000/- per month to the trainee.',
      'application': 'Training applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents. Alternatively, applicants can approach after publication in the newspaper about the General Training Scheme.',
      'category': '80% of trainees are trained annually.',
      'contact': 'Residence place of applicant or the concerned District Office of MPBCDC',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
  },
  {
    'id': 4,
    'name': 'NSFDC Term Loan Scheme ',
    'details': {
      'name': 'NSFDC Term Loan',
      'funding': 'National Scheduled Caste Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance to Scheduled Caste persons.',
      'beneficiary': 'Scheduled Caste category (e.g., Bauddha, Mahar, Nav Bauddha, etc.)',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, driving license, customs license, permit, batch number, etc.)'
      ],
      'nature': 'Project limit ranges from Rs. 50,000/- to Rs. 30,00,000/-. NSFDC contributes 75%, MPBCDC contributes 20%, and beneficiary contributes 5% to 8%. Repayment period is five years.',
      'benefits': 'Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Employment Generation, upliftment, and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
    'statisticalInformation': [
      {
        'year': '2012-13',
        'beneficiaries': 28,
        'expenditureRsInLacs': 59.24
      },
      {
        'year': '2013-14',
        'beneficiaries': 8,
        'expenditureRsInLacs': 19.50
      },
      {
        'year': '2014-15',
        'beneficiaries': 2,
        'expenditureRsInLacs': 5.00
      }
    ]
  },
  {
    'id': 5,
    'name': 'NSFDC Micro Credit Finance Scheme ',
    'details': {
      'name': 'NSFDC Micro Credit Finance',
      'funding': 'National Scheduled Caste Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance to Scheduled Caste persons.',
      'beneficiary': 'Scheduled Caste category (e.g., Bauddha, Mahar, Nav Bauddha, etc.)',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, etc.)'
      ],
      'nature': 'Project limit ranges up to Rs. 50,000/-. NSFDC contributes 90%, MPBCDC contributes 10%, and beneficiary contributes 5%. Repayment period is three years.',
      'benefits': 'Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Employment Generation, upliftment, and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
    'statisticalInformation': [
      {
        'year': '2012-13',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2013-14',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2014-15',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2015-16',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2016-17',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      }
    ]
  },
  {
    'id': 6,
    'name': 'NSFDC Mahila Samruddhi Yojana ',
    'details': {
      'name': 'NSFDC Mahila Samruddhi Yojana',
      'funding': 'National Scheduled Caste Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance to Scheduled Caste women.',
      'beneficiary': 'Female beneficiaries belonging to Scheduled Caste (e.g., Bauddha, Mahar, Nav Bauddha, etc.)',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, etc.)'
      ],
      'nature': 'Project limit ranges up to Rs. 50,000/-. NSFDC contributes 90%, MPBCDC contributes 10%, and beneficiary contributes 4%. Repayment period is three years.',
      'benefits': 'Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Employment Generation, upliftment, and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
    'statisticalInformation': [
      {
        'year': '2012-13',
        'beneficiaries': 2390,
        'expenditureRsInLacs': 717.00
      },
      {
        'year': '2013-14',
        'beneficiaries': 1535,
        'expenditureRsInLacs': 460.50
      },
      {
        'year': '2014-15',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2015-16',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2016-17',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      }
    ]
  },
  {
    'id': 7,
    'name': 'NSFDC Education Scheme ',
    'details': {
      'name': 'NSFDC Education Scheme',
      'funding': 'National Scheduled Caste Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance for the education of Scheduled Caste students.',
      'beneficiary': 'Beneficiaries should belong to Scheduled Caste, Budud & Khatik communities.',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to education (bonafide certificate, etc.)'
      ],
      'nature': 'Project limit ranges from Rs. 10,00,000/- to Rs. 20,00,000/-. NSFDC contributes 90% for loans up to Rs. 10,00,000/- (male beneficiaries 4%, female beneficiaries 3.5%), and for loans up to Rs. 20,00,000/- (male beneficiaries 4%, female beneficiaries 3.5%). Repayment period is five years.',
      'benefits': 'Low rate of interest.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Job Orientation',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
    'statisticalInformation': [
      {
        'year': '2012-13',
        'beneficiaries': 54,
        'expenditureRsInLacs': 35.46
      },
      {
        'year': '2013-14',
        'beneficiaries': 2,
        'expenditureRsInLacs': 1.85
      },
      {
        'year': '2014-15',
        'beneficiaries': 14,
        'expenditureRsInLacs': 11.56
      },
      {
        'year': '2015-16',
        'beneficiaries': null,
        'expenditureRsInLacs': 3.11
      },
      {
        'year': '2016-17',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      }
    ]
  },
  {
    'id': 8,
    'name': 'NSKFDC Term Loan Scheme ',
    'details': {
      'name': 'NSKFDC Term Loan',
      'funding': 'National Safai Karmachari Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance for the welfare of Safai Karmacharis & their dependents.',
      'beneficiary': 'The beneficiary should be Scavengers/Safai Karmacharis or their dependents.',
      'eligibility': [
        'Applicant must have a Safai Kamgar',
        'No income limit restrictions for Safai Karmacharis',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, driving license, customs license, permit, batch number, etc.)'
      ],
      'nature': 'Project limit ranges from Rs. 50,000/- to Rs. 30,00,000/-. NSKFDC contributes 90% for loans up to Rs. 5,00,000/- and for sanitation-based equipment loans up to Rs. 15 lakhs (above Rs. 10 lakhs), with beneficiaries contributing 10%. Repayment period is five years.',
      'benefits': 'Low rate of interest.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Employment Generation, upliftment and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
  },
  {
    'id': 9,
    'name': 'NSKFDC Micro Credit Finance Scheme ',
    'details': {
      'name': 'NSKFDC Micro Credit Finance (Scavengers)',
      'funding': 'National Safai Karmachari Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance for the welfare of Safai Karmacharis & their dependents.',
      'beneficiary': 'The beneficiary should be Scavengers/Safai Karmacharis or their dependents.',
      'eligibility': [
        'Applicant must have a Safai Kamgar',
        'No income limit restrictions for Safai Karmacharis',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor of goods, proof of business place, Shop & Establishment license, etc.)'
      ],
      'nature': 'Project limit of Rs. 50,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is three years.',
      'benefits': 'Low rate of interest.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Employment Generation, upliftment and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant.',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
    'statisticalInformation': [
      {
        'year': '2012-13',
        'beneficiaries': 82,
        'expenditureRsInLacs': 23.34
      },
      {
        'year': '2013-14',
        'beneficiaries': 1686,
        'expenditureRsInLacs': 755.82
      },
      {
        'year': '2014-15',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2015-16',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2016-17',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      }
    ]
  },
  {
    'id': 10,
    'name': 'NSKFDC Mahila Samruddhi Yojana ',
    'details': {
      'name': 'NSKFDC Mahila Samruddhi Yojana (Safai Karmacharis)',
      'funding': 'National Safai Karmachari Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance for the welfare of Safai Karmacharis & their dependents.',
      'beneficiary': 'The beneficiary should be Scavengers/Safai Karmacharis or their dependent Ladies.',
      'eligibility': [
        'Applicant must have a Safai Kamgar',
        'No income limit restrictions for Safai Karmacharis',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor of goods, proof of business place, Shop & Establishment license, etc.)'
      ],
      'nature': 'Project limit of Rs. 50,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is three years.',
      'benefits': 'Low rate of Interest.',
      'application': 'Filling the demand form in the prescribed format, all the necessary documents should be submitted in the district office near his residence.',
      'category': 'Employment Generation and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office and the concerned district office of the applicant.',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
    'statisticalInformation': [
      {
        'year': '2012-13',
        'beneficiaries': 3,
        'expenditureRsInLacs': 0.90
      },
      {
        'year': '2013-14',
        'beneficiaries': 758,
        'expenditureRsInLacs': 341.10
      },
      {
        'year': '2014-15',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2015-16',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      },
      {
        'year': '2016-17',
        'beneficiaries': null,
        'expenditureRsInLacs': null
      }
    ]
  },
  {
    id: 11,
    name: 'NSKFDC Mahila Adhikarita Yojana ',
    details: {
      name: 'NSKFDC Mahila Adhikarita Yojana',
      funding: 'National Safai Karmachari Finance & Development Corporation, New Delhi',
      objective: 'To provide financial assistance for the welfare of Safai Karmacharis & their dependents.',
      beneficiary: 'The beneficiary should be Scavengers/Safai Karmacharis or their dependent Ladies.',
      eligibility: [
        'Applicant must have a Safai Kamgar',
        'No income limit restrictions for Safai Karmacharis',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor of goods, proof of business place, Shop & Establishment license, etc.)'
      ],
      nature: 'Project limit of Rs. 75,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is three years.',
      benefits: 'Low rate of Interest.',
      application: 'Loan Applications are available in the District Office of MPBCDC, so the Applicant should approach personally along with his concern documents and fill up the form and submit along with documents.',
      category: 'Employment Generation, upliftment and Economic Growth',
      contact: 'Respective head office of the corporation, regional office and the concerned district office of the applicant.',
      applicationFormUrl: 'www.mahatmaphulecorporation.com/applications',
      applicationAcceptancePeriod: '1st April to 31st March'
    },
  },
  {
    id: 12,
    name: 'NSKFDC Education Scheme ',
    details: {
      name: 'NSKFDC Education Scheme (Safai Karmachari)',
      funding: 'National Safai Karmachari Finance & Development Corporation, New Delhi',
      objective: 'To provide financial assistance for the education of Safai Karmacharis Students.',
      beneficiary: 'The beneficiary should be Scavengers/Safai Karmacharis or their dependent.',
      eligibility: [
        'Applicant must have a Safai Kamgar',
        'No income limit restrictions for Safai Karmacharis',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to education (bonafide certificate, etc.)'
      ],
      nature: 'Project limit of Rs. 10,00,000/- to Rs. 20,00,000/- upto. NSKFDC contributes 90% while beneficiaries contribute 10%. Repayment period is five years.',
      benefits: 'Low rate of interest.',
      application: 'Loan Applications are available in the District Office of MPBCDC, so the Applicant should approach personally along with his concern documents and fill up the form and submit along with documents.',
      category: 'Job Orientation.',
      contact: 'Respective head office of the corporation, regional office and the concerned district office of the applicant.',
      applicationFormUrl: 'www.mahatmaphulecorporation.com/applications',
      applicationAcceptancePeriod: '1st April to 31st March'
    },
  }  ]
},

{
       id: 2,
       name: 'Maharashtra State Handicapped Finance & Development Corporatioin',
       subSchemes: [
        {
          id: 21,
          name: 'SubScheme 1',
          'details': {
            'name': 'NSFDC Micro Credit Finance',
            'funding': 'National Scheduled Caste Finance & Development Corporation, New Delhi',
            'objective': 'To provide financial assistance to Scheduled Caste persons.',
            'beneficiary': 'Scheduled Caste category (e.g., Bauddha, Mahar, Nav Bauddha, etc.)',
            'eligibility': [
              'Caste certificate from competent authority',
              'Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)',
              'Applicant should be a resident of Maharashtra State',
              'Applicant must be 18 years old',
              'Two passport size photos',
              'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
              'Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, etc.)'
            ],
            'nature': 'Project limit ranges up to Rs. 50,000/-. NSFDC contributes 90%, MPBCDC contributes 10%, and beneficiary contributes 5%. Repayment period is three years.',
            'benefits': 'Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.',
            'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
            'category': 'Employment Generation, upliftment, and Economic Growth',
            'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
            'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
            'applicationAcceptancePeriod': '1st April to 31st March'
          },
              },
        {
          id: 22,
          name:'Term Loan',
          details: {
            name: 'SubScheme ',
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
        },
      
  {
    id: 23,
    name: 'Education Loan',
    'details': {
      'name': 'NSFDC Micro Credit Finance',
      'funding': 'National Scheduled Caste Finance & Development Corporation, New Delhi',
      'objective': 'To provide financial assistance to Scheduled Caste persons.',
      'beneficiary': 'Scheduled Caste category (e.g., Bauddha, Mahar, Nav Bauddha, etc.)',
      'eligibility': [
        'Caste certificate from competent authority',
        'Income certificate from competent authority (Urban – Rs. 1.20 lakhs, Rural – Rs. 98,000/-)',
        'Applicant should be a resident of Maharashtra State',
        'Applicant must be 18 years old',
        'Two passport size photos',
        'Proof of residence (ration card, voter ID card, PAN card, Aadhaar card, electricity bill, etc.)',
        'Required documents related to business (quotation from authorized vendor, proof of business place, Shop & Establishment license, other business documents, etc.)'
      ],
      'nature': 'Project limit ranges up to Rs. 50,000/-. NSFDC contributes 90%, MPBCDC contributes 10%, and beneficiary contributes 5%. Repayment period is three years.',
      'benefits': 'Maximum subsidy of Rs. 10,000/- is provided to the beneficiary for various businesses.',
      'application': 'Loan applications are available at the District Office of MPBCDC. Applicants should visit personally with required documents, fill up the form, and submit along with necessary documents.',
      'category': 'Employment Generation, upliftment, and Economic Growth',
      'contact': 'Respective head office of the corporation, regional office, and the concerned district office of the applicant',
      'applicationFormUrl': 'www.mahatmaphulecorporation.com/applications',
      'applicationAcceptancePeriod': '1st April to 31st March'
    },
  },
  {
    'id': 24,
    'name': 'Micro Credit Finance',
    'funding': 'National Handicapped Finance & Development Corporation, New Delhi & State Corporation jointly.',
    'objective': 'To provide loan amount to Male & Female beneficiaries through NGO or directly for self-employment activities.',
    'beneficiary_category': 'Physically Disabled',
    'eligibility_criteria': [
      'To provide loans to the self-help group through registered non-government organization, Loan upto 5 lakhs.',
      'Direct debt to members registered to the registered institution.',
      'The institution can lend up to Rs. 25000 / - for a member of the savings group. However, the majority of the members are expected to distribute the loan.',
      'The institutions total debt will be 25% of the loan amount. This amount has to be deposited in the corporation as a warranty fee.',
      'Interest is levied at 5% for the beneficiaries, and women are given 1% exemption.',
      'Repayment period of 3 years.'
    ],
    'benefits_provided': 'Loan amount is provided at lower interest rate.',
    'application_process': 'Loan application should be submitted to concern District Office in prescribed loan application along with required documents.',
    'category': 'Economic Upliftment of Disabled person through NGO',
    'contact_office': 'https://sjsa.maharashtra.gov.in/mr/maharashtra-state-handicapped-finance-and-development-corporation-mr',
    'application_form': 'Micro Credit For NGO Form',
    'application_acceptance_period': 'Until receipt of all necessary documents with the Demand Draft application in the prescribed format.',
  } ]
},
  {
    id: 3,
    name: 'Sant Rohidas Leather Industries & Charmakar Devlopment Corporations LTD.',
    subSchemes: [
      {
  'id': 1,
  'name': '50% Subsidy Scheme',
  'funding': 'State Government Schemes',
  'objective': 'The main object of the Corporation is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society. Also production of various types of Footwear & Leather Articles & supply to Government Departments & sale in Open Market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'The scheme is specifically for SC Charmakar Community. Beneficiaries should be below the poverty line with a maximum annual income not exceeding Rs. 1,00,000/- in rural areas and urban areas. The maximum loan amount is Rs. 50,000/-. 50% of the amount is given as subsidy, subject to a maximum limit of Rs. 10,000/-. The banks interest rate ranges from 9.50% to 12.50%.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Employment',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 62.28,
      'beneficiaries': 624
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 47.24,
      'beneficiaries': 475
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 35.25,
      'beneficiaries': 353
    }
  ]
},   
 {
  'id': 2,
  'name': 'Margin Money Loan Scheme',
  'funding': 'State Government Schemes',
  'objective': 'The main object of the Corporation is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society. Also production of various types of Footwear & Leather Articles & supply to Government Departments & sale in Open Market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'The income limit of the beneficiary is same as per 50% subsidy scheme. Loan limit is from Rs. 50,001 to Rs. 5,00,000/-. There are two parts of this scheme based on loan amount: For loans between Rs. 50,001/- to Rs. 1,00,000/-, 25% loan will be given by Corporation @ 4% interest p.a., with a maximum subsidy of Rs. 10,000/-. 75% loan will be given by Bank @ 9.50% to 12.50% interest p.a. For loans between Rs. 1,00,001/- to Rs. 2,00,000/-, 20% of project cost as Seed Capital will be paid by Corporation @ 4% interest p.a., with a maximum subsidy of Rs. 10,000/-. The beneficiary contributes 5% of the project cost, and the remaining 75% of project cost is funded by the Bank. The loan amount must be repaid within 36 to 60 monthly installments.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Employment',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 107.07,
      'beneficiaries': 207
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 94.39,
      'beneficiaries': 169
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 93.84,
      'beneficiaries': 162
    }
  ]
},
 {
  'id': 3,
  'name': 'Training Scheme',
  'funding': 'State Government Schemes',
  'objective': 'The main object of the Corporation is to implement various schemes to uplift lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below poverty line and with an intention to develop them educationally, economically and socially so as to give them respectable place in Society. Also production of various types of Footwear & Leather Articles & supply to Government Departments & sale in Open Market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'The Training Scheme aims to enable students to start their own business, trade, or obtain a job. Training is provided in various trades such as Motor Driving, T.V./Video/Radio Repairing, Tailoring, Welding etc. for a period up to six months. Stipend and tuition fees are also paid by the Corporation to the training institute.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Education',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 17.54,
      'beneficiaries': 410
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 17.05,
      'beneficiaries': 207
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 10.13,
      'beneficiaries': 726
    }
  ]
},
   {
  'id': 4,
  'name': 'Gattai Stall',
  'funding': 'State Government Schemes',
  'objective': 'The main object of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'The scheme provides Gattai Tin Stalls for Roadside Cobblers, costing Rs. 16,367/- per stall along with Rs. 500/- for incidental charges, under a 100% subsidy scheme to eligible applicants from Gram Panchayats.',
  'application_process': 'Application form is available at District Social Welfare Office. Applicant must fill out the form and submit it to the District Social Welfare Office.',
  'category': 'Economic Upliftment',
  'contact_office': 'Assistant Commissioner, District Social Welfare Office',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 1655.29,
      'beneficiaries': 3636
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 0,
      'beneficiaries': 0
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 0,
      'beneficiaries': 0
    }
  ]
},
 {
  'id': 5,
  'name': 'Term Loan Scheme',
  'funding': 'Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)',
  'objective': 'The main object of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'The Term Loan Scheme of NSFDC provides loans ranging from Rs. 1,00,000/- to Rs. 2,50,000/- for various business purposes to beneficiaries of the Charmakar Community. NSFDC sanctions 75% of the Project Cost as Term Loan, Corporation provides 20% Seed Loan, Rs. 10,000/- as subsidy, and the remaining 5% is contributed by the beneficiary. Interest rates are charged at 7% p.a. by NSFDC and 4% p.a. by Corporation for loans up to Rs. 5,00,000/-. For loans above Rs. 5,00,000/-, NSFDC charges 8% p.a. interest.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Employment',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 1233.88,
      'beneficiaries': 700
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 648.04,
      'beneficiaries': 425
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 813.69,
      'beneficiaries': 470
    }
  ]
},
{
  'id': 6,
  'name': 'Micro Credit Finance',
  'funding': 'Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)',
  'objective': 'The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'Under this scheme, financial assistance ranging from Rs. 25,000/- to Rs. 50,000/- is provided to beneficiaries of the Charmakar Community. The rate of interest is 5% p.a. Rs. 10,000/- is given as subsidy and the remaining amount is provided as a loan.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Employment',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 415.75,
      'beneficiaries': 1663
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 258.25,
      'beneficiaries': 1033
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 75.25,
      'beneficiaries': 309
    }
  ]
},
{
  'id': 7,
  'name': 'Mahila Samridhi Yojana',
  'funding': 'Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)',
  'objective': 'The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'Under this scheme, Widows, Divorcees (such women are given priority), and all female beneficiaries of the Charmkar Community are provided loans ranging from Rs. 25,000/- to Rs. 50,000/-. The rate of interest is 4% p.a.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Employment',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 41.75,
      'beneficiaries': 167
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 81.50,
      'beneficiaries': 326
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 142.75,
      'beneficiaries': 571
    }
  ]
},
{
  'id': 8,
  'name': 'Mahila Kisan Yojana',
  'funding': 'Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)',
  'objective': 'The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for the loan.'
  ],
  'benefits_provided': 'Under this scheme, female beneficiaries of the Charmakar Community are provided with a loan of Rs. 50,000/-. Rs. 10,000/- is given as subsidy and the remaining Rs. 40,000/- is provided as a loan at the rate of 5% p.a. The loan is sanctioned for agricultural projects where the applicants name is in the 7/12 extract of land or in joint name with husband on 7/12 extract of land, or where the husbands name is on the 7/12 extract and he provides an affidavit to sanction the loan.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Employment',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 43.50,
      'beneficiaries': 87
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 27.20,
      'beneficiaries': 55
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 18.40,
      'beneficiaries': 38
    }
  ]
},
{
  'id': 9,
  'name': 'Education Loan Scheme',
  'funding': 'Central Government Schemes National Scheduled Castes Finance and Development Corporation, New Delhi (NSFDC)',
  'objective': 'The main objective of the Corporation is to implement various schemes to uplift the lifestyle of Charmakars (Dhor, Chambhar, Holar, Mochi etc.) who are economically weak and below the poverty line. The scheme aims to develop them educationally, economically, and socially to give them a respectable place in society. It also supports the production of various types of footwear and leather articles, supplying to government departments and sale in the open market.',
  'beneficiary_category': 'SC - Charmakar',
  'eligibility_criteria': [
    'Applicant must be of Charmakar Community only.',
    'Age Limit should be in between 18 to 50 years.',
    'For 50% Subsidy Scheme and Margin Money, Annual Income of the applicants must be below poverty line and for NSFDC Scheme, income for Rural area should be below Rs. 98,000/- and for Urban Rs. 1,20,000/-.',
    'Applicants must be permanent residents of Maharashtra State.',
    'He must produce the Income and Caste Certificate of Authorised Govt. Officer.',
    'Applicant must have knowledge of the business for which he has applied for loan.'
  ],
  'benefits_provided': 'Under this scheme, NSFDC, New Delhi has implemented an Education Loan scheme since 2009. Postgraduate students in India can avail loans up to Rs. 10,00,000/- and up to Rs. 20,00,000/- for studies abroad. The rate of interest is 4% p.a. for male beneficiaries and 3.5% p.a. for female beneficiaries.',
  'application_process': 'Application form is available at District Office of LIDCOM. Applicant must fill out the form and submit it to the District Office of LIDCOM.',
  'category': 'Education',
  'contact_office': 'List Enclosed.',
  'statistical_summary': [
    {
      'year': '2012-13',
      'expenditure_in_lakhs_INR': 7.62,
      'beneficiaries': 16
    },
    {
      'year': '2013-14',
      'expenditure_in_lakhs_INR': 50.66,
      'beneficiaries': 49
    },
    {
      'year': '2014-15',
      'expenditure_in_lakhs_INR': 50.97,
      'beneficiaries': '--'
    }
  ]
}
]
},
{
  id: 4,
  name: 'Maharashtra State backward Class Communication',
  subSchemes: [
    {
  'id': 1,
  'name': 'Sahityaratna Lokshahir Anna Bhau Sathe Development Corporation (Ltd), Mumbai',
  'details': {
    'name': 'Central / State Corporation scheme',
    'funding': 'Central State',
    'objective': 'With the main objective of raising the standard of living of member of the Matang Community & its 12 sub caste living below poverty line in Maharashtra State securing to them a place of respect in the main stream of society & assisting them in their educational ,economic & social redevelopment as well as to provide financial assistance that will necessary & useful for their upliftment.',
    'beneficiary': 'In Scheduled caste Matang community there are 12 Sub caste are as follows: Mang, Madari, Matang, Radhemang, Mini, Madig, Mang, Garudi, Mading, Dankhani, Mang, Madgi, Mang, Mahashi, Madiga',
    'eligibility': [
      'The applicant should be Domiciled resident of Maharashtra State.',
      'The applicant should have completed 18 years of age.',
      'The applicant should be a member of one of the 12 Sub-caste of the Matang Community.',
      'The applicant must have Knowledge & experience of the Occupation / Business selected by him.',
      'The limit of annual income of the applicants family in urban & rural areas should be Rs.1,00,000/-',
      'The applicant should not have availed of financial benefit from this corporation or from any other Govt. undertaking.',
      'Terms & conditions laid down by the corporation from time to time shall be binding on the applicant.'
    ],
    'benefits': 'Personal Loan Scheme',
    'application': 'Form Of application & the documents to be annexed there. Applicant’s caste certificate (Obtained from a competent Authority). Certificate of income of the applicant’s family (Obtained from the tahasildar). Two copies of passport size photos taken recently should be affixed to the application. In the case if an applicant wishing to avail of the scheme of the National Scheduled caste, financial Development Corporation, there copies of a recently taken passport Size photo should be affixed. Educational certificate of the applicant. Xerox copies of Ration Card. Evidence / proof of avail abilities of the promises where the business is to be carried on. Rent receipt, agreement or ownership proof in respect of the premise where the business to be carried on. Driving license & permit etc.from the R.T.O. for purchasing vehicles under the N.S.F.D.C.Scheme. Chart / list of rates of authorized Dealer / Company in respect of prices / booking for the purpose is to be carried on. Technical certificate of experience pertaining to the business. Project report of the goods / Quotations in respect of the goods and material to be purchased. Affidavit (on a stamp paper).',
    'category': 'Education / Employment / Economic Upliftment / Social Remedies',
    'contact': 'District Office of Corporation',
  }
}
  ]
},
{
  id: 5,
  name: 'Lokshahir Annabhau Sathe DEV.CO.LTD.',
  // icon: faGraduationCap,
  subSchemes: [
    {
  'id': 1,
  'name': 'Sahityaratna Lokshahir Anna Bhau Sathe Development Corporation (Ltd), Mumbai',
  'details': {
    'name': 'Central / State Corporation scheme',
    'funding': 'Central State',
    'objective': 'With the main objective of raising the standard of living of member of the Matang Community & its 12 sub caste living below poverty line in Maharashtra State securing to them a place of respect in the main stream of society & assisting them in their educational ,economic & social redevelopment as well as to provide financial assistance that will necessary & useful for their upliftment.',
    'beneficiary': 'In Scheduled caste Matang community there are 12 Sub caste are as follows: Mang, Madari, Matang, Radhemang, Mini, Madig, Mang, Garudi, Mading, Dankhani, Mang, Madgi, Mang, Mahashi, Madiga',
    'eligibility': [
      'The applicant should be Domiciled resident of Maharashtra State.',
      'The applicant should have completed 18 years of age.',
      'The applicant should be a member of one of the 12 Sub-caste of the Matang Community.',
      'The applicant must have Knowledge & experience of the Occupation / Business selected by him.',
      'The limit of annual income of the applicants family in urban & rural areas should be Rs.1,00,000/-',
      'The applicant should not have availed of financial benefit from this corporation or from any other Govt. undertaking.',
      'Terms & conditions laid down by the corporation from time to time shall be binding on the applicant.'
    ],
    'benefits': 'Personal Loan Scheme',
    'application': 'Form Of application & the documents to be annexed there. Applicant’s caste certificate (Obtained from a competent Authority). Certificate of income of the applicant’s family (Obtained from the tahasildar). Two copies of passport size photos taken recently should be affixed to the application. In the case if an applicant wishing to avail of the scheme of the National Scheduled caste, financial Development Corporation, there copies of a recently taken passport Size photo should be affixed. Educational certificate of the applicant. Xerox copies of Ration Card. Evidence / proof of avail abilities of the promises where the business is to be carried on. Rent receipt, agreement or ownership proof in respect of the premise where the business to be carried on. Driving license & permit etc.from the R.T.O. for purchasing vehicles under the N.S.F.D.C.Scheme. Chart / list of rates of authorized Dealer / Company in respect of prices / booking for the purpose is to be carried on. Technical certificate of experience pertaining to the business. Project report of the goods / Quotations in respect of the goods and material to be purchased. Affidavit (on a stamp paper).',
    'category': 'Education / Employment / Economic Upliftment / Social Remedies',
    'contact': 'District Office of Corporation',
  }
}
  ]
},


];
export   default schemes;