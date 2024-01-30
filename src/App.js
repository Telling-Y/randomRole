import React, { useState } from 'react';
import './RoleAssignment.css'; // 스타일링을 위한 CSS 파일 추가

const roles = ['합본사', '서기', '서기', '헬프데스크', '요정', '출석', '과제', '판사'];
const members = ['윤성', '시연', '민아', '종인', '예은', '수연', '도현', '미령'];

const initialRoles = {
  윤성: '헬프데스크',
  시연: '출석',
  민아: '과제',
  예은: '판사',
  도현: '서기',
  종인: '서기',
  수연: '합본사',
  미령: '요정',
};

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const RoleAssignment = () => {
  const [assignedRoles, setAssignedRoles] = useState(initialRoles);
  const [isRolesAssigned, setIsRolesAssigned] = useState(true);

  const assignRoles = () => {
    if (isRolesAssigned) {
      const shuffledRoles = shuffle([...roles]);
      const assignments = {};

      members.forEach((member, index) => {
        assignments[member] = shuffledRoles[index];
      });

      setAssignedRoles(assignments);
    }

    setIsRolesAssigned(!isRolesAssigned);
  };

  return (
    <div className="role-assignment-container">
      <button className="action-button" onClick={assignRoles}>
        {isRolesAssigned ? '셔플' : '역할 확인하기'}
      </button>
      {isRolesAssigned && (
        <ul className="role-list">
          {members.map((member) => (
            <li key={member}>
              {member}: {assignedRoles[member]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoleAssignment;
