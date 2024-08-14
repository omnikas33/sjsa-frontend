import React, { useState } from 'react';
import '../CSS/ContactUs.css';
import PageHeading from '../Global/PageHeading';
import ContactUsIcon from '../icons/mobile.png'

const contactData = {
  commissioner: [
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
    { srNo: 13, name: "Shri Dongre", designation: "Asst. Commissioner (Co-operation)", number: "26120560", email: "comm.socwelfare@maharashtra.gov.in" },  ],
  pwd: [
    {
      srNo: 1,
      जिल्हा: "मुंबई",
      designation: "प्रादेजिक उपाय¸क्त समाजकल्याण जवभाग, मुंबई",
      name: "श्रीमती वुंदना कोचरे",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9623173931"],
      email: "rdcswomumbai@gmail.com"
  },
  {
      srNo: 2,
      जिल्हा: "मुंबई",
      designation: "सहाय्यक आयक्त समाजकल्याण मुंबई शहर",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री.प्रसाद खैरनार",
      number: ["8793368691"],
      email: "mumbaicityspldswo@yahoo.com"
  },
  {
      srNo: 3,
      जिल्हा: "मुंबई",
      designation: "उपआयुक्त जात पडताळणी समिती, मुंबई शहर",
      name: "श्रीमती सजलमा तडवी",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: "mumbaicvc1@yahoo.com"
  },
  {
      srNo: 4,
      जिल्हा: "मुंबई",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, मुंबई शहर",
      name: "श्रीमती सुनीता मते",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: "mumbaicvc1@yahoo.com"
  },
   {
      srNo: 5,
      जिल्हा: "मुंबई",
      designation: "जिल्हा दिव्यांग पुनर्वसन अधिकारी, विरार",
      name: "श्री. नितीन ढगे",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9850301855"],
      email: "drcvirar@gmail.com"
  },
  {
      srNo: 6,
      जिल्हा: "मुंबई उपनगर",
      designation: "सहाय्यक आयुक्त समाज कल्याण मुंबई उपनगर",
      name: "श्री.प्रसाद खैरनार",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["8793368691"],
      email: "spldswo_mumsub@yahoo.co.in"
  },
  {
      srNo: 7,
      जिल्हा: "मुंबई उपनगर",
      designation: "उपआयुक्त जात पडताळणी समिती, मुंबई उपनगर",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्रीमती वंदना कोचुरे",
      number: ["9623173931"],
      email: "roccv3@gmail.com"
  },
  {
      srNo: 8,
      जिल्हा: "मुंबई उपनगर",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, मुंबई उपनगर",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. विलास परब - वर्ग 2",
      number: [" "],
      email: "roccv3@gmail.com"
  },
  {
      srNo: 9,
      जिल्हा: "ठाणे",
      designation: "सहाय्यक आयुक्त समाज कल्याण ठाणे",
      name: "श्री. समाधान इंगळे",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["8669184130"],
      email: "acswothane@gmail.com"
  },
  {
      srNo: 10,
      जिल्हा: "ठाणे",
      designation: "जिल्हा समाज कल्याण अधिकारी जि. प. ठाणे",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री.संजय बागुल (स्थानिक व्यवस्था)",
      number: ["9967282382"],
      email: ["swdzpthane@gmail.com", "dswozpthane@gmail.com"]
  },
  {
      srNo: 11,
      जिल्हा: "ठाणे",
      designation: "उपआयुक्त जात पडताळणी समिती, ठाणे",
      name: "श्रीमती प्राची वाजे",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: ["thanecvc@gmail.com"]
  },
  {
      srNo: 12,
      जिल्हा: "ठाणे",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, ठाणे",
      name: "श्रीमती उज्जज्जवला सपकाळ",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: ["thanecvc@gmail.com"]
  },
  {
      srNo: 13,
      जिल्हा: "पालघर",
      designation: "सहाय्यक आयुक्त समाज कल्याण, पालघर",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. समाधान इंगळे",
      number: ["8669184130"],
      email: "acswopalghar@gmail.com"
  },
  {
      srNo: 14,
      जिल्हा: "पालघर",
      designation: "जिल्हा समाज कल्याण अधिकारी जि. प. पालघर",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. प्रवीण भावसार (स्थानिक व्यवस्था)",
      number: [" "],
      email: "swdzppalghar@gmail.com"
  },
  {
      srNo: 15,
      जिल्हा: "पालघर",
      designation: "उपआयुक्त जात पडताळणी समिती, पालघर",
      name: "श्री.विशाल नाईक",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: "palgharcvc@gmail.com"
  },
  {
      srNo: 16,
      जिल्हा: "पालघर",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, पालघर",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. समाधान इंगळे",
      number: ["8669184130"],
      email: "palgharcvc@gmail.com"
  },
  {
      srNo: 17,
      जिल्हा: "रायगड",
      designation: "सहाय्यक आयुक्त समाज कल्याण, रायगड",
      name: "श्री.सुनील .ए. जाधव",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9673005204", "9607110100"],
      email: "socialwelfareraigads@yahoo.com"
  },
  {
      srNo: 18,
      जिल्हा: "रायगड",
      designation: "जिल्हा समाज कल्याण अधिकारी जि. प. रायगड",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. शामराव कदम (स्थानिक व्यवस्था)",
      number: [" "],
      email: "raigadswo@yahoo.in"
  },
  {
      srNo: 19,
      जिल्हा: "रायगड",
      designation: "उपआयुक्त जात पडताळणी समिती, रायगड",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री.विशाल नाईक",
      number: [" "],
      email: "dcsc.raigad@gmail.com"
  },
  {
      srNo: 20,
      जिल्हा: "रायगड",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, रायगड",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री.सुनील .ए. जाधव",
      number: ["9673005204", "9607110100"],
      email: "dcsc.raigad@gmail.com"
  },
  {
      srNo: 21,
      जिल्हा: "रत्नागिरी",
      designation: "सहाय्यक आयुक्त समाज कल्याण, रत्नागिरी",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. संतोष चिकणे वर्ग - 2",
      number: ["9518367475"],
      email: "acsworatnagiri@gmail.com"
  },
  {
      srNo: 22,
      जिल्हा: "रत्नागिरी",
      designation: "जिल्हा समाज कल्याण अधिकारी जि. प. रत्नागिरी",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. जे. पी. जाधव (स्थानिक व्यवस्था)",
      number: ["8275455574"],
      email: "swozprtn@yohoo.in"
  },
  {
      srNo: 23,
      जिल्हा: "रत्नागिरी",
      designation: "उपआयुक्त जात पडताळणी समिती, रत्नागिरी",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. उमेश घुले",
      number: ["9422537704"],
      email: "ratnagiricommittee@gmail.com"
  },
  {
      srNo: 24,
      जिल्हा: "रत्नागिरी",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, रत्नागिरी",
      name: "श्री. संतोष चिकणे वर्ग - 2",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9518367475"],
      email: "ratnagiricommittee@gmail.com"
  },
  {
      srNo: 25,
      जिल्हा: "सिंधुदुर्ग",
      designation: "सहाय्यक आयुक्त समाज कल्याण, सिंधुदुर्ग",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. संतोष चिकणे वर्ग - 2",
      number: ["9518367475"],
      email: "acssindhu1501@gmail.com"
  },
  {
      srNo: 26,
      जिल्हा: "सिंधुदुर्ग",
      designation: "जिल्हा समाज कल्याण अधिकारी जि. प. सिंधुदुर्ग",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. विनायक ठाकूर (स्थानिक व्यवस्था)",
      number: [" "],
      email: "swozpsindhudurga@gmail.com"
  },
  {
      srNo: 27,
      जिल्हा: "सिंधुदुर्ग",
      designation: "उपआयुक्त जात पडताळणी समिती, सिंधुदुर्ग",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. उमेश घुले",
      number: ["9422537704"],
      email: "sindhudurgcommittee@gmail.com"
  },
  {
      srNo: 28,
      जिल्हा: "सिंधुदुर्ग",
      designation: "संशोधन अधिकारी जात पडताळणी समिती, सिंधुदुर्ग",
      name: "रिक्त",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: "श्री. सचिन साळे",
      number: ["7972221721"],
      email: "sindhudurgcommittee@gmail.com"
  },
  {
      srNo: 29,
      जिल्हा: "पुणे - आयुक्तालय स्तर",
      designation: "सहआयुक्त (अजाउयो)",
      name: "श्री. सुरेंद्र पवार",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9423401154"],
      email: "sakalyanpunescsp@gmail.com"
  },
  {
      srNo: 30,
      जिल्हा: "पुणे - आयुक्तालय स्तर",
      designation: "सहआयुक्त (शिक्षण)",
      name: "श्री. पी.बी. जाधव",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9423375292"],
      email: "sakalyangovthostel@gmail.com"
  },
  {
      srNo: 31,
      जिल्हा: "पुणे - आयुक्तालय स्तर",
      designation: "सहसंचालक (इतर मागास बहुजन कल्याण संचालनालय)",
      name: "श्रीमती छाया गाडेकर",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: "dvjntobcsbcwpune@gmail.com"
  },
  {
      srNo: 32,
      जिल्हा: "पुणे - आयुक्तालय स्तर",
      designation: "सदस्य सचिव राज्य मागासवर्ग आयोग, पुणे",
      name: "श्रीमती आशालता पाटील (प्रतिनियुक्त)",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: [" "],
      email: "msbccpune@gmail.com"
  },
  {
      srNo: 33,
      जिल्हा: "पुणे - आयुक्तालय स्तर",
      designation: "उपआयुक्त (प्रशासन)",
      name: "श्री. प्रशांत चव्हाण",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["8999690440"],
      email: "sakalyanpuneest@gmail.com"
  },
  {
      srNo: 34,
      जिल्हा: "पुणे - आयुक्तालय स्तर",
      designation: "उपआयुक्त (शिक्षण)",
      name: "श्री. भारत केंद्रे",
      रिक्त_पदाचा_अतिरिक्त_कार्यभार_सोपविलेल्या_अधिकाऱ्याचे_नाव: " ",
      number: ["9921590111"],
      email: "sakalyangovthostel@gmail.com"
  },
  ],
  dyCommissioners: [
    { srNo: 1, name: "Shri. B A Solanki", division: "Pune", stdCode: "020", officeNumber: "29702310", email: "dswopu@yahoo.comdswopu@gmail.com" },
    { srNo: 2, name: "Smt. Vandana Kochure", division: "Mumbai", stdCode: "022", officeNumber: "27575979", email: "dswomdiv@yahoo.in" },
    { srNo: 3, name: "Shri. Bhawan Veer", division: "Nashik", stdCode: "0253", officeNumber: "2236048/2236089", email: "dswonashik@gmail.com" },
    { srNo: 4, name: "Shri. Jalil Shaikh", division: "Aurangabad", stdCode: "0240", officeNumber: "2331538", email: "dswaurangabad@yahoo.com" },
    { srNo: 5, name: "Shri. Sunil Ware", division: "Amravati", stdCode: "0721", officeNumber: "2550687", email: "dswoamravati@gmail.com" },
    { srNo: 6, name: "Shri. Avinash Devsatwar", division: "Latur", stdCode: "02382", officeNumber: "255378", email: "dswoltr@gmail.com" },
    { srNo: 7, name: "Shri. Siddarth Gaikwad", division: "Nagpur", stdCode: "0712", officeNumber: "2222249", email: "rdycomsj.nagpur@gmail.com" }
    ],
  district: [
    { srNo: 1, district: "Mumbai City", name: "Shri. Prasad Khairnar (add)", stdCode: "022", officeNumber: "25275073", email: "spldswo_mumsub@yahoo.co.in" },
    { srNo: 2, district: "Mumbai Suburban", name: "Shri. Prasad Khairnar", stdCode: "022", officeNumber: "25222023", email: "spldswo_mumsub@yahoo.co.in" },
    { srNo: 3, district: "Thane", name: "Shri Samadhan Ingle (add)", stdCode: "022", officeNumber: "25341359", email: "spdswot@gmail.com" },
    { srNo: 4, district: "Palghar", name: "Shri Samadhan Ingle (add)", stdCode: "022", officeNumber: "25341359", email: "spdswot@gmail.com" },
    { srNo: 5, district: "Raigad", name: "Shri Sunil Jadhav", stdCode: "02141", officeNumber: "222288", email: "socialwelfareraigads@yahoo.com" },
    { srNo: 6, district: "Ratnagiri", name: "Shri Santosh Chikne", stdCode: "02352", officeNumber: "230957", email: "acsworatnagiri@gmail.com" },
    { srNo: 7, district: "Sindhudurg", name: "Shri Sachin Shale (add)", stdCode: "02362", officeNumber: "228882", email: "spswo-sindhudurg@mhsj.gov.in" },
    { srNo: 8, district: "Nashik", name: "Shri Sundarsingh Vasave", stdCode: "0253", officeNumber: "2975800", email: "dswonashik@gmail.com" },
    { srNo: 9, district: "Dhule", name: "Shri Yogesh Patil", stdCode: "02562", officeNumber: "278812", email: "s.d.s.w.o.dhule@gmail.com" },
    { srNo: 10, district: "Nandurbar", name: "Shri Devidas Nandgaonkar", stdCode: "02564", officeNumber: "210025", email: "sdswo_ndr@yahoo.in" },
    { srNo: 11, district: "Jalgaon", name: "Shri Yogesh Patil", stdCode: "0257", officeNumber: "2263328", email: "dswojalgaon@gmail.com" },
    { srNo: 12, district: "Ahmednagar", name: "Shri Radhakisan Devde", stdCode: "0241", officeNumber: "2329378", email: "spldswo.nagar@gmail.com" },
    { srNo: 13, district: "Pune", name: "Smt.Sangita Dawkhar", stdCode: "020", officeNumber: "29706611", email: "spldswop@gmail.com" },
    { srNo: 14, district: "Satara", name: "Shri Nitin Ubale", stdCode: "02162", officeNumber: "234246", email: "sdswosatara@gmail.com" },
    { srNo: 15, district: "Sangli", name: "Shri. Jayant Chachkar", stdCode: "0233", officeNumber: "2374739", email: "sdswosangli@gmail.com" },
    { srNo: 16, district: "Solapur", name: "Shri. Kailash Adhe", stdCode: "0217", officeNumber: "2734950", email: "sdswospr@gmail.com" },
    { srNo: 17, district: "Kolhapur", name: "Shri. Vishal Londhe", stdCode: "0231", officeNumber: "2651318", email: "sdswoko@gmail.com" },
    { srNo: 18, district: "Amravati", name: "Smt. Maya Kedar", stdCode: "0721", officeNumber: "2661261", email: "speldswo_amt@rediffmail.com" },
    { srNo: 19, district: "Buldhana", name: "Smt. Anita Rathod", stdCode: "07262", officeNumber: "242245", email: "socialwelfare.buldana63@gmail.com" },
    { srNo: 20, district: "Akola", name: "Smt. Anita Rathod", stdCode: "0724", officeNumber: "2426438", email: "sdswo_akl@rediffmail.com" },
    { srNo: 21, district: "Washim", name: "M. G. Wat", stdCode: "07252", officeNumber: "235399", email: "sdswo_washim@yahoo.in" },
    { srNo: 22, district: "Yavatmal", name: "Shri. B R Chavan", stdCode: "07232", officeNumber: "242035", email: "spldswo.yml@gmail.com" },
    { srNo: 23, district: "Nagpur", name: "Shri. Babasaheb Deshmukh", stdCode: "0712", officeNumber: "2555178", email: "sdswo.nagpur@gmail.com" },
    { srNo: 24, district: "Wardha", name: "Shri. Prasad Kulkarni", stdCode: "07152", officeNumber: "243331", email: "sdswo123wrd@gmail.com" },
    { srNo: 25, district: "Bhandara", name: "Smt. Sukeshini Telgote", stdCode: "07184", officeNumber: "295257", email: "swobhv1@gmail.com" },
    { srNo: 26, district: "Gondiya", name: "Shri. Vinod Mohture", stdCode: "07182", officeNumber: "234117", email: "sdswo_gondia@hotmail.com" },
    { srNo: 27, district: "Chandrapur", name: "Shri. A.M. Yavlikar", stdCode: "07172", officeNumber: "253198", email: "chasdswo@gmail.com" },
    { srNo: 28, district: "Gadchiroli", name: "Shri. A.M. Yavlikar (add)", stdCode: "07132", officeNumber: "222192", email: "sdswog@gmail.com" },
    { srNo: 29, district: "Aurangabad", name: "Shri. Pandurang Wabale", stdCode: "0240", officeNumber: "2402391", email: "spldswoaurangabad@yahoo.com" },
    { srNo: 30, district: "Jalna", name: "Shri. Amit Ghavle (add)", stdCode: "02482", officeNumber: "225172", email: "spldswo_jalna@yahoo.in" },
    { srNo: 31, district: "Beed", name: "R. M. Shinde", stdCode: "02442", officeNumber: "222672", email: "spldswo_beed@yahoo.in" },
    { srNo: 32, district: "Parbhani", name: "Smt. Gutte (add)", stdCode: "02452", officeNumber: "220595", email: "spldswo_parbhani@yahoo.in" },
    { srNo: 33, district: "Latur", name: "Shri. Suryakant Chikurte (add)", stdCode: "02382", officeNumber: "258485", email: "acswlatur@gmail.com" },
    { srNo: 34, district: "Nanded", name: "Shri. T L Malwadkar", stdCode: "02462", officeNumber: "285477", email: "acswnanded@gmail.com" },
    { srNo: 35, district: "Hingoli", name: "Shri. Shivanand Mingire", stdCode: "02456", officeNumber: "223702", email: "acswhingoli@gmail.com" },
    { srNo: 36, district: "Osmanabad", name: "Shri BG Arwat", stdCode: "02472", officeNumber: "222014", email: "dswo2000@yahoo.com" }
    ],
  zillaParishad: [
    { srNo: 1, district: "Mumbai City", name: "Shri Samadhan Ingle", stdCode: "022", officeNumber: "25232385", email: "" },
    { srNo: 2, district: "Thane", name: "Smt Shere", stdCode: "022", officeNumber: "25448677", email: "swdzpthane@gmail.com" },
    { srNo: 3, district: "Palghar", name: "Shri. Vaibhav Saple", stdCode: "022", officeNumber: "", email: "" },
    { srNo: 4, district: "Raigad", name: "Shri. G M Londi (add)", stdCode: "02141", officeNumber: "222079", email: "raigadswo@yahoo.in" },
    { srNo: 5, district: "Ratnagiri", name: "Shri. Santosh Chikne (add)", stdCode: "02352", officeNumber: "222391", email: "swozprtn@yohoo.in" },
    { srNo: 6, district: "Sindhudurg", name: "Shri Shyam Chavan", stdCode: "02362", officeNumber: "228741", email: "swozpsindhudurga@gmail.com" },
    { srNo: 7, district: "Nashik", name: "Shri Ravindra Pardeshi", stdCode: "0253", officeNumber: "2502251", email: "dswozpnashik@rediffmail.com" },
    { srNo: 8, district: "Dhule", name: "Shri. Mandole", stdCode: "02562", officeNumber: "229470", email: "dswozpdhule@gmail.com" },
    { srNo: 9, district: "Nandurbar", name: "Shri. Nandgaonkar", stdCode: "02564", officeNumber: "210238", email: "swozpnandubar@gmail.com" },
    { srNo: 10, district: "Jalgaon", name: "Shri Vijay Raisingh", stdCode: "0257", officeNumber: "2240161", email: "swozpjalgaon@gmail.com" },
    { srNo: 11, district: "Ahmednagar", name: "Shri Devde (add)", stdCode: "0241", officeNumber: "2356286", email: "swo.zp.ahmadnagar@gmail.com" },
    { srNo: 12, district: "Pune", name: "Shri Korangtiwar", stdCode: "020", officeNumber: "26131774", email: "zppunesw@yahoo.com" },
    { srNo: 13, district: "Satara", name: "Smt. Sapna Gholve", stdCode: "02162", officeNumber: "228764", email: "swozpsatara@yahoo.com" },
    { srNo: 14, district: "Sangli", name: "Shri. Kamat", stdCode: "0233", officeNumber: "2372714", email: "swdzp_sangli@yahoo.com" },
    { srNo: 15, district: "Solapur", name: "Smt. Chanchal Patil", stdCode: "0217", officeNumber: "2722557", email: "zpsolapurswo@gmail.com" },
    { srNo: 16, district: "Kolhapur", name: "Shri. Dipak Ghate", stdCode: "0231", officeNumber: "2656445", email: "swozpkop@gmail.com" },
    { srNo: 17, district: "Amravati", name: "Shri. B. R. Jadhvar (add)", stdCode: "0721", officeNumber: "2662059", email: "swozpamt@gmail.com" },
    { srNo: 18, district: "Buldhana", name: "Shri. Manoj Merat (add)", stdCode: "07262", officeNumber: "242320", email: "swozpbuldana@gmail.com" },
    { srNo: 19, district: "Akola", name: "Shri. Pund (add)", stdCode: "0724", officeNumber: "2435779", email: "swozpakola@gmail.com" },
    { srNo: 20, district: "Washim", name: "Shri. Vat (add)", stdCode: "07252", officeNumber: "231017", email: "swozpwashim@gmail.com" },
    { srNo: 21, district: "Yavatmal", name: "Shri. B R Chavan", stdCode: "07232", officeNumber: "244463", email: "swozpyeotmal@gmail.com" },
    { srNo: 22, district: "Nagpur", name: "Shri Kishor Bhoyar", stdCode: "0712", officeNumber: "2564324", email: "swozpngp@gmail.com" },
    { srNo: 23, district: "Wardha", name: "Smt Prajakta Ingle", stdCode: "07152", officeNumber: "242783", email: "swozpwardha@gmail.com" },
    { srNo: 24, district: "Bhandra", name: "Shri. Kulsange", stdCode: "07184", officeNumber: "252367", email: "swozpb@gmail.com" },
    { srNo: 25, district: "Gondiya", name: "Shri. Tukaram Barge", stdCode: "07182", officeNumber: "233291", email: "swozpgondia@rediffmail.com" },
    { srNo: 26, district: "Chandrapur", name: "Shri S G Pendam", stdCode: "07172", officeNumber: "255933", email: "swozpchandrapur@gmail.com" },
    { srNo: 27, district: "Gadchiroli", name: "Smt B. S. Atram", stdCode: "07132", officeNumber: "222329", email: "swozpgadchiroli@gmail.com" },
    { srNo: 28, district: "Aurangabad", name: "Shri Shivram Kendre", stdCode: "0240", officeNumber: "2331571", email: "swozpaurangabad@gmail.com" },
    { srNo: 29, district: "Jalna", name: "Smt Rasal", stdCode: "02482", officeNumber: "225020", email: "zpjalnaswo@gmail.com" },
    { srNo: 30, district: "Beed", name: "Shri. R M Shinde", stdCode: "02442", officeNumber: "222388", email: "swozpbeed@gmail.com" },
    { srNo: 31, district: "Parbhani", name: "Shri. Ravindra Tubakle", stdCode: "02452", officeNumber: "241893", email: "anilmwaghmare089@gmail.com" },
    { srNo: 32, district: "Latur", name: "Shri. Sunil Khamitkar", stdCode: "02382", officeNumber: "255092", email: "akangire.s@gmail.com" },
    { srNo: 33, district: "Nanded", name: "Shri Yedke", stdCode: "02462", officeNumber: "245100", email: "swo_zpnnd@yahoo.com" },
    { srNo: 34, district: "Hingoli", name: "Shri. Mingire", stdCode: "02456", officeNumber: "222477", email: "makranddswozphng@gmail.com" },
    { srNo: 35, district: "Osmanabad", name: "Shri. N R Chougule", stdCode: "02472", officeNumber: "227649", email: "swozposmanabad2011@gmail.com" }
    ]
};




const ContactUs = () => {
  const [selectedSection, setSelectedSection] = useState('commissioner');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContactList = (contacts) => (
    <table >
      <thead >
        <tr >
          <th>Sr.No</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Contact Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.filter(contact => 
          Object.values(contact).some(val =>
            String(val).toLowerCase().includes(searchQuery.toLowerCase())
          )
        ).map((contact) => (
          <tr key={contact.srNo}>
            <td>{contact.srNo}</td>
            <td>{contact.name}</td>
            <td>{contact.designation}</td>
            <td>{contact.number}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case 'commissioner':
        return renderContactList(contactData.commissioner);
      case 'pwd':
        return renderContactList(contactData.pwd);
      case 'dyCommissioners':
        return renderContactList(contactData.dyCommissioners);
      case 'district':
        return renderContactList(contactData.district);
      case 'zillaParishad':
        return renderContactList(contactData.zillaParishad);
      default:
        return null;
    }
  };

  return (
    <div className="contact-us">
    <PageHeading heading='Contact Us'/>

      <div className="main-content d-flex">
        <div className='col-lg-3'>
        <div className="sidebar">  
          <h4><img src={ContactUsIcon} className='icon mx-3' alt='Contact Us Icon' />Offices</h4>

          <h6 className='sidebar-item' onClick={() => setSelectedSection('commissioner')}>Commissioner, Social Welfare Maharashtra State</h6>
          <h6 className='sidebar-item' onClick={() => setSelectedSection('pwd')}>DistrictWise Contacts</h6>
          <h6 className='sidebar-item' onClick={() => setSelectedSection('dyCommissioners')}>Regional Dy. Commissioners, Social Welfare</h6>
          <h6 className='sidebar-item' onClick={() => setSelectedSection('district')}>Assistant Commissioner, Social Welfare - District Level</h6>
          <h6 className='sidebar-item' onClick={() => setSelectedSection('zillaParishad')}>District Social Welfare Officer, Zilla Parishad</h6>
        </div>


        </div>
        <div className='col-lg-9 px-5'>
        <div >
          {renderContent()}
        </div>

          
          </div>
  
      </div>
    </div>
  );
};

export default ContactUs;