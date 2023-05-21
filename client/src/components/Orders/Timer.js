import React,{useEffect,useState} from 'react'

function Timer(props) {
    const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  
  const deadlineYear = props.deadlineDate.slice(0, 4);
  const deadlineMonth = props.deadlineDate.slice(5,7);
  const deadlineDay = props.deadlineDate.slice(8);
  const deadlineHour = props.deadlineTime.slice(0,2);
  const deadlineMinute = props.deadlineTime.slice(3);
    const deadline =  deadlineMonth+", "+deadlineDay+", "+deadlineYear+" "+props.deadlineTime;
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        {(minutes > -1) ? (
            days+" days "+hours+" : "+minutes+" : "+seconds
            ):
             (
            "0 days 00 : 00 : 00")}
    </div>
  )
}

export default Timer