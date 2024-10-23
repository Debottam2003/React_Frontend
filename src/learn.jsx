import React from 'react';
import './learn.css';
//import './draw.js';

function Learn(){
    return(
        <>
        <h1>I am Learning React JS</h1>
        <h2>I am Learning React JS</h2>
        <h3>I am Learning React JS</h3>
        <h4>I am Learning React JS</h4>
        <h5>I am Learning React JS</h5>
        <h6>I am Learning React JS</h6>
        <pre>My     Name     Deb</pre>
        <p>My name is debottam kar</p>
        okudera<br/>
        ichinose<br/>
        <span>pekka coc react web dev</span>
        <div>
            <bold>deb</bold><br/>
            <i>deb</i><br/>
            <u>deb</u><br/>
            <del>deb</del><br/>
        </div>
        <hr></hr>
        <blockquote>okudera</blockquote>
        <a href="https://www.youtube.com/watch?v=CgkZ7MvWUAA">youtube</a><br/>
        <strong>deb</strong><br/>
        <em>deb</em>
        <br/>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" />
        <br/>
        <audio controls>
    <source src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" type="audio/mpeg" />
       </audio>
       <br/>
        <iframe src="https://www.wikipedia.org/" width="500" height="500"></iframe>
        <br/>
        <video controls width="600">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </video>
        <br/>
        <nav>
           <ul> 
           <li>home</li>
           <li>about</li>
           <li>contact us</li>
           <li>user</li>
            </ul>
        </nav>
        <header>it is header</header>
        <footer>it is footer</footer>
        <section>
    <h2>Introduction</h2>
    <p>This is the introduction to the topic.</p>
       </section>
       <article>
    <h2>Breaking News</h2>
    <p>Details about the breaking news story.</p>
</article>
<main>
    <h1>Main Content Area</h1>
    <p>This is where the main content of the webpage goes.</p>
</main>
<aside>
    <h2>Related Articles</h2>
    <ul>
        <li><a href="#">Article 1</a></li>
        <li><a href="#">Article 2</a></li>
    </ul>
</aside>
<blink>deb</blink>
<marquee>debottam kar rony kar okudera ichinose</marquee>
<br/>
<font color="red" size="20">deb</font>
<center>deb</center>
<div data-user-id="12345" data-role="admin">
    User Information
</div>
<time datetime="2023-10-03">October 3, 2023</time>
<summary>hi my name is debottam kar</summary>
<canvas id="myCanvas" width="400" height="200"></canvas>
<h1 class="blink">it is a blink message</h1>
<blink>This text is supposed to blink!</blink>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="lightblue" />
        <rect x="20" y="20" width="50" height="50" fill="orange" />
        <text x="50" y="100" font-family="Verdana" font-size="20" fill="black">Hello SVG</text>
    </svg>
<details close>
  <summary>Open by default</summary>
  <p>This content is visible when the page loads.</p>
</details>
<progress value="50" max="100"></progress>
<br/>
<meter value="0.3" min="0" max="1" low="0.3" high="0.8" optimum="0.7"></meter>
<ul>
    <li>apple</li>
    <li>orange</li>
</ul>
<ol>
    <li>apple</li>
    <li>orange</li>
</ol>
<dl>
    <dt>apple</dt>
    <dd>apple is red</dd>
    <dt>orange</dt>
    <dd>orange is orange</dd>
</dl>
<table>
  <caption>Monthly Sales Report</caption>
  <tr>
    <th>Month</th>
    <th>Sales</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$1,000</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$1,200</td>
  </tr>
</table>
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$1,000</td>
      <td>$500</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$1,200</td>
      <td>$600</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$2,200</td>
      <td>$1,100</td>
    </tr>
  </tfoot>
</table>
<form>
    <fieldset>
        <legend>it is a form</legend>
        <label for="name">name </label>
        <input type="text" id="name" placeholder='name'></input><br/>
        <label for="name">password </label>
        <input type="password" placeholder='password'></input><br/>
        <label for="name">email </label>
        <input type="email" placeholder='password'></input><br/>
        <input type='number'></input><br/>
        <input type='submit' value="submit"></input><br/>
        <textarea placeholder='text here'></textarea><br/>
        <input type="url" placeholder="Enter your website URL" /><br/>
        <input type="tel" placeholder="Enter your phone number" /><br/>
        <input type="number" min="1" max="100" step="1" placeholder="Enter a number" /><br/>
        <input type="range" min="0" max="100" value="97" /><br/>
        <input type="date" /><br/>
        <input type="week" /><br/>
        <input type="month" /><br/>
        <input type="time" /><br/>
        <input type="color" /><br/>
        <input type="checkbox" id="subscribe" />
        <label for="subscribe">Subscribe to newsletter</label><br/>
        <input type="file"/><br/>
        <input type="radio" name="gender" id="male" value="male" />
        <label for="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" />
        <label for="female">Female</label><br/>
        <button>ok</button><br/>
        <input type="reset" value="Reset"/><br/>
        <input type="" name="userId" value="12345" />
    </fieldset>
</form>
        </>  
    ) 
}


export default Learn;