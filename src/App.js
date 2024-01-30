import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="parallax">
            <nav>
                <a href="https://www.libertymountainresort.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx" class="top-nav">Mountain Status</a>
                <a href="https://en.wikipedia.org/wiki/Snowboarding" class="top-nav">Upcoming Trips</a>
            </nav>
            <h1>UMD Ski And Snowboard Club</h1>
        </div>

        <h2 class="text">Upcoming Trips:</h2>

        <div class="float-container">

            <div class="float-child">
                <div class="card" id="ss">
                    <img src="https://www.pngitem.com/pimgs/m/355-3551089_seven-springs-resort-logo-hd-png-download.png" alt="Avatar" class="resort_img"></img>
                    <div class="container">
                      <h4><b>7 Springs</b></h4>
                      <p>March 12-13</p>
                      <button onclick="document.getElementById('id01').style.display='block'">Sign Up</button>
                    </div>
                </div>
            </div>
            
            <div class="float-child">
                <div class="card" id="lib">
                    <img src="https://missionagency.com/uploads/image/casestudies/liberty/logo.png" alt="Avatar" class="resort_img"></img>
                    <div class="container">
                      <h4><b>Liberty Mountain</b></h4>
                      <p>March 19-20</p>
                      <button onclick="document.getElementById('id01').style.display='block'">Sign Up</button>
                    </div>
                </div> 
            </div>
            
        </div>

        <div id="id01" class="modal">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">Back</span>
        <form class="modal-content" id="my-form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbxhXj5fMWxpusmq6xv-vwadF-rAu3JJbcQeinjVsbsoutoWKNXKrB7FO4URsxv1_P1LJg/exec">
            <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill out this form to register for the trip</p>
            <hr></hr>

            <label for="email"><b>Email</b></label>
            <input name="Email" type="email" placeholder="Email" required></input>

            <label for="name"><b>Name</b></label>
            <input name="Name" type="text" placeholder="Name" required></input>

            <div class="clearfix">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <button type="submit" class="signup">Submit</button>
            </div>
          </div>
        </form>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
