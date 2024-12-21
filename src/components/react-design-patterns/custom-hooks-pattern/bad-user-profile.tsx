/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

const BadUserProfile = () => {
    const [isOnline, setIsOnline] = useState(false);
    const [lastActive, setLastActive] = useState<Date | null>(null);
  return (
    <div>
      Bad user Profile
    </div>
  )
}

export default BadUserProfile
