import React from "react";
import NoticeCard from "./NoticeCard";

const Notices = () => {
  const notices = [
    {
      title: "Notice 1: Examination Update",
      content: `Dear Students, Some of you have reported difficulties in downloading your hall tickets for the upcoming semester-end examinations. The University has decided to allow all students to appear for the exams, provided the following conditions are met:
        - Feedback submission has been completed.
        - No disciplinary issues are pending.
        - All fees have been paid.
        Please note that bringing your University ID card to the examination hall is mandatory.
        Study hard and best wishes for your exams!
        - Jayasankar E Variyar, Pro Vice-Chancellor`,
    },
    {
      title: "Notice 2: Entry Rules for Tomorrow - Roohaniyat!",
      content: `1. It is mandatory to carry your ID cards in physical form & show them when asked.
        2. No mandatory dress code, but smart casuals or ethnic wear are advised.
        3. No tolerance for indecent behavior, fights, or indiscipline.
        4. Only mobile phones, ID cards, and minimal money allowed.
        5. Entry starts at 4:30 PM; gates close at 6:30 PM. Arena cleared by 9:30 PM.`,
    },
    {
      title: "Notice 3: Email Safety",
      content: `All Students, Please be careful with any email that is not coming from UPES domain. The official domains are @upes.ac.in or @ddn.upes.ac.in. Other emails can be SPAM and are potentially risky. Exercise caution.`,
    },
    {
      title: "Notice 4: Freshers Pass Collection",
      content: `Attention Freshers, If you missed the DSW Office session, today is the last chance to attend:
        - Time: 6:15 PM
        - Venue: MAC, Bidholi
        After attending, you will become eligible to collect Freshers' Passes as per the schedule mentioned in the email sent to you earlier.`,
    },
    {
      title: "Notice 5: Passes and Masks Distribution",
      content: `Passes - 4 PM today at AB1 Quadrangle.
        Masks - Distribution starts at 4 PM tomorrow:
        - Locations: In front of MAC, SoD Amphitheatre, Inside Main Arena (separate stall).
        Limited masks available on a first-come, first-served basis at Rs. 20/- each.`,
    },
    {
        title: "Notice 6: Passes and Masks Distribution",
        content: `Passes - 4 PM today at AB1 Quadrangle.
          Masks - Distribution starts at 4 PM tomorrow:
          - Locations: In front of MAC, SoD Amphitheatre, Inside Main Arena (separate stall).
          Limited masks available on a first-come, first-served basis at Rs. 20/- each.`,
      }
  ];

  return <>  
    <div style={styles.container}>
        
      {notices.map((notice, index) => (
        <NoticeCard key={index} title={notice.title} content={notice.content} />
      ))}
    </div>
    </>
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
    gap: "20px", // Space between cards
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
};

export default Notices;
