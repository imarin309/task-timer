import React from "react";
import avatarImage from "../assets/anpan.png"; // 画像のインポート

const greeting: string = 'お疲れ様だぽよ、いつも頑張ってるね'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-image">
        <img src={avatarImage} alt="キャラクター" className="header-img" />
      </div>
      <div className="header-timer">{greeting}</div>
    </header>
  );
};

export default Header;