import React, { useState } from "react";
import styles from "./MyPage.module.scss";
import { useProfile } from "../../contexts/profile.context";

function MyPage() {
  const [newNickname, setNewNickname] = useState("");
  const { updateNickname } = useProfile();
  const handleClickUpdateNickname = () => {
    if (!newNickname) {
      alert("변경할 닉네임을 입력하세요!");
    } else {
      updateNickname(newNickname);
      alert(newNickname + "님으로 변경 완료!");
    }
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <input
          type="text"
          value={newNickname}
          placeholder="닉네임을 변경하시겠어요?"
          onChange={(e) => setNewNickname(e.target.value)}
          maxLength={10}
          className={styles.input}
        />
        <button
          type="button"
          className={styles.btn}
          onClick={handleClickUpdateNickname}
        >
          변경하기
        </button>
      </form>
    </div>
  );
}

export default MyPage;
