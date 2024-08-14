const offices = [
    {
        id: 1,
        name: 'Commissioner for Social Welfare Pune',
        subTopics: [
          {
            id: 21,
            name: 'About Us',
            details: {
              promotion: "The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation.",
              hostels: "Government Hostel: 374 ( Boys - 211 + Girls - 163 )",
              divisionHostels: "Hostels of 1000 capacity at division level: 7 ( 5 Working - Nagpur, Amravati, Nashik, Latur, Aurangabad + 2 work in Progress Pune & Mumbai )",
              aidedHostel: "Aided Hostel: 2388 (Boys 1938 + Girls 450)",
              newResonationSchool: "New Resonation School: 100 (79 Working + 21 Work in progress )",
              socialWorkColleges: "Social work colleges: 51",
              residentialSchool: "Residential School for children of sweepers: 02 (Pune and Nagpur out of which Pune is working)",
              scheduledAshramSchool: "Scheduled Ashram school: 19 ( Primary 10+Secondary 9 )",
              iti: "ITI at division level: 06 ( 4 Working – Nagpur, Amravati, Nashik, Aurangabad + 2 work in Progress Pune & Mumbai )",
              dalitVasti: "Dalit Vasti: 37558",
              ambedkar: "Dr. Babasaheb Ambedkar : 34 ( 24 Completed, 8 Work in )",
              oldAgeHome: "Matoshri old age home : 31",
              aidedOldAgeHome: "Aided Old Age Home : 39",
              spinningMills: "Spinning Mills with long term loan : 13",
              coOperativeSociety: "Scheduled caste co-operative society : 372",
            }
          },      
          { id: 22, name: 'Commissioner' },
          {
            id: 23,
            name: 'Schemes',
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
            ]
          },          { id: 24, name: 'Contact Us', contacts: [{ id: 241, name: 'Contact Person 1', email: 'contact1@example.com', phone: '123-456-7890' }, { id: 242, name: 'Contact Person 2', email: 'contact2@example.com', phone: '234-567-8901' }, { id: 243, name: 'Contact Person 3', email: 'contact3@example.com', phone: '345-678-9012' }] },
          { id: 25, name: 'Samayojan List' },
          { id: 26, name: 'Important Letters' }
        ]
      },
      {
        id: 2,
        name: 'Commissioner for Persons With Disability',
        subTopics: [
          { id: 21, name: 'About Us' },
          { id: 22, name: 'Commissioner' },
          {
            id: 23,
            name: 'Schemes',
            subSchemes: [
              { id: 231, name: 'Sub Scheme 5', details: { funding: 'Government Fund', objective: 'To promote ppp', beneficiary: 'Students', eligibility: ['Age below 18', 'Resident of the state'], benefits: 'Scholarship', application: 'Online application form', category: 'Education', contact: 'educationdepartment@example.com', applicationForm: 'Link to application form', applicationAcceptancePeriod: '1st January - 31st March' } },
              { id: 232, name: 'Sub Scheme 6', details: { funding: 'Government Fund', objective: 'To promote pppt', beneficiary: 'Youth', eligibility: ['Age below 25', 'Resident of the state'], benefits: 'Skill development', application: 'Online application form', category: 'Employment', contact: 'employmentdepartment@example.com', applicationForm: 'Link to application form', applicationAcceptancePeriod: '1st February - 30th April' } },
              { id: 233, name: 'Sub Scheme 7', details: { funding: 'Government Fund', objective: 'To provide kkk', beneficiary: 'Underprivileged', eligibility: ['Income below poverty line', 'Resident of the state'], benefits: 'Healthcare services', application: 'Online application form', category: 'Healthcare', contact: 'healthdepartment@example.com', applicationForm: 'Link to application form', applicationAcceptancePeriod: '1st March - 31st May' } },
              // Add more sub-schemes as needed
            ]
          },
          { id: 24, name: 'Contact Us', contacts: [
                                                    { id: 241, name: 'Contact Person 1', email: 'contact1@example.com', phone: '123-456-7890' },
                                                   { id: 242, name: 'Contact Person 2', email: 'contact2@example.com', phone: '234-567-8901' }, 
                                                   { id: 243, name: 'Contact Person 3', email: 'contact3@example.com', phone: '345-678-9012' },
                                                   { id: 241, name: 'Contact Person 1', email: 'contact1@example.com', phone: '123-456-7890' },
                                                   { id: 242, name: 'Contact Person 2', email: 'contact2@example.com', phone: '234-567-8901' }, 
                                                   { id: 243, name: 'Contact Person 3', email: 'contact3@example.com', phone: '345-678-9012' }
                                                  
                                                  ] },
          { id: 25, name: 'Samayojan List' },
          { id: 26, name: 'Important Letters' }
        ]
      },
  {
    id: 3,
    name: 'Dr. Babasaheb Ambedkar Research & Training Institute, Pune',
    subTopics: []
  },
  {
    id: 4,
    name: 'Maharashtra State Backward Class Commission - Pune',
    subTopics: []
  },
  {
    id: 5,
    name: 'Maharashtra State Commission for SC & ST',
    subTopics: []
  }
];
