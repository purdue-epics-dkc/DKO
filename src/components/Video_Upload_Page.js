/* <html>
<body>
<button onclick="uploadVideo()">Upload</button>
<p id="demo"></p>

<script>
function uploadVideo() 
    let txt;
    let userName = prompt("Name", "First Last"); 
    let email = prompt("Email", "email");
    let phoneNumber = prompt("Phone Number", "###-###-####");
    let dateBirth = prompt("Date of Birth", "MM/DD/YYYY");
    let education = prompt("Highest Level of Education Completed", "education");
    let institution = prompt("Institution", "instiution");
    let gradDate = prompt("Graduation Date", "MM/YYYY");
    let location = prompt("Location", "City/Town, State, Country");
    let experience = prompt("Sign Language Experience", "Enter all relevant sign language experience here")
    if (userName == null || userName == "") { 
        txt = "Please enter your name."}
    else if (email == null || email == ""){
        txt = "Please enter your email."}
    else if (phoneNumber == null || phoneNumber == ""){
        txt = "Please enter your phone number."}
    else if (dateBirth == null || dateBirth == ""){
        txt = "Please enter your date of birth."}
    else if(education == null || education == ""){
        txt = "Please enter your highest level of education completed."}
    else if(gradDate == null || gradDate == ""){
        txt = "Please enter your graduation date."}
    else if(location == null || location == ""){
        txt = "Please enter your location."}
    else if(experience == null || experience == ""){
        txt = "Please enter your sign language experience."}
    else{
        txt = "Thank you. A confirmation email will be emailed to you shortly."}
    document.getElementById("demo").innerHTML = txt;
</script>
</body>
</html> */










// import React from 'react';
// import {Box, Grommet, Image, Grid, Text,
//         Heading, Paragraph } from 'grommet';
// import {ABOUT_DKO_HEADING, ABOUT_DKO_DESCRIPTION,
//         ABOUT_PROJECT_PARTNER_TITLE,
//         } from '../constants/pages';
// import {IMAGE_GROMMET_THEME, IMAGE_MARGIN,
//         ABOUT_THEME, ABOUT_PRODUCT_THEME
//     } from '../constants/themes';

// export const = () => (
//     <Grommet theme={IMAGE_GROMMET_THEME}>
//         <Box direction='column' height='medium' margin={IMAGE_MARGIN}>
//             <Image src='asl.png' fit='cover' full={true}/>       
//         </Box>
//     </Grommet>
    
// );


// export const AboutContent = () => (
//     <Grommet theme={ABOUT_THEME}>
//         <Box direction='column' height='medium'>
//             <Heading level={1} textAlign='center' alignSelf='center' >
//                 {ABOUT_DKO_HEADING}
//             </Heading>
//             <Text alignSelf='center' textAlign='center' size='large' margin='large'>
//                 {ABOUT_DKO_DESCRIPTION}
//             </Text>
//         </Box>
//     </Grommet>
// );

// export const ProductImageTile = () => (
//     <Grommet theme={IMAGE_GROMMET_THEME}>
//         <Box direction='column' height='medium' margin={IMAGE_MARGIN} background={{image: 'url(tech.png)', opacity:'weak'}}>
//             <Grommet theme={ABOUT_PRODUCT_THEME}>
//                 <Box>
//                     <Heading level={1} textAlign='center' alignSelf='center' >
//                         {ABOUT_PROJECT_PARTNER_TITLE}
//                     </Heading>
//                     <Grid fill areas={[
//                         { name: 'khan_academy', start:[0, 0], end:[0,0]},
//                         { name: 'dkc', start:[1, 0], end:[1, 0]},
//                         { name: 'ntid', start:[2, 0], end:[2, 0]},
//                     ]}
//                     columns={['1/3', '1/3', '1/3']}
//                     rows={['medium']} gap='small'>
//                         <Box gridArea='khan_academy' direction='column' height='small' margin={IMAGE_MARGIN}>
//                             <Image src='khan_academy.png' fit='contain' />       
//                         </Box>
//                         <Box gridArea='dkc' direction='column' height='small' margin={IMAGE_MARGIN}>
//                             <Image src='dkc_logo.png' fit='contain' />
//                         </Box>
//                         <Box gridArea='ntid' direction='column' height='small' margin={IMAGE_MARGIN}>
//                             <Image src='ntid_logo.png' fit='contain' />
//                         </Box>                   
//                     </Grid>
//                 </Box>
//             </Grommet>            
//         </Box>
//     </Grommet>
// );







import React from 'react';
import {Box, Grommet, Text,
       Heading, TextArea, FormField, TextInput, Select, Button } from 'grommet';
import {VIDEO_UPLOAD_HEADING} from '../constants/pages';
import {NavBar} from '../components/NavBar';
import {
       ABOUT_THEME,
   } from '../constants/themes';
 const option1="PHD";
 const option2="Masters";
 const option3="Bachelors";
 const option4="Associates";
 const option5="High School";
 const option6="Other";
 const lines="Certification/Membership \nOrganization";

 
export const VideoUpload = () => (

   <Grommet theme={ABOUT_THEME}>
       <Box direction='column' height='large' background={{color: '#f2f2f2'}}  round margin="5%" width="90%">
           {/* Background box */}
           <Heading level={1} textAlign='center' alignSelf='center' >
               {VIDEO_UPLOAD_HEADING} 
                {/*Displays "Video Upload Form"  */}
           </Heading>
           <Box fill align="left" justify="start" pad="medium"> 
           {/* First row of boxes */}
          <Box width="100%" direction="row">
            <TextInput placeholder = "First Name"/>
            <Box width="48%"></Box>
            <TextInput placeholder="Last Name"/>
            <Box width="48%"></Box>
            <TextInput placeholder="Email"/></Box>
            <Box height="10%"></Box>
            {/* Creates empty space between the rows */}
          <Box width="100%" direction="row">
            <TextInput placeholder = "Phone Number"/>
            <Box width="48%"></Box>
            <TextInput placeholder = "Date of Birth"/>
            <Box width="48%"></Box>
            <TextInput placeholder = {lines} size="small"/>
          </Box>
            <Box height = "10%"></Box>
            
            <Box/>
            <TextInput placeholder="Highest Education"/>
            <Box height = "10%"></Box>
            <Box width="100%" direction="row">
            <TextInput placeholder = "Institution"/>
            <Box width="48%"></Box>
            <TextInput placeholder = "Graduation Date"/>
            <Box width="48%"></Box>
            <TextInput placeholder = "Location"/>
            </Box>
            <Box height = "10%"></Box>
            <Box width="xlarge%" >
            <TextInput placeholder = "Sign Language Experience" height="50"/>
            {/* <TextArea cols="25" placeholder="Sign Language Experience"/> */}
          </Box>
            <Box height = "10%"></Box>
            <Box width="xlarge" direction="row">
            <TextInput placeholder = "YouTube Shareable Link"/>
            </Box>
            <Box height = "10%"></Box>
            <Box width="100%" direction="row">
            <Box width="96%"></Box>
            <Button label="Upload" labelcolor="#000000"  primary="blue" color="#FFA500" onClick={() => {}}/>
            </Box>
        </Box>
       </Box>
   </Grommet>
);

