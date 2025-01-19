import { useState } from 'react';

type TabType = 'yours' | 'others';

interface CreationHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const CreationHeader = ({ activeTab, onTabChange }: CreationHeaderProps) => {
  return (
    <div className="flex items-end space-x-4">
      <button
        onClick={() => onTabChange('yours')}
        className={`transition-all duration-200 ${
          activeTab === 'yours' 
            ? 'text-2xl font-semibold text-white' 
            : 'text-base text-smolder-text/60 hover:text-smolder-text/80'
        }`}
      >
        Your creations
      </button>
      <button
        onClick={() => onTabChange('others')}
        className={`transition-all duration-200 ${
          activeTab === 'others' 
            ? 'text-2xl font-semibold text-white' 
            : 'text-base text-smolder-text/60 hover:text-smolder-text/80'
        }`}
      >
        Created by others
      </button>
    </div>
  );
};