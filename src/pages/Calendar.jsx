import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import '../styles/modal.css'
import img1 from './happiness.png'
import img2 from './indifferent.png'
import img3 from './crying.png'
import img4 from './ffps (2).png'
 function Calendar() {
  const [update,setupdate]=useState(0)
  return (
    <><div>
        <img className="cal" src={img4} />
      </div><div>
              <Popup
                  trigger={<button className="button1"> How was your day today?</button>}
                  modal
                  nested
              >
                  {close => (
                      <div className="modal">
                          <button className="close" onClick={close}>
                              &times;
                          </button>
                          <div className="header"> Tell us more about how do You feel today?</div>
                          <div className="content">
                          </div>
                          <div className="actions">
                              <div>
                                  <img className="img1" alt='Happy' src={img1} />

                                  <img className="img1" alt='Mediocre' src={img2} />
                                  <img className="img1" alt='Sad' src={img3} />
                              </div>


                              <div>
                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(1);
                                          close();
                                      } }
                                  >
                                      Great
                                  </button>


                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(2);
                                          close();
                                      } }
                                  >
                                      Average
                                  </button>
                                  <button
                                      className="button2"
                                      onClick={() => {
                                          setupdate(3);
                                          close();
                                      } }
                                  >
                                      Not Good
                                  </button>
                              </div>
                          </div>
                      </div>
                  )}
              </Popup>


          </div></>
  );

}
export default Calendar;
/*import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Product() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );

}
export default Product;*/