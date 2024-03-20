import React, {Component} from 'react';
import './Faq.css';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Faq extends Component{
    render(){
        return(
         
        <div className='faq' id='faq'>
            <div className='left'>
                <div className='wrapper1'>
             
                <h2>FAQ</h2>
                <h1>Frequently Asked Questions</h1>
                <hr/>
                <Tabs>
    <TabList style={{width:300}}>
      <Tab>Question : 1</Tab>
      <Tab>Question : 2</Tab>
      <Tab>Question : 3</Tab>
      <Tab>Question : 4</Tab>
    </TabList>

    <TabPanel style={{width:300}}>
        <p>What is difference between internship and training?</p>
      Training is based on improving the skills and knowledge of the trainee whereas
        internship is more focused on letting the person gain practical knowledge about
        the field. Training is always paid whereas internships can be unpaid as well.
      
    </TabPanel>
    <TabPanel style={{width:300}}>
    <p>What is internship method of training?</p>
  An Internship is a professional lerning experience that offers meaningful,
  practical work related to a student's field of study or career interest. An
  internship gives a student the opportunity for career exploration and Development
  and to learn new skills. 
    
    </TabPanel>
    <TabPanel style={{width:300}}>
    <p>What is the importance of training and internship?</p>
    Organisations offer internships to provide the necessary training and work experience to
 students who have completed their academic journey or wish to pursue higher education after
 gaining some hands-on experience.
    
    </TabPanel>
    <TabPanel style={{width:300}}>
    <p>What is the objective of intern training?</p>
    Internships provide student with an opportunity to put into practice skills they have learned
    while in school. In addition, students should have an opportunity to enhance those skills, obtain
    the perspective of a work environment and benefit from a mentor or supervisor's experience and advice.
    
    </TabPanel>
  </Tabs>
               
                </div>
              
               
            </div>
            <div className='right'>
            <div className='FaqContainer'>
                
                <div className='heading'>
                    <TipsAndUpdatesIcon className="icon" />
                <h1>Have a project in mind?<br/>
                Let's get to work.</h1>
                <p>Find out how it works and ask any questions you may have. </p>
                
                
               </div>
             
                
               
                </div>
               
               

                

        </div>
    </div>

         
        )
    }
}
export default Faq;