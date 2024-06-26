import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import useState from "react";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollableComponent() {
  const navigate = useNavigate();
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#plan') {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  const handleButtonClick = () => {
      navigate('/About#con');
  };
  return (
    <div 
    className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
    {...events}
    ref={ref}
    class="user-plans">
        <h3>Our plans</h3>
        <div class="plans"  ref={sectionRef}  id="plan" style={{ width: '100%', overflowX: 'scroll', whiteSpace: 'nowrap' }}>
            <div class="plan">
                <div class="plan-top plan-top1">
                    <p>GUEST</p>
                    <h3>Free</h3>
                    <hr style={{width:"90%",height:"4px", color:"#017D65"}}/>
                    <ul>
                      <li>detection of diseases only</li>
                    </ul>
                </div>
                <button onClick={handleButtonClick}>Download</button>
            </div>
            <div class="plan">
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
            <div class="plan">
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
            <div class="plan">
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

export default ScrollableComponent;