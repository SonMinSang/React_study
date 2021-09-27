import React, {Component} from 'react';
import EventPractice from './Event/EventPractice';
import EventPracticeFunction from './Event/EventPracticeFunction';
import Practice from './Event/Practice';
import VaildationSample from './RefSample/ValidationSample';
import ScrollBox from './RefSample/ScrollBox';
import IterationSample from './Iteration/IterationSample';
import LifeCycleSample from './LifeCycleSample/LifeCycleSample';
import ErrorBoundary from './LifeCycleSample/ErrorBoundary';
import Info from './Hooks/Info';
import Average from './Hooks/Average';
//import Say from './Say';

const App = () =>{
  return(
    <div>
      <Average/>
    </div>
  )
}

export default App;