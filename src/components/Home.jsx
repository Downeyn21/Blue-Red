import { Route, Routes, Link} from 'react-router-dom'
import Red from './Red';
import Blue from './Blue';


const homeStyle = {
    display: 'flex',
    flexDirection: 'column',

}


function Home() {
    return ( 
        <div style={homeStyle}>
            <h1>WELCOME</h1>
            <h2>You have TWO CHOICES</h2>
            <div className='btnContainer'>
                
                {/* <button>
                    <Link to={/red} className='btnLink'>Red</Link>
                </button>
                <h3>or</h3>
                <button>
                    <Link to={/blue} className='btnLink'>Blue</Link>
                </button> */}
                
            </div>

            <div>
            <Link to={"/blue"}>Blue</Link>
            <Link to={"/red"}>Red</Link>
            </div>

            <Routes>            
                <Route path="/blue" element={<Blue />}/>
                <Route path="/red" element={<Red />}/>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </div>
     );
}

export default Home;