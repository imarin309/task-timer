import React from "react";
import avatarImage from "../assets/anpan.png"; // 画像のインポート

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-image">
        <img src={avatarImage} alt="キャラクター" className="header-img" />
      </div>
      <div className="header-timer">あと 05:49 だよ</div>
    </header>
  );
};

export default Header;