import moduleClasses from './AvatarBlock.module.css'

function AvatarBlock() {
  return (
    <div className={moduleClasses.container}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/2048px-Avatar_icon_green.svg.png' className={moduleClasses.icon}></img>

      <div className="avatar-info">
        <h4 className="avatar-info-header"></h4>
        <div className="avatar-info-about"></div>
      </div>

    </div>
  );
}

export default AvatarBlock