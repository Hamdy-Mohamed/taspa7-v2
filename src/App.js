import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("سُبْحَانَ اللهِ");
  let [calc, setCalc] = useState(0);
  let [alert, setAlert] = useState(
    "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا ۖ وَمَن جَاءَ بِالسَّيِّئَةِ فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا وَهُمْ لَا يُظْلَمُونَ"
  );
  let [heart, setHeart] = useState("❤️");

  let alertEvent = () => {
    setAlert(
      "الحسنه في الاسلام تتضاعف لتصبح 10 امثالها بينما السيئات لا تتضاعف وهذا يشجعك علي تكفير ذنوبك اسرع => عن أنس بن مالك رضي الله عنه قال : قال رسول الله صلى الله عليه وسلم : «كلُّ بني آدم خَطَّاءٌ، وخيرُ الخَطَّائِينَ التوابون»."
    );
  };

  let handleClick = () => {
    setCount(count + 1);
    setCalc(calc + 10);
    if (count === 33) {
      setText("الْحَمْدُ لِلَّهِ،");
      setHeart("🧡");
    } else if (count === 66) {
      setText("لَا إِلَهَ إِلَّا اللَّهُ");
      setHeart("💕💞");
    } else if (count === 99) {
      setText("اللَّهُ أَكْبَرُ");
      setHeart("💚💙");
      setCount(0);
    }
  };

  return (
    <div className="App">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div onClick={alertEvent} className="alert">
        {alert}
      </div>
      <div className="calc">الْحَسَنَاتِ = {calc} 🤲 </div>
      <div className="parent">
        <button className="btn" onClick={handleClick}>
          سبِّح
        </button>
        <pre>
          {count} 📿{heart}
        </pre>
        <h2>{text} </h2>
      </div>
    </div>
  );
}

export default App;
