// import React, { Component } from 'react';
// import {Grommet} from 'grommet';
// import {NavBar} from '../components/NavBar';
// import {AboutImageTile, AboutContent, VisionContent,
//         ProductImageTile} from '../components/AboutPage';

// class About extends Component {
//   constructor(props) {
//     super(props);  
//     this.setState = {};
//   }

//   componentDidMount() {
//     // Fetch all the api and db data
//   }

//   componentWillUnmount() {

//   }
  
//   render() {
//     return <Grommet>
//       <NavBar/>
//       <AboutImageTile/>
//       <AboutContent/>
//       <ProductImageTile/>
//     </Grommet>;
//   }
// }

// export default About;

// const Example = () => (
//   <Grommet full theme={grommet}>
//     <Box fill align="center" justify="center">
//       <Box width="medium">
//         <Form onSubmit={({ value }) => console.log("Submit", value)}>
//           <FormField
//             label="First Name"
//             name="first name"
//             required
//             validate={{ regexp: /^[a-z]/i }}
//           />
//           <FormField
//             label="Last Name"
//             name="last name"
//             required
//             validate={{ regexp: /^[a-z]/i }}
//           />
//           <FormField label="Email" name="email" type="email" required />
//           <FormField
//             label="Employee ID"
//             name="employeeId"
//             required
//             validate={{ regexp: /^[0-9]{4,6}$/, message: "4-6 digits" }}
//           />
//           <FormField
//             name="subscribe"
//             component={CheckBox}
//             pad
//             label="Subscribe?"
//           />
//           <FormField
//             name="ampm"
//             component={RadioButtonGroup}
//             pad
//             options={["morning", "evening"]}
//           />
//           <FormField
//             label="Size"
//             name="size"
//             component={Select}
//             options={["small", "medium", "large", "xlarge"]}
//           />
//           <FormField label="Comments" name="comments" component={TextArea} />
//           <FormField
//             label="Age"
//             name="age"
//             component={RangeInput}
//             pad
//             min={15}
//             max={75}
//           />
//           {/* }
//           <FormField label="Comments" name="comments">
//             <FormContext.Consumer>
//               {({ value, update }) => (
//                 <TextArea
//                   plain
//                   focusIndicator={false}
//                   value={value.comments}
//                   onChange={event => update('comments', event.target.value)}
//                 />
//               )}
//             </FormContext.Consumer>
//           </FormField>
//           { */}
//           <Box direction="row" justify="between" margin={{ top: "medium" }}>
//             <Button label="Cancel" />
//             <Button type="submit" label="Update" primary />
//           </Box>
//         </Form>
//       </Box>
//     </Box>
//   </Grommet>
// );

// import React, { Component } from 'react';
// import {Grommet} from 'grommet';
// import {NavBar} from '../components/NavBar';
// import {UploadVideoImageTile, AboutContent, VisionContent,
//         ProductImageTile} from '../components/Video_Upload_Page';
// import { VIDEO_UPLOAD_PATH } from '../constants/routes';

// class Video_Upload extends Component {
//   constructor(props) {
//     super(props);  
//     this.setState = {};
//   }

//   componentDidMount() {
//     // Fetch all the api and db data
//   }

//   componentWillUnmount() {

//   }
  
//   render() {
//     return <
//     Grommet>
//       <NavBar/>
//       <Video/>
//     </Grommet>
//   }
// }

import React, { Component } from 'react';
import {Grommet, Accordion, AccordionPanel, Box, Text} from 'grommet';
import {NavBar} from '../components/NavBar';
import {VideoUpload} from '../components/Video_Upload_Page';

class Video_Upload_Here extends Component {
 constructor(props) {
   super(props);
   this.setState = {};
 }
 render() {
   return <
   Grommet>
     <NavBar/>
     <VideoUpload/>
   </Grommet>;
 }
}

export default Video_Upload_Here;