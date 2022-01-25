import './App.css';
import Header from './header';
import PageWrapper from './PageWrapper';
import HeaderJson from './header.json';




function App() {

    let header = HeaderJson;
  
  return (
<div>
    <PageWrapper>

        {header.map(header => 
             <Header 
                   logoName={header.logoName} 
                   navbar1= {header.navbar1} 
                   navbar2= {header.navbar2} 
                   navbar3= {header.navbar3} 
                   navbar4= {header.navbar4} 
                   navbar5= {header.navbar5} 
                   navbar6= {header.navbar6} 
                   imgLogo= {header.imgLogo} 
                   />
        )};

 
    </PageWrapper>
        
  

</div>
  );
}

export default App;
