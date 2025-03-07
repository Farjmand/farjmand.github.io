import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
      {name}
    </span>
  );
};

export default SkillBadge;