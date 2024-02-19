import { CircularProgressbar } from "react-circular-progressbar";

function SkillItem({ name, rate }) {
  return (
    <div className="skill-item">
      <div style={{ height: 125, width: 125 }}>
        <CircularProgressbar value={rate} text={`${rate}%`} />
      </div>
      <h6>{name}</h6>
    </div>
  );
}

export default SkillItem;
