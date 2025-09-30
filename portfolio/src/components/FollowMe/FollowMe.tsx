import "./FollowMe.css";

export default function FollowMe() {
  return (
    <div className="followme">
      <h1>#Socials <div className="horizontal-line"></div></h1>

      <a href="https://github.com/aditya1010-max/">
        <img src="github.png" alt="GitHub" style={{height: "45px", width: "45px"}}/>
      </a>
      <a href="https://www.linkedin.com/in/aditya-raut-35b1672a5/">
        <img src="icons8-linkedin-48.png" alt="linkedin" />
      </a>      
      <a href="https://x.com/Raut100x">
        <img src="icons8-twitter-50.png" alt="Twitter" />
      </a>  
      <a href="https://leetcode.com/u/AdiiiTya_1010/">
        <img src="lc2.png" alt="leetcode" style={{height: "45px", width: "45px"}} />
      </a>      
    </div>
  );
}
