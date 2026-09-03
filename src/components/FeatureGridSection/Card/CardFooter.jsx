import noCodeLogicIcon from "../../../assets/icons/No-Code-Logic.svg";

export default function CardFooter({ footer }) {
  return (
    <div className="flex gap-[14px]">
      <div className="flex items-center justify-center gap-[5px]">
        <img src={noCodeLogicIcon} />
        <span> {footer[0]}</span>
      </div>
      <div className="flex items-center justify-center gap-[5px]">
        <img src={noCodeLogicIcon} />
        <span> {footer[1]}</span>
      </div>
    </div>
  );
}
