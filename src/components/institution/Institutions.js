

// export default Institutions;
import React, { useState } from 'react';
import AshramshalaTable from './AshramshalaTable';
import VJNTAshramSchool from './VJNTAshramSchool';
import ResidentialSchool from './ResidentialSchool';
import Hostel from './Hostel';
import PWD from './PWD';
import PageHeading from '../Global/PageHeading';

const districts = {
  "SC Ashram School": ["उस्मानाबाद जिल्हा", "बीड जिल्हा", "नांदेड जिल्हा"],
  "VJNT Ashram School": ["अ. नगर जिल्हा"],
  "Amravati Division": ["लातुर जिल्हा", "परभणी जिल्हा"],
  "Residential School Type 2": ["सोलापुर जिल्हा"],
  "Government Hostel": ["Amravati Dist", "बीड जिल्हा"],
  "Government Aided Hostel": ["नांदेड जिल्हा"],
  "PWD Type 1": ["लातुर जिल्हा"],
  "PWD Type 2": ["परभणी जिल्हा"],
};

const Sc_osmanabadData = [
  {
    name: 'संत गाडगेबाबा माध्यमिक अनु.जाती आश्रमशाळा, तुळजापुर. जि. उस्मानाबाद.',
    udais: '27290711140',
    sscCode: '59.07.078',
    contact: 'koretukaram@gmail.com, Mo. 9860910449',
    aadharCount: 85,
    approvedCount: 120,
    enrolledCount: 105,
    firstGrade: 0,
    secondGrade: 0,
    thirdGrade: 0,
    fourthGrade: 0,
    fifthGrade: 0,
    sixthGrade: 0,
    seventhGrade: 0,
    eighthGrade: 26,
    ninthGrade: 41,
    tenthGrade: 30,
    total: 105,
  },
  {
    name: 'संत गाडगेबाबा प्राथमिक अनु.जाती आश्रमशाळा, तुळजापुर. जि. उस्मानाबाद.',
    udais: '27290711129',
    sscCode: '',
    contact: 'ashiksawant.1973@gmail.com, अशोक सावंत : 9960163892',
    aadharCount: 89,
    approvedCount: 140,
    enrolledCount: 117,
    firstGrade: 5,
    secondGrade: 19,
    thirdGrade: 18,
    fourthGrade: 20,
    fifthGrade: 21,
    sixthGrade: 17,
    seventhGrade: 17,
    eighthGrade: 0,
    ninthGrade: 0,
    tenthGrade: 0,
    total: 117,
  },
];
const Sc_beed = [
  {
    name: 'श्री. छत्रपती शाहु माध्यमिक अनु.जाती इाश्रमशाळा बर्दापुर, ता. अंबाजागाई, जि. बीड',
    udais: '27270109409',
    sscCode: '5706065',
    contact: 'bansodesad@gmail.com, Mo. 9637817117',
    aadharCount: 135,
    approvedCount: 120,
    enrolledCount: 146,
    firstGrade: 44,
    secondGrade: 45,
    thirdGrade: 55,
    fourthGrade: 0,
    fifthGrade: 0,
    sixthGrade: 0,
    seventhGrade: 0,
    eighthGrade: 0,
    ninthGrade: 0,
    tenthGrade: 0,
    total: 144,
  },
  {
    name: 'वसुंधरा माध्यमिक अनु. जाती आश्रमशाळा केज, ता. केज, जि. बीड',
    udais: '27270600143',
    sscCode: '5707080',
    contact: 'sureshnande9@gmail.com, Mo. 9881352111',
    aadharCount: 43,
    approvedCount: 120,
    enrolledCount: 141,
    firstGrade: 44,
    secondGrade: 42,
    thirdGrade: 55,
    fourthGrade: 0,
    fifthGrade: 0,
    sixthGrade: 0,
    seventhGrade: 0,
    eighthGrade: 0,
    ninthGrade: 0,
    tenthGrade: 0,
    total: 141,
  },
  {
    name: 'वसुंधरा प्राथमिक अनु. जाती आश्रमशाळा केज, ता. केज, जि. बीड',
    udais: '27270600116',
    sscCode: '',
    contact: 'sureshnande9@gmail.com, Mo. 9881352111',
    aadharCount: 47,
    approvedCount: 140,
    enrolledCount: 191,
    firstGrade: 21,
    secondGrade: 30,
    thirdGrade: 29,
    fourthGrade: 36,
    fifthGrade: 25,
    sixthGrade: 30,
    seventhGrade: 27,
    eighthGrade: 0,
    ninthGrade: 0,
    tenthGrade: 0,
    total: 191,
  },
  {
    name: 'श्री. छत्रपती शाहु प्राथमिक अनु.जाती आश्रमशाळा बर्दापुर, ता. अंबाजागाई, जि. बीङ',
    udais: '27270109405',
    sscCode: '',
    contact: 'Mo. 9637817117',
    aadharCount: 112,
    approvedCount: 140,
    enrolledCount: 157,
    firstGrade: 8,
    secondGrade: 11,
    thirdGrade: 16,
    fourthGrade: 29,
    fifthGrade: 31,
    sixthGrade: 34,
    seventhGrade: 28,
    eighthGrade: 0,
    ninthGrade: 0,
    tenthGrade: 0,
    total: 157,
  },
  {
    name: 'एकूण विद्यार्थी',
    udais: '',
    sscCode: '',
    contact: '',
    aadharCount: 2179,
    approvedCount: 2560,
    enrolledCount: 3073,
    firstGrade: 147,
    secondGrade: 202,
    thirdGrade: 235,
    fourthGrade: 281,
    fifthGrade: 298,
    sixthGrade: 327,
    seventhGrade: 344,
    eighthGrade: 88,
    ninthGrade: 87,
    tenthGrade: 110,
    total: 3072,
  },
];
const Sc_nanded = [
  {
    आश्रमशाळेचे_नाव: "माध्यमिक अनु. जाती आश्रमशाळा, मुगट, ता. मुदखेड, जि. नांदेड",
    युडायस_क्र: "27150305904",
    एसएससी_कोड_क्र: "58.14.016",
    मुख्याध्यापकांचा_दुरध्वनी: "देवे : 9975753469",
    आधारकार्ड_काढण्यात_आलेल्या_विद्यार्थ्याची_संख्या: 30,
    विद्यार्थी_मान्य_संख्या: 120,
    प्रवेशित_विद्या_संख्या: 188,
    "1_ली": 69,
    "2_री": 68,
    "3_री": 51,
    "4_थी": 188,
    "5_वी": 0,
    "6_वी": 0,
    "7_वी": 0,
    "8_वी": 0,
    "9_वी": 0,
    "10_वी": 0,
    एकुण: 188
  },
  {
    आश्रमशाळेचे_नाव: "मातोश्री अनुसुयाबाई शंकरराव घोलप प्राथमिक अनु. जाती आश्रमशाळा, बहादरपुरा, ता. कंधार, जि. नांदेड",
    युडायस_क्र: "27150500603",
    एसएससी_कोड_क्र: "",
    मुख्याध्यापकांचा_दुरध्वनी: "8421291532",
    आधारकार्ड_काढण्यात_आलेल्या_विद्यार्थ्याची_संख्या: 103,
    विद्यार्थी_मान्य_संख्या: 140,
    प्रवेशित_विद्या_संख्या: 148,
    "1_ली": 12,
    "2_री": 15,
    "3_री": 15,
    "4_थी": 17,
    "5_वी": 26,
    "6_वी": 33,
    "7_वी": 30,
    "8_वी": 0,
    "9_वी": 0,
    "10_वी": 0,
    एकुण: 148
  },
  {
    आश्रमशाळेचे_नाव: "प्राथमिक अनु.जाती आश्रमशाळा, मुगट, ता. मुदखेड, जि. नांदेड",
    युडायस_क्र: "27150305901",
    एसएससी_कोड_क्र: "",
    मुख्याध्यापकांचा_दुरध्वनी: "dayanandmore@gmail.com",
    आधारकार्ड_काढण्यात_आलेल्या_विद्यार्थ्याची_संख्या: 102,
    विद्यार्थी_मान्य_संख्या: 140,
    प्रवेशित_विद्या_संख्या: 155,
    "1_ली": 4,
    "2_री": 13,
    "3_री": 13,
    "4_थी": 21,
    "5_वी": 30,
    "6_वी": 34,
    "7_वी": 41,
    "8_वी": 0,
    "9_वी": 0,
    "10_वी": 0,
    एकुण: 156
  },
  {
    आश्रमशाळेचे_नाव: "मातोश्री अनुसुयाबाई शंकरराव घोलप प्राथमिक अनु. जाती आश्रमशाळा, बहादरपुरा, ता. कंधार, जि. नांदेड",
    युडायस_क्र: "27150500607",
    एसएससी_कोड_क्र: "58.09.055",
    मुख्याध्यापकांचा_दुरध्वनी: "9689242456",
    आधारकार्ड_काढण्यात_आलेल्या_विद्यार्थ्याची_संख्या: 105,
    विद्यार्थी_मान्य_संख्या: 140,
    प्रवेशित_विद्या_संख्या: 119,
    "1_ली": 38,
    "2_री": 41,
    "3_री": 40,
    "4_थी": 119,
    "5_वी": 0,
    "6_वी": 0,
    "7_वी": 0,
    "8_वी": 0,
    "9_वी": 0,
    "10_वी": 0,
    एकुण: 119
  }
];

const vjnt_Nagar = [
  { 'अ.क्र': 1, 'जिल्हा': 'अ. नगर', 'तालुका': 'अ. नगर', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा बु-हाणनगर', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 2, 'जिल्हा': 'अ. नगर', 'तालुका': 'अ. नगर', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा टाकळीकाझी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 3, 'जिल्हा': 'अ. नगर', 'तालुका': 'अ. नगर', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा बारादरी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 4, 'जिल्हा': 'अ. नगर', 'तालुका': 'अ. नगर', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा पांगरमल', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 5, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा माणिकदौंडी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 6, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा आल्हणवाडी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 7, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'माध्य.आश्रमशाळा आल्हणवाडी', 'कार्यरत वर्ग': '8 ते 10', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 8, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'उच्च माध्यमिक आश्रमशाळा आल्हणवाडी ता.पाथर्डी', 'कार्यरत वर्ग': '11 ते 12', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 9, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा शेकटे', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 10, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'माध्य. आश्रमशाळा शेकटे', 'कार्यरत वर्ग': '8 ते 10', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 11, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'विजाभज कनिष्ठ महाविदयालय शेकटे ता.पाथर्डी जि.अहमदनगर', 'कार्यरत वर्ग': '', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 12, 'जिल्हा': 'अ. नगर', 'तालुका': 'पाथर्डी', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा मढी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 13, 'जिल्हा': 'अ. नगर', 'तालुका': 'शेवगांव', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा मंगरुळ', 'कार्यरत वर्ग': '1 ते 4', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 14, 'जिल्हा': 'अ. नगर', 'तालुका': 'शेवगांव', 'शाळेचे नाव व ठिकाण': 'माध्य. आश्रमशाळा मंगरुळ', 'कार्यरत वर्ग': '5 ते 10', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 15, 'जिल्हा': 'अ. नगर', 'तालुका': 'शेवगांव', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा कोणोशी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 16, 'जिल्हा': 'अ. नगर', 'तालुका': 'नेवासा', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा भानसहिवरे', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 17, 'जिल्हा': 'अ. नगर', 'तालुका': 'राहुरी', 'शाळेचे नाव व ठिकाण': 'प्राथ. आश्रमशाळा वरवंडी', 'कार्यरत वर्ग': '1 ते 7', 'पुरुष अधिक्षकाचे नाव': '' },
  { 'अ.क्र': 18, 'जिल्हा': 'अ. नगर', 'तालुका': 'राहुरी', 'शाळेचे नाव व ठिकाण': 'माध्य. आश्रमशाळा वरवंडी', 'कार्यरत वर्ग': '8 ते 10', 'पुरुष अधिक्षकाचे नाव': '' }
];

const residential_Latur = [
  // ...data
];
const residential_Parbhani = [
  // ...data
];
const hostel_amt = [
  {
    district: 'Ahmadnagar',
    code: 126863,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Shrigonda',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126864,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Shevgoan',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126865,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Sangamner',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126866,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Zamkhed',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126867,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Pathrdi',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126868,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Ahmadnagar',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126869,
    name: 'Dr.Babasaheb Ambedkar,Backward Class Boys Government Hostel Shrirampur',
    boysOrGirls: 'Boys',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 60,
    totalAdmitted1516: 60
  },
  {
    district: 'Ahmadnagar',
    code: 126870,
    name: 'Sant Sakhubai Backward Class Girls Hostel, Ahmadnagar',
    boysOrGirls: 'Girls',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126871,
    name: 'Backward Class Girls Government Hostel Kopargoan',
    boysOrGirls: 'Girls',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 70,
    totalAdmitted1516: 70
  },
  {
    district: 'Ahmadnagar',
    code: 126872,
    name: 'Backward Class and economically Backward Class Girls Government Hostel Parner',
    boysOrGirls: 'Girls',
    sanctionedStrength: 80,
    applicationsReceived: '',
    admissionsIn1516: 80,
    totalAdmitted1516: 80
  },
  {
    district: 'Ahmadnagar',
    code: 126873,
    name: 'Backward Class and economically Backward Class Girls Government Hostel Nevasa',
    boysOrGirls: 'Girls',
    sanctionedStrength: 80,
    applicationsReceived: '',
    admissionsIn1516: 110,
    totalAdmitted1516: 110
  },
  {
    district: 'Ahmadnagar',
    code: 126874,
    name: 'Backward Class and economically Backward Class Girls Government Hostel Karjat',
    boysOrGirls: 'Girls',
    sanctionedStrength: 75,
    applicationsReceived: '',
    admissionsIn1516: 75,
    totalAdmitted1516: 75
  },
  {
    district: 'Ahmadnagar',
    code: 126875,
    name: 'Backward Class Boys Government hostel Loni Tal. Rahata Dist Nagar',
    boysOrGirls: 'Boys',
    sanctionedStrength: 100,
    applicationsReceived: '',
    admissionsIn1516: 50,
    totalAdmitted1516: 50
  },
  {
    district: 'Ahmadnagar',
    code: 126876,
    name: 'Backward Class Boys Government Hostel Karjat Tal Karjat',
    boysOrGirls: 'Boys',
    sanctionedStrength: 100,
    applicationsReceived: '',
    admissionsIn1516: 100,
    totalAdmitted1516: 100
  },
  {
    district: 'Ahmadnagar',
    code: 126877,
    name: 'Backward Class Girls Government Hostel Zamkhed',
    boysOrGirls: 'Girls',
    sanctionedStrength: 100,
    applicationsReceived: '',
    admissionsIn1516: 95,
    totalAdmitted1516: 95
  },
  {
    district: 'Ahmadnagar',
    code: 126878,
    name: 'Backward Class Girls Government Hostel Shrigonda Dist Ahmadnagar',
    boysOrGirls: 'Girls',
    sanctionedStrength: 100,
    applicationsReceived: '',
    admissionsIn1516: 100,
    totalAdmitted1516: 100
  },
  // Add more hostels as needed
];const hostel_Beed = [
  // ...data
];
const pwd_Latur = [
  // ...data
];
const pwd_Parbhani = [
  // ...data
];

const schools = {
  "Ashram Schools": ["SC Ashram School", "VJNT Ashram School"],
  "Residential Schools": ["Amravati Division", "Residential School Type 2"],
  "Hostel": ["Government Hostel", "Government Aided Hostel"],
  "PWD": ["PWD Type 1", "PWD Type 2"],
};

const Institutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedType('');
    setSelectedDistrict('');
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const renderTable = () => {
    if (selectedCategory === 'Ashram Schools' && selectedType === 'SC Ashram School') {
      switch (selectedDistrict) {
        case 'उस्मानाबाद जिल्हा':
          return <AshramshalaTable data={Sc_osmanabadData}/>;
        case 'बीड जिल्हा':
          return <AshramshalaTable data={Sc_beed}/>;
        case 'नांदेड जिल्हा':
          return <AshramshalaTable data={Sc_nanded}/>;
        default:
          return null;
      }
    } else if (selectedCategory === 'Ashram Schools' && selectedType === 'VJNT Ashram School') {
      switch (selectedDistrict) {
        case 'अ. नगर जिल्हा':
          return <VJNTAshramSchool data={vjnt_Nagar} />;
        default:
          return null;
      }
    } else if (selectedCategory === 'Residential Schools' && selectedType === 'Amravati Division') {
      switch (selectedDistrict) {
        case 'लातुर जिल्हा':
          return <ResidentialSchool data={residential_Latur} />;
        case 'परभणी जिल्हा':
          return <ResidentialSchool data={residential_Parbhani} />;
        default:
          return null;
      }
    } else if (selectedCategory === 'Residential Schools' && selectedType === 'Residential School Type 2') {
      switch (selectedDistrict) {
        case 'सोलापुर जिल्हा':
          // return <ResidentialSchool data={residential_Solapur} />;
        default:
          return null;
      }
    } else if (selectedCategory === 'Hostel' && selectedType === 'Government Hostel') {
      switch (selectedDistrict) {
        case 'Amravati Dist':
          return <Hostel data={hostel_amt} />;
        case 'बीड जिल्हा':
          return <Hostel data={hostel_Beed} />;
        default:
          return null;
      }
    } else if (selectedCategory === 'Hostel' && selectedType === 'Government Aided Hostel') {
      switch (selectedDistrict) {
        case 'नांदेड जिल्हा':
          return <Hostel data={hostel_amt} />;
        default:
          return null;
      }
    } else if (selectedCategory === 'PWD' && selectedType === 'PWD Type 1') {
      switch (selectedDistrict) {
        case 'लातुर जिल्हा':
          return <PWD data={pwd_Latur} />;
        default:
          return null;
      }
    } else if (selectedCategory === 'PWD' && selectedType === 'PWD Type 2') {
      switch (selectedDistrict) {
        case 'परभणी जिल्हा':
          return <PWD data={pwd_Parbhani} />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div>
            <PageHeading heading='Institutions'/>



      <div className='row d-flex'>
        <div className='col-lg-2'>
          <div className='sidebar'> 
          <div className="c ">  
        <div >
          <label>
            INSTITUTIONS:
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Select </option>
              {Object.keys(schools).map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>
        </div>

        {selectedCategory && (
          <div className="select-container">
            <label>
              Type:
              <select value={selectedType} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                {schools[selectedCategory].map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        {selectedType && (
          <div className="select-container">
            <label>
              District:
              <select value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="">Select District</option>
                {districts[selectedType].map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </label>
          </div>
        )}
      </div>

      {selectedDistrict && (
        <div>
          <button onClick={() => console.log(`Searching for ${selectedCategory} - ${selectedType} in ${selectedDistrict}`)}>
            Search
          </button>
        </div>
      )}


          </div>

        </div>
          <div className='col-lg-8'>
            <div className='main-conten'> 
            {renderTable()}


            </div>

          </div>
      </div>


    </div>
  );
};

export default Institutions;
