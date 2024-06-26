import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";

export default function Scr() {  
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  const navigate = useNavigate();
    
  const handleButtonClick = () => {
      navigate('/About#con');
  };
  return (
    <div
      className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
      {...events}
      ref={ref}
      class="user-plans"
    >
      <h3>Our plans</h3>
        <div class="plans" style={{ width: '100%', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
            <div class="plan" className="flex-none">
                <div class="plan-top plan-top1">
                    <p>GUEST</p>
                    <h3>Free</h3>
                    <hr style={{width:"90%",height:"4px", color:"#017D65"}}/>
                    <ul>
                      <li>detection of pests and diseases only</li>
                    </ul>
                </div>
                <button onClick={handleButtonClick}>Download</button>
            </div>
            <div class="plan" className="flex-none">
              <div class="plan-top">
                    <p>BAISC</p>
                    <h3>1500 LE</h3>
                    <hr style={{width:"90%",height:"4px", color:"#017D65"}}/>
                    <ul>
                      <li>Up to 5 farmers per land.</li>
                      <li>Installation of hardware devices.</li>
                    </ul>
              </div>
              <button onClick={handleButtonClick}>Choose Plan</button>
            </div>
            <div class="plan" className="flex-none">
              <div class="plan-top plan-top3">
                    <p>PRO</p>
                    <h3>2500 LE</h3>
                    <hr style={{width:"90%",height:"4px", color:"#017D65"}}/>
                    <ul>
                      <li>Up to 10 farmers per land.</li>
                      <li>Installation of hardware devices.</li>
                      <li>Landowner Training</li>
                    </ul>
              </div>
              <button onClick={handleButtonClick}>Choose Plan</button>
            </div>
            <div class="plan" className="flex-none">
              <div class="plan-top plan-top4">
                    <p>ULTIMATE</p>
                    <h3>4500 LE</h3>
                    <hr style={{width:"90%",height:"4px", color:"#017D65"}}/>
                    <ul>
                      <li>Up to 50 farmers per land.</li>
                      <li>Installation of hardware devices.</li>
                      <li>Landowner & farmers Training.</li>
                    </ul>
              </div>
              <button onClick={handleButtonClick}>Choose Plan</button>
            </div>
        </div>
    </div>
  );
}