import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GenerateTab from './Components/GenerateTab';
import SaveTab from './Components/SaveTab';
import ClassName from './Components/generatepin.module.css';
const App: React.FC = () => {  
  return (
    <React.Fragment>
      <div className={ClassName.container}>
        <div className="row">
          <Tabs>
            <TabList>
              <Tab>Generate</Tab>
              <Tab >Save</Tab>
            </TabList>
            <TabPanel>
              <GenerateTab/>
            </TabPanel>
            <TabPanel>
              <SaveTab />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
