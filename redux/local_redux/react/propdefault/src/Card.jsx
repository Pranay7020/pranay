import Rect from 'react';

export const Card = ({
    name = 'Not provided',
    age = 'not given',
    email = 'not specify'
}) => {
  return (
    <>
<div style={{ display:'flex',
justifyContent: 'center',
flexDirection:'column',
border:'1px solid black',
padding:'10px',
width:'200px',  
maxWidth:'200px',
gap:'10px'
}}>

    <h3>Name : {name} </h3>
    <h3>Age : {age} </h3>
    <h3>Email : {email} </h3>       


</div>


    </>  );
};

