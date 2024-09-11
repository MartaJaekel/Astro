import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation/Navigation";
import useSWR from "swr";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Horoscope() {
  const router = useRouter();
  const { isReady, query: { sign } } = router;

  // Always call useSWR unconditionally
  const { data, isLoading, error } = useSWR(`/api/getSignByName/${sign}`);
  const fetchHoroscopeUrl = sign ? `/api/horoscope/${sign}?date=today` : null;
  const { data: horoscope, error: errorMessage } = useSWR(fetchHoroscopeUrl);
 
// const monthlyData = horoscope.month;
  // Conditional rendering after all hooks have been called
  const weeklyData = horoscope && horoscope.week ? horoscope.week : null;
const monthlyData = horoscope && horoscope.month ? horoscope.month : null;
  // if (!weeklyData) {
  //   return <div>No weekly data available</div>;
  // }
  if (!isReady || isLoading || error) {
    return <h2>Loading...</h2>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage.message}</div>;
  }

  if (!horoscope) {
    return <div>Loading...</div>;
  }
  const getDate = new Date();
  const day = String(getDate.getDate()).padStart(2, '0');
const month = String(getDate.getMonth() + 1).padStart(2, '0'); // January is 0!
const year = getDate.getFullYear();
const today = `${day}-${month}-${year}`;

const getWeekRange = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1;
  const sundayOffset = 7 - dayOfWeek;

  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek - mondayOffset));

  const sunday = new Date(today);
  sunday.setDate(today.getDate() + sundayOffset);

  const format = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return `${format(monday)} - ${format(sunday)}`;
};

const dateRange = getWeekRange();




// Get the current month in full text
const currentMonth = getDate.toLocaleString('default', { month: 'long' });





  return (
    <>
    <Navigation />
      <Wrapper>
        <Header>

        <h1>{data.name}</h1>
        <div style={{border:"1px solid", borderRadius:
          "50%", padding: "10px"
        }}>
        <Image src={`/svg/${data.name.toLowerCase()}.svg`} alt={`Description of ${data.name}`} height={50} width={50}  />
        </div>
        </Header>
        <About>
          <h2>Today</h2>
          <span>{today}</span>
          <Positive>
            <p>
            <p>  {JSON.stringify(horoscope.horoscope_data)}</p>
         </p>
          </Positive>
        </About>
        <About>
          <h2>Weekly</h2>
          <span className="week-spacing">{dateRange}</span>
          <Positive>
           <p>{!weeklyData ? 'No weekly data available' : JSON.stringify(weeklyData.horoscope_data)}</p>
          </Positive>
        </About>
        <Monthly>
          <h2>Monthly</h2>
          <span className="month-spacing">{currentMonth}</span>
          <Positive>
         <p>{JSON.stringify(monthlyData.horoscope_data)}</p>
          </Positive>
        </Monthly>
        <Footer/>
      </Wrapper>
    
    </>
      
  );
}
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 padding: 25px;

  h1{
    font-size: 2.5rem;
    color: black;
    font-weight: bold;
    }`
const Wrapper = styled.div`
  width: 100%;

  background-color: #f7f7f7;
`;
const Positive = styled.div`
  width: 50%;
  max-width: 480px;
  margin-top: 20px;
  border-top: 1px solid #c7c7c7;
  padding: 20px;

`;
const Monthly = styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  margin-bottom: 100px;
 
  h2 {
    font-size: 1.5rem;
    color: black;
  }

  p {
    color: black;
    text-align: left;
    margin-top: 50px;
  }
     .month-spacing {
      letter-spacing: 10px;
    font-size: 16px;
    color: grey;
   
`
const About = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
margin-top: 50px;
  width: 100%;
 
  h2 {
    font-size: 1.5rem;
    color: black;
  }

  p {
    color: black;
    text-align: left;
    margin-top: 50px;
  }
    span{
    font-size: 0.8rem;
    color: grey;
    letter-spacing: 13px;
    margin-top: 5px;
    
    }

    .week-spacing {
      letter-spacing: 4px;
    font-size: 15px;
    }
   
    }
`;
